let todos = [ 
    { id: 1, title: "Task 1", completed: false, description: 'Task 1 description' },  
    { id: 2, title: "Task 2", completed: true, description: 'Task 2 description' },
    { id: 3, title: "Task 3", completed: false, description: 'Task 3 description' },  
    { id: 4, title: "Task 4", completed: true, description: 'Task 4 description' },
     ];
export default function WorkingWithArrays(app) {
    app.get("/lab5/todos", (req, res) => {
        const { completed } = req.query;
        if (completed !== undefined) {
            const completedBool = completed === "true";
            const completedTodos = todos.filter(
            (t) => t.completed === completedBool);
            res.json(completedTodos);
            return;
        }
        res.json(todos);
    });
    app.get("/lab5/todos/create", (req, res) => {
        const newTodo = {
          id: new Date().getTime(),
          title: "New Task",
          completed: false,
          description: "New Task Description",
        };
        todos.push(newTodo);
        console.log('HERE', todos);
        res.json(todos);
    });
    app.post("/lab5/todos", (req, res) => {
        const newTodo = { ...req.body,  id: new Date().getTime() };
        todos.push(newTodo);
        res.json(newTodo);
    });    
    app.get("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        res.json(todo);
    });
    app.get("/lab5/todos/:id/delete", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        todos.splice(todoIndex, 1);
        res.json(todos);
    });
    app.delete("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        if (todoIndex === -1) {
          res.status(404).json({ message: `Unable to delete Todo with ID ${id}` });
          return;
        }
        todos.splice(todoIndex, 1);
        res.sendStatus(200);
    });        
    app.get("/lab5/todos/:id/completed/:newCompleted", (req, res) => {
        const { id, newCompleted } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.completed = newCompleted;
        res.json(todo);
    });
    app.get("/lab5/todos/:id/description/:newDescription", (req, res) => {
        const { id, newDescription } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.description = newDescription;
        res.json(todo);
    });
    app.put("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        if (todoIndex === -1) {
          res.status(404).json({ message: `Unable to update Todo with ID ${id}` });
          return;
        }
        todos = todos.map((t) => {
          if (t.id === parseInt(id)) {
            return { ...t, ...req.body };
          }
          return t;
        });
        res.sendStatus(200);
    });    
};
