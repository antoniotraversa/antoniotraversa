import React from "react";
import PropTypes from "prop-types";
import "./css/ProjectsTypeSelector.css";

const PROJECT_TYPES = [
    { key: "ALL", label: "All" },
    { key: "WEB", label: "Web" },
    { key: "UNREAL", label: "Unreal Engine" },
    { key: "MOBILE", label: "Mobile" },
    { key: "BACKEND", label: "Backend" },
    { key: "AI", label: "AI" },
];

export default function ProjectsTypeSelector({ selectedType, onSelectType }) {
    return (
        <div className="ProjectsTypeSelector-Container" role="tablist" aria-label="Filter projects by category">
            {PROJECT_TYPES.map((type) => (
                <button
                    key={type.key}
                    className={
                        selectedType === type.key
                            ? "ProjectsTypeSelector-Button ProjectsTypeSelector-ButtonActive"
                            : "ProjectsTypeSelector-Button"
                    }
                    type="button"
                    onClick={() => onSelectType(type.key)}
                    aria-pressed={selectedType === type.key}
                >
                    {type.label}
                </button>
            ))}
        </div>
    );
}

ProjectsTypeSelector.propTypes = {
    selectedType: PropTypes.string.isRequired,
    onSelectType: PropTypes.func.isRequired,
};