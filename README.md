# Scrap Scrap Visualizer

Build a pixel-accurate web implementation of the attached reference image.

IMPORTANT:
The attached image is the SINGLE SOURCE OF TRUTH for the visual design.

Do NOT redesign it.
Do NOT simplify it.
Do NOT modernize it.
Do NOT create a generic SaaS dashboard.
Do NOT change the layout.
Do NOT invent a different architecture diagram.
Do NOT replace the illustrated/card-based style with plain boxes.
Do NOT change the wording or information hierarchy.

The goal is to reproduce the exact visual appearance and information architecture of the reference image as closely as possible using HTML/CSS/SVG/React.

PROJECT:
Scrap अड्डा — Smart India Hackathon 2026
Page/section title:
TECHNICAL APPROACH

==================================================
1. OVERALL CANVAS
==================================================

Create one large technical architecture infographic.

Desktop composition must closely match the reference:

- Wide landscape canvas
- Approximate aspect ratio: 16:9
- Warm/off-white paper-like background
- Five major visual sections/zones
- Rounded cards with soft shadows
- Hand-crafted/paper/soft 3D infographic appearance
- Bright but professional pastel color palette
- Strong visual hierarchy
- Dense information but still readable
- No unnecessary whitespace
- No generic website navbar
- No footer unrelated to the architecture
- The architecture itself IS the main page.

At the top center:

"TECHNICAL APPROACH"

Use a large playful but professional rounded/bold display style.

The title should look like the reference:
- "TECHNICAL" in dark navy
- "APPROACH" in red/pink
- soft cream/paper pill behind the title
- slightly dimensional/shadowed appearance

Top-left:
SCRAPSMITHS logo/pill.

Top-right:
SMART INDIA
HACKATHON
2026 branding area.

==================================================
2. FIVE MAIN ZONES
==================================================

Maintain exactly this high-level organization:

ZONE 1:
USER INTERACTION &
EXTERNAL SERVICES

ZONE 2:
INTERFACE LAYER

ZONE 3:
APPLICATION &
CORE LOGIC

ZONE 4:
DATA &
INTELLIGENCE LAYER

ZONE 5:
TRANSACTION/PAYMENT

There is also a vertical:
IMPLEMENTATION PROCESS
section on the far right.

Do not move these zones into a different structure.

==================================================
3. ZONE 1 — USER INTERACTION & EXTERNAL SERVICES
==================================================

Create a large rounded pastel green panel on the left.

Header:

ZONE 1:
USER INTERACTION &
EXTERNAL SERVICES

Use a green user icon in a circular icon container.

Inside, create three large rounded cards:

1.
Kabadiwala

Subtitle:
Secondary user /
Quick Access Mobile App

2.
Aggregator

Subtitle:
Primary User: Dashboard
& Lot Management

3.
Authorized Recycler

Subtitle:
Primary User: Sourcing
Interface

Each card should have:
- small illustrative icon on the left
- bold dark heading
- smaller subtitle
- cream/paper texture
- rounded corners
- soft shadow.

Below them:

EXTERNAL API INTEGRATIONS

Create four stacked cards:

Maps API
UPI Gateway
Notification Service
Recycler Verification Service

Use appropriate recognizable icons.

The external service area must visually match the reference.

==================================================
4. ZONE 2 — INTERFACE LAYER
==================================================

Create a pastel purple/pink vertical panel.

Header:

ZONE 2:
INTERFACE LAYER

At the center, place a large stylized smartphone card.

Inside the phone:

Flutter logo/icon

Text:

Flutter
Android App
(3 Roles)

Above/around the phone:

Mobile App
API Calls

Show arrows from the user-role cards toward the mobile application.

On the right side of the phone show:

REST API
Gateway

Below the phone create:

POOLING LOGIC

Use small truck/collection illustrations.

Text:

Lot collection &
combine

Also show:

Offline
Lot Sync

The visual connections/arrows must resemble the reference image.

==================================================
5. ZONE 3 — APPLICATION & CORE LOGIC
==================================================

Create a large pastel blue panel.

Header:

ZONE 3:
APPLICATION & CORE LOGIC

