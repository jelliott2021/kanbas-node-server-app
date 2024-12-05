import model from "./model.js";
import courses from "../Courses/model.js";
import mongoose from "mongoose";
export async function findCoursesForUser(userId) {
  const courseList = await model.find({ user: userId }).populate("course");
  return courseList.map((enrollment) => enrollment.course);
}
export async function findEnrollmentsForUser(userId) {
  return model.find({ user: userId });
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
export async function findEnrollmentForUser(userId, courseId) {
  return model.findOne({ user: userId, course: courseId });
}
export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}
