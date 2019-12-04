import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationItem, PageHeaderModule } from '@ux-aspects/ux-aspects';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SideMenuMode } from '@micro-focus/ux-aspects';
import { AuthCommunityService } from '../login/services/authcommunityservice.service';
import { Router } from '@angular/router';
import { LoggerService } from '../common/logging/logger.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private authService: AuthCommunityService, private router: Router, private logger: LoggerService,) {
    
  }
  logOut(): void {
    this.authService.logout();
    this.logger.log("Login status = " + this.authService.isLoggedIn);
    this.router.navigate(['/Login']);
  }
  mode: SideMenuMode = 'standard';
  autoCollapse: boolean = true;
  expanded: boolean = true;
  

}
