const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.cars = [
    {
        make: "BMW",
        model: "X6",
        price: 50000
    },
    {
        make: "Lamborghini",
        model: "Huracan",
        price: 200000
    },
];

app.get('/cars', (req, res) => {
    res.status(200).json(app.locals.cars);
});

app.post('/cars', (req, res, next) => {
    
    if(Object.keys(req.body).length!==0){
        if(req.body.hasOwnProperty('make') || req.body.hasOwnProperty('model') || req.body.hasOwnProperty('price')){
            if(req.body.price>0){
                for(var i=0;i<app.locals.cars.length;i++){
                    if(app.locals.cars[i].model === req.body.model){
                    res.status(500).json({message:'Car already exists'})
                    }
                }
                console.log(req.body)
                app.locals.cars.push(req.body)
                res.status(201).json({message: 'Created'})
            }
            else{
                 res.status(500).json({message:'Price should be a positive number'})
            }
        }
        else{
            res.status(500).json({message : 'Invalid body format'})
        }
    }
    else{
         res.status(500).json({message: 'Body is missing'})
    }
    
    
    res.status(400).json({message: 'Bad request'});
})

module.exports = app;