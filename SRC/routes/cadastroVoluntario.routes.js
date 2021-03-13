const router = require("express-promise-router")();
const cadastroVoluntarioControler = require("../controler/cadastroVoluntario.controler");

router.post('/cadastro-usuario', cadastroVoluntarioControler.criarCadastroVoluntario);
router.get('/retorno-usuario-all', cadastroVoluntarioControler.RetornaCadastroVoluntarioAll);
router.get('/retorno-usuario/:id', cadastroVoluntarioControler.RetornaCadastroVoluntario);
router.put('/atualiza-usuario/:id', cadastroVoluntarioControler.AtualizaCadastroVoluntario);

module.exports = router;