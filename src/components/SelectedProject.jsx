import Task from "./Task";
export default function SelectedProject({
  project,
  handleDeleteProject,
  onHandleAddTask,
  onHandleDeleteTask,
  tasks,
}) {
  const formattedDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mt-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={handleDeleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{project.description}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {formattedDate(project.dueDate)}
        </p>
      </header>
      <Task
        tasks={tasks}
        onAddTask={onHandleAddTask}
        onDeleteTask={onHandleDeleteTask}
      />
    </div>
  );
}
