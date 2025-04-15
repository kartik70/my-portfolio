import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles: Article[] = [
    {
      id: '1',
      title: 'Building Scalable Angular Applications',
      emoji: '🚀',
      description: 'Learn the best practices for building large-scale Angular applications with maintainable code structure.',
      date: '2024-03-15',
      readTime: 5,
      slug: 'building-scalable-angular-applications'
    },
    {
      id: '2',
      title: 'Modern CSS Techniques',
      emoji: '🎨',
      description: 'Explore the latest CSS features and techniques to create stunning user interfaces.',
      date: '2024-03-10',
      readTime: 8,
      slug: 'modern-css-techniques'
    },
    {
      id: '3',
      title: 'Cloud Architecture Patterns',
      emoji: '☁️',
      description: 'Understanding the fundamental patterns for building robust cloud-native applications.',
      date: '2024-03-05',
      readTime: 6,
      slug: 'cloud-architecture-patterns'
    },
    // Add more articles here
  ];

  private currentPageSubject = new BehaviorSubject<number>(1);
  private itemsPerPage = 6;

  constructor() {}

  getArticles(page: number = 1): Observable<{ articles: Article[]; totalPages: number }> {
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const paginatedArticles = this.articles.slice(startIndex, endIndex);
    const totalPages = Math.ceil(this.articles.length / this.itemsPerPage);

    return new BehaviorSubject({
      articles: paginatedArticles,
      totalPages
    }).asObservable();
  }

  getArticleBySlug(slug: string): Observable<Article | undefined> {
    return new BehaviorSubject(
      this.articles.find(article => article.slug === slug)
    ).asObservable();
  }

  getCurrentPage(): Observable<number> {
    return this.currentPageSubject.asObservable();
  }

  setCurrentPage(page: number): void {
    this.currentPageSubject.next(page);
  }
} 