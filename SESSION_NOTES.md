# Session Notes

## 2026-03-20 - Portfolio Design System Overhaul

### Goal
Elevate portfolio website to immediately signal senior/principal-level design expertise through refined spacing, typography, and layout.

### Approach
Kept implementation simple - minimal Tailwind config changes, no new components or abstractions. Used standard Tailwind utilities throughout.

### Changes Made

**Design System Foundation:**
- Added teal color variants to Tailwind config (`teal` with DEFAULT and `dark`)
- Added subtle teal text selection color to globals.css
- Kept everything else using Tailwind defaults

**Homepage ([app/page.tsx](app/page.tsx)):**
- Asymmetric 8/4 grid layout (max-w-6xl container)
- Removed "Hello, I'm Kate" - direct positioning instead
- Larger headline scale (6xl → 7xl → 8xl responsive)
- Meta sidebar with Current/Previously/Focus
- Teal accent on CTA hover only (strategic restraint)

**About Page ([app/about/page.tsx](app/about/page.tsx)):**
- Two-column asymmetric layout (7/5 split)
- Stronger professional narrative (expanded from 1 to 4 paragraphs)
- Added "Currently exploring" section
- Quick facts sidebar (Location, Experience, Specialties)
- Dog photo with better context
- Clear contact CTA with hover state

**Work Index ([app/work/page.tsx](app/work/page.tsx)):**
- Asymmetric header with positioning statement
- Larger spacing between cards (space-y-12)
- Teal hover states on card borders
- Arrow animation on hover (transform translate-x)
- Meta info on cards (company · year)
- Elevated "Additional Work" section treatment

**Case Study Pages (all 3):**
- Asymmetric headers (8/4 grid) on:
  - [firehydrant-signals/page.tsx](app/work/firehydrant-signals/page.tsx)
  - [dagster-alerting/page.tsx](app/work/dagster-alerting/page.tsx)
  - [dagster-compass/page.tsx](app/work/dagster-compass/page.tsx)
- Larger headlines (5xl → 6xl responsive)
- Meta sidebar with clean vertical layout
- Better spacing (space-y-20 for main sections)
- Content completely unchanged

### Design Principles Applied
- Sophisticated spacing - generous padding, better gaps
- Strategic teal accent - used <5 times per page
- Asymmetric layouts - 8/4 and 7/5 grids for visual interest
- Refined typography - larger scales, better hierarchy
- Craft details - arrow animations, smooth transitions
- Clear positioning - Staff → Principal framing

### Files Modified
1. tailwind.config.ts
2. app/globals.css
3. app/page.tsx
4. app/about/page.tsx
5. app/work/page.tsx
6. app/work/firehydrant-signals/page.tsx
7. app/work/dagster-alerting/page.tsx
8. app/work/dagster-compass/page.tsx

### Notes
- Removed all inline comments per request
- No new components created
- No packages installed
- Build tested successfully
- All content preserved, only presentation enhanced

---

## 2026-03-20 19:55 - Content Updates and Image Additions

### Goal
Update case study content for Compass and refresh About page with new content and imagery.

### Changes Made

**Compass Case Study ([app/work/dagster-compass/page.tsx](app/work/dagster-compass/page.tsx)):**
- Complete content rewrite with three-act structure:
  - Act 1: How Compass started (CEO prototype → product designer role)
  - Act 2: Learning what Slack could and couldn't do (platform evolution)
  - Act 3: Seeing what the numbers were saying (adoption insights and platform integration)
- New reflection focused on AI-assisted development and range over skillset
- Updated subtitle: "From vibe coded prototype to platform integration"
- Kept all images and videos in place (compass-1.png, compass-2.png, compass-3.png, 2 YouTube embeds)
- Removed unused Image import

