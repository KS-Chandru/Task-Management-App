import { Checkbox, IconButton, Typography, Box } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskItem({ task, updateTask, deleteTask }) {
  const handleToggle = () =>
    updateTask(task.id, { ...task, completed: !task.completed });

  return (
    <Box
      sx={{
        m: 2,
        boxShadow: 3,
        borderRadius: 2,
        transition: "transform 0.1s, box-shadow 0.1s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6,
        },
        backgroundColor: task.completed ? "#f0f0f0" : "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Checkbox
            checked={task.completed}
            onChange={handleToggle}
            sx={{ mr: 2 }}
          />
          <Typography
            variant="body1"
            sx={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "text.secondary" : "text.primary",
              fontWeight: 500,
              fontSize: "1.1rem",
              whiteSpace: "normal",
              wordBreak: "break-word",
              maxWidth: { xs: "180px", sm: "320px" },
              overflow: "hidden",
            }}
          >
            {task.title}
          </Typography>
        </Box>
        <IconButton
          edge="end"
          color="error"
          onClick={() => deleteTask(task.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
