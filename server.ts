const express = require('express')
const path = require('path')
 
const app = express();
const port = 3000; // You can change the port if needed
 
const indexPath = path.join(__dirname, 'index.html');
 
app.use(express.static('build'));
 
app.get('/', (req:any, res:any) => {
  res.sendFile(indexPath);
});
 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});