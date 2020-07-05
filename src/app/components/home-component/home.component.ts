import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    /*
      auth_config = {
        auth_url: 'https://accounts.google.com/o/oauth2/v2/auth',
        scope: 'https%3A//www.googleapis.com/auth/drive.metadata.readonly',
        redirect_uri: 'http%3A//localhost:4200/code',
        client_id: '244',
      }  
      */
    auth_config = {
        auth_url: 'https://oauth.yandex.ru/authorize',
        scope: 'email',
        redirect_uri: encodeURIComponent(window.location.origin + '/code'),
        client_id: 'dc5c38535fd84fd783f0ed8cf162153f',
    }
    //'http%3A//localhost:4200/code'

    oauth_href() {
        return `${this.auth_config.auth_url}?response_type=code&access_type=offline&state=yandex&redirect_uri=${this.auth_config.redirect_uri}&client_id=${this.auth_config.client_id}`;
    }
    //https://oauth.yandex.ru/verification_code

    login(event: any) {
        window.location.href = this.oauth_href();
        /*
        https://accounts.google.com/o/oauth2/v2/auth?
          scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&
          include_granted_scopes=true&
          response_type=token&
          state=state_parameter_passthrough_value&
          redirect_uri=http%3A//localhost:4200/code&
          client_id=client_id      
        */
        /*
          access_type=offline&
        */
        //window.location.href = `${this.auth_config.auth_url}?scope=${this.auth_config.scope}&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${this.auth_config.redirect_uri}&client_id=${this.auth_config.client_id}`;
        //window.location.href = `${this.auth_config.auth_url}?response_type=token&state=state_parameter_passthrough_value&redirect_uri=${this.auth_config.redirect_uri}&client_id=${this.auth_config.client_id}`;
    }
}