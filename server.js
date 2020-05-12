//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static('./dist/AngularRsvr'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/AngularRsvr/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);
const port = process.env.PORT;
console.log(`Listening on port: ${port}`);