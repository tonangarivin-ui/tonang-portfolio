import { NextRequest, NextResponse } from "next/server";
import { getProjects, addProject, deleteProject } from "@/lib/projects";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  try {
    const list = await getProjects();
    return NextResponse.json(list);
  } catch (err) {
    return NextResponse.json({ error: "Failed to read projects." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const body = await req.json();
    if (!body.title) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }

    const created = await addProject({
      title: body.title,
      description: body.description || "Production system deployment.",
      url: body.url || "#",
      shortUrl: body.shortUrl,
      tag: body.tag || "Web Application",
      category: body.category || "Web Platform",
      status: body.status || "Live",
      metrics: body.metrics || "Active",
      featured: body.featured ?? true,
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create project." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const authed = await isAuthenticated();
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Project ID is required." }, { status: 400 });
    }

    const success = await deleteProject(id);
    if (!success) {
      return NextResponse.json({ error: "Project not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Project deleted." });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete project." }, { status: 500 });
  }
}
