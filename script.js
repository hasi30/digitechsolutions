/* ==========================================================
   DIGITECH SOLUTIONS — IMAGE PATHS
   EDIT ONLY THIS SECTION
   To change the logo, a portfolio cover, or a case-study image,
   replace the path below with a new relative path to a file
   inside the /images folder. Nothing else needs to change.
   ========================================================== */

const DIGITECH_IMAGES = {
  logo: "images/logo1.jpeg",

  sanosFashion: {
    cover: "images/projects/sanos-fashion/cover.png",
    case1: "images/projects/sanos-fashion/cover.png",
    case2: "images/projects/sanos-fashion/02.png",
    case3: "images/projects/sanos-fashion/01.png"
  },
  xyzConstruction: {
    cover: "images/projects/xyz-construction/cover.jpg",
    case1: "images/projects/xyz-construction/01.jpg",
    case2: "images/projects/xyz-construction/02.jpg",
    case3: "images/projects/xyz-construction/03.jpg"
  },
  genZClothing: {
    cover: "images/projects/gen-z-clothing/cover.jpg",
    case1: "images/projects/gen-z-clothing/01.jpg",
    case2: "images/projects/gen-z-clothing/02.jpg",
    case3: "images/projects/gen-z-clothing/03.jpg"
  },
  continentalVisa: {
    cover: "images/projects/continental-visa/cover.jpg",
    case1: "images/projects/continental-visa/01.jpg",
    case2: "images/projects/continental-visa/02.jpg",
    case3: "images/projects/continental-visa/03.jpg"
  },
  adManagement: {
    cover: "images/projects/ad-management/cover.jpg",
    case1: "images/projects/ad-management/01.jpg",
    case2: "images/projects/ad-management/02.jpg",
    case3: "images/projects/ad-management/03.jpg"
  },
  haseeBakes: {
    cover: "images/projects/hasee-bakes/cover.jpg",
    case1: "images/projects/hasee-bakes/01.jpg",
    case2: "images/projects/hasee-bakes/02.jpg",
    case3: "images/projects/hasee-bakes/03.jpg"
  },
  imthiyasGoat: {
    cover: "images/projects/imthiyas-goat/cover.jpg",
    case1: "images/projects/imthiyas-goat/01.jpg",
    case2: "images/projects/imthiyas-goat/02.jpg",
    case3: "images/projects/imthiyas-goat/03.jpg"
  },
  kalaivanOrtho: {
    cover: "images/projects/kalaivan-ortho/cover.jpg",
    case1: "images/projects/kalaivan-ortho/01.jpg",
    case2: "images/projects/kalaivan-ortho/02.jpg",
    case3: "images/projects/kalaivan-ortho/03.jpg"
  },
  videoContent: {
    cover: "images/projects/video-content/cover.jpg",
    case1: "images/projects/video-content/01.jpg",
    case2: "images/projects/video-content/02.jpg",
    case3: "images/projects/video-content/03.jpg"
  },
  lagaramOrtho: {
    cover: "images/projects/lagaram-ortho/cover.jpg",
    case1: "images/projects/lagaram-ortho/01.jpg",
    case2: "images/projects/lagaram-ortho/02.jpg",
    case3: "images/projects/lagaram-ortho/03.jpg"
  }
};
/* ==========================================================
   END OF EDITABLE IMAGE SECTION
   ========================================================== */

const CONTACT = {
  phone: "8778344564",
  whatsapp: "918778344564",
  email: "digitechsolution.77@gmail.com",
  instagram: "digitech.solutions_"
};

/* ---------------- CONTENT DATA ---------------- */

