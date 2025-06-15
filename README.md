<div align="center">
   <img src="./icon/bulk-actions.png" alt="Extension Icon" width="120" style="margin-bottom: 0.5rem;" />

   <h1 style="margin: -0.5rem 0;">ChatGPT Bulk Actions Extension</h1>

   <p><em>Because ChatGPT still doesn't let you archive or delete multiple chats at once — so here we are.</em></p>

</div>

---

<div align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/Built%20with-JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=white">
  <img alt="Chrome Extension" src="https://img.shields.io/badge/Chrome-Extension-4285F4?style=plastic&logo=googlechrome&logoColor=FDBE33">
  <a href="https://itznotabug.dev" target="_blank">
    <img alt="Made by @ItzNotABug" src="https://img.shields.io/badge/Made%20by-@ItzNotABug-8e44ad?style=plastic&logo=github&logoColor=white">
  </a>
</div>

## 📸 Screenshots

<div align="center">
  <img src="./screenshots/screenshot-1.png" alt="Actions Panel" width="45%" style="margin: 0 1%; border-radius: 12px;" />
  <img src="./screenshots/screenshot-2.png" alt="Selection Mode UI" width="45%" style="margin: 0 1%; border-radius: 12px;" />
</div>

## 🔧 Installation

1. **Download & Unzip**  
   Grab this repo and unzip it somewhere.


2. **Load the Extension**
    - Open `chrome://extensions`, and click **“Load Unpacked”**.
    - Select the folder you just unzipped.


3. **Done**  
   Head to [ChatGPT](https://chatgpt.com) and start bulk selecting from the sidebar.

## ✨ Features

- Toggle selection mode
- Select multiple chats
- Archive or delete selected chats in one go
- Get Chrome native notifications for results

## ⚠️ Technical Note

This extension works by injecting UI elements directly into ChatGPT's sidebar using DOM manipulation.  
While not the cleanest method, it’s fast, reliable, and gets the job done, for now — until OpenAI adds native support.

---

This exists because "eventually" isn't a product roadmap.