At the top:

FastAPI modules

Under it create vertically stacked rounded cards:

Lot Management

Transaction &
Traceability

Price Intelligence

Recycler Matching

Request Broadcast

Each card should have an appropriate icon.

On the left of these cards show:

Authentication

REST API
Gateway
[Python
FastAPI
Server]

Use a Python icon.

At the bottom create a green rounded card:

Aggregation &
Pooling Logic

Connect the relevant components using curved black/dark arrows.

Keep the exact visual hierarchy of the reference.

==================================================
6. ZONE 4 — DATA & INTELLIGENCE LAYER
==================================================

Create a large pastel yellow/orange panel.

Header:

ZONE 4:
DATA & INTELLIGENCE LAYER

Split the area into:

LEFT:
AI/ML Engine

RIGHT:
Databases

AI/ML Engine must contain exactly these concepts:

Hazardous flags
detection

Material & Category
Detection

Predictive Price
Estimation

Recycler Matching
(Hybrid ML + Rules)

Anomaly Detection
(Unusual Activity)

Use green rounded cards with small icons.

DATABASES section:

PostgreSQL
+ PostGIS

Show:

Users
Lots
Materials
Transactions
Location Data

Below:

SQLite
(Offline, Local)

Show:

Local Cache
Pending Sync
Offline Access

At the bottom:

Traceability Ledger

PostgreSQL
Ledger

With:

Immutable Records
Transaction History
Traceability & Audit
Compliant Logs

Show the appropriate arrows between:
AI/ML → database
SQLite → offline sync
PostgreSQL → ledger

==================================================
7. ZONE 5 — TRANSACTION/PAYMENT
==================================================

Create a horizontal section underneath the main architecture.

Header:

ZONE 5:
TRANSACTION/PAYMENT

Use a dark red/pink payment-card icon.

Include the payment architecture text from the reference:

UPI: Order created via a licensed aggregator
(Razorpay/Cashfree) → payer approves via intent/collect flow
→ success confirmed through a server-side webhook.

Then:

Receipts: Generated offline at handover with a local hash + QR code,
then synced and permanently stored once the device is back online,
giving a tamper-verifiable, EPR-ready audit trail.

Preserve this information hierarchy.

==================================================
8. IMPLEMENTATION PROCESS — FAR RIGHT
==================================================

Create a tall vertical pastel pink panel on the far right.

Header:

Implementation process

Create exactly these process steps:

1.
SOURCE RECOVERY

Waste pickers collect raw mixed materials
from residential zones

2.
AGGREGATOR INGESTION

Local aggregation buys loose materials,
linking informal backyard pickers

3.
WASTE SEGREGATION

Raw e-waste is broken down into pure categories:
PCBs, copper coils, batteries etc.

4.
PHOTO CAPTURE

Aggregate photographs items;
on-device model automatically classifies the lot

5.
DIGITAL POOLING ENGINE

Small identical batches are combined
into high-volume wholesale lots

6.
REVERSE-AUCTION

Geo-fenced lot parameters go live;
authorized recyclers bid competitively
for materials

7.
ONSITE VERIFY & SYNC

Truck driver arrives, confirms weights via scale,
and syncs data to the cloud database

Each step should have:
- circular illustrated icon
- bold title
- short explanatory text
- rounded pink/cream card
- subtle shadow

Maintain the vertical sequence.

==================================================
9. RECOMMENDED TECH STACK FOOTER
==================================================

At the very bottom create a horizontal strip:

RECOMMENDED TECH STACK & COMPONENTS TO BE USED

Include exactly these components:

Flutter
SQLite
FastAPI
Python
PostgreSQL
PyTorch
Maps API
UPI
Push Notifications

Use recognizable icons/logos.

Keep them evenly spaced like the reference.

==================================================
10. VISUAL STYLE — EXTREMELY IMPORTANT
==================================================

Match the attached image's visual language.

Use:

- cream/off-white paper background
- pastel green
- pastel purple
- pastel blue
- pastel orange/yellow
- pastel pink
- dark navy typography
- red/pink emphasis
- soft 3D shadows
- rounded cards
- slightly tactile/paper-like surfaces
- subtle gradients
- illustrated icons
- soft highlights
- gentle borders
- layered cards
- subtle depth

