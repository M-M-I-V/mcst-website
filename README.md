# Mandaluyong College of Science and Technology Official Website

This is the official website of **Mandaluyong College of Science and Technology**.  
It was developed using a modern front-end tech stack, and is designed for clarity, responsiveness, and maintainability.

---

## 🛠 Tech Stack

- **React + TypeScript** – Component-based UI development with static typing  
- **Vite** – Fast development and build tool  
- **Tailwind CSS** – Utility-first CSS framework  
- **Shadcn UI** – Accessible, headless UI components  
- **AOS (Animate on Scroll)** – Smooth scroll-based animations  
- **Git + GitHub** – Version control and deployment  

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/mcst-website.git
cd mcst-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run in Development Mode

```bash
npm run dev
```

Then open your browser and go to [http://localhost:5173](http://localhost:5173)

---

### 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

---

## 🌐 Deployment & Setup on Windows

You can set up the project in two ways:

---

### ✅ Option 1: `git clone` (Recommended)

Best for development — full Git tracking.

#### 📌 Initial Setup (Run Once)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --list  # optional: verify config
```

#### 🚀 Clone the Project

```bash
cd /c/Users/YourName/Documents
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

You're ready to use:

```bash
git pull
git add .
git commit -m "Your message"
git push origin main  # or master
```

---

### ⚠️ Option 2: Download ZIP

Good for viewing only — not ideal for development.

Steps:

1. Go to your GitHub repository  
2. Click **Code > Download ZIP**  
3. Extract the ZIP on your machine  

To enable Git tracking later:

```bash
git init
git remote add origin https://github.com/your-username/your-repo.git
```

---

## 🔀 If You Forked the Repo

### ✅ Fork + Clone (Recommended)

1. Fork the repo on GitHub  
2. Clone your fork:

```bash
git clone https://github.com/your-username/the-repo.git
cd the-repo
```

You're now ready to commit and push:

```bash
git add .
git commit -m "Changes"
git push origin main
```

### ❌ Fork + Download ZIP

Just a code snapshot — no Git tracking.

To track changes manually:

```bash
git init
git remote add origin https://github.com/your-username/the-repo.git
```

---

## 👨‍🔧 Maintenance Guide

To update website content:

- Modify files in `src/pages/` for each page (e.g., About, Admission, Programs, etc.)  
- Edit `src/components/` for reusable elements like the header, footer, and CTA

To apply changes:

```bash
npm run build
```

Then redeploy the contents of the `dist/` folder.

---

## 🤝 Acknowledgments

This project was created and maintained by **Neil Jay Lacandazo**,  
BS Information Systems student, as a contribution to the MCST community.

---

## 📞 Contact

For questions, technical assistance, or handover support:

**Neil Jay Lacandazo**  
📧 Email: neiljay.lacandazo@mcst.edu.ph