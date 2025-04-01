import { projectData } from "../utils/projects"
import ProjectCard from "./projectCard"

export default function Projects() {
    return (
        <section className="section-projects">
            <div>
                <div className="divider">
                    <span id="projetos">Projetos</span>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectData.map((project) => (
                            <ProjectCard
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}