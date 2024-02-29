const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Define routes for HTML templates
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Define route for CSS files
app.get('/*.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  const cssPath = path.join(__dirname, 'assets', 'stylesheets', req.url);
  fs.readFile(cssPath, (err, content) => {
    if (err) {
      console.log(err);
      res.status(404).send('CSS file not found');
    } else {
      res.end(content);
    }
  });
});

// Define route for image files
app.get('/*.jpg', (req, res) => {
  const imgPath = path.join(__dirname, 'assets', 'images', req.url);
  fs.readFile(imgPath, (err, content) => {
    if (err) {
      console.log(err);
      res.status(404).send('Image not found');
    } else {
      res.setHeader('Content-Type', 'image/jpeg');
      res.end(content);
    }
  });
});

// Define route for JavaScript files
app.get('/*.js', (req, res) => {
  res.setHeader('Content-Type', 'text/javascript');
  const jsPath = path.join(__dirname, 'assets', 'js', req.url);
  fs.readFile(jsPath, (err, content) => {
    if (err) {
      console.log(err);
      res.status(404).send('JavaScript file not found');
    } else {
      res.end(content);
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
