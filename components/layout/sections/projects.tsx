"use client";

import React, { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { getProjects, Project } from "@/utils/projects-utils";
import Image from "next/image";
import { SectionTitle } from "@/components/layout/sections/section-title";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import placeholderImage from "/public/images/placeholder.jpg"; // Static import for placeholder

// Static imports for project images
import project1Image from "/public/projects/project1.jpg";
import project2Image from "/public/projects/project2.jpg";
import project3Image from "/public/projects/project3.jpg";

export const ProjectSection = ({ lng }: { lng: string }) => {
    const { t } = useTranslation(lng);
    const projects = getProjects(t);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    // Helper function to get static images
    const getProjectImage = (code: string) => {
        switch (code) {
            case "project1":
                return project1Image;
            case "project2":
                return project2Image;
            case "project3":
                return project3Image;
            default:
                return placeholderImage; // Fallback to placeholder
        }
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
                {/* Left Section: Project Message */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div>
                        <SectionTitle title={t("projects.title")} />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t("projects.subtitle")}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            {t("projects.description")}
                        </p>
                    </div>
                </div>

                {/* Right Section: Projects Carousel */}
                <div className="md:w-1/2 relative flex justify-center items-center">
                    <Carousel className="relative w-full">
                        <CarouselPrevious className="absolute -left-6 top-1/2 transform -translate-y-1/2" />
                        <CarouselContent className="flex space-x-4">
                            {projects.map((project) => (
                                <CarouselItem key={project.code} className="w-80 cursor-pointer">
                                    <div
                                        className="shadow-md rounded-lg p-4 flex flex-col items-center"
                                        onClick={() => handleProjectClick(project)}
                                    >
                                        <Image
                                            src={getProjectImage(project.code)}
                                            alt={t(`projects.${project.code}.title`)}
                                            width={300}
                                            height={200}
                                            className="rounded-lg mb-2"
                                        />

                                        <h3 className="text-xl font-bold mb-2 text-center">
                                            {t(`projects.${project.code}.title`)}
                                        </h3>
                                        <p className="text-sm text-muted-foreground text-center">
                                            {t(`projects.${project.code}.description`)}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className="absolute -right-6 top-1/2 transform -translate-y-1/2" />
                    </Carousel>
                </div>
            </div>

            {/* Modal for displaying project details */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-background p-8 rounded-lg shadow-lg max-w-lg w-full relative">
                        <button
                            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                            {t(`projects.${selectedProject.code}.title`)}
                        </h3>
                        <p className="text-gray-300 mb-4 text-foreground">
                            {t(`projects.${selectedProject.code}.description`)}
                        </p>
                        <ul className="list-disc pl-5 mb-4 text-foreground">
                            <li>{t(`projects.${selectedProject.code}.challenge`)}</li>
                            <li>{t(`projects.${selectedProject.code}.solution`)}</li>
                        </ul>
                        <h4 className="text-xl font-semibold mb-2 text-foreground">
                            {t("projects.results")}
                        </h4>
                        <ul className="list-disc pl-5 mb-4 text-foreground">
                            <li>{t(`projects.${selectedProject.code}.results.1`)}</li>
                            <li>{t(`projects.${selectedProject.code}.results.2`)}</li>
                            <li>{t(`projects.${selectedProject.code}.results.3`)}</li>
                            <li>{t(`projects.${selectedProject.code}.results.4`)}</li>
                        </ul>
                        <h4 className="text-xl font-semibold mb-2 text-foreground">
                            {t("projects.technologies")}
                        </h4>
                        <ul className="list-disc pl-5 text-foreground">
                            {selectedProject.techSize >= 1 && (
                                <li>{t(`projects.${selectedProject.code}.technologies.1`)}</li>
                            )}
                            {selectedProject.techSize >= 2 && (
                                <li>{t(`projects.${selectedProject.code}.technologies.2`)}</li>
                            )}
                            {selectedProject.techSize >= 3 && (
                                <li>{t(`projects.${selectedProject.code}.technologies.3`)}</li>
                            )}
                            {selectedProject.techSize >= 4 && (
                                <li>{t(`projects.${selectedProject.code}.technologies.4`)}</li>
                            )}
                            {selectedProject.techSize >= 5 && (
                                <li>{t(`projects.${selectedProject.code}.technologies.5`)}</li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
};
