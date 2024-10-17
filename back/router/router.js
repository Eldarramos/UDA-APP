import express from 'express';
import { getCorreo } from '../controller/usuario.js';

const router = express.Router();

// Ruta para verificar el correo
router.get('/', getCorreo);

export default router;
