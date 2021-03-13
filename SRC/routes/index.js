const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'GLOBAL ORG',
    version: '1.0.0',
  });
});

router.get('/', (req, res) => {
  res.sendFile('/root/CPBAdmin/dist/PainelCPB/index.html');
}); 

module.exports = router;