const SERVICES = [
  { name: "Digital Marketing", desc: "Full-funnel strategy across channels, built around measurable growth.", icon: "chart" },
  { name: "Lead Generation", desc: "Consistent, qualified leads through targeted campaigns and funnels.", icon: "target" },
  { name: "Campaign Analysis", desc: "Ongoing performance review to find what's working and fix what isn't.", icon: "analysis" },
  { name: "Meta & Google Ads Management", desc: "Hands-on management of your paid campaigns end to end.", icon: "ads", note: "(Ad Spend Separate)" },
  { name: "Social Media Management", desc: "Consistent content, community management and brand voice.", icon: "social" },
  { name: "SEO", desc: "On-page, technical and content SEO to improve organic visibility.", icon: "seo" },
  { name: "SEM", desc: "Search engine marketing to capture high-intent demand.", icon: "sem" },
  { name: "Website Development", desc: "Fast, modern websites built to convert visitors into customers.", icon: "web" },
  { name: "Video Editing & Content Creation", desc: "Scroll-stopping video and creative for every platform.", icon: "video" },
  { name: "AI Digital Marketing", desc: "AI-assisted research, content and optimization built into your workflow.", icon: "ai" }
];

const ICONS = {
  chart: '<path d="M4 20V10M11 20V4M18 20v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  target: '<circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2.4" fill="currentColor"/>',
  analysis: '<path d="M4 4v16h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M7 15l3.5-4 3 3L19 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  ads: '<rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  social: '<circle cx="7" cy="12" r="2.4" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="6" r="2.4" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="18" r="2.4" stroke="currentColor" stroke-width="2"/><path d="M9.1 10.8L14.9 7.2M9.1 13.2l5.8 3.6" stroke="currentColor" stroke-width="2"/>',
  seo: '<circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4.6-4.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  sem: '<path d="M4 12h16M4 6h10M4 18h13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  web: '<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 9h18" stroke="currentColor" stroke-width="2"/>',
  video: '<rect x="3" y="6" width="12" height="12" rx="2" stroke="currentColor" stroke-width="2"/><path d="M15 10l6-3v10l-6-3" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  ai: '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  tool: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/>'
};

