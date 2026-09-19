const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.querySelector(".modal-close");

const projectData = {
  eks: {
    title: "AWS EKS Platform",
    body: "A production-inspired platform project. The public repository should contain the infrastructure code, architecture, deployment documentation and safe operational examples.",
    code: `Terraform
  ├─ VPC / networking
  ├─ EKS cluster
  ├─ IAM / access
  └─ supporting services

Kubernetes
  ├─ namespaces
  ├─ workloads
  ├─ services / ingress
  └─ observability

Evidence
  ├─ architecture
  ├─ validation
  └─ cleanup`
  },
  terraform: {
    title: "Terraform AWS Infrastructure",
    body: "Reusable infrastructure examples designed around clear module boundaries, environment inputs, security controls and lifecycle documentation.",
    code: `terraform/
  ├─ modules/
  │  ├─ network/
  │  ├─ compute/
  │  └─ security/
  ├─ environments/
  └─ README.md`
  },
  cicd: {
    title: "CI/CD Engineering Lab",
    body: "A source-to-deployment workflow demonstrating validation, build, containerization, registry publishing and deployment concepts.",
    code: `git push
   ↓
validate → test → build
   ↓
docker build
   ↓
ECR
   ↓
Kubernetes / EKS
   ↓
observe → validate`
  },
  k8s: {
    title: "Kubernetes Troubleshooting Lab",
    body: "A reproducible incident library. Each scenario should explain the symptom, commands used to collect evidence, root cause, resolution and prevention.",
    code: `failure
  ↓
kubectl get / describe / logs
  ↓
events + resources
  ↓
dependency isolation
  ↓
root cause
  ↓
fix + validation`
  },
  security: {
    title: "Cloud Security Lab",
    body: "Safe demonstrations of IAM, encryption, perimeter controls, detection and vulnerability-management workflows without real credentials or customer data.",
    code: `identity → IAM
secrets  → Secrets Manager
crypto   → KMS
edge     → WAF
detect   → GuardDuty
posture  → Security Hub
vuln     → Inspector`
  }
};

document.querySelectorAll("[data-modal]").forEach(button => {
  button.addEventListener("click", () => {
    const p = projectData[button.dataset.modal];
    modalContent.innerHTML = `<div class="eyebrow">ENGINEERING BLUEPRINT</div><h2>${p.title}</h2><p>${p.body}</p><pre class="modal-code">${p.code}</pre><p><strong>Public status:</strong> planned until the repository is actually implemented and published.</p>`;
    modal.showModal();
  });
});

closeBtn.addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });
document.getElementById("year").textContent = new Date().getFullYear();
