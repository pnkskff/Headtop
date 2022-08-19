# Headtop

I. INTRO:

  1. Headtop API url: http://headtop-api.herokuapp.com/
  
     a. API is hosted at: https://www.heroku.com/

  2. This is a CRUD App, set up as an API, that allows a User to:

     a. Create a List.

     b. Vote on importance of Items in the List, with Sort set to display Most Important/Liked first.

     c. Vote on Dislike of Items in the List, Dislikes do not affect Sort as this App is more about what is Important to User, and not what User Likes/Dislikes.

II. NOTES:

  1. Built with CSS/EJS/JS, and CRUD Methods - M.V.C. Paradigm is not used for this App yet.

III. OPTIMIZATION:

  1. Add a Form/Authentication Method so Users can create User and PW Credentials.
  
  - Most likely using PassportJS: https://www.passportjs.org/
  
  - Add Gmail Integration.

  2. Add Functionality to Save Lists if User is signed in.
  
  3. Add Functionality to include Date of Purchase and/or Date Uploaded via Calendar Dropdown.
  
  - Most likely using v-calendar: https://www.npmjs.com/package/v-calendar
  
  - Documentation: https://vcalendar.io/
  
  4. Add Functionality for User to upload Images.
  
  - Most likely using Filepond: https://pqina.nl/filepond/
  
  5. Add Functionality for User to add Notes per Post via free-form Text Box.
  
  - Most likely using CKEditor: https://ckeditor.com/
  
  6. Add Functionality for User to view all Saved Lists, in a Gallery Format.
  
  7. Add Functionality for User to Tag a List via a Keyword, so that User can quickly search all Lists via a Keyword Query.
  
  8. Add Functionality for User to generate a shareable url for a List.
  
  - Most likely using NPM of Share URL: https://www.npmjs.com/package/share-url
  
  9. Add Functionality to Export a List into a CSV file.
  
  - Most likely using NPM export-to-csv: https://www.npmjs.com/package/export-to-csv
  
  10. Add Integration with Google Drive.
  
  - Most likely using NPM @googleapis/drive: https://www.npmjs.com/package/@googleapis/drive
  
  - Git Repo: https://github.com/googleapis/google-api-nodejs-client
  
  - Documentation: https://googleapis.dev/nodejs/googleapis/latest/drive/classes/Drive.html

IV. FURTHER INFO:

  1. Readme last updated on: AUGUST 2022

  2. Authors:

     a. pnkskff

     https://github.com/pnkskff

     https://drincapdev.netlify.app/

     https://drincapapps.netlify.app/
