Okay, so this is a document that I'm producing to help you implement and test this calculator. 

# Instructions

1. Look into the `/static/` folder. There are TWO files, `javascript.js` and `stylesheet.css`.
> The `.js` document controls the *functionality* and the **structure** of the application, whereas the `.css` document is a "decorator" - it paints specific elements.

2. Upload BOTH files to a content/media library that is owned by your company. The uploaded files should be accessible by a link **PUBLICLY** - meaning that no login/account/password is needed to access it.

> For example, check out this link: https://unpkg.com/react-dom@18/umd/react-dom.development.js. When you access it - your browser displays just a simple `.js` file - this is what you're looking for because it allows the landing page to access and download the necessary documents to make this work.
> 
> ### If you do not have a good solution for this, I am able to host it myself through Github.


3. Open the `index.html` file in this _current_ directory and look at the main `<head>` section. There are two HTML elements, the `<script>` and the `<link>` elements - copy those over into the landing page, in the `<head />` section if possible. 


4. Look at the `src` attribute of the `<script>` tag - replace that file path with the URL of the uploaded JAVASCRIPT file.


5. Look at the `href` attribute of the `<link>` tag - replace that file path with the URL of the uploaded STYLESHEET file.

> You can edit the uploaded stylesheet with whatever styles you want.

6. Look into the `index.html` file once more, and copy the element: `<div id="root></div>`. Paste this HTML element where _you want the calculator to be in your landing page_. 

> Now, when you load the new landing page, there should be a calculator rendering on the page. If there is not, then there something is wrong :(

There are 3 ways we can go with this:
- continue using React, and I would need to handle all the changes because I need to edit the "source" files and do my build process and deliver 
- 