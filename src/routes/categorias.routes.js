import { Router } from 'express';
import {  obtenerCategoria, obtenerCategorias, registrarCategoria, eliminarCategoria, actualizarCategoria } from '../controllers/categorias.controller.js';

const router = Router();

// Ruta para obtener todas las categorias
router.get('/categoria', obtenerCategorias);

// Ruta para obtener una categoria por su ID
router.get('/categoria/:id', obtenerCategoria);

// Ruta para registrar una categoria 
router.post('/registrarcategoria', registrarCategoria);

// Ruta para eliminar un cliente por su ID
router.delete('/eliminarcategoria/:id', eliminarCategoria);

// Ruta para actualizar una categoría por su ID
router.patch('/actualizarcategoria/:id', actualizarCategoria);

export default router;