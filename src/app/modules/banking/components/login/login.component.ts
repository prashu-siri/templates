import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Constant } from "../../service/constants";
import { Alert } from "../../../shared/interface/alert";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    alertDetails: Alert;
    showAlert: boolean = false;

    constructor(private route: Router) {
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            'customerId': new FormControl('', [
                Validators.required,
                Validators.pattern(Constant.NUMBER_PATTERN)
            ]),
            'password': new FormControl('', Validators.required)
        })
    }

    login() {
        this.alertDetails = {
            message: '',
            isSuccessMessage: false,
            isErrorMessage: false
        };
        if (this.loginForm.valid) {
            this.route.navigate(['/dashboard'])
        } else {
            this.showAlert = true;
            this.alertDetails = {
                message: "Please enter Customer Id and Password",
                isSuccessMessage: false,
                isErrorMessage: true
            };
        }
    }

    get customerId(): FormControl {
        return this.loginForm.get('customerId') as FormControl;
    }

    get password(): FormControl {
        return this.loginForm.get('password') as FormControl;
    }
}
