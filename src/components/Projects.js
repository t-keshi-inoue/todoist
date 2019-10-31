import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../context";

export const Projects = ({ activeValue = null }) => {
  const { active, setActive } = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  console.log(projects);
  console.log(active);
  console.log(setSelectedProject);
  console.log("here");
  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action-parent"
        className={
          active === project.projectId
            ? "active sidebar__project"
            : "sidebar__project"
        }
      >
        <div
          role="button"
          data-test-id="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onKeyDown={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
        >
          {("Project", JSON.stringify(project))}
        </div>
      </li>
    ))
  );
};
