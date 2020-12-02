const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  admin_role: { type: String, required: true },
}, {
  timestamps: true,
});

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;