import express from 'express';

export default express.Router().use((_, res, __) => res.render('errors', { docTitle: '404 Error', path: '' }));
