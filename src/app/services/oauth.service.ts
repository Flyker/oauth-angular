import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { TokenSet } from '../models/tokenset.model';

@Injectable({ providedIn: 'root' })
export class OAuthService {
    //конструктор
    constructor(
        private httpClient: HttpClient,
    ) {

    }

    //
    oauth_url: string = 'https://oauth.yandex.ru'
    user_url: string = 'https://login.yandex.ru'

    //
    getTokenSet(oauth_code: string) {
        let httpHeaders = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        });
        return this.httpClient.post<TokenSet>(`${this.oauth_url}/token`, {
            grant_type: "authorization_code",
            code: oauth_code
        }, {
            headers: httpHeaders
        });
    }

    //
    getUserInfo(access_token: string) {
        return this.httpClient.get(`${this.user_url}/info?format=json&oauth_token=${access_token}`);
    }
}