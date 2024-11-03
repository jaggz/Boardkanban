import { JwtPayload, jwtDecode } from 'jwt-decode';
import type { UserData } from '../interfaces/UserData';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    if(this.loggedIn()){
      return jwtDecode<UserData>(this.getToken());
    }
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token;
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    if (!token) // Check if token exists

    try {
  
      const decoded = jwtDecode<JwtPayload>(token); // Attempt to decode the provided token using jwtDecode, expecting a JwtPayload type.
  
      const currentTime = Math.floor(Date.now() / 1000); // Get current Unix timestamp
    // Check if the decoded token has an 'exp' (expiration) property and if it is less than the current time in seconds.
      return (decoded?.exp && decoded?.exp < currentTime ? true : false); 
  
    } catch (error) {
  
      return true; // Handle decoding errors
  
    }
  }

  getToken(): string {
    // TODO: return the token
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
