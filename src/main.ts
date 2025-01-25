import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header.component';
import { HeroComponent } from './app/components/hero.component';
import { AboutComponent } from './app/components/about.component';
import { SkillsComponent } from './app/components/skills.component';
import { ExperienceComponent } from './app/components/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <app-header></app-header>
      <main class="pt-20">
        <app-hero></app-hero>
        <app-about></app-about>
        <app-skills></app-skills>
        <app-experience></app-experience>
      </main>
    </div>
  `,
})
export class App {}

bootstrapApplication(App);