The result should feel like a professionally illustrated SIH technical architecture poster.

It should NOT look like:
- a normal enterprise architecture diagram
- a Figma wireframe
- a plain flowchart
- a generic Tailwind dashboard
- a dark developer diagram
- a flat UML diagram.

==================================================
11. ARROWS AND CONNECTIONS
==================================================

Connections are extremely important.

Recreate the visual relationships from the reference.

Main conceptual flow:

Users
↓
Flutter Android App
↓
REST API Gateway / FastAPI
↓
FastAPI Modules
↓
AI/ML + Databases
↓
Transaction / Traceability

Also show:

Offline Lot Sync
SQLite
↓
Partial Device Sync
↓
PostgreSQL

And:

Maps API → location
UPI → payments
Notifications → events
Recycler Verification → verified recyclers

Use curved arrows where the reference uses curved arrows.

Do not randomly connect every box to every other box.

==================================================
12. RESPONSIVE BEHAVIOR
==================================================

Desktop:
The design must remain visually equivalent to the attached reference.

Tablet:
Scale the entire architecture proportionally while maintaining relationships.

Mobile:
Do NOT simply shrink the desktop into unreadable text.

Instead create a responsive vertical version that preserves the same five-zone hierarchy:

1. Zone 1
2. Zone 2
3. Zone 3
4. Zone 4
5. Zone 5
6. Implementation Process
7. Recommended Tech Stack

However, desktop must remain the primary visual target.

==================================================
13. TECHNICAL IMPLEMENTATION
==================================================

Use React.

Use CSS/SVG for the architecture.

Prefer SVG for:
- arrows
- connectors
- diagrams
- logos where appropriate
- icons when practical

Use CSS for:
- cards
- shadows
- gradients
- spacing
- responsive layout
- typography.

Do not use a single giant background image as the implementation.

The diagram must be composed from real HTML/SVG components so that text remains crisp and responsive.

Create reusable components:

<TopHeader />
<ZoneOne />
<ZoneTwo />
<ZoneThree />
<ZoneFour />
<ZoneFive />
<ImplementationProcess />
<TechStackFooter />
<ArchitectureConnector />

==================================================
14. INTERACTION
==================================================

This is primarily a visual architecture page, not a dashboard.

Keep interaction subtle.

On hover:
- cards can slightly lift
- icons can subtly scale
- arrows can highlight
- tooltips can show a short explanation.

Do NOT introduce unnecessary animations.

The default state must already look almost identical to the reference.

==================================================
15. CONTENT ACCURACY
==================================================

Do not invent new technologies.

Use the technology stack represented in the reference:

Flutter
SQLite
FastAPI
Python
PostgreSQL
PostGIS
PyTorch
Maps API
UPI
Push Notifications

Keep the architecture consistent with:

Flutter App
→ REST API Gateway
→ FastAPI
→ PostgreSQL/PostGIS
→ AI/ML
→ SQLite offline
→ transaction/traceability.

==================================================
16. MOST IMPORTANT REQUIREMENT
==================================================

Before writing code, study the attached reference image carefully.

Treat its:
- layout
- proportions
- zone positions
- card sizes
- colors
- typography hierarchy
- arrows
- icon placement
- spacing
- content density

as design constraints.

The goal is NOT "something similar."

The goal is:

"Recreate this exact infographic design as a working responsive web implementation."

If a design decision is ambiguous, prefer the attached reference image over your own design preferences.

Do not remove information merely to make the design cleaner.

Do not add unrelated information.

Do not rename the zones.

Do not rearrange the zones.

Do not turn this into a conventional software architecture diagram.

Build the page first, then compare it visually against the attached reference and make another refinement pass specifically for:
1. alignment
2. proportions
3. spacing
4. typography
5. colors
6. connector positions
7. information density
8. visual hierarchy.

The final result should look like the same technical architecture poster recreated digitally, not a newly designed interpretation.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c2c8c9ef-a3e0-44ad-9389-51d82a4569e9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
