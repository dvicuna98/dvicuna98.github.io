import React from 'react';
import { Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Software Architect',
    company: 'Universidad Casa Grande',
    period: 'Aug 2024 — Present',
    description: [
      'Leading architectural decisions and technical strategy for university software systems.',
      'Implementing modern software architecture patterns and best practices.',
      'Guiding development teams in building scalable and maintainable solutions.'
    ]
  },
  {
    title: 'Senior Software Engineer & Co-Leader',
    company: 'FUNIBER',
    period: 'Mar 2024 — Aug 2024',
    description: [
      'Led a team in software application development and implementation.',
      'Designed and deployed microservices for legacy system integration.'
    ]
  },
  {
    title: 'Chapter Lead',
    company: 'FUNIBER',
    period: 'Apr 2023 — Aug 2024',
    description: [
      'Designed and architected projects implementing Domain-Driven Design principles.',
      'Managed technical webinars and established institutional partnerships.'
    ]
  }
];

export function Experience() {
  return (
    <section className="py-32" id="experience">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-3">
            <Building2 className="text-blue-400" size={32} />
            Experience
          </h2>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-400 before:to-transparent"
              >
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-blue-400">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <ul className="space-y-2 mt-4 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="block w-1 h-1 mt-2 bg-blue-400 rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}