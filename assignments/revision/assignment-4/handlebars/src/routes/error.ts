import express from 'express';
export default express.Router().use((_, res, __) => res.render('error', {
  docTitle: '404: Not Found', errorCSS: true
}));
