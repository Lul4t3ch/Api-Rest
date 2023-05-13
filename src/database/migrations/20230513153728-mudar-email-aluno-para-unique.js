module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: await Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  down: () => { },
};
