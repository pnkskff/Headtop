# Headtop

I. INTRO:

  1. Headtop API url: http://headtop-api.herokuapp.com/
  
     a. API is hosted at: https://www.heroku.com/
     
        - Heroku is sunsetting Free Accounts on Nov. 2022.
     
        - Need to host App on a different Server: 
     
          * Firebase: https://firebase.google.com/
     
          * Netlify: https://www.netlify.com/
     
          * Vercel: https://vercel.com/

  2. This is a CRUD App that at its most basic, allows a User to:

     a. Create a List.

     b. Vote on importance of Items in the List, with Sort set to display Most Important/Liked first.

     c. Vote on Dislike of Items in the List, Dislikes do not affect Sort as this App is more about what is Important to User, and not what User Likes/Dislikes.

II. NOTES:

  1. Built with CSS/JS and EJS Templating Language, along with Node.js Environment and Express.js Framework:
  
     https://nodejs.org/en/
     
     https://expressjs.com/
  
  2. In the future, may transition to bulding with Bun JS Environment:
  
     https://bun.sh/
     
  3. For further Styling/Templating, may transition to building with Bootstrap or Tailwind: 
     
     https://getbootstrap.com/
     
     https://tailwindcss.com/
     https://daisyui.com/
  
  4. M.V.C. architecture is not used for this App yet.
  
     - For more info: https://docs.google.com/spreadsheets/d/1zXoYlAUurkx-cZh5hKhAX16l0ibWXopTF6MKmXKOWKI/edit?usp=sharing

III. OPTIMIZATION:

  1. Add a Form/Authentication Method so Users can create User and PW Credentials.
  
     - Most likely using PassportJS: https://www.passportjs.org/
  
     - Add Gmail Integration, and further Integration with other Social Media sites.
     
     - Git Repo for multiple Integrations: https://github.com/sahat/hackathon-starter/blob/master/config/passport.js
  
  2. Add Functionality to include Date of Purchase and/or Date Uploaded via Calendar Dropdown.
  
     - Most likely using v-calendar: https://www.npmjs.com/package/v-calendar
  
     - Documentation: https://vcalendar.io/
  
  3. Add Functionality for User to upload Images/Videos/Audio.
  
     - Most likely using Filepond: https://pqina.nl/filepond/
     
     - Or, using Cloudinary: https://www.npmjs.com/package/cloudinary
     
     - Website: https://cloudinary.com/
     
     - Or, using Multer: https://www.npmjs.com/package/multer
     
     - Git Repo: https://github.com/expressjs/multer

  4. Add Functionality for User to add Notes per Post via free-form Text Box.
  
     - Most likely using CKEditor: https://ckeditor.com/
     
     - Documentation: https://github.com/ckeditor/ckeditor5
  
  5. Add Functionality to Save Lists if User is signed in.
  
  6. Add Functionality for User to view all Saved Lists, in a Gallery or List Format.
  
  7. Add Functionality for User to Tag a List via a Keyword, so that User can quickly search all Lists via a Keyword Query.
  
  8. Add Functionality for User to generate a shareable url for a List.
  
     - Most likely using NPM of Share URL: https://www.npmjs.com/package/share-url
  
  9. Add Functionality for Comments, so that Users can add Comments to each List, via free-form Text Box.
  
     - Most likely using CKEditor: https://ckeditor.com/
     
     - Documentation: https://github.com/ckeditor/ckeditor5
  
  10. Add Functionality to Export a List into a CSV file.
  
       - Most likely using NPM export-to-csv: https://www.npmjs.com/package/export-to-csv
  
  11. Add Integration with Google Drive.
  
      - Most likely using NPM @googleapis/drive: https://www.npmjs.com/package/@googleapis/drive
  
      - Git Repo: https://github.com/googleapis/google-api-nodejs-client
  
      - Documentation: https://googleapis.dev/nodejs/googleapis/latest/drive/classes/Drive.html
  
  12. For further Optimization/Feature Enhancement requests, please submit a Pull Request and provide details and screenshots.
  
      - If User does not know how to perform a GitHub PR, please create a Free Account on WebWhiteboard, and provide the details and screenshots.
      
      - Website: https://webwhiteboard.com/
  
IV: AUDIT/UPDATE TOOLS:

   1. npm-audit: https://docs.npmjs.com/cli/v8/commands/npm-audit
   
   2. npm-outdated: https://docs.npmjs.com/cli/v8/commands/npm-outdated
   
   3. npm-update: https://docs.npmjs.com/cli/v8/commands/npm-update

V. FURTHER INFO:

   1. Readme last updated on: SEPTEMBER 2022

   2. Authors:

      a. pnkskff

      https://github.com/pnkskff

      https://drincapdev.netlify.app/

      https://drincapapps.netlify.app/