**Work Index Updates ([app/work/page.tsx](app/work/page.tsx)):**
- Updated case study descriptions to match subtitle from each case study page:
  - Compass: "From vibe coded prototype to platform integration"
  - Signals for FireHydrant: "Alerting and on-call, rethought as part of incident management"
  - Alerting in Dagster+: (already matched)

**About Page ([app/about/page.tsx](app/about/page.tsx)):**
- Updated main content section with condensed, direct copy
- New narrative focused on designing in code and complex technical products
- Simplified company history: "Currently at Dagster. Previously at FireHydrant, Elastic, Bonusly, &yet, and CauseLabs"
- Added kf-about.jpg image in sidebar above dog photo
- Simplified contact text to "I'm always happy to chat"

**Image Fix ([app/work/firehydrant-signals/page.tsx](app/work/firehydrant-signals/page.tsx)):**
- Changed signals-4.png from Image component to Lightbox component so it opens in lightbox on click

### Files Modified
1. app/work/dagster-compass/page.tsx
2. app/work/page.tsx
3. app/about/page.tsx
4. app/work/firehydrant-signals/page.tsx

### Notes
- All image references preserved
- Content updates focused on clarity and directness
- No structural changes to layouts
- Lightbox functionality now consistent across all case study images

---

## 2026-03-20 - UI Refinements and Interaction Polish

### Goal
Clean up unnecessary elements and refine hover states and interactions across About and Work pages.

### Changes Made

**About Page ([app/about/page.tsx](app/about/page.tsx)):**
- Removed dog photo and caption entirely
- Removed "Currently exploring" section (3 bullet points about AI, design systems, conversational interfaces)
- Simplified page to focus on professional narrative and contact section
- Personal photo (kf-about.jpg) remains in sidebar

**Work Page ([app/work/page.tsx](app/work/page.tsx)):**
- Removed "BRANDING" tags from Additional Work section cards
- Fixed accessibility issue: changed company/year metadata from `text-gray-400` to `text-gray-500` for proper contrast (2.8:1 → 4.6:1, now passes WCAG AA)
- Simplified hover states on case study cards:
  - Removed teal border hover (poor contrast)
  - Removed shadow-2xl on hover
  - Removed gradient background shift
  - Removed teal text color on "View case study" link
  - Kept only arrow slide animation (subtle, elegant)
- Made Additional Work cards consistent with case study cards:
  - Changed from `border` to `border-2` with gray-900
  - Removed gray-200 border and hover effects
  - Removed gradient shift on hover
  - Made entire card clickable (converted to Link wrapper)
  - Added matching arrow slide animation
  - Removed teal hover on "View site" link
- Added `cursor-pointer` class to all card links (attempting to ensure pointer cursor displays)

### Design Decisions
- Removed teal accents from Work page hover states due to poor contrast on white backgrounds
- Simplified interactions to single arrow movement - more refined and accessible
- Unified card styling between main case studies and additional work for consistency
- Focused on accessibility: proper color contrast ratios throughout

### Files Modified
1. app/about/page.tsx
2. app/work/page.tsx

### Notes
- No new dependencies added
- All changes focused on refinement and polish
- Accessibility improved with better contrast ratios
- Interaction design simplified for better user experience


---

## 2026-03-22 - Work Page Refinements and Layout Updates

### Goal
Refine the work page layout, add card images, update navigation styling, and fix footer positioning across all pages.

### Changes Made

**Work Page Card Layout ([app/work/page.tsx](app/work/page.tsx)):**
- Converted Additional Work section from 3-column to 2-column grid layout
- Removed Compass card from Additional Work (already featured as main case study)
- Added card images:
  - Compass: /compass-card.png
  - Dagster Alerting: /alerting-card.png
  - Signals: /signals-card.png
  - Standby Coffee Techs: /standby-logo.png (with p-16 padding)
  - Longmont Care Circle: /lcc-logo.png (with p-16 padding)
- Updated all card borders from heavy black (border-2 border-gray-900) to subtle (border border-gray-300)
- Added 4px border radius (rounded) to all cards
- Changed case study images from object-contain to object-cover with edge alignment (object-left/object-right)

