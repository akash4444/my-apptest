import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    locality: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
      default: 0,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    active: { type: Boolean, default: true },
    otp: { type: String, default: "" },
    otpExpiresAt: {
      type: Date,
    },
    address: [addressSchema],
  },
  {
    timestamps: true,
  }
);

export const UserModel =
  mongoose.models.users || mongoose.model("users", userModel);
