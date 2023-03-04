
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonfacebookComponent } from './components/buttons/buttonfacebook/buttonfacebook.component';
import { ButtontwitterComponent } from './components/buttons/buttontwitter/buttontwitter.component';
import { ButtoninstagramComponent } from './components/buttons/buttoninstagram/buttoninstagram.component';
import { ButtonlinkedinComponent } from './components/buttons/buttonlinkedin/buttonlinkedin.component';
import { ButtongithubComponent } from './components/buttons/buttongithub/buttongithub.component';
import { ButtonloginComponent } from './components/buttons/buttonlogin/buttonlogin.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      ButtonfacebookComponent,
      ButtontwitterComponent,
      ButtoninstagramComponent,
      ButtonlinkedinComponent,
      ButtongithubComponent,
      ButtonloginComponent,
      AboutComponent,
      ExperienceComponent,
      EducationComponent,
      SkillsComponent,
      ProjectsComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
