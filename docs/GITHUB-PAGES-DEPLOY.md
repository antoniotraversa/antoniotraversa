# GitHub Pages Deployment Guide

This project is ready to be published on GitHub Pages with the custom domain `antoniotraversa.it`.

## What is already configured

- `public/CNAME` contains `antoniotraversa.it`
- `public/404.html` handles SPA deep-link fallback
- `src/main.jsx` restores the original route after the 404 redirect
- `package.json` includes GitHub Pages deployment scripts:
  - `npm run predeploy`
  - `npm run deploy`

## Deployment flow

1. Put this code inside your GitHub repository `antoniotraversa`.
2. Make sure the repo has two branches:
   - `main` for source code
   - `gh-pages` for the deployed build output
3. Install dependencies:
   - `npm install`
4. Build and publish:
   - `npm run deploy`
5. On GitHub, open repository settings and configure Pages:
   - Source: `gh-pages` branch
   - Folder: `/ (root)`
6. Keep the custom domain set to:
   - `antoniotraversa.it`

## DNS notes for the domain

If the domain is not already pointing to GitHub Pages, make sure the DNS provider has the proper GitHub Pages records.

Typical setup:
- `A` records to GitHub Pages IP addresses for the apex domain
- `CNAME` for `www` if you use it as an alias

## Important note

This workspace is currently not a Git repository, so push and branch switching cannot be executed here. The project files are prepared, but the actual publish step must be done inside the real `antoniotraversa` repo.
