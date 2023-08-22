
let myhttp = require('http');

let myserver = myhttp.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }); 
// HTML content with a link
  let htmlContent = `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          text-align: center;
        }
        h1 {
          color: #333;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <h1>Hello, hope you are in the mood for some laughs!</h1>
      <p>Click <a href="https://www.harryanddavid.com/blog/best-dad-jokes//">here</a> to visit some Dad Jokes.</p>
    </body>
    </html>
  `;

  res.end(htmlContent); 
});

myserver.listen(8080, "0.0.0.0");

console.log("Hope you like the Dad Jokes!");
