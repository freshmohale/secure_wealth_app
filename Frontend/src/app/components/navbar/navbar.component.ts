import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMobileMenuOpen = false; // Initialize the variable

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  isLoggedIn = false;
  username?: string;
  email?: string;
  currentUser: any;
  constructor(private tokenStorageService: TokenStorageService ) { }
 
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.currentUser = this.tokenStorageService.getUser()
      this.email = user.email;
    }
  }


  signout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    window.location.replace("/home")
  }

}
