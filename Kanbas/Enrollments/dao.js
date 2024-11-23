import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const newEnrollment = { _id: Date.now(), user: userId, course: courseId };
  Database.enrollments = [...enrollments, newEnrollment];
  return newEnrollment;
}
export function removeUserFromCourse(enrollmentId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment._id !== enrollmentId
  );
}
export function getEnrollmentForUser(userId, courseId) {
  const { enrollments } = Database;
  return enrollments.find(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );
}
