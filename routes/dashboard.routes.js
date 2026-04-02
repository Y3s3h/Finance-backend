const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");

const {
  getSummary,
  getCategoryBreakdown,
  getRecent,
} = require("../controllers/dashboard.controller");

// Analyst + Admin
router.get(
  "/summary",
  authMiddleware,
  authorizeRoles("analyst", "admin"),
  getSummary,
);

router.get(
  "/categories",
  authMiddleware,
  authorizeRoles("analyst", "admin"),
  getCategoryBreakdown,
);

router.get(
  "/recent",
  authMiddleware,
  authorizeRoles("analyst", "admin"),
  getRecent,
);

module.exports = router;
