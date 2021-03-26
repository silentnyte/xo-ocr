# Crossout Item OCR

![Crossout Item OCR Image](https://i.imgur.com/z8NnyMK.png "Crossout Item OCR")

I started this project because I wanted to do some item data analysis and could not find a good up to date source of item data and no easy way to extract the data from the game. I did not want to go though the pains taking effort of manually entering all the data by hand. Enter Tesseract.js. This great litlle library was able to take screenshots of items (with a little pre-proccessing done by OpenCV) and extract the text. All that was left was parsing the text and adding it to a database.

## Instructions:

- **"PASTE ITEM CLIP HERE"**
This is where you paste your item screenshot. The screenshot should be cropped to the item window border. For best results the image should be taken a 1080p or around 500px wide.

- The image OCR will automatically begin and the form will fill out.

- When the item name has been parsed it will be looked up in **CrossoutDB** to determine "Category", "Faction", "Level", "Level Type" and "ID". *(If the item is not found in the database these input fields will need to be manually entered)*

- After the form is filled out any of the fields can be edited by hand to correct any OCR errors.

- Enter the "Crossout Version" the images was taken from.
  
- Enter "Author" so we know who to thank for scanning the item!

- When you are happy with the result click the "Submit" button and the data will be stored away in a database.

## Future Improvement:
- Upgrade Tesseract.js version
- Image pre-proccesing
- Progress indication
- Error logging
- Batch processing

*All other files and directories are licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) unless explicitly stated.*