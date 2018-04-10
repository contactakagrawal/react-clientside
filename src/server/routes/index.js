import express from 'express';
import path from 'path';
import jwtMiddleware from '../middlewares/jwt-middleware';

const router = express.Router();

router.get('/reset-password', jwtMiddleware(), (req, res) => {
  res.sendFile(path.resolve(`${__dirname}`, '../../../', 'public/index.html'));
});

router.get('*', function(req, res) {
  res.sendFile(path.resolve(`${__dirname}`, '../../../', 'public/index.html'));
});

export default router;
