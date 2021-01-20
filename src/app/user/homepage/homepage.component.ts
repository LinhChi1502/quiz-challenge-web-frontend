import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isShowing = false;
  isExpanded = true;

  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;
  private readonly mediaWatcher: Subscription;

  constructor(media: MediaObserver) {
    this.mediaWatcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        if (this.isExpanded === true) {
          this.isExpanded = false;
        }
      } else {
        this.isExpanded = true;
      }
      if (change.mqAlias === 'xs') {
        this.toolBarHeight = 56;
      } else {
        this.toolBarHeight = 64;
      }
    });
  }

  ngOnInit(): void {
  }

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

  isExpandedGet($event: boolean){
    this.isExpanded = $event;
  }
}
