import mongoose, { models } from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true
        },
        projectLink: {
            type: String,
            required: true
        },
        projectDescription: {
            type: String,
            required: true
        },
        projectTypes: {
            type: String,
            required: true
        },
        projectTags: [
            {
                type: String
            }
        ],
        projectOwner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mentor",
            required : true
        },
        videoLink: String,
        PRMerged: {
            type: Number,
            default: 0
        },
        isSelected: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps : true
    }
)

const Project = models.Project || mongoose.model("Project", projectSchema);

export default Project;