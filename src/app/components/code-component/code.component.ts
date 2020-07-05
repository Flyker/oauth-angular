import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OAuthService } from 'src/app/services/oauth.service';

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss']
})
export class CodeComponent {
    title = 'oauth';
    oauth_code: string = ''
    state: string = ''
    error_code: string = ''
    error_description: string = ''

    constructor(private activateRoute: ActivatedRoute, private oAuthService: OAuthService) {
        this.activateRoute.queryParams.subscribe(queryParams => {
            this.oauth_code = queryParams['code']
            this.state = queryParams['state']
            this.error_code = queryParams['error']
            this.error_description = queryParams['error_description']
        });
    }

    //
    GetTokenSet(event: any) {
        if (this.oauth_code) {
            this.oAuthService.getTokenSet(this.oauth_code).subscribe(ts => {
                console.log(ts)
            })
        }
    }
}
