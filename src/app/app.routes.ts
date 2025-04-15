import { Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles.component';
import { ArticleDetailComponent } from './components/article-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:slug', component: ArticleDetailComponent }
]; 