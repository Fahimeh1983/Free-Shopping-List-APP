
# Shopping List Manager

This is a free Google app that you can build to manage your shopping lists. Usually, we have multiple shopping lists for different places we shop from. We have used several other apps in the past, but finally, I gave up and made one myself. 

This app, unlike other apps, has the capability to set up separate lists for separate stores you are going to. Also, it keeps track of popular items and suggests them the next time you are creating your list to choose from your past items. When you check an item, it will disappear from your list. The only thing you need is to have a Google account, and I show you here how to do the same for yourself.

<img src="https://github.com/user-attachments/assets/ad729bdb-b239-40a6-bd38-0375d50fcaee" alt="Description" >
<img src="https://github.com/user-attachments/assets/88194856-5096-4a55-8fb6-b340da6a87e9" alt="Description" width="300">
<img src="https://github.com/user-attachments/assets/ad67b4e9-b5c0-42ba-9f1d-85d448a5173e" alt="Description" width="300">

---

## Steps to Create the App

### Step 1: Set Up Your Google Sheet
1. Open your Google account and go to **Google Sheets**.
2. Create a new Google Sheet and call it **"Shopping List"**.
3. At the bottom of the Google Sheet, where you can have multiple tabs to add new sheets, rename the **"Sheet 1"** tab to **"Shopping List"**.
4. **Important**: Make sure to copy and paste these names exactly as written here.

---

### Step 2: Add the Backend and Frontend Code
1. On the Google Sheet, click on **Extensions** and then **Apps Script**.
2. You need to create two files here:
   - **Backend (Google Script)**:
     - Click on the **+** in front of the **Files** on the left corner of the page.
     - Name the file **Code.gs**.
     - Delete everything written inside the code editor, then copy and paste the content of `Code.gs` from this repository.
   - **Frontend (HTML)**:
     - Click on the **+** again in front of the **Files**.
     - Name this file **Index.html**.
     - Delete everything written inside the code editor, then copy and paste the content of `Index.html` from this repository.
3. **Important**: Ensure all file names are exactly as written here (`Code.gs` and `Index.html`).

---

### Step 3: Deploy the Web App
1. Click on the **Deploy** button at the top-right corner of the page and choose **New Deployment**.
2. In the **Select type** section, click on the icon in front of **"Select type"** and choose **Web app**.
3. For **"Execute as"**:
   - You can choose **"Me"** if you want the app to execute using your permissions.
   - Or, if you want to share it with family members, you can choose **"User accessing the web app"**.
4. For **"Who has access"**:
   - You can decide whom to share it with. I have it as **"Anyone with Google Account"**.
5. Click **Deploy**.

---

### Final Step: Test and Customize
1. After deploying, click on the deployment link and grant the necessary Google permissions to access the app.
2. You can now view and use your web app.
   - Add new items, check items to remove them from the list, and reuse popular items for future shopping.
   - By default, the app includes a few American grocery stores.
3. **To customize the stores**:
   - Open the `Index.html` file in the Apps Script editor.
   - Look for this line:
     ```javascript
     shoppingPlaces = ["Trader Joe's", "QFC", "Costco", "Rose", "Farmers Market", "Fred Meyer", "Others"];
     ```
   - Add your favorite stores by replacing the list, like this:
     ```javascript
     shoppingPlaces = ["Your Store 1", "Your Store 2", "Your Store 3"];
     ```
   - Save your changes and redeploy the app.

---

### Optional but a very cool Step: Add the App to Your Home Screen
To make the app even cooler and easier to access, you can add it directly to your phone's home screen. Here's how:

1. Open the web app link on your phone.
2. Tap the Share icon in your browser.
3. Scroll down and select "Add to Home Screen".
4. Choose a name for the app (e.g., "Shopping List") and confirm.
5. The app will now appear on your home screen, just like a regular app!
Now you can open it directly from your home screen without searching for the link every time.

