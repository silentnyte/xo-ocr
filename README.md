# xo-ocr
Crossout Item OCR

![Crossout Item OCR Image](https://i.imgur.com/rKPGsbk.png "Crossout Item OCR")

I started this project because I wanted to do some item data analysis and could not find a good up to date source of item data and no easy way to extract the data from the game. I did not want to go though the pains taking effort of manually entering all the data by hand. Enter Tesseract.js. This great litlle library was able to take screenshots of items (with a little pre-proccessing done by OpenCV) and extract the text. All that was left was parsing the text and adding it to a database.

Instructions:

"PASTE ITEM CLIP HERE"
This is where you paste your item screenshot. The screenshot should be cropped to the item window border. For best results the image width should be greater than 650px.

The image the OCR will automatically begin and the form will be filled out.

When the item name has been parsed it will be looked up in a database to determine "Category" and "Faction".

The one piece of data that I do not have and that needs to be manually entered is "Level". This is the level in which the item is unlocked.

After the form is filled out any of the fields can be edited by hand to correct any OCR errors.

When you are happy with the result click the "Submit" button and the data will be stored away in a database.

Future Improvement:
- Upgrade Tesseract.js version
- Image pre-proccesing
- Progress indication
- Error logging
- Batch processing

All other files and directories are licensed under the [MIT](http://www.opensource.org/licenses/mit-license.php) unless explicitly stated.