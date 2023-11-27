export interface Job {
	id: number;
	title: string;
	description: string;
	status: string;
	salary: string;
	postedOn: string;
	skills: string[];
	clientId: string;
	jobType: string;
	applicants: number;
	type: string;
	city: string;
	state: string;
	company: string;
}
