// const express = require("express");
// const router = express.Router();

// const authMiddleware = require("../middleware/auth.middleware");
// const authorizeRoles = require("../middleware/role.middleware");

// // controllers (we'll create next step)
// const {
//   createRecord,
//   getRecords,
// } = require("../controllers/record.controller");

// // ONLY ADMIN
// router.post("/", authMiddleware, authorizeRoles("admin"), createRecord);

// // ALL ROLES
// router.get(
//   "/",
//   authMiddleware,
//   authorizeRoles("viewer", "analyst", "admin"),
//   getRecords,
// );

// module.exports = router;

const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/record.controller");

// CREATE → Admin
router.post("/", authMiddleware, authorizeRoles("admin"), createRecord);

// GET → All roles
router.get(
  "/",
  authMiddleware,
  authorizeRoles("viewer", "analyst", "admin"),
  getRecords,
);

// UPDATE → Admin
router.put("/:id", authMiddleware, authorizeRoles("admin"), updateRecord);

// DELETE → Admin
router.delete("/:id", authMiddleware, authorizeRoles("admin"), deleteRecord);

module.exports = router;
