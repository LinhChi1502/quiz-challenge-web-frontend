import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {Data} from "../../model/data";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isShowing = false;
  isExpanded = true;

  sideNavOpened = true;
  // sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;

  @Output() isExpandedPassOut = new EventEmitter<boolean>();

  private readonly mediaWatcher: Subscription;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  constructor(media: MediaObserver,
              private authService: AuthService,
              private router: Router) {
    this.mediaWatcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        if (this.isExpanded === true) {
          this.isExpanded = false;
        }
        // this.sideNavMode = 'over';
      } else {
        // this.sideNavOpened = true;
        this.isExpanded = true;
        // this.sideNavMode = 'side';
      }
      if (change.mqAlias === 'xs') {
        this.toolBarHeight = 56;
      } else {
        this.toolBarHeight = 64;
      }
    });
  }

  toggleSidebar() {
    this.isExpandedPassOut.emit(this.isExpanded);
  }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['/login']);
  }

  reloadChart($event: MouseEvent) {



  }
}
