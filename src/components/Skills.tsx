import React from 'react';
import { Code2 } from 'lucide-react';

const skills = [
  {
    category: 'Architecture',
    items: ['Event-Driven', 'Clean Architecture', 'Domain-Driven Design', 'Microservices']
  },
  {
    category: 'Backend',
    items: ['Laravel', 'NestJS', 'PHP', 'TypeScript', 'Python']
  },
  {
    category: 'Frontend',
    items: ['Vue.js', 'Nuxt.js', 'React']
  },
  {
    category: 'Mobile Development',
    items: ['Flutter', 'iOS', 'Android']
  },
  {
    category: 'Game Development',
    items: ['Unity 3D', 'AR/VR']
  },
  {
    category: 'DevOps',
    items: ['GCP', 'Docker', 'Kubernetes', 'RabbitMQ']
  }
];

export function Skills() {
  return (
    <section className="py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 flex items-center gap-3">
            <Code2 className="text-blue-400" size={32} />
            Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map(({ category, items }) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-medium text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-white/5 rounded-full text-sm hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}