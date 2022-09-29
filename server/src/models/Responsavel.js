const { Model, DataTypes } = require('sequelize');

class Responsavel extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            data_nasc: DataTypes.STRING,
            cpf: DataTypes.STRING,
            rg: DataTypes.STRING,
            tel: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'responsaveis'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

        //Um responsavel tem varios alunos
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'alunos' });
    }

}

module.exports = Responsavel;