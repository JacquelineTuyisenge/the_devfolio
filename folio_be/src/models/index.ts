import { sequelize } from "../config/db";
import { initBlogModel, Blog } from "./blog";
import { initAdminModel, User } from "./admin";

initBlogModel(sequelize);
initAdminModel(sequelize);

export { Blog, User };