const PROJECTS = [
  {
    key: "sanosFashion", name: "Sanos Fashion Boutique", category: "E-commerce Website",
    tags: ["Website Development", "E-commerce"],
    service: "Website Development",
    overview: "Sanos Fashion Boutique needed an online store that reflected the quality of their in-store experience and could handle a growing product catalog.",
    challenge: "The brand had no online storefront, and customers had no way to browse or purchase outside store hours.",
    approach: "We planned an information architecture around collections and seasonal drops, then built a clean, mobile-first storefront.",
    whatWeDid: ["Structured product categories and navigation", "Built a responsive e-commerce storefront", "Set up product photography guidelines", "Configured checkout and order notifications"],
    focus: "Focus was on a fast, easy browsing experience that made it simple for customers to find and buy products."
  },
  {
    key: "xyzConstruction", name: "XYZ Construction & Land Promoters", category: "Website & Performance Analysis",
    tags: ["Website Development", "Campaign Analysis"],
    service: "Website & Performance Analysis",
    overview: "XYZ Construction & Land Promoters wanted a credible web presence and a clear view of how their marketing was performing.",
    challenge: "Prospective buyers had limited trust signals online, and the team had no consolidated way to review campaign performance.",
    approach: "We rebuilt the website around trust and project showcases, then set up ongoing performance analysis.",
    whatWeDid: ["Designed a project-led website structure", "Added trust elements such as approvals and testimonials", "Set up analytics and reporting dashboards", "Reviewed campaign data on a recurring basis"],
    focus: "Focus was on building buyer confidence and giving the team visibility into what marketing activity was driving enquiries."
  },
  {
    key: "genZClothing", name: "Gen Z Clothing", category: "Digital Marketing",
    tags: ["Digital Marketing", "Social Media"],
    service: "Digital Marketing",
    overview: "Gen Z Clothing wanted a marketing approach that matched the tone and pace of their target audience.",
    challenge: "The brand's existing content wasn't connecting with a younger, fast-scrolling audience.",
    approach: "We developed a content and campaign strategy built around trend-aware, platform-native creative.",
    whatWeDid: ["Built a content calendar tailored to the audience", "Ran targeted campaigns across social platforms", "Tested creative formats and messaging", "Tracked engagement and adjusted in real time"],
    focus: "Focus was on building consistent engagement and stronger brand recall among a younger audience."
  },
  {
    key: "continentalVisa", name: "Continental Visa", category: "SEO Auditing",
    tags: ["SEO"],
    service: "SEO Auditing",
    overview: "Continental Visa needed a clear picture of their site's search performance and technical health.",
    challenge: "Organic visibility for key visa-related search terms was inconsistent, with no formal audit ever completed.",
    approach: "We ran a full technical and content SEO audit, then prioritized fixes by expected impact.",
    whatWeDid: ["Audited site structure and technical SEO health", "Reviewed keyword coverage and content gaps", "Identified indexing and crawlability issues", "Delivered a prioritized action plan"],
    focus: "Focus was on identifying the highest-impact fixes to improve organic search visibility."
  },
  {
    key: "adManagement", name: "Digital Marketing & Complete Ad Management", category: "Performance Marketing",
    tags: ["Meta & Google Ads", "Performance Marketing"],
    service: "Performance Marketing",
    overview: "This engagement covered end-to-end ad management across Meta and Google for a growing business.",
    challenge: "Ad spend was not tied to a clear strategy, making it hard to judge what was actually working.",
    approach: "We restructured campaigns around clear objectives and put consistent tracking in place.",
    whatWeDid: ["Rebuilt campaign structure across platforms", "Set up conversion tracking", "Tested audiences and creative variants", "Reviewed and optimized spend allocation regularly"],
    focus: "Focus was on making ad spend accountable to clear, trackable outcomes."
  },
  {
    key: "haseeBakes", name: "Hasee Bakes & Desserts", category: "Social Media Management",
    tags: ["Social Media Management", "Content Creation"],
    service: "Social Media Management",
    overview: "Hasee Bakes & Desserts wanted a stronger, more consistent presence on social media to support local orders.",
    challenge: "Posting was irregular and content didn't showcase the products in a way that drove orders.",
    approach: "We built a content system focused on product visuals and local audience engagement.",
    whatWeDid: ["Planned a consistent posting calendar", "Produced product-focused content", "Managed community replies and messages", "Ran occasional promotions around key dates"],
    focus: "Focus was on consistency and visual quality to support local demand."
  },
  {
    key: "imthiyasGoat", name: "Imthiyas Goat Business", category: "Meta Ads & Lead Generation",
    tags: ["Meta Ads", "Lead Generation"],
    service: "Meta Ads & Lead Generation",
    overview: "Imthiyas Goat Business needed a reliable way to generate enquiries for livestock sales.",
    challenge: "The business relied on word of mouth, with no structured way to capture and follow up on interest.",
    approach: "We set up targeted Meta ad campaigns paired with a simple lead capture process.",
    whatWeDid: ["Built targeted Meta ad campaigns", "Set up lead capture forms", "Organized leads for follow-up", "Monitored cost per lead and adjusted targeting"],
    focus: "Focus was on generating a steady, manageable flow of qualified enquiries."
  },
  {
    key: "kalaivanOrtho", name: "Kalaivan Ortho & Clinic", category: "Social Media Management",
    tags: ["Social Media Management"],
    service: "Social Media Management",
    overview: "Kalaivan Ortho & Clinic wanted to build awareness and trust in their local community online.",
    challenge: "The clinic had minimal social presence, making it hard for new patients to learn about their services.",
    approach: "We introduced an educational, trust-building content approach suited to a healthcare audience.",
    whatWeDid: ["Planned patient-friendly educational content", "Maintained a consistent posting schedule", "Highlighted services and patient care approach", "Managed page engagement and enquiries"],
    focus: "Focus was on building credibility and awareness within the local community."
  },
  {
    key: "videoContent", name: "Video Editing & Content Creation", category: "Video Production",
    tags: ["Video Editing", "Content Creation"],
    service: "Video Production",
    overview: "This project covered ongoing video editing and content production for multiple short-form deliverables.",
    challenge: "Raw footage needed to be turned into polished, platform-ready content on a regular schedule.",
    approach: "We set up an editing workflow suited to short-form and social formats.",
    whatWeDid: ["Edited short-form video content", "Added captions, pacing and sound design", "Delivered formats suited to Reels and posts", "Maintained a consistent delivery schedule"],
    focus: "Focus was on turning raw footage into consistent, publish-ready content."
  },
  {
    key: "lagaramOrtho", name: "Lagaram Ortho", category: "Video Editing",
    tags: ["Video Editing"],
    service: "Video Editing",
    overview: "Lagaram Ortho needed clean, professional video content to support their clinic's online presence.",
    challenge: "Existing footage was unedited and not suited for use on social or web platforms.",
    approach: "We handled editing and formatting to produce clinic-appropriate, polished video content.",
    whatWeDid: ["Edited clinic video footage", "Added branding elements and captions", "Formatted videos for social and web use", "Delivered content in required aspect ratios"],
    focus: "Focus was on professional, clinic-appropriate video content ready to publish."
  }
];

