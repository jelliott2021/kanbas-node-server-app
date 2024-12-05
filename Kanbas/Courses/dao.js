import model from "./model.js";
import enrollments from "../Enrollments/model.js";
export function findAllCourses() {
    return model.find();
}
export function findCoursesForEnrolledUser(userId) {
    const courseIds = enrollments.find({ user: userId }).populate("course");
    return model.find({ _id: { $in: courseIds } });
}
export function createCourse(course) {
    delete course._id;
    return model.create(course);
}
export function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });
}
export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}