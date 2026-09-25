import {
  Bell,
  Bot,
  Boxes,
  Camera,
  ChartNoAxesCombined,
  CircleDollarSign,
  CloudUpload,
  CodeXml,
  Database,
  Factory,
  Gauge,
  Gavel,
  MapPin,
  Megaphone,
  PackageCheck,
  Recycle,
  ScanLine,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Truck,
  UserRoundCheck,
  UsersRound,
  WalletCards,
  Waypoints,
  Weight,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Tone = "cream" | "blue" | "green" | "pink" | "purple";

function IconBubble({ icon: Icon, tone = "cream", label }: { icon: LucideIcon; tone?: Tone; label: string }) {
  return (
    <span className={`icon-bubble icon-${tone}`} title={label} aria-label={label}>
      <Icon aria-hidden="true" />
    </span>
  );
}

function ZoneHeader({ zone, title, icon, tone }: { zone?: string; title: string; icon: LucideIcon; tone: Tone }) {
  return (
    <header className="zone-header">
      <IconBubble icon={icon} tone={tone} label={title} />
      <div><strong>{zone}</strong><span>{title}</span></div>
    </header>
  );
}

function InfoCard({ icon, title, children, tone = "cream" }: { icon: LucideIcon; title: string; children?: React.ReactNode; tone?: Tone }) {
  return (
    <article className={`info-card card-${tone}`} title={`${title}: ${typeof children === "string" ? children : "Architecture component"}`}>
      <IconBubble icon={icon} tone={tone} label={title} />
      <div className="card-copy"><strong>{title}</strong>{children && <span>{children}</span>}</div>
    </article>
  );
}

export function ArchitectureConnector({ className, d, markerEnd = true }: { className?: string; d: string; markerEnd?: boolean }) {
  return (
    <svg className={`connector ${className ?? ""}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" /></marker></defs>
      <path d={d} markerEnd={markerEnd ? "url(#arrow)" : undefined} />
    </svg>
  );
}

export function TopHeader() {
  return (
    <header className="poster-header">
      <div className="scrap-pill">ScrapSmiths</div>
      <h1><span>TECHNICAL</span> <em>APPROACH</em></h1>
      <div className="sih-brand"><span className="sih-mark">SIH</span><strong>SMART INDIA<br />HACKATHON<br /><b>2026</b></strong></div>
    </header>
  );
}

export function ZoneOne() {
  return (
    <section className="zone zone-one">
      <ZoneHeader zone="ZONE 1:" title="USER INTERACTION & EXTERNAL SERVICES" icon={UsersRound} tone="green" />
      <div className="role-list">
        <InfoCard icon={UserRoundCheck} title="Kabadiwala">Secondary user /<br />Quick Access Mobile App</InfoCard>
        <InfoCard icon={ChartNoAxesCombined} title="Aggregator">Primary User: Dashboard<br />& Lot Management</InfoCard>
        <InfoCard icon={Recycle} title="Authorized Recycler">Primary User: Sourcing<br />Interface</InfoCard>
      </div>
      <div className="api-box">
        <h3>External API Integrations</h3>
        <InfoCard icon={MapPin} title="Maps API" />
        <InfoCard icon={WalletCards} title="UPI Gateway" />
        <InfoCard icon={Bell} title="Notification Service" />
        <InfoCard icon={ShieldCheck} title="Recycler Verification Service" />
      </div>
      <ArchitectureConnector className="z1-out-one" d="M0 14 H75 Q95 14 95 35 V90" />
      <ArchitectureConnector className="z1-out-two" d="M0 10 H70 Q94 10 94 32 V84" />
    </section>
  );
}

function FlutterMark() {
  return <div className="flutter-mark" aria-label="Flutter"><i /><b /><em /></div>;
}

export function ZoneTwo() {
  return (
    <section className="zone zone-two">
      <ZoneHeader zone="ZONE 2:" title="INTERFACE LAYER" icon={Smartphone} tone="purple" />
      <div className="mobile-call">Mobile App<br />API Calls</div>
      <div className="phone-card" title="Flutter Android App for three user roles">
        <span className="phone-speaker" />
        <FlutterMark />
        <strong>Flutter<br />Android App<br />(3 Roles)</strong>
      </div>
      <div className="offline-label">Offline<br />Lot<br />Sync</div>
      <div className="gateway-label">REST API<br />Gateway</div>
      <div className="pool-card">
        <h3>POOLING LOGIC</h3>
        <div className="pool-graphic"><Truck /><Truck /><Truck /><b>➜</b><Boxes /></div>
        <p>Lot collection &<br />combine</p>
      </div>
      <ArchitectureConnector className="z2-mobile-arrow" d="M0 10 H75 Q94 10 94 35 V95" />
      <ArchitectureConnector className="z2-rest-arrow" d="M0 50 H100" />
    </section>
  );
}

const modules: Array<[LucideIcon, string]> = [
  [Database, "Lot Management"], [ScanLine, "Transaction & Traceability"],
  [ChartNoAxesCombined, "Price Intelligence"], [Recycle, "Recycler Matching"],
  [Megaphone, "Request Broadcast"],
];

export function ZoneThree() {
  return (
    <section className="zone zone-three">
      <ZoneHeader zone="ZONE 3:" title="APPLICATION & CORE LOGIC" icon={Wrench} tone="blue" />
      <h2 className="module-title">FastAPI modules</h2>
      <div className="gateway-stack">
        <ShieldCheck className="key-symbol" /><small>Authentication</small>
        <CodeXml className="python-symbol" />
        <strong>REST API<br />Gateway<br />[Python<br />FastAPI<br />Server]</strong>
      </div>
      <div className="module-stack">
        {modules.map(([icon, title]) => <InfoCard key={title} icon={icon} title={title} tone="blue" />)}
      </div>
      <InfoCard icon={Waypoints} title="Aggregation & Pooling Logic" tone="green" />
      <ArchitectureConnector className="z3-modules-arrow" d="M0 5 Q15 5 15 20 V80 Q15 95 35 95 H100" />
      <ArchitectureConnector className="z3-pool-arrow" d="M0 0 V70 Q0 95 28 95 H100" />
    </section>
  );
}

const aiItems: Array<[LucideIcon, string, React.ReactNode]> = [
  [ShieldCheck, "Hazardous flags", <>detection</>],
  [ScanLine, "Material & Category", <>Detection</>],
  [ChartNoAxesCombined, "Predictive Price", <>Estimation</>],
  [Recycle, "Recycler Matching", <>(Hybrid ML + Rules)</>],
  [Gauge, "Anomaly Detection", <>(Unusual Activity)</>],
];

export function ZoneFour() {
  return (
    <section className="zone zone-four">
      <ZoneHeader zone="ZONE 4:" title="DATA & INTELLIGENCE LAYER" icon={ChartNoAxesCombined} tone="cream" />
      <div className="data-grid">
        <div className="ai-panel">
          <h3><IconBubble icon={Bot} tone="green" label="AI ML Engine" />AI/ML Engine</h3>
          {aiItems.map(([icon, title, copy]) => <InfoCard key={title} icon={icon} title={title} tone="green">{copy}</InfoCard>)}
        </div>
        <div className="db-panel">
          <h3><IconBubble icon={Database} tone="blue" label="Databases" />Databases</h3>
          <div className="db-copy"><strong>PostgreSQL<br />+ PostGIS</strong><ul><li>Users</li><li>Lots</li><li>Materials</li><li>Transactions</li><li>Location Data</li></ul></div>
          <div className="sqlite-copy"><strong>🪶 SQLite</strong><small>(Offline, Local)</small><ul><li>Local Cache</li><li>Pending Sync</li><li>Offline Access</li></ul></div>
        </div>
      </div>
      <div className="ledger-card">
        <h3>Traceability Ledger</h3>
        <div><Database /><strong>PostgreSQL<br />Ledger</strong><ul><li>Immutable Records</li><li>Transaction History</li><li>Traceability & Audit</li><li>Compliant Logs</li></ul></div>
      </div>
      <div className="sync-label">Offline<br />Partial<br />Device<br />Sync</div>
      <ArchitectureConnector className="z4-ai-db" d="M0 50 H100" />
      <ArchitectureConnector className="z4-ledger" d="M50 0 V100" markerEnd={false} />
    </section>
  );
}

const steps: Array<[LucideIcon, Tone, string, string]> = [
  [Recycle, "pink", "SOURCE RECOVERY", "Waste pickers collect raw mixed materials from residential zones"],
  [Waypoints, "blue", "AGGREGATOR INGESTION", "Local aggregation buys loose materials, linking informal backyard pickers"],
  [Boxes, "cream", "WASTE SEGREGATION", "Raw e-waste is broken down into pure categories: PCBs, copper coils, batteries etc."],
  [Camera, "pink", "PHOTO CAPTURE", "Aggregate photographs items; on-device model automatically classifies the lot"],
  [ServerCog, "pink", "DIGITAL POOLING ENGINE", "Small identical batches are combined into high-volume wholesale lots"],
  [Gavel, "pink", "REVERSE-AUCTION", "Geo-fenced lot parameters go live; authorized recyclers bid competitively for materials"],
  [PackageCheck, "blue", "ONSITE VERIFY & SYNC", "Truck driver arrives, confirms weights via scale, and syncs data to the cloud database"],
];

export function ImplementationProcess() {
  return (
    <aside className="implementation">
      <header><IconBubble icon={Wrench} tone="pink" label="Implementation process" /><h2>Implementation process</h2></header>
      <div className="process-list">
        {steps.map(([icon, tone, title, copy]) => (
          <article className="process-card" key={title} title={copy}>
            <IconBubble icon={icon} tone={tone} label={title} />
            <div><strong>{title}</strong><p>{copy}</p></div>
          </article>
        ))}
      </div>
    </aside>
  );
}

export function ZoneFive() {
  return (
    <section className="zone-five">
      <div className="payment-heading"><IconBubble icon={WalletCards} tone="pink" label="Transaction payment" /><strong>ZONE 5:<br />TRANSACTION/PAYMENT</strong></div>
      <p><b>UPI:</b> Order created via a licensed aggregator <strong>(Razorpay/Cashfree)</strong> → payer approves via intent/collect flow → success confirmed through a server-side webhook. <b>Receipts:</b> Generated offline at handover with a local hash + QR code, then synced and permanently stored once the device is back online, giving a tamper-verifiable, EPR-ready audit trail.</p>
    </section>
  );
}

const tech: Array<[LucideIcon | null, string, string]> = [
  [null, "◢", "FLUTTER"], [null, "🪶", "SQLite"], [Gauge, "", "FASTAPI"],
  [CodeXml, "", "PYTHON"], [Database, "", "POSTGRESQL"], [null, "◉", "PYTORCH"],
  [MapPin, "", "MAPS API"], [null, "◭", "UPI"], [Bell, "", "PUSH\nNOTIFICATIONS"],
];

export function TechStackFooter() {
  return (
    <footer className="tech-footer">
      <h2>RECOMMENDED TECH STACK & COMPONENTS TO BE USED</h2>
      <div className="tech-list">
        {tech.map(([Icon, glyph, name]) => <div className="tech-item" key={name}>{Icon ? <Icon /> : <span>{glyph}</span>}<strong>{name}</strong></div>)}
      </div>
    </footer>
  );
}

export default function ArchitecturePoster() {
  return (
    <main className="architecture-page">
      <div className="poster-canvas">
        <TopHeader />
        <div className="poster-body">
          <ZoneOne /><ZoneTwo /><ZoneThree /><ZoneFour /><ImplementationProcess />
        </div>
        <ZoneFive />
        <TechStackFooter />
      </div>
    </main>
  );
}