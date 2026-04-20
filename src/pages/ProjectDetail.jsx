import React from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectById, getProjectDetailsById, getProjectMediaById } from "../data/projectsData";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = getProjectById(projectId);
    const details = getProjectDetailsById(projectId);
    const media = getProjectMediaById(projectId);

    if (!project) {
        return (
            <section className="container section" aria-labelledby="project-not-found-title">
                <div className="card stack-sm">
                    <h1 className="title-md" id="project-not-found-title">Project not found</h1>
                    <p className="lead">The requested ID does not match any available project.</p>
                    <Link className="btn btn-primary" to="/projects">Back to Projects</Link>
                </div>
            </section>
        );
    }

    const overview = details?.overview ?? project.summary;
    const highlights = details?.highlights ?? [project.summary];
    const techNotes = details?.techNotes ?? [project.framework, project.status];
    const statusNote = details?.statusNote ?? "The project is continuing to evolve with the same overall direction.";
    const nextStep = details?.nextStep ?? "Further iterations will refine the experience, structure, and visual clarity.";
    const mainImage = media?.mainImage ?? {
        src: project.imageUrl,
        alt: `${project.title} main image`,
    };

    const photoGallery = Array.isArray(media?.photoGallery) && media.photoGallery.length > 0
        ? media.photoGallery
        : [{ src: project.imageUrl, alt: `${project.title} gallery image` }];

    const videoGallery = Array.isArray(media?.videoGallery) ? media.videoGallery : [];

    return (
        <section className="container section project-detail-page" aria-labelledby="project-detail-title">
            <div className="stack-lg">
                <Link className="project-detail-back" to="/projects">
                    Back to Projects
                </Link>

                <article className="card project-detail-hero">
                    <div className="project-detail-hero-grid">
                        <div className="project-detail-media stack-sm">
                            <img
                                className="project-detail-cover"
                                src={mainImage.src}
                                alt={mainImage.alt}
                            />
                            <p className="project-detail-caption">{details?.mediaNote ?? "Primary project visual"}</p>
                            <div className="project-detail-pill-row">
                                <span className="project-detail-pill">{project.type}</span>
                                <span className="project-detail-pill project-detail-pill-soft">{project.status}</span>
                            </div>
                        </div>

                        <div className="project-detail-copy stack-lg">
                            <div className="stack-sm">
                                <p className="eyebrow">Project Detail</p>
                                <h1 className="display-title project-detail-title" id="project-detail-title">
                                    {project.title}
                                </h1>
                                <p className="lead project-detail-lead">{overview}</p>
                            </div>

                            <div className="project-detail-facts card stack-sm">
                                <h2 className="title-md">Project facts</h2>
                                <dl className="project-detail-facts-list">
                                    <div>
                                        <dt>Framework</dt>
                                        <dd>{project.framework}</dd>
                                    </div>
                                    <div>
                                        <dt>Category</dt>
                                        <dd>{project.type}</dd>
                                    </div>
                                    <div>
                                        <dt>Status</dt>
                                        <dd>{project.status}</dd>
                                    </div>
                                    <div>
                                        <dt>Focus</dt>
                                        <dd>{details?.mediaLabel ?? "Product, UI, and technical clarity"}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </article>

                <div className="project-detail-layout">
                    <article className="card stack-sm project-detail-section">
                        <h2 className="title-md">Overview</h2>
                        <p className="about-text">{overview}</p>
                        <p className="about-text">{statusNote}</p>
                    </article>

                    <article className="card stack-sm project-detail-section">
                        <h2 className="title-md">Key highlights</h2>
                        <ul className="project-rich-list" aria-label="Key highlights">
                            {highlights.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>

                    <article className="card stack-sm project-detail-section project-detail-media-section">
                        <h2 className="title-md">Media galleries</h2>

                        <div className="stack-sm">
                            <h3 className="project-subtitle">Photo gallery</h3>
                            <div className="project-media-grid">
                                {photoGallery.map((photo, index) => (
                                    <figure key={`${photo.src}-${index}`} className="project-media-card">
                                        <img src={photo.src} alt={photo.alt ?? `${project.title} photo ${index + 1}`} />
                                        <figcaption>
                                            <strong>{photo.caption || `Photo ${index + 1}`}</strong>
                                            <span>{photo.kind || "gallery"}</span>
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>

                        <div className="stack-sm">
                            <h3 className="project-subtitle">Video gallery</h3>
                            {videoGallery.length > 0 ? (
                                <div className="project-video-grid">
                                    {videoGallery.map((video, index) => (
                                        <article key={`${video.title}-${index}`} className="project-media-card project-video-card">
                                            <div className="project-media-placeholder-copy">
                                                <strong>{video.title || `Video ${index + 1}`}</strong>

                                                {video.embedUrl ? (
                                                    <div className="project-video-frame-wrap">
                                                        <iframe
                                                            className="project-video-frame"
                                                            src={video.embedUrl}
                                                            title={video.title || `Video ${index + 1}`}
                                                            loading="lazy"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            referrerPolicy="strict-origin-when-cross-origin"
                                                            allowFullScreen
                                                        />
                                                    </div>
                                                ) : video.thumbnail ? (
                                                    <img className="project-video-thumb" src={video.thumbnail} alt={`${video.title || `Video ${index + 1}`} thumbnail`} />
                                                ) : (
                                                    <p>No embed URL yet. Add one in project data to render the video player.</p>
                                                )}

                                                {video.description ? <p>{video.description}</p> : null}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <article className="project-media-card project-media-placeholder">
                                    <div className="project-media-placeholder-copy">
                                        <strong>{details?.videoLabel ?? "Video gallery"}</strong>
                                        <p>{details?.videoNote ?? "No videos yet. Add items to media.videoGallery in project data."}</p>
                                    </div>
                                </article>
                            )}
                        </div>
                    </article>

                    <article className="card stack-sm project-detail-section">
                        <h2 className="title-md">Technical snapshot</h2>
                        <div className="project-tag-cloud" aria-label="Technical notes">
                            {[project.framework, ...techNotes].map((note) => (
                                <span key={note} className="project-tag">{note}</span>
                            ))}
                        </div>
                        <p className="about-text">{nextStep}</p>
                    </article>
                </div>
            </div>
        </section>
    );
}