const TOOLS = [
  { name: "Meta Ads Manager", purpose: "Manage and optimize Meta advertising campaigns." },
  { name: "Google Ads", purpose: "Run and manage search and display advertising." },
  { name: "Google Analytics", purpose: "Track website traffic and user behavior." },
  { name: "Google Search Console", purpose: "Monitor search performance and indexing." },
  { name: "Google Tag Manager", purpose: "Manage tracking tags without code changes." },
  { name: "Meta Business Suite", purpose: "Manage pages, posts and messages in one place." },
  { name: "Canva", purpose: "Design social and marketing creative quickly." },
  { name: "CapCut", purpose: "Edit short-form video content." },
  { name: "WordPress", purpose: "Build and manage content-driven websites." },
  { name: "Shopify", purpose: "Build and manage e-commerce storefronts." },
  { name: "SEO Tools", purpose: "Research keywords and audit site performance." },
  { name: "AI Marketing Tools", purpose: "Assist with research, content and optimization." }
];

const AI_CAPABILITIES = [
  { name: "Content Ideation", desc: "AI-assisted content concepts and planning." },
  { name: "Campaign Analysis", desc: "Identify patterns and optimization opportunities." },
  { name: "Audience Insights", desc: "Assist with audience research and segmentation." },
  { name: "Creative Assistance", desc: "Generate campaign concepts and creative directions." },
  { name: "Marketing Automation", desc: "Improve repetitive marketing workflows." },
  { name: "SEO Assistance", desc: "Content and search optimization support." }
];

const PACKAGES = [
  { name: "Starter Growth", desc: "For businesses starting their digital journey." },
  { name: "Growth", desc: "For businesses looking to build consistent online visibility and leads." },
  { name: "Performance", desc: "For businesses focused on advertising, campaigns, leads and optimization." },
  { name: "Custom", desc: "For businesses requiring a combination of digital marketing, website, SEO, social media, content and advertising." }
];

/* ---------------- RENDER: LOGO & CONTACT ---------------- */
document.getElementById("siteLogo").src = DIGITECH_IMAGES.logo;
document.getElementById("footerLogo").src = DIGITECH_IMAGES.logo;

const waLink = (msg) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
document.getElementById("heroWhatsapp").href = waLink("Hi Digitech Solutions, I would like to enquire about services.");
document.getElementById("floatWhatsapp").href = waLink("Hi Digitech Solutions, I would like to enquire about services.");
document.getElementById("footerPhone").textContent = CONTACT.phone;
document.getElementById("footerEmail").textContent = CONTACT.email;
document.getElementById("footerInstagram").textContent = "@" + CONTACT.instagram;

