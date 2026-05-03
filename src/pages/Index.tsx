import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { sampleProjects, type Project } from "@/data/projects";

const STORAGE_KEY = "showcase_projects";

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
        return;
      } catch {}
    }
    setProjects(sampleProjects);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleProjects));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-10 md:py-14">
        <section className="mb-10 md:mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {projects.length} projects showcased
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
            Discover student projects
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Browse innovative projects built by student teams. Explore problem statements, source code, and live demos.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
