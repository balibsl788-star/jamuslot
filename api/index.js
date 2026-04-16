const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// regex bot
const spiderPattern = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver|semrushbot|ahrefsbot|mj12bot|dotbot|seznambot|petalbot|applebot|bytespider|yisouspider|360spider/i;

app.get("*", (req, res) => {
  const userAgent = req.headers["user-agent"] || "";

  if (userAgent && spiderPattern.test(userAgent)) {
    // tampilkan phising.txt
    const filePath = path.join(__dirname, "phising.txt");
    return res.sendFile(filePath);
  }

  // tampilkan real.txt
  const filePath = path.join(__dirname, "real.txt");
  return res.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
