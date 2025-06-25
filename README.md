# Chat App

Welcome to the Chat App! This is a modern, real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js), Socket.io, TailwindCSS, and DaisyUI. It supports secure authentication (including Google login), real-time messaging, online status, and a clean, responsive UI.

---

## 🚀 Features

- **Modern Tech Stack:** MERN (MongoDB, Express, React, Node.js), Socket.io, TailwindCSS, DaisyUI
- **Authentication:**
  - JWT-based login/signup
  - Google OAuth login (popup, no page reload!)
- **Real-Time Messaging:**
  - Instant message delivery
  - Online/offline user status
- **User Experience:**
  - Profile pictures (auto-generated or from Google)
  - Gender selection on signup
  - Clean, mobile-friendly UI
- **Other:**
  - Logout, error handling, and more

---

## 🗂️ Folder Structure

```
chat-app/
├── backend/      # Node.js/Express API & Socket.io
├── frontend/     # React app (Vite, TailwindCSS)
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend root:

```
PORT=5000
MONGO_DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

---

## 🛠️ Setup & Installation

1. **Install dependencies and build frontend:**
   ```sh
   npm run build
   ```
2. **Configure environment variables** as above.
3. **Run the backend server:**
   ```sh
   npm run server
   ```
4. **For production:**
   ```sh
   npm start
   ```

---

## 💡 Usage

- **Signup/Login:** Register with username/password or use Google login (popup window).
- **Messaging:** Select a conversation and send real-time messages.
- **Online Status:** See which users are online in the sidebar.
- **Logout:** Securely log out and clear your session.

---

## 🔑 Google OAuth Flow (How Google Login Works)

- Click **"Login with Google"** on the login page.
- A popup window opens for Google authentication.
- After you log in, the backend sends your user info to the main app using `window.opener.postMessage`.
- The main app receives your info, logs you in, and closes the popup. No page reload!

---

## 🧑‍💻 Tech Stack

- **Frontend:** React, Zustand, TailwindCSS, DaisyUI, Vite
- **Backend:** Node.js, Express, MongoDB (Mongoose), Socket.io, Passport.js (Google OAuth)
- **State Management:** Zustand, React Context
- **Authentication:** JWT (HTTP-only cookies), Google OAuth
- **Real-time:** Socket.io

---

## 📜 Scripts

- `npm run build` - Install all dependencies and build the frontend
- `npm run server` - Start the backend server with nodemon (development)
- `npm start` - Start the backend server (production)

---

MIT License
