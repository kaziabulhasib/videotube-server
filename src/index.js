import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("server is running😍");
});

app.get("/emp", (req, res) => {
  const employee = [
    {
      name: "kazi",
      age: 35,
    },
    {
      name: "hasib",
      age: 56,
    },
  ];
  res.send(employee);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
