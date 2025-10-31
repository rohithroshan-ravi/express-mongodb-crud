const express = require("express");
const router = express.Router();
module.exports = router;
const {
  creatUser,
  getallUser,
  deleteUserById,
  updateUser,
  getallUserById,
} = require("../handler/handler");

router.post("/post", creatUser);
router.get("/get-all", getallUser);
router.get("/get-user/:id", getallUserById);
router.patch("/update-user/:id", updateUser);
router.delete("/delete/:id", deleteUserById);
