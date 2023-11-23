import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private authToken: string | null = null;
  private decodedToken: any | null = null;
  private userRole: number = 0;

  constructor(private jwtHelper: JwtHelperService,private router: Router) {}

  login(token: string) {
    this.isAuthenticated = true;
    this.authToken = token;
    this.decodedToken = this.decodeToken(token);
    this.userRole = this.decodedToken.rol;
  }

  logout() {
    this.isAuthenticated = false;
    this.authToken = null;
    this.decodedToken = null;
    this.router.navigate(['/login']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getToken(): string | null {
    return this.authToken;
  }

  getDecodedToken(): any | null {
    return this.decodedToken;
  }
  private decodeToken(token: string): any {
    try {
      return this.jwtHelper.decodeToken(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  setUserRole(role: number) {
    this.userRole = role;
  }

  getUserRole(): number {
    return this.userRole;
  }
}

