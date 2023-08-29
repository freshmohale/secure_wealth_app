import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-registration-welcome',
  templateUrl: './registration-welcome.component.html',
  styleUrls: ['./registration-welcome.component.scss']
})
export class RegistrationWelcomeComponent implements OnInit {

  isLoggedIn = false;
  username?: string;
  email?: string;
  currentUser: any;
  
  constructor(private tokenStorageService: TokenStorageService ) { }
 
  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser()
    console.log(this.currentUser)
    // this.isLoggedIn = !!this.tokenStorageService.getToken();

    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser();
    //   this.currentUser = this.tokenStorageService.getUser()
    //   this.email = user.email;
      
    // }
  }
}
