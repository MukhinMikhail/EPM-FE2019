import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/[А-я]/)
      ]
      ],
      email: ['', [
        Validators.required, Validators.email]
      ],
      phone: ['', [
        Validators.required, Validators.pattern(/\+7[0-9]{0,12}$/)]
      ],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.loginForm.controls;
    this.loginService.setName(this.loginForm.controls['name'].value);
    /** Проверяем форму на валидность */
    if (this.loginForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => {
          console.log(controlName);
          controls[controlName].markAsTouched();
        });
      return;
    }

    /** TODO: Обработка данных формы */
    this.router.navigate(['/game']);
  }
}
