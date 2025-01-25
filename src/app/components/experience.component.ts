import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack: string[];
  logo: string;
  emoji: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-container" id="experience">
      <h2 class="section-title">Work Experience 💼</h2>
      
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-orange-500"></div>
        
        <div class="space-y-12">
          <div *ngFor="let exp of experiences; let i = index" 
               class="relative group"
               [class.fade-left]="i % 2 === 0"
               [class.fade-right]="i % 2 === 1">
            <div class="flex items-center justify-center">
              <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                {{ exp.emoji }}
              </div>
            </div>
            
            <div class="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                 [class.ml-12]="i % 2 === 0"
                 [class.mr-12]="i % 2 === 1">
              <div class="flex items-center mb-4">
                <img [src]="exp.logo" [alt]="exp.company" class="w-16 h-16 rounded-lg mr-4 object-contain">
                <div>
                  <h3 class="text-xl font-bold">{{ exp.role }}</h3>
                  <p class="text-gray-600 dark:text-gray-400">{{ exp.company }} | {{ exp.period }}</p>
                </div>
              </div>
              
              <ul class="list-none space-y-2 mb-4">
                <li *ngFor="let desc of exp.description" class="flex items-start">
                  <span class="mr-2">🎯</span>
                  <span class="text-gray-700 dark:text-gray-300">{{ desc }}</span>
                </li>
              </ul>
              
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of exp.techStack" 
                      class="px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full transition-all duration-300 hover:from-blue-600 hover:to-blue-700 cursor-pointer">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Enterprise SaaS Corp',
      role: 'Senior Angular Developer',
      period: '2021 - Present',
      description: [
        'Led development of mission-critical CRM modules serving 100K+ users',
        'Architected cloud-native solutions using GCP & AWS',
        'Mentored junior developers and drove technical initiatives'
      ],
      techStack: ['⚡ Angular', '📝 TypeScript', '☁️ GCP', '🌩️ AWS', '🐳 Docker'],
      logo: 'https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1720244494',
      emoji: '👨‍💻'
    },
    {
      company: 'BFSI Solutions Ltd',
      role: 'Angular Developer',
      period: '2019 - 2021',
      description: [
        'Developed retirement platform features used by major financial institutions',
        'Implemented responsive dashboards and data visualizations',
        'Reduced load time by 40% through optimization'
      ],
      techStack: ['⚡ Angular', '🔄 RxJS', '📊 D3.js', '🟢 Node.js'],
      logo: 'https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1720244494',
      emoji: '🚀'
    }
  ];
}