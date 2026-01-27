'use client';

import { useTranslations } from 'next-intl';
import { technologies } from '@/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Rocket, Save, Settings, Wrench } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Palette size={20} />,
  backend: <Settings size={20} />,
  database: <Save size={20} />,
  devops: <Rocket size={20} />,
  tools: <Wrench size={20} />,
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
    <section id="technologies" className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {sortedCategories.map((category) => (
            <Card key={category} className="rounded-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-between">
                  <span className="capitalize text-lg font-medium">{t(category)}</span>
                  {categoryIcons[category]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {groupedTechnologies[category].map((tech) => {
                    return (
                      <span
                        key={tech.name}
                        className={`text-sm px-3 py-1.5 rounded-full border bg-secondary`}
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
