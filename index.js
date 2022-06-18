const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/project/calculator/index.html');
})

app.post('/', (req, res) => {
    let firstNumber = Number(req.body.num);
    let secondNumber = Number(req.body.num2);
    let result = firstNumber + secondNumber;


    res.send("The result of your entry is " + result);
})

app.get('/bmicalculator', (req, res) => {
    // res.send('<h1>BMI Calculator</h1>');
    res.sendFile(__dirname + '/project/calculator/bmiCalculator.html');
})

app.post('/bmicalculator', (req, res) => {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight / (height * height);


    res.send("Your BMI is " + bmi);
})

const PORT = process.env.PORT || 4300;

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});