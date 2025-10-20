# 🚀 Irene Myronova — Portfolio & Blog

Welcome to my personal portfolio & blog!
This project is built with Next.js 14, Tailwind CSS, Framer Motion, and Decap CMS, and deployed on Netlify.


## 🔗 Live demo → (https://irenemyronova.netlify.app/)


## ✨ Features

- 🛠️ **Next.js 14** — modern React framework with App Router
- 🎨 **Tailwind CSS** — utility-first styling for fast UI building
- 🎞️ **Framer Motion** — smooth page transitions and animations
- 📝 **Decap CMS** — easy blog & content management via Git-based CMS
- 🌗 **Dark/Light Mode** — automatic theme switching based on user system
- 🖼️ **Optimized Images** — served from `/public` for performance


## 📂 Portfolio + Blog — showcase projects and publish posts in one place


## 📦 Tech Stack

- Framework: Next.js 14
- Styling: Tailwind CSS
- Animations: Framer Motion
- CMS: Decap CMS
 (via Git Gateway + Netlify Identity)
- Deployment: Netlify


## 🚀 Getting Started

1. **Clone the repository**:

 ```bash
git clone https://github.com/Irene-IT/ireneM.git
cd ireneM
 ```

2. **Install dependencies:**

 ```bash
   npm install
```

3. **Run the development server:**

 ```bash
   npm run dev
```

👉 Open http://localhost:3000

4. **Build for production:**

 ```bash
   npm run build
   npm run start
```


## 🖋️ Content Management

Admin panel available at `/admin`
Managed with Decap CMS connected to GitHub repo
Content (posts, pages, media) stored in `/content` and `/public`
Configurations in `public/admin/config.yml`
To test locally, set local_backend: true inside `config.yml`


## 📂 Project Structure
```
/
├── app/             # Next.js App Router (pages & layouts)
├── components/      # Reusable UI components
├── public/          # Static files (images, media, fonts)
├── styles/          # Tailwind + global styles
├── content/         # Blog posts & CMS-managed files
├── package.json     # Dependencies & scripts
└── README.md        # Documentation
```


## 🔑 Deployment & Identity

Deployed on Netlify with:
Continuous deployment from GitHub main branch
Netlify Identity + Git Gateway for CMS authentication
Decap CMS dashboard at /admin


## 📄 License

Licensed under the MIT License.
Original template modified and customized by Irene Myronova.


## 🙌 Acknowledgments

Thanks to the open-source community behind:
Next.js
Tailwind CSS
Framer Motion
Decap CMS

