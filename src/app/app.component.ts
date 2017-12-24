import { 
  Component,
  OnDestroy,
 } from '@angular/core';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public loggedIn: boolean;
  public onSignUp: boolean;
  private sub: any;

  constructor(private router: Router) { 
    this.sub = router.events.subscribe((route:any) => {
      this.onSignUp = !!(route.url === "/sign-up");
      this.loggedIn = !!localStorage.getItem('token');
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public logout(): void {
    this.router.navigate(['/login']);
  }

  public signUp(): void {
    this.router.navigate(['/sign-up']);
  }

  public goToMain(): void {
    this.router.navigate(['/main']);
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
