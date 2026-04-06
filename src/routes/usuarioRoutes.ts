import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { listarUsuarios, buscarUsuario, registrarUsuario, loginUsuario, deletarUsuario } from '../controllers/usuarioController';

export const usuarioRouter = Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

usuarioRouter.post('/registrar', authLimiter, registrarUsuario);
usuarioRouter.post('/login', authLimiter, loginUsuario);
usuarioRouter.get('/', listarUsuarios);
usuarioRouter.get('/:id', buscarUsuario);
usuarioRouter.delete('/:id', deletarUsuario);
