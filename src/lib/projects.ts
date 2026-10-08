import fs from "fs/promises";
import path from "path";

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  shortUrl?: string;
  tag: string;
  category: string;
  status: string;
  metrics: string;
  badgeColor?: string;
  featured?: boolean;
  createdAt?: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "projects.json");

export async function getProjects(): Promise<Project[]> {
  try {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return [];
    }
    throw err;
  }
}

export async function saveProjects(projects: Project[]): Promise<void> {
  const tmpFile = `${DATA_FILE}.tmp.${Date.now()}`;
  const data = JSON.stringify(projects, null, 2);
  await fs.writeFile(tmpFile, data, "utf-8");
  await fs.rename(tmpFile, DATA_FILE);
}

export async function addProject(project: Omit<Project, "id" | "createdAt">): Promise<Project> {
  const projects = await getProjects();
  const newProject: Project = {
    ...project,
    id: "proj-" + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
    createdAt: new Date().toISOString(),
    badgeColor: project.badgeColor || "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  };
  projects.unshift(newProject);
  await saveProjects(projects);
  return newProject;
}

export async function deleteProject(id: string): Promise<boolean> {
  const projects = await getProjects();
  const filtered = projects.filter((p) => p.id !== id);
  if (filtered.length === projects.length) return false;
  await saveProjects(filtered);
  return true;
}
