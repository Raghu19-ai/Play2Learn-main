const express = require("express");
const cors = require("cors");
const admin = require("./firebaseAdmin");

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON body

// ✅ Verify Firebase ID Token endpoint
app.post("/verifyToken", async (req, res) => {
  const { token } = req.body;

  if (!token) return res.status(400).json({ error: "Token missing" });

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    // decodedToken has uid, email, etc.
    res
      .status(200)
      .json({
        success: true,
        uid: decodedToken.uid,
        email: decodedToken.email,
      });
  } catch (err) {
    console.error("Token verification failed:", err);
    res.status(401).json({ error: "Invalid token" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
