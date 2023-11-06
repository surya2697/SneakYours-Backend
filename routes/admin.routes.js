const {Router} = require("express");
const { getProductsAdmin, getOrdersAdmin, getUsersAdmin } = require("../controllers/adminController/getAdmin.controller");
const roleChecker = require("../middlewares/role.middleware");

const admin = Router();

admin.get("/products", getProductsAdmin)
admin.get("/users",roleChecker, getUsersAdmin)
admin.get("/orders",roleChecker, getOrdersAdmin)


module.exports = admin;