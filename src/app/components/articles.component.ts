import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticlesService } from '../shared/services/articles.service';
import { Article } from '../shared/interfaces/article.interface';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Articles 📚
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">Insights and thoughts on technology and development ✨</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Article Cards -->
          <div *ngFor="let article of articles" 
               class="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ article.date | date:'mediumDate' }}</span>
                <span class="mx-2 text-blue-500">•</span>
                <span class="text-sm text-blue-500">{{ article.readTime }} min read ⏱️</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {{ article.title }} {{ article.emoji }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{{ article.description }}</p>
              <a [routerLink]="['/articles', article.slug]" 
                 class="text-blue-500 hover:text-blue-600 text-sm font-medium inline-flex items-center transition-transform duration-300 group-hover:translate-x-1">
                Read more
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div *ngIf="totalPages > 1" class="mt-12 flex justify-center space-x-2">
          <button *ngFor="let page of getPages()"
                  (click)="changePage(page)"
                  [class.bg-blue-500]="currentPage === page"
                  [class.text-white]="currentPage === page"
                  class="px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium
                         hover:bg-blue-500 hover:text-white
                         border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-800
                         text-gray-700 dark:text-gray-300">
            {{ page }}
          </button>
        </div>
      </div>
    </section>
  `
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  currentPage = 1;
  totalPages = 1;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.loadArticles();
    this.articlesService.getCurrentPage().subscribe(page => {
      this.currentPage = page;
      this.loadArticles();
    });
  }

  loadArticles() {
    this.articlesService.getArticles(this.currentPage).subscribe(data => {
      this.articles = data.articles;
      this.totalPages = data.totalPages;
    });
  }

  changePage(page: number) {
    if (page !== this.currentPage) {
      this.articlesService.setCurrentPage(page);
    }
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
} 