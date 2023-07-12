Okay, so this is a document that I'm producing to help you implement and test this calculator. 


# Instructions

1. Look into the `/static/` folder. There are TWO files, `javascript.js` and `stylesheet.css`.
> The `.js` document controls the *functionality* and the **structure** of the application, whereas the `.css` document is a "decorator" - it paints specific elements.

2. Upload BOTH files to a content/media library that is owned by your company. The uploaded files should be accessible by a link **PUBLICLY** - meaning that no login/account/password is needed to access it.

> For example, check out this link: https://unpkg.com/react-dom@18/umd/react-dom.development.js. When you access it - your browser displays just a simple `.js` file - this is what you're looking for because it allows the landing page to access and download the necessary documents to make this work.
> 
> ### If you do not have a good solution for this, I am able to host it myself through Github.
> JavaScript: https://raw.githubusercontent.com/darkocejkov/calculator/master/test-build/static/javascript.js
> Stylesheet: https://raw.githubusercontent.com/darkocejkov/calculator/master/test-build/static/stylesheet.css
- In fact, you may use the above links instead of trying to host and access the files yourself. For now, this can serve as a test.

3. Open the `index.html` file in this _current_ directory and look at the main `<head>` section. There are two HTML elements, the `<script>` and the `<link>` elements - copy those over into the landing page, in the `<head />` section if possible. 


4. Look at the `src` attribute of the `<script>` tag - replace that file path with the URL of the uploaded JAVASCRIPT file.


5. Look at the `href` attribute of the `<link>` tag - replace that file path with the URL of the uploaded STYLESHEET file.

> You can edit the uploaded stylesheet with whatever styles you want.

6. Look into the `index.html` file once more, and copy the element: `<div id="root></div>`. Paste this HTML element where _you want the calculator to be in your landing page_. 

> Now, when you load the new landing page, there should be a calculator rendering on the page. If there is not, then there something is wrong :( Perhaps the error is caused by not being able to "fetch" the required documents from the servers, or the JavaScript is not allowed to run on the landing page.

Here are a few ways we can go with this:
- continue using React, and I would need to handle all the changes because I need to edit the "source" files and do my build process 
- I instead build the calculator in Vanilla JavaScript and HTML. This enables you to have more control over the styling and structure of the application, because you don't need to run a pre-processing step to "build" the javascript files.
- If, for example, JavaScript is totally blocked from running on a landing page - then the above 2 methods still won't work, because they rely entirely on JavaScript for the functionality. Instead, something that we can do to bypass this, is to use `iframe` elements in HTML pages to create a "sub-window" which can run other pages within that sub-window.