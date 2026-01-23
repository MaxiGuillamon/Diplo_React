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

router.get('/eliminar/:id', async (req, res, next) => { //admin/novedades/eliminar/:id
    var id = req.params.id;
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades');
});

router.get('/modificar/:id', async (req, res, next) => { //admin/novedades/editar/:id
    var id = req.params.id;
    var novedad = await novedadesModel.getNovedadByID(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    });
});

router.post('/modificar', async (req, res, next) => { //admin/novedades/modificar
    try {
        let obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }

        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } 
    catch (error) {
    console.log(error);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        error: true,
        message: 'No se modificó la novedad'
    });
}
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