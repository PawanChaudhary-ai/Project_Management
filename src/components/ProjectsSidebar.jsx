import Button from "./Button";
export default function ProjectsSidebar({
  onStartNewProject,
  handleSelectedProject,
  projects,
  selectedProjectId,
}) {
  console.log("selectedProjectId IN pROJECTS SIDEBAR", selectedProjectId);
  return (
    <aside className=" w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartNewProject}>+Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClassName =
            "w-full text-left py-1 px-2 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-700";

          if (selectedProjectId === project.id) {
            cssClassName += " text-stone-200 bg-stone-800";
          } else {
            cssClassName += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => handleSelectedProject(project.id)}
                className={cssClassName}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
