// const express = require('express');
// const fs = require('fs');
import express from "express";
import router from "./routes/index";

const app = express();
const port = 1245;

app.use("/", router);

// app.get("/", (req, res) => {
//   res.send("Hello Holberton School!");
// });
// app.get("/students", (req, res) => {
//   try {
//     res.send(countStudents(process.argv[2]));
//   } catch (error) {
//     res.send();
//   }
// });

app.listen(port);

export default app;
