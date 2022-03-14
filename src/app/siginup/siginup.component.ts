import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.css']
})

export class SiginupComponent implements OnInit {

  signupForm = new FormGroup({
    'displayName' : new FormControl('', Validators.required),
    'email': new FormControl('' , [ Validators.required , Validators.email]),
    'password':new FormControl('', Validators.required)
  });
  firebaseErrorMessage:string | undefined;
  constructor(private authService : AuthService , private router : Router , private auth:AngularFireAuth, private fb : FormBuilder) {
      this.firebaseErrorMessage = "";
   }

  ngOnInit(): void {

  }

  signup(){
    if(this.signupForm?.invalid)
      return;
    this.authService.signupUser1(this.signupForm.value.email , this.signupForm.value.password).then((result:any)=>{
      console.log(result);
      if (result !== null)  
        this.router.navigate(['/dashboard']);
      else if (result.isvalid == false) 
        this.firebaseErrorMessage = result.message;
    }).catch(()=> {

    });
  }
}
