'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alunos_notas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "alunos",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      id_professor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "professores",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      id_materia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "materias",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      id_turma: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "turmas",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      titulo_nota: {
        allowNull:false,
        type: Sequelize.STRING
      },
      avaliacao_nota: {
        allowNull:false,
        type: Sequelize.DOUBLE
      },
      bimestre_nota: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('alunos_notas');
  }
};