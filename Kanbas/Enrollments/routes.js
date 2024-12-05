import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.get("/api/enrollments/:userId", async (req, res) => {
    const { userId } = req.params;
    const enrollment = await dao.findEnrollmentsForUser(userId);
    res.json(enrollment);
  });
 app.delete("/api/enrollments/:courseId/:userId", async (req, res) => {
   const { courseId, userId } = req.params;
   const status = await dao.unenrollUserFromCourse(userId, courseId);
   res.send(status);
 });
 app.put("/api/enrollments/:courseId/:userId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await dao.enrollUserInCourse(userId, courseId);
    res.send(status);
  });
app.get("/api/enrollments/:courseId/:userId", async (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = await dao.findEnrollmentForUser(userId, courseId);
    res.json(enrollment);
});
}