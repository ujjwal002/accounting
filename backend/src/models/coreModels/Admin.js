const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  removed: {
    //This field is likely used to indicate whether an admin account has been "soft deleted" or marked as removed. Instead of completely deleting the record from the database, setting this field to true allows the record to be marked as removed without losing the data permanently. This can be useful for data recovery, auditing, or maintaining historical records.
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: false,
    // This field is used to indicate whether an admin account is active or enabled. When true, it means the account is active and the admin can perform their assigned roles. When false, the account is disabled and the admin cannot log in or perform any actions. This is useful for temporarily suspending an account without deleting it.
  },

  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  name: { type: String, required: true },
  surname: { type: String },
  photo: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "employee",
    enum: ["owner", "admin", "manager", "employee", "create_only", "read_only"],
  },
});

module.exports = mongoose.model("Admin", adminSchema);
