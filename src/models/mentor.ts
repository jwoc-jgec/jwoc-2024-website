import { models } from "mongoose";

const mongoose = require("mongoose");
// const { { type: String, required: true }, { type: Number, required: true } } = require("../utils/SchemaTypes");
const mentorQuestions = require("../utils/questions");
const mentorSchema = mongoose.Schema(
  {
    type : {type : String , default : "Mentor" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    whatsapp: { type: Number, required: true },
    gender: { type: String, default: "Prefer not to say" },
    ipAddress: { type: String },
    college: { type: String, required: true },
    year: { type: Number, required: true },
    github: { type: String, required: true },
    linkedIn: { type: String, required: true },
    RegisteredProjectId: [
      {
        projId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" 
         },
      },
    ],
    acceptedPjectId: [
      {
        projId:{ type: mongoose.Schema.Types.ObjectId, ref: "Project" 
         },
      },
    ],
    PRMerged: { type: Number, default: 0 },
    question1: { type: String, default: mentorQuestions.question1 },
    answer1: { type: String, required: true },
    question2: { type: String, default: mentorQuestions.question2 },
    answer2: { type: String, required: true },
    isSelected: { type: Boolean, default: false },
    isBanned: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Mentor = models.Mentor || mongoose.model("Mentor", mentorSchema);

export default Mentor;
