// Importamos express
import express from 'express';

// importamos nuestro controlador 
import { agregarCitas } from '../controllers/CitasController.js'
import { getAllcitas } from '../controllers/CitasController.js'
import { getCita } from '../controllers/CitasController.js'
import { modificarCita } from '../controllers/CitasController.js'
import { eliminarCita } from '../controllers/CitasController.js'


const router = express.Router();

router.post('/', agregarCitas);
router.get('/', getAllcitas);
router.get('/:id', getCita);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);


export default router;