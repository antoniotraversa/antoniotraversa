import React, { useState } from "react";
import ProjectsTypeSelector from "../components/ProjectsTypeSelector";
import ProjectsList from "../components/ProjectsList";

export default function Projects() {
    const [selectedType, setSelectedType] = useState("ALL");

    return (
        <section className="container section" aria-labelledby="projects-page-title">
            <div className="stack-lg">
                <div className="stack-sm">
                    <p className="eyebrow">Selected Works</p>
                    <h1 className="title-md" id="projects-page-title">Projects</h1>
                </div>

                <ProjectsTypeSelector selectedType={selectedType} onSelectType={setSelectedType} />
                <ProjectsList selectedType={selectedType} />
            </div>
        </section>
    );
}