import { Component, OnInit } from '@angular/core';
import {CommonService} from "../../service/common.service";
import {Freelancer} from "../../interface/freelancer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss']
})
export class FreelancersComponent implements OnInit {

  freelancers: Freelancer[] = [];

  constructor(private service: CommonService, private route: Router) { }

  ngOnInit(): void {
    this.getFreelancers();
  }

  getFreelancers() {
    this.service.getFreelancers().subscribe((response: Freelancer[]) => {
      this.freelancers = response;
    })
  }

  viewFreelancer(id) {
    this.route.navigateByUrl(`super-lancer/freelancer/${id}`);
  }
}
