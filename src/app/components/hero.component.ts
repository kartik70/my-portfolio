import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

declare const particlesJS: any; // Declare the global particlesJS function

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div id="particles-js" class="absolute inset-0"></div>
      <div class="relative z-10 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white opacity-100">
          Kartik 👨‍💻 | Angular Developer
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 opacity-100">
          🚀 Crafting scalable solutions for BFSI & CRM platforms ✨
        </p>
        <div class="space-x-4 opacity-100">
          <a href="assets/resume.pdf" download="resume.pdf" class="btn-primary group relative overflow-hidden inline-block" style="opacity:unset">
            <span class="relative z-10">📄 Download Resume</span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a href="https://www.linkedin.com/in/kartik-kakad" target="_blank" style="opacity:unset" class="btn-secondary group relative overflow-hidden inline-block">
            <span class="relative z-10">🔗 Let's Connect</span>
            <div class="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent implements OnInit {
  ngOnInit() {
    this.initParticles();
    this.initAnimations();
  }

  private initParticles() {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        color: { value: '#3B82F6' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#3B82F6',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6
        }
      }
    });
  }

  private initAnimations() {
    gsap.from('h1', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    });
    gsap.from('p', {
      duration: 1,
      y: 30,
      opacity: 0,
      delay: 0.3,
      ease: 'power3.out'
    });
    gsap.from('.btn-primary, .btn-secondary', {
      duration: 1,
      y: 20,
      opacity: 0,
      delay: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }
}