var express = require('express');
var router = express.Router();

var User = require('../assets/app/model/user.js');

router.post('/', function (req, res, next){
     console.log('router-login');
    User.findOne({senha: req.body.senha, email: req.body.email}, function(err, result){
        if(result){
           
            return res.status(201).json({
                myMsgSucess: "Seja Bem Vindo",
                objUserSave : result
            });
        }
        
        return res.status(500).json({
            myErroTitle: 'Um erro aconteceu',
            myError: err
        });
    });
});

module.exports = router;