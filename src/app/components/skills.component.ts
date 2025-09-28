import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
  emoji: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
  // Skills Section
    <section class="section-container">
      <h2 class="text-3xl font-bold mb-8 text-center">
        Technical Skills  testttttt🚀
      </h2>
      
      <div class="flex justify-center mb-8 space-x-4">
        <button
          *ngFor="let cat of categories"
          (click)="filterSkills(cat)"
          [class.bg-blue-500]="selectedCategory === cat"
          [class.text-white]="selectedCategory === cat"
          class="px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-100 dark:hover:bg-blue-900"
        >
          {{ getCategoryEmoji(cat) }} {{ cat }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          *ngFor="let skill of filteredSkills"
          class="skill-card group"
        >
          <div class="flex flex-col items-center">
            <div class="skill-progress mb-4" [style.--progress]="skill.level + '%'">
              <span class="relative z-10 text-2xl">{{ skill.emoji }}</span>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ skill.name }}</h3>
            <div class="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                class="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 group-hover:from-blue-600 group-hover:to-blue-700"
                [style.width.%]="skill.level"
              ></div>
            </div>
            <span class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {{ skill.level }}% Proficiency
            </span>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'Frontend', emoji: '⚡' },
    { name: 'TypeScript', level: 90, category: 'Frontend', emoji: '📝' },
    { name: 'JavaScript', level: 90, category: 'Frontend', emoji: '⚙️' },
    { name: 'HTML', level: 85, category: 'Frontend', emoji: '📄' },
    { name: 'CSS', level: 80, category: 'Frontend', emoji: '🎨' },
    { name: 'RxJS', level: 85, category: 'Tools', emoji: '🔄' },
    { name: 'PrimeNG', level: 90, category: 'UI Frameworks', emoji: '✨' },
    { name: 'Angular Material', level: 85, category: 'UI Frameworks', emoji: '📐' },
    { name: 'Tailwind CSS', level: 80, category: 'UI Frameworks', emoji: '💎' },
    { name: 'Bootstrap', level: 85, category: 'UI Frameworks', emoji: '📏' },
    { name: 'Chart.js', level: 75, category: 'Tools', emoji: '📊' },
    { name: 'GCP', level: 80, category: 'Cloud', emoji: '☁️' },
    { name: 'AWS', level: 75, category: 'Cloud', emoji: '🌩️' },
    { name: 'Git', level: 90, category: 'Tools', emoji: '📦' },
    { name: 'CI/CD', level: 85, category: 'Tools', emoji: '🔄' },
    { name: 'Dependency Injection', level: 80, category: 'Advanced Concepts', emoji: '🔗' },
    { name: 'Signals', level: 75, category: 'Advanced Concepts', emoji: '📶' },
    { name: 'NgRx', level: 85, category: 'Advanced Concepts', emoji: '🌊' },
    { name: 'Dynamic Rendering Libraries', level: 70, category: 'Advanced Concepts', emoji: '📚' }
  ];

  categories = ['All', 'Frontend', 'UI Frameworks', 'Advanced Concepts', 'Tools', 'Cloud',];
  selectedCategory = 'All';

  ngOnInit() {
    this.initCursor();
  }

  private initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  get filteredSkills() {
    return this.selectedCategory === 'All'
      ? this.skills
      : this.skills.filter(skill => skill.category === this.selectedCategory);
  }

  filterSkills(category: string) {
    this.selectedCategory = category;
  }

  getCategoryEmoji(category: string): string {
    switch (category) {
      case 'All': return '🌟';
      case 'Frontend': return '🌐';
      case 'UI Frameworks': return '📦';
      case 'Charting Tools': return '📊';
      case 'Cloud': return '☁️';
      case 'Tools': return '🛠️';
      case 'Advanced Concepts': return '🔬';
      default: return '📌';
    }
  }
}