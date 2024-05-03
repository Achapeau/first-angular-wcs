import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role: string = 'ANONYMOUS';
  private custommerConnected: boolean = false;

  constructor() { }

  getRole(): string {
    return this.role;
  }

  getCustommerConnected(): boolean {
    return this.custommerConnected;
  }

  login(value: string) {
    this.role = value;
    this.custommerConnected = true;
  }
}
