const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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
  subject: { type: Array, default: [] },
});
const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  pass: String,
});
const User = new mongoose.model("User", userSchema);
const Admin = new mongoose.model("Admin", adminSchema);
//Routes
//User
app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      res.send(err);
    }
    if (user) {
      bcrypt.compare(pass, user.pass, function (err, Res) {
        if (err) {
          console.log(err);
        } else {
          if (Res == true) {
            res.send({ message: `Success`, user: user });
          } else {
            res.send({ message: `Incorrect password for user ${user.name}` });
          }
        }
      });
    } else {
      res.send({ message: "User not Found" });
    }
  });
});
app.post("/register", (req, res) => {
  var { name, email, pass, branch } = req.body;
  const saltRounds = 10;
  console.log(pass);
  User.findOne({ email: email }, (er, u) => {
    if (u) {
      res.send({ message: ` email ${email} already Registered` });
    } else {
      bcrypt.hash(pass, saltRounds, (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          const user = new User({
            name: name,
            email: email,
            pass: hash,
            branch: branch,
            subject: [],
          });
          User.create(user, function (err, doc) {
            if (err) {
              res.send({ message: err });
            } else {
              res.send({
                message: `Success`,
                user: user,
              });
            }
          });
        }
      });
    }
  });
});

//Admin
app.post("/loginadmin", (req, res) => {
  const { email, pass } = req.body;
  Admin.findOne({ email: email }, (err, admin) => {
    if (err) {
      res.send(err);
    }
    if (admin) {
      bcrypt.compare(pass, admin.pass, function (err, Res) {
        if (err) {
          console.log(err);
        } else {
          if (Res == true) {
            User.find({}, function (error, docs) {
              // docs is an array of partially-`init`d documents
              // defaults are still applied and will be "populated"
              if (error) {
                res.send(error);
              }
              console.log(docs[0].name);
              res.send({ message: `Success`, user: docs, admin: admin });
            });
          } else {
            res.send({ message: `Incorrect password for admin ${admin.name}` });
          }
        }
      });
    } else {
      res.send({ message: "Admin not Found" });
    }
  });
});
//redadmin
app.post("/regadmin", (req, res) => {
  const { name, email, pass } = req.body;
  const saltRounds = 10;
  Admin.findOne({ email: email }, (er, u) => {
    if (u) {
      res.send({ message: ` email ${email} already Registered` });
    } else {
      bcrypt.hash(pass, saltRounds, (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          const admin = new Admin({
            name: name,
            email: email,
            pass: hash,
          });
          Admin.create(admin, function (err, doc) {
            if (err) {
              res.send({ message: err });
            } else {
              res.send({
                message: `Success`,
                admin: admin,
              });
            }
          });
        }
      });
    }
  });
});
//add subjects
app.post("/selectsubject", (req, res) => {
  const { id, subj } = req.body;
  console.log(subj);
  User.findByIdAndUpdate(
    id,
    { $set: { subject: subj } },
    { safe: true, upsert: true },
    function (err, model) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      return res.send({
        message: `Success`,
      });
    }
  );
  console.log(User);
});
app.listen(3001, () => {
  console.log(`Server is Running at Port 3001`);
});
