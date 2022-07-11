import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}
  
  public home() {
    this.router.navigate(['/home']);
  }

  public sobre() {
    this.router.navigate(['/sobre']);
  }
}