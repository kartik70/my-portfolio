import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticlesService } from '../shared/services/articles.service';
import { Article } from '../shared/interfaces/article.interface';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div *ngIf="article" class="prose dark:prose-invert max-w-none">
          <!-- Back button -->
          <a routerLink="/articles" 
             class="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8 group">
            <svg class="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Articles
          </a>

          <!-- Article header -->
          <div class="mb-8">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {{ article.title }} {{ article.emoji }}
            </h1>
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{{ article.date | date:'mediumDate' }}</span>
              <span class="mx-2">•</span>
              <span>{{ article.readTime }} min read ⏱️</span>
            </div>
          </div>

          <!-- Article content -->
          <div class="mt-8">
            <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ article.description }}
            </p>
            <!-- Add more content here when available -->
            <div class="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <p class="text-gray-600 dark:text-gray-400">
                Full article content coming soon! 📝
              </p>
            </div>
          </div>
        </div>

        <!-- Loading state -->
        <div *ngIf="!article" class="animate-pulse">
          <div class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-8"></div>
          <div class="space-y-4">
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ArticleDetailComponent implements OnInit {
  article?: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.articlesService.getArticleBySlug(slug).subscribe(article => {
        this.article = article;
      });
    });
  }
} 