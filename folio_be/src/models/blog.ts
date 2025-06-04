import { DataTypes, Sequelize, Model } from "sequelize";

export class Blog extends Model {
    public id!: number;
    public title!: string;
    public imageUrl?: string;
    public content!: string;
    public userId!: number;
    public createdAt!: Date;
    public updatedAt!: Date;
    public readTime?: string;
}

export const initBlogModel = (sequelize: Sequelize) => {
    Blog.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            readTime: {
                type: DataTypes.STRING,
                allowNull: true,
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
            modelName: "Blog",
            tableName: "blogs",
        }
    );
}