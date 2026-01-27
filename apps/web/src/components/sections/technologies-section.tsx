'use client';

import { useTranslations } from 'next-intl';
import { technologies } from '@/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Rocket, Save, Settings, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Palette size={22} />,
  backend: <Settings size={22} />,
  database: <Save size={22} />,
  devops: <Rocket size={22} />,
  tools: <Wrench size={22} />,
};

const proficiencyColors: Record<string, string> = {
  expert: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
  advanced: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  intermediate: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
};

export function TechnologiesSection() {
  const t = useTranslations('technologies');

  const groupedTechnologies = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<string, typeof technologies>
  );

  const categoryOrder: string[] = ['frontend', 'backend', 'database', 'devops', 'tools'];
  const sortedCategories = categoryOrder.filter((cat) => cat in groupedTechnologies);

  return (
    <section id="technologies" className="container mx-auto px-4 py-24 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedCategories.map((category, index) => (
            <Card
              key={category}
              className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 justify-between">
                  <span className="capitalize text-lg md:text-xl font-semibold">{t(category)}</span>
                  <div className="text-primary">{categoryIcons[category]}</div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {groupedTechnologies[category].map((tech) => {
                    return (
                      <span
                        key={tech.name}
                        className="text-sm px-3 py-1.5 rounded-full border bg-secondary/80 hover:bg-secondary transition-colors cursor-default"
                        title={tech.proficiency || 'Not specified'}
                      >
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