/* ---------------- RENDER: SERVICES ---------------- */
const serviceGrid = document.getElementById("serviceGrid");
SERVICES.forEach((s, i) => {
  const card = document.createElement("div");
  card.className = "service-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="service-indicator"></div>
    <div class="service-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none">${ICONS[s.icon] || ICONS.tool}</svg></div>
    <h3>${s.name}</h3>
    <p>${s.desc}</p>
    ${s.note ? `<span class="service-note">${s.note}</span>` : ""}
  `;
  const activate = () => {
    document.querySelectorAll(".service-card.active").forEach(c => { if (c !== card) c.classList.remove("active"); });
    card.classList.toggle("active");
  };
  card.addEventListener("click", activate);
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); } });
  serviceGrid.appendChild(card);
});

/* ---------------- RENDER: PORTFOLIO ---------------- */
const portfolioGrid = document.getElementById("portfolioGrid");
PROJECTS.forEach((p, idx) => {
  const imgs = DIGITECH_IMAGES[p.key];
  const card = document.createElement("div");
  card.className = "portfolio-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <div class="portfolio-img"><img src="${imgs.cover}" alt="${p.name} cover image" loading="lazy"></div>
    <div class="portfolio-body">
      <p class="portfolio-category">${p.category}</p>
      <h3>${p.name}</h3>
      <p>${p.overview}</p>
      <div class="portfolio-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <span class="view-case">View Case Study →</span>
    </div>
  `;
  const open = () => openCase(idx);
  card.addEventListener("click", open);
  card.addEventListener("keydown", e => { if (e.key === "Enter") open(); });
  portfolioGrid.appendChild(card);
});

/* ---------------- CASE STUDY MODAL ---------------- */
const caseModal = document.getElementById("caseModal");
let currentCaseIndex = 0;

function renderCase(idx){
  const p = PROJECTS[idx];
  const imgs = DIGITECH_IMAGES[p.key];
  document.getElementById("caseMainImg").src = imgs.cover;
  document.getElementById("caseMainImg").alt = p.name + " main image";
  document.getElementById("caseImg2").src = imgs.case2;
  document.getElementById("caseImg2").alt = p.name + " supporting image 1";
  document.getElementById("caseImg3").src = imgs.case3;
  document.getElementById("caseImg3").alt = p.name + " supporting image 2";
  document.getElementById("caseCategory").textContent = p.category;
  document.getElementById("caseTitle").textContent = p.name;
  document.getElementById("caseService").textContent = p.service;
  document.getElementById("caseOverview").textContent = p.overview;
  document.getElementById("caseChallenge").textContent = p.challenge;
  document.getElementById("caseApproach").textContent = p.approach;
  document.getElementById("caseFocus").textContent = p.focus;
  const whatList = document.getElementById("caseWhat");
  whatList.innerHTML = p.whatWeDid.map(i => `<li>${i}</li>`).join("");
  document.querySelector(".case-modal-panel").scrollTop = 0;
}

