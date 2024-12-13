# Shopping List Manager

A free Google app that helps you manage your shopping lists seamlessly. With this app, you can:

- Create separate shopping lists for different stores.
- Keep track of popular items and easily reuse them for future shopping.
- Automatically remove items from your list as you check them off.
- Customize the app to suit your needs, including adding your favorite stores.

---

## Features

- **Multiple Shopping Lists**: Separate lists for each store you shop at.
- **Popular Items Tracking**: Tracks frequently added items for easier list creation.
- **Interactive and Mobile-Friendly**: Designed to work smoothly on phones.
- **Customizable**: Add or edit default stores to suit your preferences.

---

## Setup Instructions

### Step 1: Set Up Your Google Sheet
1. Open your **Google Sheets** and create a new sheet.
2. Name the file **"Shopping List"**.
3. Rename the default sheet tab ("Sheet 1") at the bottom to **"Shopping List"**.

### Step 2: Add the Code
1. Go to **Extensions > Apps Script** in the Google Sheet menu.
2. Create two files in the Apps Script editor:
   - **Code.gs**: Copy and paste the content of `Code.gs` from this repository.
   - **Index.html**: Copy and paste the content of `Index.html` from this repository.
3. Ensure the file names match exactly: `Code.gs` and `Index.html`.

### Step 3: Deploy the Web App
1. In the Apps Script editor, click the **Deploy** button at the top-right and choose **New Deployment**.
2. Under **Select type**, choose **Web app**.
3. Configure the deployment settings:
   - **Execute as**: Choose "Me" or "User accessing the web app."
   - **Who has access**: Choose "Anyone with Google Account."
4. Click **Deploy** and grant the necessary permissions.

---

## How to Use the App

1. Open the deployment link of your web app.
2. Add new items to your shopping list.
3. Check off items to remove them from the list automatically.
4. Add popular items with a single click from the **Popular Items** section.

---

## Customizing the App

To add or modify stores:
1. Open the **Apps Script editor**.
2. In `Index.html`, find the line:
   ```javascript
   shoppingPlaces = ["Trader Joe's", "QFC", "Costco", "Rose", "Farmers Market", "Fred Meyer", "Others"];
