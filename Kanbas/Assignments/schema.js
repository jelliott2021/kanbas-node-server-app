import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
    {
        title: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        modules: Number,
        availability: Date,
        due: Date,
        until: Date,
        points: Number,
        completed: Boolean,
        description: String,
        group: String,
        gradeDisplayType: String,
        submissionType: String
    },
    { collection: "assignments" }
);
export default assignmentSchema;