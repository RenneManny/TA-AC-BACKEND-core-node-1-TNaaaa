const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a server
const server = http.createServer((req, res) => {
  // Routing for HTML templates
  if (req.url === '/' || req.url === '/index.html') {
    serveHTML('index.html', res);
  } else if (req.url === '/about' || req.url === '/about.html') {
    serveHTML('about.html', res);
  }
  
  // Routing for CSS files
  else if (req.url.endsWith('.css')) {
    serveStatic('stylesheets', 'text/css', req, res);
  }
  
  // Routing for image files
  else if (req.url.endsWith('.jpg')) {
    serveStatic('images', 'image/jpeg', req, res);
  }
  
  // Routing for JavaScript files
  else if (req.url.endsWith('.js')) {
    serveStatic('js', 'text/javascript', req, res);
  }
  
  // Handle 404 - Not Found
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found');
  }
});

// Function to serve HTML files
function serveHTML(filename, res) {
  const filePath = path.join(__dirname, filename);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
}

// Function to serve static files (CSS, images, JavaScript)
function serveStatic(folder, contentType, req, res) {
  const filePath = path.join(__dirname, 'assets', folder, req.url);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.log(err);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
