import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";
import type { Project } from "@/data/projects";

const STORAGE_KEY = "showcase_projects";

const AddProject = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    problem: "",
    team: "",
    srs: "",
    website: "",
    video: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stored = localStorage.getItem(STORAGE_KEY);
    const list: Project[] = stored ? JSON.parse(stored) : [];
    const newProject: Project = { id: Date.now().toString(), ...form };
    const updated = [newProject, ...list];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    toast.success("Project added successfully");
    navigate("/");
  };

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

        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Add a new project
            </h1>
            <p className="text-sm text-muted-foreground">
              Share your project with the community. All fields help others discover your work.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-[var(--shadow-card)] space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input id="title" required value={form.title} onChange={(e) => update("title", e.target.value)} placeholder="Smart Evaluation System" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="problem">Problem Statement</Label>
              <Textarea id="problem" required rows={4} value={form.problem} onChange={(e) => update("problem", e.target.value)} placeholder="Describe the problem your project solves..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="team">Team Name</Label>
              <Input id="team" required value={form.team} onChange={(e) => update("team", e.target.value)} placeholder="Team Alpha" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="srs">SRS Link</Label>
                <Input id="srs" type="url" value={form.srs} onChange={(e) => update("srs", e.target.value)} placeholder="https://drive.google.com/..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Hosted Website</Label>
                <Input id="website" type="url" value={form.website} onChange={(e) => update("website", e.target.value)} placeholder="https://example.com" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="video">Demo Video Link</Label>
              <Input id="video" type="url" value={form.video} onChange={(e) => update("video", e.target.value)} placeholder="https://youtube.com/..." />
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button type="button" variant="ghost" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit" className="gap-1.5 shadow-[var(--shadow-button)] transition-all hover:shadow-md hover:-translate-y-0.5">
                <Check className="h-4 w-4" strokeWidth={2.5} />
                Submit Project
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddProject;
