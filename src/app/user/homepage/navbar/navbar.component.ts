import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() isExpandedPassOut = new EventEmitter<boolean>();

  isExpanded = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.isExpandedPassOut.emit(this.isExpanded);
  }

}
