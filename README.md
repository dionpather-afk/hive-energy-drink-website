# Hive Energy Drink Website (preview)

Proposal website for Hive Energy Drink (Instagram: @hivenergydrink), built by TLC (Talent Learn Consult) on Route B, Code-first.

## Technology
Plain static HTML, CSS and JavaScript. No build step. Self-hosted fonts (Anton, Inter; OFL licences in `assets/fonts`). Strict Content Security Policy. `noindex` until launch.

## Pages
Home, Our Story, Where to Buy, Contact, Privacy Policy, 404.

## Accuracy rule
This client is exact about his brand. Only verified facts go on the site. Everything else stays an empty, labelled slot until Hive supplies it.

## Verified from @hivenergydrink on Instagram (20 Nov 2026)
- Logo: white HIVE wordmark, the V drawn as a gold bee, small ENERGY DRINK lettering, on black
- Bio wording: "Fuel your buzz with natural energy", "Eco-friendly & delicious", #BEEENERGIZED
- Second account: @hive_tv_za
- Events: Hive Marquee Experience at the Hollywoodbets Durban July; "The Epic Summer 2026"
- Site colours used: black, gold, white (from the logo)

## Hero video
The home page hero is ready for the advert. Drop the final file in as `assets/video/hive-advert.mp4` (16:9, muted, short loop, ideally under 8 MB). It plays automatically once the file exists. Until then, an animated honeycomb stand-in shows.

## Still needed from the client before launch
- Official logo file (high resolution) and official product photographs of the can
- Event and lifestyle photos, with permission to use them
- WhatsApp number and email address
- Stockist list
- Company story: founders, start date, where it is made
- Registered company name and address for the Privacy Policy
- Responsible-use wording exactly as printed on the can
- Approval of all headline copy (currently uses only Hive's own Instagram wording)

## Forms
The contact form is preview-only and sends nothing. It gets connected (PHP mail on Xneelo) before launch.

## Rollback
Every change is a Git commit. To roll back, revert the commit on `main` and GitHub Pages republishes the previous version.
