import { useState, useRef } from "react";
import Modal from "./Model";
export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const dialogRef = useRef();
  const inputRef = useRef();

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleAddTask() {
    if (inputRef.current.value.trim().length === 0) {
      dialogRef.current.open();
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <Modal ref={dialogRef} buttonCaption="Close">
        <h2 className="text-2xl font-bold text-stone-500 my-4">
          Invalid Input
        </h2>
        <h2 className="font-bold text-stone-400 my-4">
          Please fill the task in the fields, Input field is not in correct
          format.
        </h2>
      </Modal>
      <input
        ref={inputRef}
        type="text"
        className="w-64 px-4 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}
