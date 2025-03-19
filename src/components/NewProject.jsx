import { useRef } from "react";
import Input from "../components/Input";
import Button from "./Button";
import Modal from "./Model";

export default function NewProject({
  handleAddNewProject,
  onCancelAddNewProject,
}) {
  const dialogRef = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation
    if (
      enteredTitle.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredDueDate.trim().length === 0
    ) {
      dialogRef.current.open();
      return;
    }

    handleAddNewProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={dialogRef} buttonCaption="Close">
        <h2 className="text-2xl font-bold text-stone-500 my-4">
          Invalid Input
        </h2>
        <h2 className="font-bold text-stone-400 my-4">
          Please fill in all the fields, Input field is not in correct format.
        </h2>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="border-b flex items-center justify-end gap-4 my-4">
          <li>
            <Button onClick={onCancelAddNewProject}>Cancel</Button>
          </li>
          <li>
            <Button onClick={handleSave}>Save</Button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textAreat />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
