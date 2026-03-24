# 🚀 Deployment Guide: Zurinty (Nairobi Digital Marketing Agency)

This guide provides step-by-step instructions for deploying your React + Node.js application to **Hostinger**.

## 🏗️ Step 1: Local Preparation (Building the Frontend)
Before uploading, you must generate the production version of your frontend so the backend can serve it.

1. Open your terminal in the `frontend/` directory.
2. Run the build command:
   ```bash
   pnpm build
   ```
3. **Verify:** Check that the `backend/public/` folder now contains `index.html` and an `assets/` folder. This is your "Deployable Package."

---

## 📦 Step 2: Preparing the Upload Bundle
You only need to upload the contents of the `backend/` folder. 

**DO NOT UPLOAD:**
- `frontend/` (source code is not needed on the server)
- `backend/node_modules/` (Hostinger will install these for you)
- `backend/.env` (You will create a fresh one on the server)

**What to Upload:**
- `controllers/`
- `db/`
- `models/`
- `routes/`
- `utils/`
- `public/` (This is your built frontend)
- `server.js`
- `package.json`
- `pnpm-lock.yaml` (if present)

---

## 🌐 Step 3: Hostinger Node.js Configuration (hPanel)
1. Log in to your Hostinger hPanel.
2. Navigate to **Websites > Manage > Advanced > Node.js**.
3. **Node.js Version:** Select **20.x** (recommended for React 19).
4. **Project Root:** Select the directory where you uploaded the files.
5. **Application Mode:** Set to **Production**.
6. **Application Startup File:** Set to `server.js`.
7. Click **Save Changes**.
8. Once saved, click the **"NPM Install"** button to install the backend dependencies.

---

## 🗄️ Step 4: Database Setup
1. In hPanel, go to **Databases > MySQL Databases**.
2. Create a new database and user (e.g., `u123_zurintydb`).
3. Note down the **Database Name**, **Username**, and **Password**.
4. In your File Manager, create a file named `.env` inside your Node.js project root.
5. Paste the following template and update it with your Hostinger details:

   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=u123_your_username
   DB_PASS=your_strong_password
   DB_NAME=u123_your_database_name
   
   # For Gmail SMTP
   EMAIL_USER=mejoarwachira@gmail.com
   EMAIL_PASS=vrdtlfgpboicrfkc
   SMTP_HOST=smtp.gmail.com
   ```

---

## 🔒 Step 5: SSL & Domain
1. Ensure your domain `zurinty.com` has an active **SSL Certificate** (Free SSL is included in most Hostinger plans).
2. If you are using a subdomain like `api.zurinty.com`, ensure it is pointed to the same directory or handled via Hostinger's Node.js selector.
3. Your `backend/server.js` is already configured to allow `https://zurinty.com` via CORS.

---

## 🛠️ Step 6: Final Verification
1. Once the setup is complete, restart the Node.js application from the dashboard.
2. Visit `https://zurinty.com` in your browser.
3. **Test the Contact Form:** Submit a test message to ensure the database saves the entry and the auto-subscription email is sent correctly.

## 💡 Pro Tip: Updates
Whenever you make changes to the frontend:
1. Run `pnpm build` locally.
2. Only upload the new files inside `backend/public/assets/`.
3. You usually don't need to restart the server for frontend-only updates.

---
*Guide generated for Zurinty Project - March 2026*
