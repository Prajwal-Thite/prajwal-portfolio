import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

interface TechBadgeProps {
  tech: string;
  size?: 'sm' | 'md';
}

const getTechColor = (tech: string): string => {
  const techColors: Record<string, string> = {
    // Programming Languages
    'Python': 'bg-blue-100 text-blue-800 border-blue-200',
    'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'TypeScript': 'bg-blue-100 text-blue-800 border-blue-200',
    'Dart': 'bg-cyan-100 text-cyan-800 border-cyan-200',

    // Frontend Frameworks
    'React': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'Flutter': 'bg-blue-100 text-blue-800 border-blue-200',

    // Backend & Databases
    'Node.js': 'bg-green-100 text-green-800 border-green-200',
    'FastAPI': 'bg-teal-100 text-teal-800 border-teal-200',
    'MongoDB': 'bg-green-100 text-green-800 border-green-200',
    'PostgreSQL': 'bg-blue-100 text-blue-800 border-blue-200',
    'Redis': 'bg-red-100 text-red-800 border-red-200',
    'SQLite': 'bg-gray-100 text-gray-800 border-gray-200',

    // AI/ML Libraries
    'PyTorch': 'bg-orange-100 text-orange-800 border-orange-200',
    'TensorFlow': 'bg-orange-100 text-orange-800 border-orange-200',
    'Scikit-learn': 'bg-blue-100 text-blue-800 border-blue-200',
    'BERT': 'bg-purple-100 text-purple-800 border-purple-200',
    'spaCy': 'bg-blue-100 text-blue-800 border-blue-200',
    'OpenAI Gym': 'bg-green-100 text-green-800 border-green-200',
    'NumPy': 'bg-blue-100 text-blue-800 border-blue-200',
    'Jupyter': 'bg-orange-100 text-orange-800 border-orange-200',

    // Cloud & DevOps
    'AWS': 'bg-orange-100 text-orange-800 border-orange-200',
    'Docker': 'bg-blue-100 text-blue-800 border-blue-200',
    'Kubernetes': 'bg-blue-100 text-blue-800 border-blue-200',
    'Firebase': 'bg-yellow-100 text-yellow-800 border-yellow-200',

    // Tools & Others
    'Stripe': 'bg-purple-100 text-purple-800 border-purple-200',
    'GraphQL': 'bg-pink-100 text-pink-800 border-pink-200',
    'ElasticSearch': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Apache Airflow': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'MLflow': 'bg-blue-100 text-blue-800 border-blue-200',
    'Prometheus': 'bg-orange-100 text-orange-800 border-orange-200',
    'Bloc': 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return techColors[tech] || 'bg-gray-100 text-gray-800 border-gray-200';
};

const TechBadge = ({ tech, size = 'md' }: TechBadgeProps) => {
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-1' : 'text-xs px-2.5 py-1';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }} data-id="5jgqu97t9" data-path="src/components/TechBadge.tsx">

      <Badge
        variant="outline"
        className={`${getTechColor(tech)} ${sizeClasses} font-medium border hover:shadow-sm transition-shadow duration-200`} data-id="0z2o1x0ph" data-path="src/components/TechBadge.tsx">

        {tech}
      </Badge>
    </motion.div>);

};

export default TechBadge;