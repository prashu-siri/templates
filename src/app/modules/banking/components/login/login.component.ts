import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Constant } from "../../service/constants";
import { Alert } from "../../../shared/interface/alert";
import { AuthService } from "../../service/auth.service";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    alertDetails: Alert;
    showAlert: boolean = false;

    constructor(private route: Router, private service: AuthService, private title: Title) {
    }

    ngOnInit(): void {
        this.title.setTitle(Constant.LOGIN_TITLE);
        this.loginForm = new FormGroup({
            'customerId': new FormControl('', [
                Validators.required,
                Validators.pattern(Constant.NUMBER_PATTERN),
                Validators.minLength(8),
                Validators.maxLength(8)
            ]),
            'password': new FormControl('', Validators.required)
        })
    }

    login() {
        this.alertDetails = {
            isErrorMessage: false
        };

        if (this.loginForm.valid) {
            this.service.login();
            this.route.navigate(['/banking/home'])
        } else {
            this.showAlert = true;
            this.alertDetails = {
                message: "Please enter Customer Id and Password",
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
