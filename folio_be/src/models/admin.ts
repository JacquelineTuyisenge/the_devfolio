import { DataTypes, Sequelize, Model } from "sequelize";

export class User extends Model {
    public id!: number;
    public name!: string;
    public imageUrl?: string;
    public password!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

export const initAdminModel = (sequelize: Sequelize) => {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
        }
    );
}