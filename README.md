<div align="center">

# 🏗️ Arkin Spaces – Architecture Portfolio Website

Modern architectural portfolio website with EmailJS-powered contact form integration.

![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![EmailJS](https://img.shields.io/badge/EmailJS-Client%20Side-orange)
![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-Portfolio-lightgrey)

</div>

---

## 🚀 Overview

Arkin Spaces is a professional architecture portfolio website designed to:

- Showcase architectural projects
- Present company details
- Allow potential clients to submit project inquiries
- Send form submissions directly to email using EmailJS (no backend required)

This project demonstrates frontend development, API integration, deployment readiness, and professional UI structuring.

---

## ✨ Key Features

✔️ Fully Responsive Design  
✔️ Modern UI Layout  
✔️ EmailJS Contact Form Integration  
✔️ Real-time Email Notifications  
✔️ Environment Variable Configuration  
✔️ Deployment Ready  

---

## 🛠️ Tech Stack

- React (Vite / CRA)
- EmailJS
- CSS
- Node.js
- Git & GitHub

---

## 📂 Project Structure

```
arkin-spaces/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Run Locally

### 1️⃣ Prerequisites

- Node.js (v16 or above)
- npm

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a file in root:

```
.env
```

Add:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

⚠️ Do NOT upload `.env` to GitHub.

Make sure `.gitignore` contains:

```
node_modules/
build/
.env
```

---

### 4️⃣ Start Development Server

```bash
npm run dev
```

App runs at:

```
http://localhost:3000
```

---

## 📧 EmailJS Integration

The contact form sends:

- Name
- Email
- Phone
- Message

Directly to your configured business email using EmailJS client-side SDK.

Configuration Required:

- Service ID
- Template ID
- Public Key

---

## 🔒 Security Notes

- API keys stored in environment variables
- `.env` excluded from repository
- No backend required
- No database exposed

---

## 📈 Future Improvements

- Admin dashboard for inquiries
- Form validation enhancements
- Email auto-reply to clients
- Project CMS integration
- Hosting analytics

---

## 👤 Author

**Disha Raj**  
Engineering Student | Frontend Developer  

---

## 📜 License

This project is created for portfolio and educational purposes.

---

<div align="center">

⭐ If you found this project useful, consider giving it a star!

</div>
