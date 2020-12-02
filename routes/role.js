const router = require('express').Router();
let role = require('../models/role.model');
const bcryptjs = require("bcrypt");


router.route('/').get((req, res) => {
  role.find()
    .then(roles => res.json(roles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post("/add", async (req, res) => {
  let username = req.body.username;
  let admin_role = req.body.admin_role;
  let password = req.body.password;

  let user = await role.findOne({ username });
  if (user) {
    return res.status(401).json({ msg: "Username is taken!" });
  }

  const salt = await bcryptjs.genSalt(10);
  password = await bcryptjs.hash(password, salt);

  const newUser = new role({
    username,
    admin_role,
    password,
  });

  await newUser
    .save()
    .then(() => res.json('role added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  role.findById(req.params.id)
    .then(role => res.json(role))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  role.findByIdAndDelete(req.params.id)
    .then(() => res.json('role deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  role.findById(req.params.id)
    .then(role => {
      role.username = req.body.username;
      role.admin_role = req.body.admin_role;
      role.password = req.body.password;

      role.save()
        .then(() => res.json('role updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;