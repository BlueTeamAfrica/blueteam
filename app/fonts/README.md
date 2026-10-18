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

Licenses: SIL Open Font License 1.1, in each folder's `OFL.txt`.
