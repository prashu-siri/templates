import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from '../interface/job';

@Injectable({
	providedIn: 'root',
})
export class JobFinderService {
	apiUrl: string = environment.apiUrl;
	constructor(private http: HttpClient) {}

	fetchJobs(): Observable<Job[]> {
		const path = this.apiUrl + 'jobs';
		return this.http.get<Job[]>(path);
	}

	filterJobs(key: string, value: string) {
		const path = this.apiUrl + `jobs?${key}=${value}`;
		return this.http.get<Job[]>(path);
	}

	searchJobs(value: any) {
		const path = this.apiUrl + `jobs?title_like=${value}`;
		return this.http.get<Job[]>(path);
	}
}
