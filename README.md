# Structure

**Webpages (HTML)** 
* index.html (main page) - choose "buy side","sell side" or "other" 

* buyside/index.html : buy side questions
* sellside/index.html : sell side questions
* other/index.html : other questions

* complete.html : page after the user has completed the survery where they can opt in for emails
* further-reading.html : page after "complete.html" that shows users articles 

**Server pages (PHP)** 
* options.php : used by "index.html" to redirect to correct questions
* save.php : used by "buyside/index.html", "sellside/index.html" and "other/index.html" to save the questions to CSV file
* opt.php : used by "complete.html" to save email address to opt.txt

**Webpage logic (JS)** 
* assets/js/main.js : used for page/form logic 
* assets/js/questions.js : used to manage questions
* assets/js/utils.js : basic page utilites 

**Question data**
* assets/js/questions.json : stores all the data for the questions (currently only used for mapping between questions"

**Recorded data (Keep secure)** 
* private/data.csv : question data
* private/opt.txt : list of email addresses that have opt in 

# Future Improvements

**Data management**
* Use database instead of CSV (then export as CSV)

**Pages**
* Update error handling (highlighting errors in form)
* Admin pages for getting data

**Create**
* UI for creating future surveys (Create seprate questions.json)
* Create .html pages from "questions.json" 


