const db = require("../config/database");
const bcrypt = require("bcrypt")



exports.criarCadastroVoluntario = async (req , res)=>{

  const {nome,cpf, email, senha, linkedin} =  req.body;

  const senhaEncriptada = await bcrypt.hash(senha, 10);
  //const senhaDescodificada = await bcrypt.compare(senha,senhaEncriptada);


  const response = await db.query(`INSERT INTO usuarios (nome, cpf, email, senha, linkedin ) VALUES ($1, $2, $3, $4, $5)`,
  [nome, cpf, email, senhaEncriptada, linkedin]);

  res.status(200).send({
    message: "Usuário cadastrado com sucesso!"  
  })
}


exports.RetornaCadastroVoluntarioAll = async (req , res)=>{
  const response = await db.query(`select * from usuarios`);
  res.status(200).send(
    response.rows
  )
}



exports.RetornaCadastroVoluntario = async (req , res)=>{
  const id = parseInt(req.params.id);
  const response = await db.query(`select * from usuarios where usuarioid = $1`  , [id]);
  res.status(200).send(
    response.rows
  )
}


exports.AtualizaCadastroVoluntario = async (req , res)=>{
  const id = parseInt(req.params.id);
  const {nome,cpf, email, senha, linkedin} =  req.body;

  const response = await db.query(`UPDATE usuarios  set nome = $1, cpf = $2, email = $3 , senha = $4, linkedin = $5  where usuarioid = $6`,
  [nome, cpf, email, senha, linkedin, id]);


  res.status(200).send({
    message: "Usuário cadastrado com sucesso!"  
  })
}