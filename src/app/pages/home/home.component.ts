import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToActivePosts () {
    this.router.navigate(['/active-posts']);
  }

  goToInactivePosts () {
    this.router.navigate(['/inactive-posts']);
  }
}
