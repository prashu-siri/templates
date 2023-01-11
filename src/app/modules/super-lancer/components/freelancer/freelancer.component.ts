import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommonService} from "../../service/common.service";
import {Freelancer} from "../../interface/freelancer";

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent implements OnInit {

  freelancer: Freelancer;

  constructor(private route: ActivatedRoute, private service: CommonService) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getFreelancerDetails(id);
  }

  getFreelancerDetails(id) {
    this.service.getFreelancer(id).subscribe((response: Freelancer) => {
      this.freelancer = response[0];
    });
  }

}
