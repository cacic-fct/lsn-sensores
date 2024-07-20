import express from "express";

const router = express.Router();

router.get("/health", function (req, res, next) {
  res.json({ status: "ok" });
});

export default router;
