# MCST Official Website

This is the official website of **Mandaluyong College of Science and Technology (MCST)**. It was developed using a modern front-end tech stack, and is designed for clarity, responsiveness, and maintainability.

---

## 🛠 Tech Stack

- **React + TypeScript** – Component-based UI development with static typing
- **Vite** – Fast development and build tool
- **Tailwind CSS** – Utility-first CSS framework
- **Shadcn UI** – Accessible, headless UI components
- **AOS (Animate on Scroll)** – Smooth scroll-based animations
- **Git + GitHub** – Version control and deployment

---

## 📁 Project Structure

mcst-website/ ├── public/ │   ├── images/               # Static image assets used across pages │   └── 404.html              # Custom 404 page for broken links ├── src/ │   ├── components/           # Reusable UI components (header, footer, etc.) │   ├── lib/                  # Utility functions │   ├── pages/                # Top-level pages of the website │   ├── types/                # Type declarations (e.g. for AOS) │   ├── App.tsx               # Root component │   ├── index.css             # Global styles │   ├── main.tsx              # App entry point │   └── vite-env.d.ts         # Vite environment types ├── .gitignore ├── components.json           # UI configuration (for shadcn or custom tooling) ├── deploy.sh                 # Optional script for deployment ├── eslint.config.js          # ESLint configuration ├── index.html                # HTML entry point for Vite ├── package.json              # Project metadata and scripts ├── package-lock.json         # Lock file for dependencies ├── tailwind.config.js        # Tailwind customization ├── tsconfig.app.json         # TypeScript app configuration ├── tsconfig.json             # Global TypeScript config ├── tsconfig.node.json        # Node-specific TypeScript config ├── vite.config.ts            # Vite build and plugin configuration └── README.md                 # Project info and instructions

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/mcst-website.git
cd mcst-website

2. Install Dependencies

npm install

3. Run in Development Mode

npm run dev

Open your browser and navigate to http://localhost:5173.


---

🏗️ Build for Production

npm run build

The production-ready files will be generated in the dist/ folder.


---


## 🌐 Deployment & Setup on Windows

You can set up the project in two ways:

---

### ✅ Option 1: `git clone` (Recommended)

Best for development — full Git tracking.

#### 📌 Initial Setup

Open Git Bash and set your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

You can verify with:

git config --list

🚀 Clone the Project

1. Open Git Bash


2. Navigate to your folder:

cd /c/Users/YourName/Documents


3. Clone the repo:

git clone https://github.com/your-username/your-repo.git
cd your-repo



✅ You can now use:

git pull
git add .
git commit -m "Your message"
git push origin main  # or master


---

⚠️ Option 2: Download ZIP

Good for quick viewing — not for active development.

Steps:

1. Go to your GitHub repo


2. Click Code > Download ZIP


3. Extract the ZIP



If you want to use Git commands later:

git init
git remote add origin https://github.com/your-username/your-repo.git


---

🔀 If You Forked the Repo

✅ Fork + Clone (Recommended)

1. Fork the repo on GitHub


2. Clone your fork:

git clone https://github.com/your-username/the-repo.git
cd the-repo



You're ready to push:

git add .
git commit -m "Changes"
git push origin main


---

❌ Fork + Download ZIP

This gives you a code snapshot — no Git tracking. You’ll need to run:

git init
git remote add origin https://github.com/your-username/the-repo.git


---

👨‍🔧 Maintenance Guide

Update content by editing files inside:

src/pages/ – for individual pages like About, Admission, Programs, etc.

src/components/ – for shared components like Header, Footer, CTA, etc.


To reflect changes:

1. Run npm run build


2. Redeploy the contents of the dist/ folder


---

🤝 Acknowledgments

This project was created and maintained by Neil Jay Lacandazo, BS Information Systems student, as a contribution to the MCST community.


---

📞 Contact

For inquiries, technical assistance, or questions during the transition:

Neil Jay Lacandazo
Email: neiljay.lacandazo@mcst.edu.ph