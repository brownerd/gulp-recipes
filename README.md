# Gulp Recipes

Ugh, there is so much that you we can do with Gulp. This is a repo for managing gulp recipes. Some are mine, some are from others.

## WP + Gulp




This is a starter gulpfile for WordPress and Sass users. It includes:

- Sass - *PreProcessor*
- Pleeease - *PostProcessor*
- SourceMaps
- Browser-Sync


## Two flavors to choose:
-  **RubySass** - Slower, but has more options and complies using the Sass Gem
- **LibSass** - Faster, compiles with LibSass yet doesn't have all the latest features of Sass

## Usage
1. Choose the flavor of Sass that you want to use
1. Copy it's files to your theme directory
1. Open your terminal and `cd` to your theme directory
1. Run `npm install` and wait for the downloads to finish
1. Open `gulpfile.js` and change `task.wp` to the name of the site you created in MAMPPro.
1. You might need to update the path to your Sass files depending on your file structure `sass/style.scss`.
1. Run `gulp`
1. Done

This will compile your Sass and open the site in a browser window for you.

## Resources
Please extend this started file however you like. If you would like to learn more about Gulp, read through these articles:

- [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
- [Introduction to Gulp JS](http://www.sitepoint.com/introduction-gulp-js/)
- [Gulp + Browserify: The Everything Post](http://viget.com/extend/gulp-browserify-starter-faq)
- [CSS Post-Processing With Pleeease](href="http://www.sitepoint.com/css-post-processing-pleeease/)

There are many ways to create a Gulpfile. Play with it and figure out which works best for you.

## Future
- I might make a couple more recipes for Compass and Bourbon users.
