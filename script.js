const projectData = {
  eks: {
    title: "AWS EKS Platform",
    text: "A Terraform-first Kubernetes platform blueprint focused on repeatable networking, EKS, IAM, ECR, workload deployment and operational visibility.",
    items: [["Infrastructure","Terraform + AWS VPC"],["Platform","Amazon EKS"],["Delivery","Container + Kubernetes deployment"],["Security","IAM + least-privilege patterns"]]
  },
  terraform: {
    title: "Terraform AWS Infrastructure",
    text: "Reusable infrastructure examples covering common AWS building blocks and environment separation.",
    items: [["Network","VPC, subnets, routing"],["Compute","EC2 and supporting resources"],["Storage","S3 patterns"],["Data","RDS examples"]]
  },
  cicd: {
    title: "CI/CD Engineering Lab",
    text: "A practical delivery lab showing source-to-deployment automation using GitHub Actions, Docker, ECR and AWS delivery services.",
    items: [["Source","GitHub"],["Build","Docker + CI"],["Registry","Amazon ECR"],["Deploy","Automated delivery"]]
  },
  security: {
    title: "Cloud Security Lab",
    text: "A practical cloud-security learning lab covering identity, encryption, edge controls and AWS security services.",
    items: [["Identity","IAM"],["Encryption","KMS + secrets"],["Edge","WAF"],["Detection","GuardDuty + Security Hub + Inspector"]]
  }
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

$("#year").textContent = new Date().getFullYear();

function updateClock(){
  const d = new Date();
  $("#terminalTime").textContent = d.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit",second:"2-digit"});
}
updateClock();
setInterval(updateClock, 1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
$$(".reveal").forEach(el => observer.observe(el));

const nav = $("#nav");
$("#menuBtn").addEventListener("click", () => nav.classList.toggle("open"));
$$(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const modal = $("#projectModal");
const modalTitle = $("#modalTitle");
const modalText = $("#modalText");
const modalGrid = $("#modalGrid");

$$(".project-card").forEach(card => {
  card.querySelector(".blueprint").addEventListener("click", () => {
    const data = projectData[card.dataset.project];
    modalTitle.textContent = data.title;
    modalText.textContent = data.text;
    modalGrid.innerHTML = data.items.map(item => `<div><strong>${item[0]}</strong><span>${item[1]}</span></div>`).join("");
    modal.showModal();
  });
});
$("#modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if(e.target === modal) modal.close(); });

const sections = [...$$("main section[id]")];
const navLinks = [...$$(".nav a")];
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s => navObserver.observe(s));

const canvas = $("#particles");
const ctx = canvas.getContext("2d");
let particles = [];
function resizeCanvas(){
  canvas.width = innerWidth * devicePixelRatio;
  canvas.height = innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  particles = Array.from({length: Math.min(85, Math.floor(innerWidth/15))}, () => ({
    x: Math.random()*innerWidth,
    y: Math.random()*innerHeight,
    r: Math.random()*1.5+.3,
    vx:(Math.random()-.5)*.18,
    vy:(Math.random()-.5)*.18,
    a:Math.random()*.55+.1
  }));
}
function draw(){
  ctx.clearRect(0,0,innerWidth,innerHeight);
  particles.forEach(p=>{
    p.x += p.vx; p.y += p.vy;
    if(p.x<0)p.x=innerWidth;if(p.x>innerWidth)p.x=0;
    if(p.y<0)p.y=innerHeight;if(p.y>innerHeight)p.y=0;
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(70,210,255,${p.a})`;ctx.fill();
  });
  requestAnimationFrame(draw);
}
resizeCanvas(); addEventListener("resize",resizeCanvas); draw();

let light = false;
$("#themeToggle").addEventListener("click",()=>{
  light=!light;
  document.documentElement.style.setProperty("--bg", light ? "#07121d" : "#040811");
  document.documentElement.style.setProperty("--panel", light ? "#0c1a27" : "#07101d");
  $("#themeToggle").textContent = light ? "☀" : "◐";
});

// Logo fallback: keep the dashboard readable if an external icon CDN is unavailable.
document.querySelectorAll("img[src*='cdn.simpleicons.org']").forEach(img => {
  img.addEventListener("error", () => {
    const fallback = document.createElement("span");
    fallback.className = "logo-fallback";
    fallback.textContent = img.alt || "•";
    img.replaceWith(fallback);
  }, {once:true});
});
