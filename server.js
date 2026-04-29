const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("VoxVPN Mobile Backend Running");
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@voxvpn.net" && password === "123456") {
    return res.json({
      success: true,
      token: "mobile-demo-token",
      plan: "Pro",
      email
    });
  }

  return res.json({
    success: false,
    message: "Invalid login"
  });
});

app.get("/api/servers", (req, res) => {
  res.json({
    success: true,
    servers: [
      { id: "amsterdam", name: "Netherlands - Amsterdam", file: "amsterdam.ovpn" },
      { id: "chicago", name: "USA - Chicago", file: "chicago.ovpn" },
      { id: "london", name: "UK - London", file: "london.ovpn" },
      { id: "losangeles", name: "USA - Los Angeles", file: "losangeles.ovpn" },
      { id: "newjersey", name: "USA - New Jersey", file: "newjersey.ovpn" },
      { id: "singapore", name: "Singapore", file: "singapore.ovpn" },
      { id: "frankfurt", name: "Germany - Frankfurt", file: "frankfurt.ovpn" },
      { id: "johannesburg", name: "South Africa - Johannesburg", file: "johannesburg.ovpn" },
      { id: "siliconvalley", name: "USA - Silicon Valley", file: "siliconvalley.ovpn" },
      { id: "sydney", name: "Australia - Sydney", file: "sydney.ovpn" }
    ]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("VoxVPN Mobile Backend running on port " + PORT);
});
