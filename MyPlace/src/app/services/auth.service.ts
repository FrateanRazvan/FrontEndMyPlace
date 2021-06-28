import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";
import { AUTH_TOKEN_LOCAL_STORAGE_KEY } from "../models/auth.model";

@Injectable()
export class AuthService{

    authenticationState = new BehaviorSubject(false);

    constructor(private plt: Platform) { 
        this.plt.ready().then(() => {
          this.checkToken();
        });
    }

    checkToken() {
        let token = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
          if (token) {
            this.authenticationState.next(true);
          }
      
    }

    saveToken(token: string){
        localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE_KEY, token);
    }

    getToken(): string {
        return localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
    }

    removeToken(){
        localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE_KEY);
    }

    isAuthenticated() {
        return this.authenticationState.value;
    }
}