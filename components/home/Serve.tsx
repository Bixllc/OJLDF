import * as React from 'react';
import { Shield, Users, BookOpen, CalendarDays } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  color: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: 'Legal Defense',
    description: 'Comprehensive legal support and representation for diaspora community members.',
    color: '#00843D',
    icon: Shield,
  },
  {
    title: 'Community Support',
    description: 'Building a strong network of support across the Jamaican diaspora.',
    color: '#FCD116',
    icon: Users,
  },
  {
    title: 'Education & Resources',
    description: 'Access to educational materials, workshops, and legal resources.',
    color: '#00843D',
    icon: BookOpen,
  },
  {
    title: 'Events & Programs',
    description: 'Regular community events, broadcasts, and engagement opportunities.',
    color: '#FCD116',
    icon: CalendarDays,
  },
];

function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
}

function CardContent({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export default function Serve() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900">
            How We Serve Our Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through comprehensive programs and dedicated support, we empower the Jamaican diaspora
            to thrive and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100">
              <CardContent className="p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
