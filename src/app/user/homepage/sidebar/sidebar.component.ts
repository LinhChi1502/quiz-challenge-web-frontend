import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isExpanded!: boolean;
  @Input() isShowing!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
