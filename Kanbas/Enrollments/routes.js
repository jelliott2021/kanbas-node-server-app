import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
 app.delete("/api/enrollments/:enrollmentId", async (req, res) => {
   const { enrollmentId } = req.params;
   const status = await dao.removeUserFromCourse(enrollmentId);
   res.send(status);
 });
 app.put("/api/enrollments/:courseId/:userId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await dao.enrollUserInCourse(userId, courseId);
    res.send(status);
  });
app.get("/api/enrollments/:courseId/:userId", async (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = await dao.getEnrollmentForUser(userId, courseId);
    res.json(enrollment);
});
}