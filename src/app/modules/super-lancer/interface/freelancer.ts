import {Review} from "./review";

export interface Freelancer {
    id: number;
    name: string;
    title: string;
    country: string;
    rating: number;
    description: string;
    projectsCompleted: number;
    imageUrl: string;
    rate: string;
    jobType: string;
    reviews: Review[];
}
