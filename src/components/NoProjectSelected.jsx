import Button from "./Button";
import noProjectImage from "../assets/no-projects.png";
export default function NoProjectSelected({ onStartNewProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An empty task list."
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-2xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started by creating a new project
      </p>
      <p className="mt-8">
        <Button onClick={onStartNewProject}>Create New Project</Button>
      </p>
    </div>
  );
}
