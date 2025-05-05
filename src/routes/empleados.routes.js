import { Router } from 'express';
import {  obtenerEmpleado, obtenerEmpleados, registrarEmpleado } from '../controllers/empleados.controller.js';

const router = Router();

// Ruta para obtener todos los empleados
router.get('/empleado', obtenerEmpleados);

// Ruta para obtener un empleado por su ID
router.get('/empleado/:id', obtenerEmpleado);

// Ruta para registrar un empleado
router.post('/registrarempleado', registrarEmpleado);

export default router;