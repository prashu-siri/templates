import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CommonService} from "../../service/common.service";
import {Job} from "../../interface/job";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  job: Job;

  constructor(private activatedRoute: ActivatedRoute,
              private service: CommonService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.fetchJobDetails(params.get("id"));
    });
  }

  private fetchJobDetails(id: string) {
    this.service.getJobDetails(parseInt(id)).subscribe((response: Job) => {
      this.job = response;
    });
  }
}
