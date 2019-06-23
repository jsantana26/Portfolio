import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsIndexComponent } from './projects/projects-index/projects-index.component';
import { ProjectsCSharpComponent } from './projects/projects-csharp/projects-csharp.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsIndexComponent,
    ProjectsCSharpComponent,
    HomeComponent,
    NotFoundComponent,
    ComingSoonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'projects/csharp',
        component: ProjectsCSharpComponent
      },
      {
        path: 'projects',
        component: ProjectsIndexComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
