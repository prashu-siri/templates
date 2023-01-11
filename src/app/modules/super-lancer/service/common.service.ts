import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Job} from "../interface/job";
import {environment} from "../../../../environments/environment";
import {Freelancer} from "../interface/freelancer";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl + "jobs");
  }

  getJobDetails(id: number): Observable<Job> {
    return this.http.get<Job>(this.baseUrl + `jobs/${id}`);
  }

  getFreelancers(): Observable<Freelancer[]> {
    return this.http.get<Freelancer[]>(this.baseUrl + `freelancers`);
  }

  getFreelancer(id): Observable<Freelancer> {
    return this.http.get<Freelancer>(this.baseUrl + `freelancers?id=${id}`)
  }
}
