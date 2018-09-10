import {Component, ViewChild} from '@angular/core';
import { UserType } from './shared/models/user-type.model';
import { User } from './shared/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') private userForm: NgForm;
  public user: User;
  public userTypes: UserType[] = [
    new UserType('Basic', 'basic'),
    new UserType('Advanced', 'advanced'),
    new UserType('Pro', 'pro')
  ];
  public defaultType = 'basic';
  public submitted = false;

  public onReset(): void {
    this.userForm.reset();
    this.submitted = false;
    this.user = null;
    this.userForm.form.patchValue({
      userType: this.defaultType
    });
  }

  public onSubmit(value: User): void {
    this.user = value;
    this.submitted = true;
  }
}
