export interface Job {
    id: number;
    title: string;
    description: string;
    status: string;
    budget: string;
    budgetType: string;
    postedOn: string;
    skills: string[];
    estimatedHours: string;
    clientId: string;
    jobType: string;
}
