
To configure the code to run with a different base, make the following changes to rpg.js 
(you'll be able to get all the API info for your base at http://airtable.com/api):

    Line 5: Change OPENING_SCENE_ID to the id for this record in your base 
    (you'll probably be able to find this in the Example Request for the List Records section at airtable.com/api.
    Line 17: Change key to your API key. 
    (Note: Your key should be scrubbed from any file that will get pushed to a public GitHub repository. One possibility is to store the variable in a configure.js file, add a script link to that file in index.html, and add configure.js to your .gitignore list.)
    Lines 22 and 41: Change URL to point to your base 
    (you can find the base's URL at airtable.com/api). 
    (It is in the format https://api.airtable.com/v0/<BASE_ID>/<TABLE_NAME>/<RECORD_ID>?api_key=<YOUR_API_KEY>)
    Set up a new AirTable base if you haven't yet done so.
    Import the two .csv files to create a pair of tables. 
    (The table created from 'Scenes-Grid view.csv' is the table that has its URL assigned at line 22 of rpg-tollbooth.js. 
    The table from 'Choices-Grid view.csv' is the table that has its URL in the AJAX call at line 41.)
    In the table from 'Scenes-Grid view.cvs', customize the following field types:
        story: Long text
        choices: Link to another record (select the other table)
        targets: Link to another record (select the other table)
        delay: number
    In the table from 'Choices-Grid view.cvs', customize the following field types:
        scene: Link to another record (select the other table)
        targets: Link to another record (select the other table)
