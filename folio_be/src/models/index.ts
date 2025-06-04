import { sequelize } from "../config/db";
import { initBlogModel, Blog } from "./blog";

initBlogModel(sequelize);

export { Blog };