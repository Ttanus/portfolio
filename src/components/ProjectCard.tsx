"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function ProjectCard({ project }: { project: any }) {
  // Automatically choose the right link (itch or fab)
  const projectLink = project.links?.itch || project.links?.fab || "#";

  // Determine link label for clarity
  const linkLabel = project.links?.itch
    ? "View on Itch.io"
    : project.links?.fab
    ? "View on Fab"
    : "View Project";

  return (
    <Card className="bg-gray-900/50 border-gray-700 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden rounded-2xl">
      <CardContent className="p-0">
        {/* Project Image */}
        <div className="relative w-full h-56">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Project Content */}
        <div className="p-5">
          <h2 className="text-xl text-blue-400 font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.map((tag: string) => (
              <span
                key={tag}
                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project Button */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-gray-600 hover:bg-blue-600 hover:text-white transition"
          >
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              {linkLabel}
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}