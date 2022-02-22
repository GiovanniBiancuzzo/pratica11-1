import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCardComponent } from './post-card/post-card.component';

const routes: Route[] = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'active-posts',
		component: ActivePostsComponent,
	},
	{
		path: 'inactive-posts',
		component: InactivePostsComponent,
	},
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ActivePostsComponent,
		InactivePostsComponent,
  NavbarComponent,
  PostCardComponent,
	],
	imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
