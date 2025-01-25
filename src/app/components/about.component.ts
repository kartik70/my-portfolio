import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-container">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div class="relative rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105 bg-gradient-to-br from-blue-500 to-orange-500 p-1">
            <div class="bg-white dark:bg-gray-800 rounded-lg p-8">
              <div class="w-64 h-64 mx-auto relative">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full animate-pulse"></div>
                <div class="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span class="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <h2 class="text-3xl font-bold mb-6">About Me 🎯</h2>
          <p class="text-lg mb-4">
            Senior Angular Developer with 3+ years of expertise in building enterprise-scale BFSI and CRM SaaS platforms.
            Certified in Google Cloud Platform (ACE) ☁️ and AWS 🌩️, specializing in creating robust, scalable applications.
          </p>
          <div class="space-y-4">
            <div class="achievement-card">
              <span class="text-blue-500 mr-2">🏆</span>
              <span>Led development of mission-critical CRM modules</span>
            </div>
            <div class="achievement-card">
              <span class="text-blue-500 mr-2">🚀</span>
              <span>Implemented cloud-native solutions using GCP & AWS</span>
            </div>
            <div class="achievement-card">
              <span class="text-blue-500 mr-2">👨‍🏫</span>
              <span>Mentored junior developers and led technical initiatives</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .achievement-card {
      @apply flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700;
    }
  `]
})
export class AboutComponent {}