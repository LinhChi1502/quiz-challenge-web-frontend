import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from "../../../service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() isExpandedPassOut = new EventEmitter<boolean>();

  isExpanded = true;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.isExpandedPassOut.emit(this.isExpanded);
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }
}
