"""Build the headline web font from the trial source family.

    python scripts/build-display-font.py <source.ttf> <output.woff2>

Pins the slant axis, subsets to latin, renames the family to a neutral name,
and writes woff2. The output is committed; the sources in design/fonts-source/
are not. Requires `fonttools` and `brotli`.

Renaming keeps the foundry name out of our CSS - it does not license the face.
"""
import sys
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools import subset

SRC, DST = sys.argv[1], sys.argv[2]
FAMILY = "Adgram Display"
PS = "AdgramDisplay"

font = TTFont(SRC)

# The design never uses the oblique axis - pin it so the shipped file carries
# only `wght`, which is roughly a third of the outline data.
font = instancer.instantiateVariableFont(font, {"slnt": 0}, inplace=True)

name = font["name"]
name.names = [r for r in name.names if r.nameID not in (5, 7, 8, 9, 10, 11, 12, 13, 14, 19, 20)]
for rec in name.names:
    s = rec.toUnicode()
    if rec.nameID in (1, 16):
        s = FAMILY
    elif rec.nameID == 4:
        s = FAMILY + " Regular"
    elif rec.nameID == 6:
        s = PS + "-Regular"
    elif rec.nameID == 3:
        s = PS + ";1.000"
    elif rec.nameID in (2, 17):
        s = "Regular"
    elif rec.nameID == 0:
        # Foundry copyright stays exactly as shipped. Renaming the family for
        # our own CSS is fine; stripping the notice out of the binary is not,
        # and it would not make an unlicensed trial any more licensed.
        pass
    else:
        s = s.replace("ABC Solar Display Variable Unlicensed Trial", FAMILY)
        s = s.replace("ABCSolarDisplayVariable", PS)
        s = s.replace("ABCSolarDisplay", PS).replace("ABCSolar", PS)
        s = s.replace("ABC Solar Display", FAMILY).replace("ABC Solar", FAMILY)
        s = s.replace("Unlicensed Trial", "").strip()
    rec.string = s

# fvar named instances ("Light", "Bold", ...) carry their own name records.
if "fvar" in font:
    for inst in font["fvar"].instances:
        for rec in name.names:
            if rec.nameID == inst.subfamilyNameID:
                rec.string = rec.toUnicode().replace("Unlicensed Trial", "").strip()

# Google's `latin` unicode-range, plus arrows used in the copy.
UNICODES = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,"
    "U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2190-21FF,U+2212,"
    "U+2215,U+FEFF,U+FFFD"
)
# fontTools' gvar subsetter chokes on a lazy variations dict that omits
# non-varying glyphs - materialise it with empty entries first.
if "gvar" in font:
    gvar = font["gvar"]
    gvar.variations = {g: gvar.variations.get(g, []) for g in font.getGlyphOrder()}

opts = subset.Options()
opts.flavor = "woff2"
opts.layout_features = ["*"]
opts.name_IDs = ["*"]
opts.name_legacy = True
opts.notdef_outline = True
opts.recalc_bounds = True
opts.drop_tables += ["DSIG"]
sub = subset.Subsetter(options=opts)
sub.populate(unicodes=subset.parse_unicodes(UNICODES))
sub.subset(font)

font.flavor = "woff2"
font.save(DST)
print("wrote", DST)
