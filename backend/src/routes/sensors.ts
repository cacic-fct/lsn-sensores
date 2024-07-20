import express from "express";

const router = express.Router();

router.get("/", function (req, res, next) {
  const date = req.query.date;
  if (!date) {
    res.json({ date: "no date" });
  }

  res.json({ a: 1 });
});

export default router;
