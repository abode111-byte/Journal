# Trading Journal — Multi-Device Sync

A beautiful trading journal app with real-time sync across all your devices (phone, tablet, desktop).

## Features

- 📅 Interactive calendar view
- 📝 Add/edit trade notes
- ✅ Mark trades as Win/Loss
- 📊 Monthly statistics
- 🔄 **Real-time sync across devices** (via Firebase)
- 📱 Fully responsive design

## Setup Instructions

### Option 1: With Cloud Sync (Recommended)

To sync data across devices, you need to set up Firebase:

1. **Create a Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add Project"
   - Enter a project name (e.g., "Trading Journal")
   - Complete the setup

2. **Get Your Firebase Credentials:**
   - In Firebase Console, go to Project Settings (⚙️ icon)
   - Under "Your apps", click "Add app" → Web
   - Copy the config object

3. **Update `firebase-config.js`:**
   - Open `firebase-config.js` in this folder
   - Replace the placeholder values with your Firebase credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Enable Realtime Database:**
   - In Firebase Console, go to "Realtime Database"
   - Click "Create Database"
   - Choose "Start in test mode" (for development)
   - Click "Enable"

5. **Open `index.html` in your browser** and start using!

### Option 2: Local Only (No Sync)

If you don't want to set up Firebase, the app will work locally using browser storage. Just open `index.html` in your browser. Data will only be saved on that device.

## Usage

1. **Click a date** on the calendar to select it
2. **Add notes** about your trade (setup, plan, result, P/L, etc.)
3. **Mark as Win or Loss** to track your performance
4. **Click Save Entry** to save
5. **View all entries** in the "Saved Entries" panel on the right

## Deployment

To make your journal accessible from anywhere:

### Deploy to Netlify (Free)

1. Push this folder to GitHub (already done!)
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub account and select the "Journal" repository
5. Click "Deploy"

Your app will be live at a URL like `https://your-journal.netlify.app`

### Deploy to GitHub Pages (Free)

1. Go to your repository settings
2. Scroll to "GitHub Pages"
3. Select "main" branch as source
4. Your app will be live at `https://yourusername.github.io/Journal`

## Notes

- All data is stored in your browser's local storage or Firebase
- No personal information is collected
- Your trades are private (only you can access them with your unique user ID)
- Works offline (if using localStorage)

## Troubleshooting

**Data not syncing across devices?**
- Make sure Firebase is properly configured in `firebase-config.js`
- Check browser console (F12) for errors
- Ensure you're using the same browser/account

**Data lost after refresh?**
- Check if Firebase is connected (console should show "Firebase connection: Online")
- If offline, data is saved locally and will sync when back online

---

Enjoy tracking your trades! 📈