function openCase(idx){
  currentCaseIndex = idx;
  renderCase(idx);
  caseModal.classList.add("open");
  caseModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeCase(){
  caseModal.classList.remove("open");
  caseModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("caseClose").addEventListener("click", closeCase);
document.getElementById("caseBack").addEventListener("click", closeCase);
document.querySelector(".case-modal-backdrop").addEventListener("click", closeCase);
document.addEventListener("keydown", e => { if (e.key === "Escape" && caseModal.classList.contains("open")) closeCase(); });

document.getElementById("casePrev").addEventListener("click", () => {
  currentCaseIndex = (currentCaseIndex - 1 + PROJECTS.length) % PROJECTS.length;
  renderCase(currentCaseIndex);
});
document.getElementById("caseNext").addEventListener("click", () => {
  currentCaseIndex = (currentCaseIndex + 1) % PROJECTS.length;
  renderCase(currentCaseIndex);
});

/* ---------------- RENDER: TOOLS ---------------- */
const toolsGrid = document.getElementById("toolsGrid");
TOOLS.forEach(t => {
  const card = document.createElement("div");
  card.className = "tool-card";
  card.tabIndex = 0;
  const initials = t.name.split(" ").map(w => w[0]).slice(0,2).join("");
  card.innerHTML = `
    <div class="tool-icon">${initials}</div>
    <div>
      <p class="tool-name">${t.name}</p>
      <p class="tool-purpose">${t.purpose}</p>
    </div>
    <div class="tool-dot"></div>
  `;
  const toggle = () => card.classList.toggle("active");
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
  toolsGrid.appendChild(card);
});

/* ---------------- RENDER: AI CAPABILITIES ---------------- */
const aiCapWrap = document.getElementById("aiCapabilities");
AI_CAPABILITIES.forEach(c => {
  const card = document.createElement("div");
  card.className = "ai-cap-card";
  card.innerHTML = `<h3>${c.name}</h3><p>${c.desc}</p>`;
  aiCapWrap.appendChild(card);
});

/* ---------------- RENDER: PACKAGES ---------------- */
const packageGrid = document.getElementById("packageGrid");
const packageSelect = document.getElementById("packageSelect");
PACKAGES.forEach(pkg => {
  const card = document.createElement("div");
  card.className = "package-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <h3>${pkg.name}</h3>
    <p>${pkg.desc}</p>
    <span class="package-cta">Enquire Now →</span>
  `;
  const select = () => {
    document.querySelectorAll(".package-card.active").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    packageSelect.value = pkg.name;
    document.getElementById("enquiry").scrollIntoView({ behavior: "smooth" });
  };
  card.addEventListener("click", select);
  card.addEventListener("keydown", e => { if (e.key === "Enter") select(); });
  packageGrid.appendChild(card);
});

/* ---------------- ENQUIRY FORM ---------------- */
const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");

enquiryForm.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(enquiryForm);
  const name = data.get("name") || "";
  const business = data.get("business") || "";
  const phone = data.get("phone") || "";
  const email = data.get("email") || "";
  const service = data.get("service") || "";
  const pkg = data.get("package") || "";
  const message = data.get("message") || "";

  const lines = [
    "Hi Digitech Solutions, I'd like to enquire about your services.",
    `Name: ${name}`,
    `Business: ${business}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service}`,
    pkg ? `Package: ${pkg}` : null,
    message ? `Message: ${message}` : null
  ].filter(Boolean).join("\n");

  window.open(waLink(lines), "_blank", "noopener");
  formStatus.textContent = "WhatsApp should now be open with your enquiry ready to send.";
});

/* ---------------- SIDEBAR NAVIGATION ---------------- */
const menuToggle = document.getElementById("menuToggle");
const sideNav = document.getElementById("sideNav");
const sideNavOverlay = document.getElementById("sideNavOverlay");
const sideNavClose = document.getElementById("sideNavClose");

function openSideNav(){
  sideNav.classList.add("open");
  sideNavOverlay.classList.add("show");
  sideNav.setAttribute("aria-hidden", "false");
  menuToggle.setAttribute("aria-expanded", "true");
}
function closeSideNav(){
  sideNav.classList.remove("open");
  sideNavOverlay.classList.remove("show");
  sideNav.setAttribute("aria-hidden", "true");
  menuToggle.setAttribute("aria-expanded", "false");
}
menuToggle.addEventListener("click", () => {
  sideNav.classList.contains("open") ? closeSideNav() : openSideNav();
});
sideNavClose.addEventListener("click", closeSideNav);
sideNavOverlay.addEventListener("click", closeSideNav);

const navLinks = document.querySelectorAll(".side-nav-list a, .top-cta");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    closeSideNav();
    const target = document.getElementById(link.dataset.section);
    if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 150);
  });
});

const sectionIds = ["home","about","services","work","tools","packages","enquiry"];
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

function updateActiveNav(){
  let current = sections[0];
  const scrollPos = window.scrollY + window.innerHeight * 0.3;
  sections.forEach(sec => { if (sec.offsetTop <= scrollPos) current = sec; });
  navLinks.forEach(link => link.classList.toggle("active", link.dataset.section === current.id));
}

/* ---------------- SINGLE SECTION TRAVEL BUTTON ---------------- */
const travelBtn = document.getElementById("travelBtn");
const travelIcon = document.getElementById("travelIcon");

function nearestSectionIndex(){
  const scrollPos = window.scrollY + 4;
  let idx = 0;
  sections.forEach((sec, i) => { if (sec.offsetTop <= scrollPos + window.innerHeight * 0.4) idx = i; });
  return idx;
}

function updateTravelButton(){
  const idx = nearestSectionIndex();
  const atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 4;
  if (idx >= sections.length - 1 || atBottom){
    travelIcon.innerHTML = '<path d="M6 15l6-6 6 6"/>';
    travelBtn.setAttribute("aria-label", "Go to previous section");
    travelBtn.dataset.dir = "up";
  } else {
    travelIcon.innerHTML = '<path d="M6 9l6 6 6-6"/>';
    travelBtn.setAttribute("aria-label", "Go to next section");
    travelBtn.dataset.dir = "down";
  }
}

travelBtn.addEventListener("click", () => {
  const idx = nearestSectionIndex();
  if (travelBtn.dataset.dir === "up"){
    const target = sections[Math.max(0, idx - 1)];
    target.scrollIntoView({ behavior: "smooth" });
  } else {
    const target = sections[Math.min(sections.length - 1, idx + 1)];
    target.scrollIntoView({ behavior: "smooth" });
  }
});

window.addEventListener("scroll", () => { updateActiveNav(); updateTravelButton(); }, { passive: true });
updateActiveNav();
updateTravelButton();

/* ---------------- HERO DASHBOARD GRAPHIC (SVG) ---------------- */
document.getElementById("dashboardGraphic").innerHTML = `
<svg viewBox="0 0 520 460" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative growth dashboard">
  <defs>
    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a2249"/>
      <stop offset="100%" stop-color="#131a3d"/>
    </linearGradient>
  </defs>

  <rect x="20" y="30" width="480" height="230" rx="18" fill="url(#panelGrad)" stroke="rgba(255,255,255,0.08)"/>
  <text x="44" y="64" fill="#7d86ad" font-family="Inter, sans-serif" font-size="12" letter-spacing="1">ILLUSTRATIVE GROWTH METRICS</text>

  <polyline points="44,210 100,180 150,195 200,140 250,160 300,110 350,130 400,80 450,95"
    fill="none" stroke="url(#lineGrad)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <animate attributeName="points"
      values="44,210 100,180 150,195 200,140 250,160 300,110 350,130 400,80 450,95;
              44,200 100,190 150,175 200,150 250,145 300,120 350,115 400,90 450,80;
              44,210 100,180 150,195 200,140 250,160 300,110 350,130 400,80 450,95"
      dur="7s" repeatCount="indefinite"/>
  </polyline>

  <circle cx="450" cy="95" r="5" fill="#a855f7">
    <animate attributeName="cy" values="95;80;95" dur="7s" repeatCount="indefinite"/>
  </circle>

  <g font-family="Inter, sans-serif">
    <rect x="44" y="90" width="120" height="52" rx="10" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.3)"/>
    <text x="58" y="112" fill="#b7bfdd" font-size="10">Engagement</text>
    <text x="58" y="132" fill="#ffffff" font-size="16" font-weight="700">▲ Trending up</text>

    <rect x="356" y="150" width="120" height="52" rx="10" fill="rgba(124,58,237,0.14)" stroke="rgba(124,58,237,0.3)"/>
    <text x="370" y="172" fill="#b7bfdd" font-size="10">Lead Flow</text>
    <text x="370" y="192" fill="#ffffff" font-size="16" font-weight="700">▲ Improving</text>
  </g>

  <g transform="translate(20,290)">
    <rect x="0" y="0" width="225" height="140" rx="16" fill="url(#panelGrad)" stroke="rgba(255,255,255,0.08)"/>
    <text x="20" y="30" fill="#7d86ad" font-family="Inter, sans-serif" font-size="11">SEARCH VISIBILITY</text>
    <rect x="20" y="46" width="185" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
    <rect x="20" y="46" width="140" height="8" rx="4" fill="url(#lineGrad)">
      <animate attributeName="width" values="90;150;120;150" dur="6s" repeatCount="indefinite"/>
    </rect>
    <text x="20" y="80" fill="#7d86ad" font-family="Inter, sans-serif" font-size="11">CAMPAIGN PERFORMANCE</text>
    <rect x="20" y="96" width="185" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
    <rect x="20" y="96" width="100" height="8" rx="4" fill="url(#lineGrad)">
      <animate attributeName="width" values="60;110;80;110" dur="5s" repeatCount="indefinite"/>
    </rect>
  </g>

  <g transform="translate(265,290)">
    <rect x="0" y="0" width="235" height="140" rx="16" fill="url(#panelGrad)" stroke="rgba(255,255,255,0.08)"/>
    <text x="20" y="30" fill="#7d86ad" font-family="Inter, sans-serif" font-size="11">CONVERSION INDICATORS</text>
    <g stroke="#3b82f6" stroke-width="2">
      <line x1="30" y1="110" x2="30" y2="70"><animate attributeName="y1" values="110;60;110" dur="4s" repeatCount="indefinite"/></line>
      <line x1="60" y1="110" x2="60" y2="55"><animate attributeName="y1" values="110;50;110" dur="4.5s" repeatCount="indefinite"/></line>
      <line x1="90" y1="110" x2="90" y2="80"><animate attributeName="y1" values="110;65;110" dur="5s" repeatCount="indefinite"/></line>
      <line x1="120" y1="110" x2="120" y2="45"><animate attributeName="y1" values="110;40;110" dur="4.2s" repeatCount="indefinite"/></line>
      <line x1="150" y1="110" x2="150" y2="60"><animate attributeName="y1" values="110;55;110" dur="4.8s" repeatCount="indefinite"/></line>
      <line x1="180" y1="110" x2="180" y2="40"><animate attributeName="y1" values="110;35;110" dur="5.2s" repeatCount="indefinite"/></line>
      <line x1="210" y1="110" x2="210" y2="65"><animate attributeName="y1" values="110;58;110" dur="4.6s" repeatCount="indefinite"/></line>
    </g>
  </g>
</svg>
`;

/* ---------------- AI COMMAND CENTER GRAPHIC (SVG) ---------------- */
const nodes = [
  { label: "Audience Insights", x: 90, y: 90 },
  { label: "Content", x: 430, y: 90 },
  { label: "Campaigns", x: 60, y: 260 },
  { label: "SEO", x: 460, y: 260 },
  { label: "Analytics", x: 130, y: 420 },
  { label: "Lead Generation", x: 390, y: 420 },
  { label: "Optimization", x: 260, y: 40 },
  { label: "Automation", x: 260, y: 470 }
];
const cx = 260, cy = 255;
const nodeLines = nodes.map((n, i) => `
  <line x1="${cx}" y1="${cy}" x2="${n.x}" y2="${n.y}" stroke="url(#aiLine)" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.55">
    <animate attributeName="stroke-dashoffset" values="0;-20" dur="${2 + i * 0.3}s" repeatCount="indefinite"/>
  </line>
  <circle cx="${n.x}" cy="${n.y}" r="4" fill="#a855f7">
    <animate attributeName="r" values="4;6;4" dur="${2.4 + i * 0.2}s" repeatCount="indefinite"/>
  </circle>
`).join("");
const nodeLabels = nodes.map(n => {
  const anchor = n.x < cx - 20 ? "start" : (n.x > cx + 20 ? "end" : "middle");
  const dx = n.x < cx - 20 ? 12 : (n.x > cx + 20 ? -12 : 0);
  return `<text x="${n.x + dx}" y="${n.y - 14}" text-anchor="${anchor}" fill="#dfe3f7" font-family="Space Grotesk, sans-serif" font-size="13" font-weight="600">${n.label}</text>`;
}).join("");

document.getElementById("aiGraphic").innerHTML = `
<svg viewBox="0 0 520 520" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI marketing command center diagram">
  <defs>
    <radialGradient id="aiCoreGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </radialGradient>
    <linearGradient id="aiLine" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  ${nodeLines}
  <circle cx="${cx}" cy="${cy}" r="58" fill="url(#aiCoreGrad)" opacity="0.22">
    <animate attributeName="r" values="58;66;58" dur="3.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="${cx}" cy="${cy}" r="42" fill="url(#aiCoreGrad)"/>
  <text x="${cx}" y="${cy + 7}" text-anchor="middle" fill="#ffffff" font-family="Space Grotesk, sans-serif" font-size="20" font-weight="700">AI</text>
  ${nodeLabels}
</svg>
`;
