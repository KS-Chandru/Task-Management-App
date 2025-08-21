import { List } from "@mui/material";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <List disablePadding>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </List>
  );
}
