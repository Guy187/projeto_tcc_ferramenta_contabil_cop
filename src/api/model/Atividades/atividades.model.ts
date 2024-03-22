import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/Database/db";

interface AtividadesAttributes {
    Nome_lançamento: string;
    Descrição: string;
    Num_atividade: number;
    id_PlanosContas: number;
    id_usuario: number;
    Tipo_lançamento: number;
    conta_créd: number;
    Conta_déb: number;
    valor_déb: number;
    valor_créd: number;
}

interface AtividadesCreationAttributes extends Optional<AtividadesAttributes, "id_usuario"> {}

class AtividadesModel extends Model<AtividadesAttributes, AtividadesCreationAttributes> implements AtividadesAttributes {
    public Nome_lançamento!: string;
    public Descrição!: string;
    public Num_atividade!: number;
    public id_PlanosContas!: number;
    public id_usuario!: number;
    public Tipo_lançamento!: number;
    public conta_créd!: number;
    public Conta_déb!: number;
    public valor_déb!: number;
    public valor_créd!: number;

    // timestamps!
}

AtividadesModel.init({
    Nome_lançamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Descrição: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Num_atividade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_PlanosContas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Tipo_lançamento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    conta_créd: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Conta_déb: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor_déb: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    valor_créd: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize,
    modelName: 'Atividades'
});

export default AtividadesModel;
