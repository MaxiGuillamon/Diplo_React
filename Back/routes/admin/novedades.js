var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');


/* GET novedades admin page. */
router.get('/', async function (req, res, next) { //admin/novedades

    var novedades = await novedadesModel.getNovedades();


    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades 
    });

});


router.get('/agregar', (req, res, next) => { //admin/novedades/agregar
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
}); 


//Procesa formulario

router.post('/agregar', async (req, res, next) => { //admin/novedades/agregar
    try {
        console.log(req.body);
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await novedadesModel.insertNovedad(req.body);
            res.redirect('/admin/novedades')
        }   
        else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,    
                message: 'Todos los campos son requeridos'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.render('admin/agregar', {   
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la novedad'
        });
    }
});
module.exports = router;