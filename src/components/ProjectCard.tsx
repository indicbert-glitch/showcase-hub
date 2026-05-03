import { Link } from "react-router-dom";
import { ArrowUpRight, Users } from "lucide-react";
import type { Project } from "@/data/projects";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="project-card group">
      <div className="flex-1">
        <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-5">
          {project.problem}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
          <Users className="h-3.5 w-3.5" />
          <span className="font-medium">{project.team}</span>
        </div>
      </div>
      <Link
        to={`/project?id=${project.id}`}
        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground group/btn"
      >
        View Details
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </Link>
    </article>
  );
};
