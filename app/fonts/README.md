# Self-hosted fonts

Loaded with `next/font/local` in `app/[locale]/layout.tsx`, so builds never fetch from Google.

| File | Source | sha256 |
|------|--------|--------|
| `inter/inter-latin-wght-normal.woff2` | Inter 4.001 (variable), Google Fonts latin subset: `https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2` | `c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4` |
| `poppins/poppins-latin-600-normal.woff2` | Poppins 4.004, Google Fonts latin subset: `https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2` | `872e862918591a9e824dc03ed92f05729435ffbb8ebbb10eff7eda26592b1798` |
| `poppins/poppins-latin-700-normal.woff2` | Poppins 4.004, Google Fonts latin subset: `https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2` | `197a3cbd7290c242c5c765268cdd69a9a39867fdc80cd13071f243a81c56fb76` |

These are the exact files `next/font/google` was downloading at build time before the switch
(Google picks the file by User-Agent; next/font sends a macOS Chrome 104 UA and gets these
unhinted builds). The `@fontsource` 5.3.0 copies are the same font versions and outlines, but
Fontsource mirrors the Windows-UA build, whose Inter carries an extra `prep` table. FreeType
renderers (Linux, Android, ChromeOS) then take the hinting path and Latin text wraps
differently, so those were not used.

IBM Plex Sans Arabic 1.101 (`ibm-plex-sans-arabic/`, weights 400/500/600/700, Arabic subset) comes
from the same place and for the same reason: Google Fonts' macOS-UA files, fetched as
`https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700` with
next/font's User-Agent. Fontsource's copies have the same outlines plus full TrueType hinting,
about 28% larger.

| File | sha256 |
|------|--------|
| `ibm-plex-sans-arabic-arabic-400-normal.woff2` | `4ed189e8653e9303ec1e1448a6025f838ecd19fe4a5f4f7889b8394b3c5378fb` |
| `ibm-plex-sans-arabic-arabic-500-normal.woff2` | `bf2b68e78ca6e9c6e560634ecc33c1f11947b9ffaff1b6d9b42730ce85f696da` |
| `ibm-plex-sans-arabic-arabic-600-normal.woff2` | `0ccee44455f545eb6b4083f77e5d15e7c9cd514007870167c8c69d1ba7631e26` |
| `ibm-plex-sans-arabic-arabic-700-normal.woff2` | `c6e0419cba62fba9e573686eaa1b503cae2f332e4ab1b0acff5cde599dee5d7a` |

Licenses: SIL Open Font License 1.1, in each folder's `OFL.txt`.
