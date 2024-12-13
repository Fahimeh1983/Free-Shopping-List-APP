// Fetch items for a selected shopping place
function getItems(place) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Shopping List");
        if (!sheet) return [];
        const data = sheet.getDataRange().getValues();

        // Filter only active items for the selected place
        return data
            .filter(row => row[0] === place && row[3] !== 'inactive') // Exclude inactive items
            .map(row => row[1]); // Return only item names
    } catch (error) {
        console.error("Error in getItems:", error);
        return [];
    }
}


// Add a new item to the shopping list
function addItem(place, item) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Shopping List");
        const data = sheet.getDataRange().getValues();

        for (let i = 0; i < data.length; i++) {
            if (data[i][0] === place && data[i][1] === item) {
                const frequencyCell = sheet.getRange(i + 1, 3); // Frequency column
                const statusCell = sheet.getRange(i + 1, 4); // Status column

                if (statusCell.getValue() === 'inactive') {
                    // Reactivate the item and increment frequency
                    statusCell.setValue(''); // Clear inactive status
                    frequencyCell.setValue((frequencyCell.getValue() || 0) + 1);
                    return { status: "reactivated" };
                } else {
                    // Item is already active, do not increment frequency
                    return { status: "exists" };
                }
            }
        }

        // If the item does not exist, add it with frequency 1
        sheet.appendRow([place, item, 1, '']); // New item is active
        return { status: "success" };
    } catch (error) {
        console.error("Error in addItem:", error);
        return { status: "error" };
    }
}


function getPopularItems(place) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Shopping List");
        if (!sheet) return [];
        const data = sheet.getDataRange().getValues();

        // Create a map to aggregate frequencies for duplicates
        const frequencyMap = {};

        data.forEach(row => {
            if (row[0] === place) {
                const item = row[1];
                const frequency = row[2] || 0;

                if (frequency > 0) { // Include only items with frequency > 0
                    if (frequencyMap[item]) {
                        frequencyMap[item] += frequency; // Aggregate frequency
                    } else {
                        frequencyMap[item] = frequency;
                    }
                }
            }
        });

        // Convert the map into an array of popular items
        const popularItems = Object.keys(frequencyMap)
            .map(item => ({ item, frequency: frequencyMap[item] }))
            .sort((a, b) => b.frequency - a.frequency); // Sort by frequency in descending order

        return popularItems; // Return all popular items
    } catch (error) {
        console.error("Error in getPopularItems:", error);
        return [];
    }
}


// Delete an item from the shopping list
function deleteItem(place, item) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Shopping List");
        const data = sheet.getDataRange().getValues();

        for (let i = 0; i < data.length; i++) {
            if (data[i][0] === place && data[i][1] === item) {
                // Mark the item as removed from the active list by adding a flag (e.g., 'inactive')
                sheet.getRange(i + 1, 4).setValue('inactive'); // Add an "inactive" flag in column 4
                return { status: "success" };
            }
        }

        return { status: "not_found" };
    } catch (error) {
        console.error("Error in deleteItem:", error);
        return { status: "error" };
    }
}

function deletePopularItem(place, item) {
    try {
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Shopping List");
        const data = sheet.getDataRange().getValues();

        for (let i = 0; i < data.length; i++) {
            if (data[i][0] === place && data[i][1] === item) {
                const frequencyCell = sheet.getRange(i + 1, 3); // Frequency column

                // Remove item from the popular list
                frequencyCell.setValue(0); // Reset frequency to 0
                return { status: "success" };
            }
        }

        return { status: "not_found" }; // Item not found in the popular list
    } catch (error) {
        console.error("Error in deletePopularItem:", error);
        return { status: "error" };
    }
}


// Serve the HTML file
function doGet() {
    return HtmlService.createHtmlOutputFromFile("Index")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
