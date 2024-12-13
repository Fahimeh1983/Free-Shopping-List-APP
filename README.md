# Free-Shopping-List-APP
This is a free Google app you can create to manage your shopping lists effortlessly. Most of us have multiple shopping lists for different stores, and after trying several other apps, I decided to build one myself.

Unlike other apps, this one allows you to set up separate lists for each store you shop from. It also keeps track of your popular items and suggests them the next time you create a list, making the process faster and more convenient. When you check off an item, it disappears from your current list automatically.

The only requirement is a Google account. In this guide, I’ll show you how to build this app for yourself and take control of your shopping experience!

## Step 1: Set Up Your Google Sheet
1. Log in to your Google account and open Google Sheets.
2. Create a new Google Sheet and name it "Shopping List":
   - Click on the title at the top-left corner and type "Shopping List."
3. At the bottom of the sheet, where tabs are located, rename the default tab ("Sheet 1") to "Shopping List":
   - Right-click on the "Sheet 1" tab.
   - Select "Rename" and type "Shopping List".
💡 Note:Alternatievly you can download the google sheet from this repo

## Step 2: Add the Backend and Frontend Code
1. Open the Shopping List Google Sheet you created in Step 1.

2. Click on Extensions in the top menu and select Apps Script.

3. In the Apps Script editor:

   - On the left, click the + icon next to Files to create a new file.
   - Name this file Code.gs.
   - Delete any existing content in the editor and paste the content of Code.gs from the provided repository.
4. Next, create another file:

   - Click the + icon again next to Files.
   - Name this file Index.html.
   - Delete any existing content in the editor and paste the content of Index.html from the provided repository.
Important Notes:

Ensure both files are named exactly as instructed: Code.gs and Index.html

## Step 3: Deploy the Web App
1. In the Apps Script editor, click on the Deploy button at the top-right corner of the page and select New Deployment.

2. In the Select type section:

   - Click on the gear icon next to "Select type" and choose Web app.
3. Configure the deployment settings:

   - Execute as: Choose one of the following:
      - "Me": If you want the app to run with your permissions.
      - "User accessing the web app": If you want users to interact with the app using their own Google account permissions (recommended if sharing with family or others).
   - Who has access: Select who can access your web app:
      - "Anyone with Google Account": Allows anyone with a Google account to use the app (recommended for easy sharing).
4. Click Deploy to publish your app.
