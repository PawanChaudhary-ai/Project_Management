import NewTask from "./NewTask";

export default function Task({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>
      <NewTask onAdd={onAddTask} />
      {tasks.length === 0 && (
        <p className=" text-stone-800 mb-4">Project dos not have any task</p>
      )}
      <ul className="mt-8  p-4 border-2 border-stone-300 rounded-md">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <p>{task.text}</p>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}
