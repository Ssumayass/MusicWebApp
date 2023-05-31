const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded({ extended: true });
const fs = require('fs');
const path = require('path');
const app = express();

const folderPath = path.join(__dirname, 'assets', 'json');

// app.use(express.static('assets'));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


app.listen(4000, () => {
  console.log('Server started on port 4000');
});


// handle login request


/* =============== login request =============== */

app.post('/', encoder, function(req, res){
    var email = req.body.email;
    var password = req.body.password;
  
    fs.readFile(path.join(folderPath, 'login.json'), function(error, loginData){
      if (error) throw error;
  
      var loginResults = JSON.parse(loginData);
      var filteredLoginResults = loginResults.filter(function(login) {
        return login.email === email && login.password === password;
      });
  
      if(filteredLoginResults.length > 0){
        console.log('login success')
        res.json({ isLoggedIn: true, email: email  });
      } else{
        res.json({ isLoggedIn: false });
      }
    });
});
  
  
  
  
  /* =============== Register request =============== */
  app.post('/register', encoder, function(req, res){
    var email = req.body.email;
    var password = req.body.password;
  
    // Check if the email already exists in the JSON files
    const loginData = JSON.parse(fs.readFileSync(path.join(folderPath,'login.json')));
   
    
  
    const emailExists = loginData.some(function(login) {
      return login.email === email;
    });
  
    
    if (emailExists === true) {
      res.status(409).json({ isRegistered: false, message: 'email already exists' });
    } else {
     
      const loginObject = {
        email,
        password
      };
      
      const customerObject = {
        customer_email: email,
        customer_email: password
        
        
      };
  
      // Append the login data to login.json file
      loginData.push(loginObject);
      fs.writeFile(path.join(folderPath,'login.json'), JSON.stringify(loginData, null, 2), {encoding:'utf8', flag:'w+'}, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
  
      
  
      res.json({ isRegistered: true });
      console.log('Registration successful');
    }
  });