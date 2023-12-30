import { models } from "mongoose";
import mongoose from "mongoose";
// const { { type: String, required: true }, { type: Number, required: true } } = require("../utils/SchemaTypes");
import { mentorQuestions } from "../utils/questions";
import bcrypt from "bcryptjs";

const mentorSchema = new mongoose.Schema(
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
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Project" 
      },
    ],
    acceptedPjectId: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Project" 
      },
    ],
    PRMerged: { type: Number, default: 0 },
    question1: { type: String, default: mentorQuestions.question1 },
    answer1: { type: String, required: true },
    question2: { type: String, default: mentorQuestions.question2 },
    answer2: { type: String, required: true },
    // isVerified: { type: Boolean, default: false },
    // verifyToken: { type: String },
    isSelected: { type: Boolean, default: false },
    isBanned: { type: Boolean, default: false },
    forgotPasswordToken: {type: String}
  },
  {
    timestamps: true,
  }
);


// Pre method to hash Password
mentorSchema.pre("save", async function(next) {
  if(this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 10);
  next();
})

// check Password is correct or not
mentorSchema.methods.isCorrectPassword = async function(password : string){
  return await bcrypt.compare(password, this.password)
}

const Mentor = models.Mentor || mongoose.model("Mentor", mentorSchema);

export default Mentor;
