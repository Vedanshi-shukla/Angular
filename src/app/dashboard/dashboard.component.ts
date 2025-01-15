import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 
import { CanComponentDeactivate } from '../can-deactivate.guard';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements CanComponentDeactivate {
  hasUnsavedChanges: boolean = true; // Simulate unsaved changes

  constructor(private authService: AuthService, private router: Router) {}

  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('Do you really want to leave?');
    }
    return true;
  }

  login() {
    this.authService.login(); // Simulate login
    this.router.navigate(['/dashboard']); // Redirect to dashboard
  }

  logout() {
    this.authService.logout(); // Clear the authentication state
    this.router.navigate(['/']); // Redirect to Home
  }
}