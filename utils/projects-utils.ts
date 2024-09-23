import { TFunction } from "i18next";

export interface Project {
    code: string;
    featured: boolean;
    isNew: boolean;
    duration: number;
    techSize: number;
}

export const getProjects = (t: TFunction): Project[] => {
    return [
        {
            code: "project1",
            featured: true,
            isNew: false,
            duration: 6,
            techSize: 4,
        },
        {
            code: "project2",
            featured: false,
            isNew: true,
            duration: 4,
            techSize: 3,
        },
        {
            code: "project3",
            featured: false,
            isNew: false,
            duration: 8,
            techSize: 5,
        },
    ];
};