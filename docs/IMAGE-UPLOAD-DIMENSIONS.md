# Image Upload Dimensions Guide

This guide maps each image usage in the project to recommended upload dimensions, so layouts stay clean and readable on desktop and mobile.

## Where Images Are Used

1. Project cards carousel
- File: src/components/ProjectsList.jsx
- Style: src/components/css/ProjectsList.css
- Selector: .ProjectCard-Image
- Behavior: fills card area with object-fit: cover inside a portrait card (aspect-ratio: 9 / 16)

2. Project detail hero cover
- File: src/pages/ProjectDetail.jsx
- Style: src/App.css
- Selector: .project-detail-cover
- Behavior: responsive cover image with object-fit: cover (min-height: 320px, max-height: 460px)

3. Project detail media photo block
- File: src/pages/ProjectDetail.jsx
- Style: src/App.css
- Selector: .project-media-card img
- Behavior: fixed aspect-ratio: 16 / 10 with object-fit: cover

4. Profile card background image
- File: src/components/css/ProfileCard.css
- Selector: .ProfileCard-Container (background-image)
- Behavior: background-size: cover on a portrait container (up to 460x560)

## Preferred Dimensions by Image Type

| Image type | Preferred ratio | Recommended upload size | Minimum size | Notes |
|---|---|---|---|---|
| Project card cover (.ProjectCard-Image) | 9:16 (portrait) | 1080x1920 px | 720x1280 px | Best for Projects page cards. Keep important content centered to avoid side cropping. |
| Project detail hero cover (.project-detail-cover) | 16:10 (landscape) | 1920x1200 px | 1280x800 px | Main detail hero visual. Works well across desktop and mobile breakpoints. |
| Project detail media photo (.project-media-card img) | 16:10 (landscape) | 1600x1000 px | 1200x750 px | Secondary media image in detail page media section. |
| Profile background (.ProfileCard-Container) | 4:5 (portrait) | 1600x2000 px | 1080x1350 px | Keep face/subject in the center-top area because of gradient and text overlay at bottom. |

## Export and Quality Recommendations

- Format:
  - Use .webp for photos when possible.
  - Use .png only if transparency is required.
- Compression:
  - Target 75-85 quality for photo assets.
- File size target:
  - Project card and detail images: ideally under 350 KB each.
  - Profile background: ideally under 500 KB.
- Color space:
  - Export in sRGB for consistent browser rendering.

## Composition Safe Area

Because all current image slots use cover behavior, edges may be cropped.

- Keep core subject in the center 60% of the image.
- Avoid placing critical text/logos near the outer 15% margins.
- For portrait assets, protect both top and center zones (mobile crop can differ from desktop).

## Current Asset Inventory

Current files in public/images:
- pp.png
- metaclublogo.png

Recommendation:
- Keep one dedicated variant per use case instead of reusing the same image everywhere.
- Suggested naming pattern:
  - project-slug-card-1080x1920.webp
  - project-slug-detail-1920x1200.webp
  - profile-bg-1600x2000.webp
