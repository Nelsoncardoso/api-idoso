var bcrypt = require("bcryptjs");

export default (sequelize, DataTypes) => {
  const Profissional = sequelize.define('Profissional', {
    nomeCompleto: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Por Favor Insira o Nome Completo!'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Por favor insira o Email!'
      },
      unique: {
        args: true,
        msg: 'Email já está em uso!'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Por favor insira um Email válido!'
        },
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Por favor insira a senha!'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 6) {
            throw new Error('Senha deve conter mais de 6 caracteres!');
          }
        },
      },
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Por favor insira seu Telefone.'
      }
    },
    profissao: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Por favor insira a formacao'
      }
    },
    unidadeFederativa: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Por favor insira a unidade federativa!'
      }
    },
    numeroConselhoRegional: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Por favor insira seu registro de conselho regional!'
      }
    },
    terms: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        args: false,
        msg: 'Aceite os termos de serviço!'
      }
    },
   
  }, {
    hooks: {
      beforeCreate: function (profissional) {
        profissional.senha = bcrypt.hashSync(profissional.senha, bcrypt.genSaltSync(10), null);
      }
    },
    freezeTableName: true,
    tableName: 'Profissionais',
    name: {
      singular: "Profissionais",
      plural: "Profissionais"
    }
     
  });
  Profissional.prototype.validPassword = function (senha) {
    return bcrypt.compareSync(senha, this.senha);
  };
  Profissional.associate = function (models) {
    Profissional.belongsToMany(models.Idoso, {
      through: models.ProfissionalIdoso,
      as: 'idosos',
      foreignKey: 'profissional_id'
    })
  };
  return Profissional;
};