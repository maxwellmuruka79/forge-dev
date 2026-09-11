import ProjectCard from "@/features/project/components/ProjectCard";

export default function DashboardPage() {
  return (
    <div>
      Dashboard
    </div>
  );
}

const projects = [
  {
    title: "Hospital Management System",
    progress: 74,
    status: "In Progress",
  },
  {
    title: "School ERP",
    progress: 42,
    status: "Planning",
  },
];
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {projects.map((project) => (
    <ProjectCard
      key={project.title}
      {...project}
    />
  ))}
</div>