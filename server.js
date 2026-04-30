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
server: [
  { id: "amsterdam", name: "Amsterdam", file: "Amsterdam.ovpn" },
  { id: "atlanta", name: "Atlanta", file: "Atlanta.ovpn" },
  { id: "chicago", name: "Chicago", file: "Chicago.ovpn" },
  { id: "frankfurt", name: "Frankfurt", file: "Frankfurt.ovpn" },
  { id: "johannesburg", name: "Johannesburg", file: "Johannesburg.ovpn" },
  { id: "london", name: "London", file: "London.ovpn" },
  { id: "losangeles", name: "Los Angeles", file: "Losangeles.ovpn" },
  { id: "madrid", name: "Madrid", file: "Madrid.ovpn" },
  { id: "manchester", name: "Manchester", file: "Manchester.ovpn" },
  { id: "melbourne", name: "Melbourne", file: "Melbourne.ovpn" },
  { id: "miami", name: "Miami", file: "Miami.ovpn" },
  { id: "milan", name: "Milan", file: "Milan.ovpn" },
  { id: "newjersey", name: "New Jersey", file: "Newjersey.ovpn" },
  { id: "paris", name: "Paris", file: "Paris.ovpn" },
  { id: "seattle", name: "Seattle", file: "Seattle.ovpn" },
  { id: "siliconvalley", name: "Silicon Valley", file: "Siliconvalley.ovpn" },
  { id: "singapore", name: "Singapore", file: "Singapore.ovpn" },
  { id: "sydney", name: "Sydney", file: "Sydney.ovpn" },
  { id: "tokyo", name: "Tokyo", file: "Tokyo.ovpn" },
  { id: "toronto", name: "Toronto", file: "Toronto.ovpn" },
]
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("VoxVPN Mobile Backend running on port " + PORT);
});
