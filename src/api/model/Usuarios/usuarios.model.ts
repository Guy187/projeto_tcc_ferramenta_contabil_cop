import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../../config/Database/db";

interface UsuariosAttributes {
    id: number;
    Nome_completo: string;
    Apelido: string;
    email: string;
    Senha: string;
    instituição: string;
    Responsável: string;
}

interface UsuariosCreationAttributes extends Optional<UsuariosAttributes, "id"> {}

class usuariosModel extends Model<UsuariosAttributes, UsuariosCreationAttributes> implements UsuariosAttributes {
    public id!: number;
    public Nome_completo!: string;
    public Apelido!: string;
    public email!: string;
    public Senha!: string;
    public instituição!: string;
    public Responsável!: string;

    // timestamps!
}

usuariosModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nome_completo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Apelido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instituição: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Responsável: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Usuarios',
    timestamps: false,
});

export default usuariosModel;
