import { models } from "mongoose";

const mongoose = require("mongoose");
const { menteeQuestions } = require("../utils/questions");

const menteeSchema = mongoose.Schema(
  {
    type: { type: String, default: "Mentee" },
    name: { type: String, required: true },
    gender: { type: String, default: "Prefer not to say" },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    whatsapp: { type: String, required: true },
    ipAddress: { type: String },
    ipDetails: { type: Map, of: String },
    college: { type: String, required: true },
    year: { type: Number, required: true },
    github: { type: String, required: true },
    linkedIn: { type: String, required: true },
    isFirstTime: { type: Boolean, required: true },
    question1: { type: String, default: menteeQuestions.question1 },
    answer1: { type: String, required: true },
    isBanned: { type: Boolean, default: false },
    // isVerified: { type: Boolean, default: false },
    // verifyToken: { type: String },
    TotalPoints: { type: Boolean, default: 0 },
    Ranking: { type: Boolean, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Mentee = models.Mentee || mongoose.model("Mentee", menteeSchema);
export default Mentee;
