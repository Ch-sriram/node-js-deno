import express from 'express';

const router = express.Router();

router.use((_, res, __) => res.status(404).render('error', { docTitle: '404 Not Found', path: '' }));

export default router;
