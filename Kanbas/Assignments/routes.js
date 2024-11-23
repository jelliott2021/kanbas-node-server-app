import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
  app.get("/api/assignments", (req, res) => {
    const courses = dao.findAllAssignments();
    res.send(courses);
  });
  app.get("/api/assignments/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courses = dao.findAssignmentsForCourse(courseId);
    res.send(courses);
  });
  app.put("/api/assignments/create", (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.send(newAssignment);
  });
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.send(status);
  });
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });
}