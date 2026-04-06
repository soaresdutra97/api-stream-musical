import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { listarFavoritas, adicionarFavorita, removerFavorita } from '../controllers/favoritaController';
import { authMiddleware } from '../middlewares/auth';

export const favoritaRouter = Router();

const favoritaLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

favoritaRouter.use(favoritaLimiter);
favoritaRouter.use(authMiddleware);
favoritaRouter.get('/', listarFavoritas);
favoritaRouter.post('/', adicionarFavorita);
favoritaRouter.delete('/:id', removerFavorita);
