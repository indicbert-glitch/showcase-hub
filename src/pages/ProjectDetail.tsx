import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Globe, Play, Users, ExternalLink } from "lucide-react";
import { sampleProjects, type Project } from "@/data/projects";

const STORAGE_KEY = "showcase_projects";

const ProjectDetail = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const list: Project[] = stored ? JSON.parse(stored) : sampleProjects;
    setProject(list.find((p) => p.id === id) ?? null);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-20 text-center">
          <h1 className="text-xl font-semibold mb-2">Project not found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button asChild><Link to="/">Back to Home</Link></Button>
        </main>
      </div>
    );
  }

  const links = [
    { label: "SRS Document", url: project.srs, icon: FileText },
    { label: "Live Website", url: project.website, icon: Globe },
    { label: "Demo Video", url: project.video, icon: Play },
  ].filter((l) => l.url);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-10 md:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-4">
            <Users className="h-3 w-3" />
            {project.team}
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            {project.title}
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mt-8">
          <section className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)]">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Problem Statement
            </h2>
            <p className="text-base leading-relaxed text-foreground whitespace-pre-line">
              {project.problem}
            </p>
          </section>

          <aside className="bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] h-fit">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Resources
            </h2>
            <div className="space-y-2">
              {links.length === 0 && (
                <p className="text-sm text-muted-foreground">No resources provided.</p>
              )}
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3 -mx-1 rounded-lg border border-transparent hover:border-border hover:bg-secondary transition-all group"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <l.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{l.label}</span>
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
