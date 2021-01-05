var express = require('express');
var router = express.Router();

var User = require('../assets/app/model/user.js');

router.post('/', function (req, res, next){
    var user = new User({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        senha: req.body.senha,
        email: req.body.email
    });
    console.log(user);

    user.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro aconteceu',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Mensagem salva com sucesso",
            objUserSave : result
        });
    });
});

module.exports = router;