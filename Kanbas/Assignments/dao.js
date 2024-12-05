import model from "./model.js";
import mongoose from "mongoose";
export async function findAllAssignments() {
  return await model.find();
}

export async function findAssignmentsForCourse(courseId) {
  return await model.find({ course: courseId });
}

export async function createAssignment(assignment) {
  assignment = { ...assignment, course: new mongoose.Types.ObjectId(assignment.course) };
  const newAssignment = new model({ ...assignment });
  return await newAssignment.save();
}

export async function deleteAssignment(assignmentId) {
  return await model.deleteOne({ _id: assignmentId });
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
  return await model.findByIdAndUpdate(assignmentId, assignmentUpdates, { new: true });
}

export async function findAssignmentById(assignmentId) {
  const result = await model.findById(assignmentId);
  return result;
}
