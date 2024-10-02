'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useTranslation } from '@/app/i18n/client'
import { getProjects, Project } from '@/utils/projects-utils'
import Image from 'next/image'
import { SectionTitle } from '@/components/layout/sections/section-title'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import placeholderImage from '/public/images/placeholder.jpg'

import project1Image from '/public/projects/project1.jpg'
import project2Image from '/public/projects/project2.jpg'
import project3Image from '/public/projects/project3.jpg'

export const ProjectSection = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng)
  const projects = getProjects(t)
  const initialProjectIndex = Math.floor(projects.length / 2)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentIndex, setCurrentIndex] = useState(initialProjectIndex)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth
      const elementWidth =
        scrollContainerRef.current.children[0]?.getBoundingClientRect().width ||
        0
      const scrollPosition =
        currentIndex * (elementWidth + 24) -
        containerWidth / 2 +
        elementWidth / 2
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      })
    }
  }, [currentIndex])

  useEffect(() => {
    if (
      scrollContainerRef.current &&
      scrollContainerRef.current.children.length > 0
    ) {
      const containerWidth = scrollContainerRef.current.offsetWidth
      const elementWidth =
        scrollContainerRef.current.children[0]?.getBoundingClientRect().width ||
        0
      const initialScrollPosition =
        initialProjectIndex * (elementWidth + 24) -
        containerWidth / 2 +
        elementWidth / 2
      scrollContainerRef.current.scrollTo({
        left: initialScrollPosition,
        behavior: 'smooth',
      })
    }
  }, [initialProjectIndex])

  const handleProjectClick = (project: Project, index: number) => {
    if (index === currentIndex) {
      setSelectedProject(project)
    } else {
      setCurrentIndex(index)
    }
  }

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      const modal = document.getElementById('modal')
      if (modal && !modal.contains(event.target as Node)) {
        handleCloseModal()
      }
    },
    [handleCloseModal]
  )

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal()
      }
    },
    [handleCloseModal]
  )

  useEffect(() => {
    if (selectedProject) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleKeyPress)
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [selectedProject, handleOutsideClick, handleKeyPress])

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (direction === 'right' && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const getProjectImage = (code: string) => {
    switch (code) {
      case 'project1':
        return project1Image
      case 'project2':
        return project2Image
      case 'project3':
        return project3Image
      default:
        return placeholderImage
    }
  }

  return (
    <section id="projects" className="py-32">
      <SectionTitle title={t('projects.title')} />
      <div className="container grid w-full gap-10 sm:grid-cols-1 lg:grid-cols-2">
        {/* Left Section: Project Message */}
        <div className="flex w-full flex-col justify-center gap-6 lg:pr-6">
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {t('projects.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('projects.description')}
            </p>
          </div>
        </div>

        {/* Right Section: Projects Carousel */}
        <div className="relative flex w-full items-center justify-center overflow-visible px-16 py-4">
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-background/80 p-2 shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex space-x-6 overflow-x-auto pb-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.code}
                className={`${
                  index === currentIndex
                    ? 'z-20 scale-110 opacity-100'
                    : 'opacity-30'
                } w-72 flex-none cursor-pointer overflow-visible rounded-lg bg-card shadow-lg transition-transform duration-500 hover:scale-[1.05]`}
                onClick={() => handleProjectClick(project, index)}
              >
                <Image
                  src={getProjectImage(project.code)}
                  alt={t(`projects.${project.code}.title`)}
                  width={300}
                  height={200}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">
                    {t(`projects.${project.code}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`projects.${project.code}.description`)}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-bold">{project.techSize}</span>{' '}
                      Technologies
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-background/80 p-2 shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Modal for displaying project details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            id="modal"
            className="relative z-20 w-full max-w-lg rounded-lg bg-background p-8 shadow-lg"
          >
            <button
              className="absolute right-4 top-4 z-30 text-gray-700 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              {t(`projects.${selectedProject.code}.title`)}
            </h3>
            <p className="mb-4 text-foreground">
              {t(`projects.${selectedProject.code}.description`)}
            </p>
            <ul className="mb-4 list-disc pl-5 text-foreground">
              <li>{t(`projects.${selectedProject.code}.challenge`)}</li>
              <li>{t(`projects.${selectedProject.code}.solution`)}</li>
            </ul>
            <h4 className="mb-2 text-xl font-semibold text-foreground">
              {t('projects.results')}
            </h4>
            <ul className="mb-4 list-disc pl-5 text-foreground">
              <li>{t(`projects.${selectedProject.code}.results.1`)}</li>
              <li>{t(`projects.${selectedProject.code}.results.2`)}</li>
              <li>{t(`projects.${selectedProject.code}.results.3`)}</li>
              <li>{t(`projects.${selectedProject.code}.results.4`)}</li>
            </ul>
            <h4 className="mb-2 text-xl font-semibold text-foreground">
              {t('projects.technologies')}
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
  )
}

export default ProjectSection
