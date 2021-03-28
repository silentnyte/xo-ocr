# Crossout Item OCR

![Crossout Item OCR Image](https://i.imgur.com/z8NnyMK.png "Crossout Item OCR")

I started this project because I wanted to do some item data analysis and could not find a good up to date source of item data and no easy way to extract the data from the game. I did not want to go though the pains taking effort of manually entering all the data by hand. Enter Tesseract.js. This great litlle library was able to take screenshots of items (with a little pre-proccessing done by OpenCV) and extract the text. All that was left was parsing the text and adding it to a database.

## Instructions:

- Take a screen clipping of the item *(for Windows use Windows Key + Shift + S)*. The clip should be cropped to the item window border. For best results the image should be taken at 1080p or around 500px wide.

-  Paste the clip at "**PASTE ITEM CLIP HERE**"

- The image OCR will automatically begin and the form will fill out.

- When the item name has been parsed it will be looked up in **CrossoutDB** to determine "Category", "Faction", "Level", "Level Type" and "ID". *(If the item is not found in the database these input fields will need to be manually entered)*

- Correct any OCR errors.

- Enter the "Crossout Version" the images was taken from.
  
- Enter "Author" so we know who to thank for scanning the item!

- When you are happy with the results click the "Submit" button and the data will be posted to the database.

## Future Improvement:
- Upgrade Tesseract.js version
- Image pre-proccesing
- Progress indication
- Error logging
- Batch processing
- Integration with [ShareX](https://getsharex.com/)

*All other files and directories are licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) unless explicitly stated.*