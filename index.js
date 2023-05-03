const { Sequelize,Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
dialect: "sqlite",
 storage: "empresa.sqlite"
});

class Setor extends Model {
 static init(sequelize) {
 super.init({ 
 idsetor:{ 
 type: DataTypes.INTEGER, 
 autoIncrement: true,
 allowNull: false,
 primaryKey: true
 },
 nome: {
 type: DataTypes.STRING(60),
 allowNull: false
 },
 ramal:{ type: DataTypes.STRING(6) },
 email:{ type: DataTypes.STRING(40) }
 }, { sequelize, modelName: 'setor', tableName: 'setores' })
 }
}

Setor.init(sequelize);
class Funcionario extends Model {
static init(sequelize) {
 super.init({ 
 matricula:{ 
 type: DataTypes.INTEGER, 
 autoIncrement: true,
 allowNull: false,
 primaryKey: true
 },
Idsetor: {
 type: DataTypes.INTEGER,
 references: {
 model: Setor,
 key: 'idsetor'
 },
 },
nome:{
 type: DataTypes.STRING(60),
 allowNull: false
 },
 nascimento:{
 type: DataTypes.DATE
 },
 telefone:{
 type: DataTypes.STRING(15)
 }
 }, { sequelize, modelName: 'funcionario', tableName: 'funcionarios' })
 }
}

Funcionario.init(sequelize);

(async () => {
 await sequelize.sync({ force: true });
 
 const setor_F = await Setor.create({ nome: "Financeiro", ramal: "2134", email: 
"financeiro@empresa.com" });
 const setor_S = await Setor.create({ nome: "Secretaria", ramal: "2135", email: 
"secretaria@empresa.com" });
 const setor_P = await Setor.create({ nome: "Portaria", ramal: "2136", email: 
"portaria@empresa.com" });
 const setor_C = await Setor.create({ nome: "Contabilidade", ramal: "2137", email: 
"contabilidade@empresa.com" });
 const setor_D = await Setor.create({ nome: "Diretoria", ramal: "2138", email: 
"diretoria@empresa.com" });
 const setor_RH = await Setor.create({ nome: "Recursos Humanos", ramal: "2139", email: 
"recursoshumanos@empresa.com" }); 

//Exclua o setor Contabilidade do banco de dados.  
/*const setor_delete = await Setor.findByPk(4);
setor_delete.destroy(); 
const setores_exclusao = await Setor.findAll();
 console.log("Lista de setores após a exclusão: \n", 
JSON.stringify(setores_exclusao, null, 2), "\n\n");*/   

//Altere o nome do setor Recursos Humanos para Departamento Pessoal.  
/*const setor_chave = await Setor.findByPk(6);
setor_chave.nome = "Departamento Pessoal";
const resultado = await setor_chave.save();
console.log(resultado);
setores_update = await Setor.findAll(); 
console.log("\nLista de setores atualizada: \n", JSON.stringify(setores_update, null, 2), 
"\n\n");*/

//Liste todos os setores da tabela na tela.  
const setores_listar = await Setor.findAll();
 console.log("Lista de setores: \n", JSON.stringify(setores_listar, null, 2), "\n\n");  
 
})();
