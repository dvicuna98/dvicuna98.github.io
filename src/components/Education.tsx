import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const certifications = {
  'NestJS Official': [
    'NestJS Microservices',
    'NestJS Authentication and Authorization',
    'NestJS Architecture & Advanced Patterns',
    'NestJS Fundamentals',
    'NestJS Advanced Concepts'
  ],
  'Platzi': [
    'Docker',
    'Advanced Flutter',
    'Git and GitHub',
    'PHP with Laravel',
    'Web Development'
  ],
  'Particular Software': [
    'Distributed Systems Design Fundamentals'
  ]
};

export function Education() {
  return (
    <section className="py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Formal Education */}
          <div>
            <h2 className="text-4xl font-bold mb-16 flex items-center gap-3">
              <GraduationCap className="text-blue-400" size={32} />
              Education
            </h2>
            
            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-400 before:to-transparent">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Computer Science Engineer</h3>
                <p className="text-blue-400">Universidad Politécnica Salesiana</p>
                <p className="text-gray-400 text-sm">Mar 2018 — Mar 2023</p>
                <ul className="space-y-2 mt-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 bg-blue-400 rounded-full"></span>
                    <span>Led development of distributed teacher evaluation system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="block w-1 h-1 mt-2 bg-blue-400 rounded-full"></span>
                    <span>Developed AR learning application using Unity 3D</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-4xl font-bold mb-16 flex items-center gap-3">
              <Award className="text-blue-400" size={32} />
              Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {Object.entries(certifications).map(([platform, courses]) => (
                <div key={platform} className="space-y-4">
                  <h3 className="text-xl font-medium text-blue-400 flex items-center gap-2">
                    {platform}
                    <a 
                      href="https://www.linkedin.com/in/diego-jeanpierre-vicu%C3%B1a-rodr%C3%ADguez-8b1532203/?locale=en_US#education" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-gray-400 hover:text-blue-400"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </h3>
                  <ul className="space-y-2">
                    {courses.map((course) => (
                      <li key={course} className="flex items-start gap-2 text-gray-300">
                        <span className="block w-1 h-1 mt-2 bg-blue-400 rounded-full"></span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}