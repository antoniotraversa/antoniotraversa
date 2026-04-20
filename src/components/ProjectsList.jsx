import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PROJECTS, getProjectMediaById } from "../data/projectsData";
import "./css/ProjectsList.css";

function matchesSelectedType(project, selectedType) {
    if (selectedType === "ALL") {
        return true;
    }

    if (selectedType === "UNREAL") {
        return ["GAME", "EXPERIMENT", "PLUGIN"].includes(project.type)
            || project.framework.toUpperCase().includes("UNREAL ENGINE");
    }

    return project.type === selectedType;
}

export default function ProjectsList({ selectedType }) {
    const trackRef = useRef(null);
    const suppressClickRef = useRef(false);
    const dragStateRef = useRef({
        isDown: false,
        startX: 0,
        startScrollLeft: 0,
        moved: false,
    });

    const handleMouseDown = (event) => {
        if (!trackRef.current || event.button !== 0) {
            return;
        }

        dragStateRef.current.isDown = true;
        dragStateRef.current.startX = event.clientX;
        dragStateRef.current.startScrollLeft = trackRef.current.scrollLeft;
        dragStateRef.current.moved = false;
        suppressClickRef.current = false;
        trackRef.current.classList.add("is-dragging");
    };

    const handleMouseMove = (event) => {
        if (!trackRef.current || !dragStateRef.current.isDown) {
            return;
        }

        if ((event.buttons & 1) !== 1) {
            handleMouseUp();
            return;
        }

        const delta = event.clientX - dragStateRef.current.startX;
        if (Math.abs(delta) > 4) {
            dragStateRef.current.moved = true;
            suppressClickRef.current = true;
        }

        trackRef.current.scrollLeft = dragStateRef.current.startScrollLeft - delta;
    };

    const handleMouseUp = () => {
        if (!trackRef.current) {
            return;
        }

        dragStateRef.current.isDown = false;
        trackRef.current.classList.remove("is-dragging");
    };

    const handleClickCapture = (event) => {
        if (suppressClickRef.current) {
            event.preventDefault();
            suppressClickRef.current = false;
        }
    };

    const visibleProjects = PROJECTS.filter((project) => matchesSelectedType(project, selectedType));

    return (
        <section className="ProjectsList-Container" aria-label="Projects list">
            <ul
                ref={trackRef}
                className="ProjectsList-Track"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClickCapture={handleClickCapture}
            >
                {visibleProjects.length > 0 ? (
                    visibleProjects.map((project) => {
                        const projectMedia = getProjectMediaById(project.id);
                        const cover = projectMedia?.listCover ?? {
                            src: project.imageUrl,
                            alt: `${project.title} cover image`,
                        };

                        return (
                            <li key={project.id} className="ProjectCard-Item">
                                <Link
                                    className="ProjectCard"
                                    to={`/projects/${project.id}`}
                                    aria-label={`${project.title}, category ${project.type}`}
                                    draggable="false"
                                >
                                    <img className="ProjectCard-Image" src={cover.src} alt={cover.alt} draggable="false" />
                                    <div className="ProjectCard-Body">
                                        <p className="ProjectCard-Type">{project.type}</p>
                                        <h3 className="ProjectCard-Title">{project.title}</h3>
                                        <p className="ProjectCard-Framework">
                                            <span className="ProjectCard-FrameworkIcon" aria-hidden="true">{project.frameworkIcon}</span>
                                            <span>{project.framework}</span>
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        );
                    })
                ) : (
                    <li className="ProjectCard-Item" aria-live="polite">
                        <article className="ProjectCard">
                            <div className="ProjectCard-Body">
                                <p className="ProjectCard-Type">No Results</p>
                                <h3 className="ProjectCard-Title">No projects in this category</h3>
                                <p className="ProjectCard-Framework">Try another filter or select All.</p>
                            </div>
                        </article>
                    </li>
                )}
            </ul>
        </section>
    );
}

ProjectsList.propTypes = {
    selectedType: PropTypes.string.isRequired,
};