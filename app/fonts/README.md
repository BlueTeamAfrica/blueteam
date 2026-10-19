# Self-hosted fonts

Loaded with `next/font/local` in `app/[locale]/layout.tsx`, so builds never fetch from Google.

| File | Source | sha256 |
|------|--------|--------|
| `poppins/poppins-latin-400-normal.woff2` | Poppins 4.004, Google Fonts latin subset: `https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2` | `3dc5d0c52428fe1696264907a1054ebbaac07f8cbe45832c105f819c2ae397c0` |
| `poppins/poppins-latin-500-normal.woff2` | Poppins 4.004, Google Fonts latin subset: `https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2` | `289e0afc8be731a86822349e54557296f145926496bd2138db1bac0db77f77a2` |
| `poppins/poppins-latin-600-normal.woff2` | Poppins 4.004, Google Fonts latin subset: `https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2` | `872e862918591a9e824dc03ed92f05729435ffbb8ebbb10eff7eda26592b1798` |
| `poppins/poppins-latin-700-normal.woff2` | Poppins 4.004, Google Fonts latin subset: `https://fonts.gstatic.com/s/poppins/v24/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2` | `197a3cbd7290c242c5c765268cdd69a9a39867fdc80cd13071f243a81c56fb76` |

These are the files Google Fonts serves to next/font's User-Agent (macOS Chrome 104), fetched
from `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700`: the unhinted
builds. The `@fontsource` copies mirror the Windows-UA build, which carries extra TrueType
hinting; FreeType renderers (Linux, Android, ChromeOS) then take the hinting path and Latin text
wraps differently, so those were not used.

Scheherazade New 4.500 (`scheherazade-new/`, weights 400/700, Arabic subset) comes from the same
place and for the same reason: Google Fonts' macOS-UA files, fetched as
`https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700` with next/font's
User-Agent.

| File | Source | sha256 |
|------|--------|--------|
| `scheherazade-new-arabic-400-normal.woff2` | `https://fonts.gstatic.com/s/scheherazadenew/v21/4UaZrFhTvxVnHDvUkUiHg8jprP4DOwFmO3wq9IqeuA.woff2` | `b344c349d55712493f3ed173f04e3a493c459cd9c40196c5129fb52336f9b717` |
| `scheherazade-new-arabic-700-normal.woff2` | `https://fonts.gstatic.com/s/scheherazadenew/v21/4UaerFhTvxVnHDvUkUiHg8jprP4DM79DLlQI-aCksSC1rw.woff2` | `8fa3c746805c27aa2f3bce8a82a16349f354125460a15d3b21d7f228a1467eab` |

Licenses: SIL Open Font License 1.1, in each folder's `OFL.txt`.
