# Hive Energy Drink Website (preview)

Proposal website for Hive Energy Drink (Instagram: @hivenergydrink), built by TLC (Talent Learn Consult) on Route B, Code-first.

## Technology
Plain static HTML, CSS and JavaScript. No build step. Self-hosted fonts (Anton, Inter; OFL licences in `assets/fonts`). Strict Content Security Policy. `noindex` until launch.

## Pages
Home, Our Story, Where to Buy, Contact, Privacy Policy, 404.

## Brand (verified from Instagram, Nov 2026)
Matte black can, gold honeycomb pattern, white HIVE wordmark, bee symbol. Colours: black `#070707`, gold `#D4A72C` / `#F3CF6B`, white, dark green `#0E3B2C`.

## Hero video
The home page hero is ready for the advert. Drop the final file in as `assets/video/hive-advert.mp4` (16:9, muted, short loop, ideally under 8 MB). It plays automatically once the file exists. Until then, an animated honeycomb stand-in shows.

## Still needed from the client before launch
- Official logo file and a clean product photo of the can (the can and bee mark in this preview are illustrations)
- Event and lifestyle photos, with permission to use them
- WhatsApp number and email address
- Stockist list
- Company story: founders, start date, where it is made
- Registered company name and address for the Privacy Policy
- Responsible-use wording exactly as printed on the can
- Approval of tagline and headline copy ("Energy with a sting", "Bee energised")

## Forms
The contact form is preview-only and sends nothing. It gets connected (PHP mail on Xneelo) before launch.

## Rollback
Every change is a Git commit. To roll back, revert the commit on `main` and GitHub Pages republishes the previous version.
