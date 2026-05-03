import { Button } from "@/components/ui/button";
import { Plus, LayoutGrid } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const isAdd = location.pathname === "/add";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-button)] transition-transform group-hover:scale-105">
            <LayoutGrid className="h-4.5 w-4.5" strokeWidth={2.5} />
          </div>
          <span className="text-base font-semibold tracking-tight">
            Project Showcase Portal
          </span>
        </Link>
        {!isAdd && (
          <Button asChild size="sm" className="gap-1.5 rounded-lg font-medium shadow-[var(--shadow-button)] transition-all hover:shadow-md hover:-translate-y-0.5">
            <Link to="/add">
              <Plus className="h-4 w-4" strokeWidth={2.5} />
              Add Project
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};