**Compass Case Study ([app/work/dagster-compass/page.tsx](app/work/dagster-compass/page.tsx)):**
- Added caption underneath YouTube video: "Demo of Dagster+ data in Compass"
- Wrapped video in figure element with figcaption using consistent styling (text-xs text-gray-500 italic)

**Homepage Updates ([app/page.tsx](app/page.tsx)):**
- Changed CTA button hover from teal to white with black outline
- Removed min-h-[80vh] to work with new flex layout
- Button now transitions: black bg → white bg on hover

**Navigation Updates ([components/Navigation.tsx](components/Navigation.tsx)):**
- Changed border from border-gray-900 to border-gray-200 (lighter, more subtle)

**Footer and Layout System ([app/layout.tsx](app/layout.tsx), [components/Footer.tsx](components/Footer.tsx)):**
- Implemented sticky footer that sits at bottom of viewport on all pages
- Added flex layout to body: flex flex-col min-h-screen
- Main content uses flex-1 to grow and fill available space
- Footer uses w-full and mt-auto
- Footer border changed from border-gray-900 to border-gray-200
- Removed min-h-screen from work page content to prevent flex conflicts

### Design Decisions
- Lighter borders (gray-300) create more refined, modern look compared to heavy black borders
- 2-column grid for Additional Work provides better balance than 3-column (too compact) or full-width rows (too similar to case studies)
- Object-cover on case study images creates more dynamic, edge-to-edge presentation
- Consistent image padding (p-16) on logos gives breathing room in containers
- Sticky footer ensures professional layout on all viewport sizes

### Files Modified
1. app/work/page.tsx
2. app/work/dagster-compass/page.tsx
3. app/page.tsx
4. app/layout.tsx
5. components/Navigation.tsx
6. components/Footer.tsx

### Notes
- All border weights reduced from 2px to 1px throughout work page
- Card images now display properly with correct aspect ratios
- Footer positioning works consistently across homepage, work page, and case study pages
- No new packages installed
- No new components created

---

## 2026-03-23 - Homepage and Work Page Redesign

### Goal
Redesign work page with cleaner editorial layout, add case studies to homepage, and refine visual hierarchy across the site.

### Changes Made

**Homepage ([app/page.tsx](app/page.tsx)):**
- Added three case study cards below hero section using same layout as work page
- Removed "View case studies" CTA button (commented out)
- Added case studies data with object position configuration
- Maintained hero section with asymmetric 8/4 grid
- Overall spacing: `space-y-32` between hero and case studies

**Work Page Layout Overhaul ([app/work/page.tsx](app/work/page.tsx)):**
- Redesigned from boxed cards to editorial layout with horizontal dividers
- Removed heavy borders and containers for cleaner presentation
- Case study cards now use:
  - `border-b border-gray-200` dividers between items
  - 7/5 column grid (image left, content right)
  - `aspect-[5/4]` images with `border border-gray-200`
  - Consistent left-to-right layout (no alternating)
  - Images: subtle `bg-gray-100` background with border
  - Fixed heights removed - images use aspect ratio
- Updated header to match About page style:
  - Added `pb-12 border-b border-gray-200`
  - Changed subtitle from `text-xl` to `text-2xl`
- Spacing: `space-y-20` between sections and cards
- Added object position per card:
  - Compass: `object-top`
  - Dagster Alerting: `object-center`
  - Signals: `object-top`

**Global Layout ([app/layout.tsx](app/layout.tsx)):**
- Increased top padding from `pt-16` to `pt-24` (6rem)
- Maintained bottom padding at `pb-16`

**Lightbox Component ([components/Lightbox.tsx](components/Lightbox.tsx)):**
- Increased lightbox size from `max-w-[67.5vw] max-h-[67.5vh]` to `max-w-[95vw] max-h-[95vh]`
- Added `border border-gray-200` to thumbnail images
- Removed responsive sizing variations for consistency

