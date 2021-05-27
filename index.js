const express=require('express');
const bodyParser = require('body-parser');

//create express app
const app= express();

//setup the server port
const port = process.env.PORT || 5000;

//parse request data content type x-www-forms-ruleconded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type json
app.use(bodyParser.json());

//define root route
app.get('/',(req, res)=>{
    res.send('Hello World');
});

//import route
const employeeroute= require('./src/routes/employee.route');

//create ppl route
app.use('/api/v1/employees', employeeroute);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express Server is running at port ${port}`);
});

