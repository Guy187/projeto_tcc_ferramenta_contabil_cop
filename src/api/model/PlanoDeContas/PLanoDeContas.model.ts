import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../config/Database/db";

interface PlanoDeContasAttributes {
    id: number;
    TIPO: string;
    estado: string;
    titulo: string;
    subtitulo: string;
    conta_sintetica: string;
    conta_analitica: string;  
}

interface PlanoDeContasCreationAttributes extends Optional<PlanoDeContasAttributes, "id"> {}

class PlanoDeContas extends Model<PlanoDeContasAttributes, PlanoDeContasCreationAttributes> 
    implements PlanoDeContasAttributes {
    public id!: number;
    public TIPO!: string;
    public estado!: string;
    public titulo!: string;
    public subtitulo!: string;
    public conta_sintetica!: string;
    public conta_analitica!: string;
}

PlanoDeContas.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        TIPO: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subtitulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conta_sintetica: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conta_analitica: { 
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize: sequelize,
        modelName: "PlanoDeContas",
        tableName: "planodecontas",
        timestamps: false
    }
)

export default PlanoDeContas;