**Case Study Pages:**
- Compass ([app/work/dagster-compass/page.tsx](app/work/dagster-compass/page.tsx)):
  - Removed `my-12` margin from YouTube iframe wrapper
  - Changed figure spacing from `space-y-3` to `space-y-2`
  - Updated all section spacing from `space-y-6` to `space-y-8`
- Dagster Alerting ([app/work/dagster-alerting/page.tsx](app/work/dagster-alerting/page.tsx)):
  - Updated all section spacing from `space-y-6` to `space-y-8`
- FireHydrant Signals ([app/work/firehydrant-signals/page.tsx](app/work/firehydrant-signals/page.tsx)):
  - Updated all section spacing from `space-y-6` to `space-y-8`

### Design Decisions
- **Editorial over UI**: Moved from card-based layout to editorial style with dividers
- **Consistent alignment**: All case studies use same left-to-right layout
- **Subtle separation**: Border on images provides definition without visual weight
- **Refined spacing**: Increased vertical rhythm (6→8) for better breathing room
- **Larger lightbox**: Images now display at 95% viewport for better detail viewing
- **Homepage integration**: Case studies front and center, CTA removed

### Files Modified
1. app/page.tsx
2. app/layout.tsx
3. app/work/page.tsx
4. app/work/dagster-compass/page.tsx
5. app/work/dagster-alerting/page.tsx
6. app/work/firehydrant-signals/page.tsx
7. components/Lightbox.tsx

### Notes
- No new packages installed
- No new components created
- All changes focused on visual refinement and hierarchy
- Maintains accessibility with proper contrast ratios
- Editorial approach aligns with portfolio's refined aesthetic

---

## 2026-03-23 - Vercel Deployment Fix

### Goal
Unblock a failing Vercel build that had been stuck for ~1 hour.

### Problem
Build error: `Cannot find module './parse'` in `browserslist/index.js`. The Vercel log showed "changed 2 packages" during install, meaning Vercel's `npm install` was drifting from the lockfile and resolving browserslist to a version without `parse.js`.

Previous attempts (postcss override to 8.4.31, forcing webpack mode) had not resolved the root cause.

### Fix
Created `vercel.json` with `"installCommand": "npm ci"` to force Vercel to install exactly what's in `package-lock.json` rather than re-resolving packages.

### Files Modified
1. vercel.json (created)

### Notes
- Site was previously on Netlify (no Next.js); this is a new Next.js deployment on Vercel
- Vercel was pointed at branch `kf/2026-next` (not main) — kept as-is
- The "changed 2 packages" line in Vercel build logs is the diagnostic signal for this class of issue

---

## 2026-03-26 - Responsiveness, Spacing, and Cleanup

### Goal
Fix responsiveness on the About page, standardize spacing across all three case study pages using Signals as the reference, and clean up committed node_modules.

### Changes Made

**Commit cleanup:**
- Removed `node_modules/postcss` from git tracking (was force-committed as a build workaround; no longer needed since `vercel.json` enforces `npm ci`)
- Committed `@vercel/analytics` addition, all modified app files, and SESSION_NOTES.md

**About Page ([app/about/page.tsx](app/about/page.tsx)):**
- Fixed mobile overflow: `grid-cols-12` with large `gap-x` values was causing columns to collapse and overflow on small screens
- Header: `gap-8` → `gap-y-8 lg:gap-8`
- Content grid: `gap-x-12` → `gap-x-0 lg:gap-x-12`

**Case study spacing overhaul — all three pages:**
- Used Signals as the reference
- Standardized all `<section>` elements to `space-y-6`
- Removed all `mt-3`/`mt-4` manual margin overrides from `<p>` and `<ul>` elements (these were fighting against parent `space-y` and creating uneven rhythm)
- Added `space-y-4` to subsection `<div>` wrappers that contain `h3 + p + ul + p` content (without this, removing the mt overrides left zero gap between those elements)
- Removed `mb-4` from `<h3>` elements where `space-y-4` on the parent div now handles the spacing

