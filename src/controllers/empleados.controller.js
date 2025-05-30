import { pool } from '../db.js';

export const obtenerEmpleados= async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Empleados');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los empleados.',
      error: error
    });
  }
};

export const obtenerEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [req.params.id]);
    
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. El ID ${req.params.id} del empleado no fue encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de la categoria.'
    });
  }
};

// Registrar un nuevo empleado
export const registrarEmpleado = async (req, res) => {
  try {
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo,
        fecha_contratacion} = req.body;

    const [result] = await pool.query(
      'INSERT INTO empleados (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion]
    );

    res.status(201).json({ id_empleado: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el empleado.',
      error: error
    });
  }
};