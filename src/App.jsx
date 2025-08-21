import { useState, useEffect } from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #e0e7ff 0%, #f5f7fa 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          borderRadius: 4,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(8px)",
          py: 5,
          px: { xs: 2, sm: 4 },
          minWidth: { xs: "90vw", sm: 400 },
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            letterSpacing: 1,
            color: "#3f51b5",
            mb: 2,
            textShadow: "0 2px 8px rgba(63,81,181,0.08)",
          }}
        >
          Task Manager
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ mb: 4 }}>
          <TaskForm addTask={addTask} />
        </Box>
        {tasks.length === 0 ? (
          <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
            No tasks yet. Add your first task!
          </Typography>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </Container>
    </Box>
  );
}
