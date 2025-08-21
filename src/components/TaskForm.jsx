import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    addTask(newTask);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Stack>
    </form>
  );
}
