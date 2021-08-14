import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
mongoose.connect(
  "mongodb://localhost:27017/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to the database");
  }
);

//Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
  branch: String,
});
const User = new mongoose.model("User", userSchema);
//Routes
app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      res.send(err);
    }
    if (user) {
      if (pass === user.pass) {
        res.send({ message: `Success`, user: user });
      } else {
        res.send({ message: `Incorrect password for user ${user.name}` });
      }
    } else {
      res.send({ message: "User not Found" });
    }
  });
});
app.post("/register", (req, res) => {
  const { name, email, pass, branch } = req.body;
  User.findOne({ email: email }, (er, u) => {
    if (u) {
      res.send({ message: ` email ${email} already Registered` });
    } else {
      const user = new User({
        name: name,
        email: email,
        pass: pass,
        branch: branch,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({
            message: `User Registered with UserName ${name}`,
            user: user,
          });
        }
      });
    }
  });
});

app.listen(3001, () => {
  console.log(`Server is Running at Port 3001`);
});