**Compass ([app/work/dagster-compass/page.tsx](app/work/dagster-compass/page.tsx)):**
- Unwrapped nested `<section>` elements around images in Act 3 — replaced with `<figure>` elements directly in the parent section

### Files Modified
1. app/about/page.tsx
2. app/work/dagster-compass/page.tsx
3. app/work/dagster-alerting/page.tsx
4. app/work/firehydrant-signals/page.tsx

### Notes
- dagster-rbac and other work pages have the same mt-3/mt-4 pattern but were left alone per user preference
- node_modules/postcss should stay untracked going forward — vercel.json with `npm ci` is the correct fix

---

## 2026-04-17 — Writing Section and Site-wide Design Refinements

### Goal
Add a Writing section for short MDX-based posts and refine design consistency across the site.

### Writing Section
- Installed `@next/mdx`, configured `next.config.ts` with MDX plugin and `pageExtensions`
- Created `mdx-components.tsx` (root level, required by App Router) with styled HTML elements
- Created `components/Post.tsx` — layout wrapper for posts: title, date, content, "Back to writing" link with animated arrow
- Created `components/ShareButton.tsx` — client component (unused in current flow, kept for future use)
- Created `app/writing/page.tsx` — listing page with `posts` array (slug, title, date), arrow hover animations
- Added Writing nav link to `components/Navigation.tsx`
- Four posts published:
  - `2026-04-17-re-claude-design` — Re: Claude Design
  - `2026-03-18-ai-doesnt-replace-design-thinking` — AI doesn't replace design thinking, it lets us act on it faster
  - `2026-03-08-ai-is-fun` — AI tools are fun
  - `2026-03-04-more-access-doesnt-dilute-creativity` — More access to creative tools doesn't dilute creativity

### Design Refinements

**Typography/color consistency:**
- Standardized subheadings to `text-xl text-gray-600 leading-relaxed` across Work, About, Writing
- Removed grid constraint from subheadings on Work and About so they run full width
- Reduced homepage h1 from `text-6xl/7xl/8xl` to `text-5xl/6xl/7xl`
- Forced h1 line break after "clarity," with `<br />`
- Reduced hero subheading to `text-lg`, removed `max-w-xl` constraint
- Three-level color hierarchy on case study cards: `text-gray-500` metadata, `text-gray-900` title, `text-gray-800` description (all pass WCAG AA)
- Added `rounded-lg` to card images on work page and homepage to match case study and about page images

**Work page layout:**
- Increased case study spacing from `space-y-20` to `space-y-32`
- Switched from `border-b` to `border-t` on each section; first section has no border-t (index check) to avoid double-border with header
- Removed index numbers (01/02/03) — redundant with border treatment

**Homepage:**
- Matched case study spacing to `space-y-32`
- No borders between homepage case studies — spacing sufficient, homepage is showcase not listing

**Footer:**
- Added `flex-col sm:flex-row` so copyright and links stack on small screens

### Files Modified
1. next.config.ts, package.json, package-lock.json
2. mdx-components.tsx (new)
3. app/writing/page.tsx (new) + four post MDX files (new)
4. components/Post.tsx (new), components/ShareButton.tsx (new)
5. components/Navigation.tsx
6. app/about/page.tsx, app/work/page.tsx, app/page.tsx
7. components/Footer.tsx

### Notes
- PR opened against `kf/2026-next`: https://github.com/katefarrar/katefarrar.com/pull/new/kf/041726-writing
- Post template: `<Post title="..." date="...">` wrapping MDX content in `page.mdx`
- Adding a new post: create `app/writing/YYYY-MM-DD-slug/page.mdx`, add entry to `posts` array in `app/writing/page.tsx`

---

