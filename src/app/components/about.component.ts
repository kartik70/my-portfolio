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
              <div class="kk-avatar-container mx-auto relative">
                <div class="kk-avatar">
                  <div class="code-circles"></div>
                  <div class="initials">KK</div>
                  <div class="tech-stack">
                    <span class="tech angular">Angular</span>
                    <span class="tech react">JS/TS</span>
                    <span class="tech vue">HTML</span>
                    <span class="tech node">CSS</span>
                  </div>
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
    .kk-avatar-container {
      width: 200px;
      height: 200px;
      perspective: 1000px;
    }

    .kk-avatar {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      animation: float 6s ease-in-out infinite;
    }

    .initials {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      font-weight: 900;
      font-family: 'Fira Code', monospace;
      background: linear-gradient(135deg, #3B82F6, #F97316);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
      z-index: 2;
    }

    .code-circles {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px dashed #3B82F6;
      animation: spin 20s linear infinite;
    }

    .code-circles::before,
    .code-circles::after {
      content: '';
      position: absolute;
      width: 80%;
      height: 80%;
      top: 10%;
      left: 10%;
      border-radius: 50%;
      border: 2px dashed #F97316;
      animation: spin 15s linear infinite reverse;
    }

    .code-circles::after {
      width: 60%;
      height: 60%;
      top: 20%;
      left: 20%;
      border-color: #3B82F6;
      animation-duration: 10s;
    }

    .tech-stack {
      position: absolute;
      width: 100%;
      height: 100%;
      animation: float-reverse 4s ease-in-out infinite;
    }

    .tech {
      position: absolute;
      padding: 8px;
      background: #fff;
      border-radius: 8px;
      font-family: 'Fira Code', monospace;
      font-weight: bold;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .angular {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      color: #DD0031;
    }

    .react {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      color: #61DAFB;
    }

    .vue {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      color: #41B883;
    }

    .node {
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: #339933;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }

    @keyframes float-reverse {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(10px) rotate(-5deg); }
    }

    .kk-avatar-container:hover .tech {
      transform: scale(1.2);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }

    .kk-avatar-container:hover .code-circles {
      animation-duration: 10s;
    }

    .kk-avatar-container:hover .code-circles::before {
      animation-duration: 7s;
    }

    .kk-avatar-container:hover .code-circles::after {
      animation-duration: 5s;
    }

    :host-context(.dark) .tech {
      background: #1a1a1a;
      color: #fff;
    }
  `]
})
export class AboutComponent { }