import { ListItem, Checkbox, IconButton, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskItem({ task, updateTask, deleteTask }) {
  const handleToggle = () =>
    updateTask(task.id, { ...task, completed: !task.completed });

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          color="error"
          onClick={() => deleteTask(task.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox checked={task.completed} onChange={handleToggle} />
      <ListItemText
        primary={task.title}
        sx={{ textDecoration: task.completed ? "line-through" : "none" }}
      />
    </ListItem>
  );
}
