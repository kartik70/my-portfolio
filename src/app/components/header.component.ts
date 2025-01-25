import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const Typed: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full border-2 border-primary bg-gradient-to-br from-blue-500 to-orange-500 p-0.5">
              <div class="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span class="text-xl">👨‍💻</span>
              </div>
            </div>
            <div>
              <h1 class="text-xl font-bold inline-block" id="typed-text"></h1>
              <p class="text-sm text-gray-600 dark:text-gray-400">Building the future of web</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-6">
            <a href="https://github.com/yourusername" target="_blank" class="social-icon">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-icon">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" class="social-icon">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <button 
              (click)="toggleTheme()" 
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <i class="fas" [class.fa-sun]="isDark" [class.fa-moon]="!isDark"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  isDark = false;

  ngOnInit() {
    this.initTyped();
    this.initTheme();
  }

  private initTyped() {
    new Typed('#typed-text', {
      strings: ['Angular Developer', 'SaaS Specialist', 'Cloud Expert'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }

  private initTheme() {
    this.isDark = localStorage.getItem('theme') === 'dark';
    this.updateTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme() {
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}