const router = require("express").Router();
const session = require("express-session");
const bcryptjs = require("bcrypt");

let Role = require("../models/role.model");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  let user = await Role.findOne({ username });

  if (!user) {
    console.log("No user with this username! " + error.message);
    return res.status(401).json({ msg: "No user with this username!" });
  }

  let passCheck = await bcryptjs.compare(password, user.password);
  // const userRole = await Role.find({username});
  if (passCheck) {
    req.session.user = { username: user.username, role: user.admin_role };
    return res.status(200).json({
      success: true,
      userInfo: req.session.user,
    });
  } else {
    console.log("Wrong password");
    res.status(401).json({ msg: "Password doesn't match" });
  }
});

// router.get('/currentUser', async (req, res) => {
//     console.log('SESSION',req.session);
//     if(!(req.session.user == undefined || req.session.user.username == undefined)){
//     const user = await User.find({username: req.session.user.username});
//     console.log('USER', user);
//     if(user){
//       return res.status(200).json({user})
//     }
//   }
//     return res.status(401).json({err: 'user not found'})

// })

router.get("/logout", (req, res, next) => {
  try {
    req.session.destroy();
    res.clearCookie("cookie");
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
    res.end();
  }
});

module.exports = router;
