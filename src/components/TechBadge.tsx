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
    'JavaScript (ES6+)': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Javascript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'TypeScript': 'bg-blue-100 text-blue-800 border-blue-200',
    'Dart': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'PHP': 'bg-purple-100 text-purple-800 border-purple-200',
    'SQL': 'bg-gray-100 text-gray-800 border-gray-200',
    'Liquid': 'bg-teal-100 text-teal-800 border-teal-200',

    // Frontend
    'React': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'Next.js': 'bg-gray-100 text-gray-800 border-gray-200',
    'Vue.js': 'bg-green-100 text-green-800 border-green-200',
    'Flutter': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'Tailwind CSS': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'Redux': 'bg-purple-100 text-purple-800 border-purple-200',
    'Framer Motion': 'bg-purple-100 text-purple-800 border-purple-200',
    'HTML5': 'bg-orange-100 text-orange-800 border-orange-200',
    'HTML': 'bg-orange-100 text-orange-800 border-orange-200',
    'CSS3': 'bg-blue-100 text-blue-800 border-blue-200',
    'CSS': 'bg-blue-100 text-blue-800 border-blue-200',
    'D3': 'bg-orange-100 text-orange-800 border-orange-200',

    // Backend
    'Node.js': 'bg-green-100 text-green-800 border-green-200',
    'Express.js': 'bg-green-100 text-green-800 border-green-200',
    'Bun': 'bg-orange-100 text-orange-800 border-orange-200',
    'FastAPI': 'bg-teal-100 text-teal-800 border-teal-200',
    'Symfony': 'bg-gray-100 text-gray-800 border-gray-200',
    'FrankenPHP': 'bg-purple-100 text-purple-800 border-purple-200',

    // Databases
    'PostgreSQL': 'bg-blue-100 text-blue-800 border-blue-200',
    'MySQL': 'bg-orange-100 text-orange-800 border-orange-200',
    'Redis': 'bg-red-100 text-red-800 border-red-200',
    'MongoDB': 'bg-green-100 text-green-800 border-green-200',
    'Firebase': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Firestore': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Firebase Auth': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'SQLite': 'bg-gray-100 text-gray-800 border-gray-200',
    'Prisma': 'bg-teal-100 text-teal-800 border-teal-200',

    // APIs
    'GraphQL': 'bg-pink-100 text-pink-800 border-pink-200',
    'REST APIs': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'REST API': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Webhooks': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Shopify Admin API': 'bg-green-100 text-green-800 border-green-200',
    'Shopify Storefront API': 'bg-green-100 text-green-800 border-green-200',
    'Shopify Payments': 'bg-green-100 text-green-800 border-green-200',
    'Shopify Theme Development': 'bg-green-100 text-green-800 border-green-200',

    // Cloud & AWS
    'AWS': 'bg-orange-100 text-orange-800 border-orange-200',
    'AWS SQS': 'bg-orange-100 text-orange-800 border-orange-200',
    'AWS S3': 'bg-orange-100 text-orange-800 border-orange-200',
    'AWS EC2': 'bg-orange-100 text-orange-800 border-orange-200',

    // DevOps & Infra
    'Docker': 'bg-blue-100 text-blue-800 border-blue-200',
    'Kubernetes': 'bg-blue-100 text-blue-800 border-blue-200',
    'Jenkins': 'bg-red-100 text-red-800 border-red-200',
    'Bitbucket': 'bg-blue-100 text-blue-800 border-blue-200',
    'Git': 'bg-orange-100 text-orange-800 border-orange-200',
    'Cloud Functions': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Supervisor': 'bg-gray-100 text-gray-800 border-gray-200',
    'Cron Jobs': 'bg-gray-100 text-gray-800 border-gray-200',

    // Monitoring & Tools
    'Grafana': 'bg-orange-100 text-orange-800 border-orange-200',
    'Postman': 'bg-orange-100 text-orange-800 border-orange-200',
    'Figma': 'bg-purple-100 text-purple-800 border-purple-200',
    'Jira': 'bg-blue-100 text-blue-800 border-blue-200',
    'Confluence': 'bg-blue-100 text-blue-800 border-blue-200',
    'Cloudinary': 'bg-blue-100 text-blue-800 border-blue-200',
    'Google Analytics': 'bg-yellow-100 text-yellow-800 border-yellow-200',

    // Payments & CRM
    'Stripe': 'bg-purple-100 text-purple-800 border-purple-200',
    'Salesforce': 'bg-blue-100 text-blue-800 border-blue-200',

    // AI/ML
    'PyTorch': 'bg-orange-100 text-orange-800 border-orange-200',
    'TensorFlow': 'bg-orange-100 text-orange-800 border-orange-200',
    'Keras': 'bg-red-100 text-red-800 border-red-200',
    'Scikit-learn': 'bg-blue-100 text-blue-800 border-blue-200',
    'scikit-learn': 'bg-blue-100 text-blue-800 border-blue-200',
    'NumPy': 'bg-blue-100 text-blue-800 border-blue-200',
    'Pandas': 'bg-purple-100 text-purple-800 border-purple-200',
    'Matplotlib': 'bg-blue-100 text-blue-800 border-blue-200',
    'Seaborn': 'bg-blue-100 text-blue-800 border-blue-200',
    'GPT-4o': 'bg-purple-100 text-purple-800 border-purple-200',
    'ML': 'bg-purple-100 text-purple-800 border-purple-200',
    'Transformer': 'bg-purple-100 text-purple-800 border-purple-200',
    'BERT': 'bg-purple-100 text-purple-800 border-purple-200',
    'spaCy': 'bg-blue-100 text-blue-800 border-blue-200',
    'OpenAI Gym': 'bg-green-100 text-green-800 border-green-200',
    'Jupyter': 'bg-orange-100 text-orange-800 border-orange-200',
    'Jupyter Notebook': 'bg-orange-100 text-orange-800 border-orange-200',

    // Embedded & IoT
    'Arduino': 'bg-teal-100 text-teal-800 border-teal-200',
    'Embedded C': 'bg-teal-100 text-teal-800 border-teal-200',
    'Embedded Systems': 'bg-teal-100 text-teal-800 border-teal-200',
    'IoT': 'bg-teal-100 text-teal-800 border-teal-200',
    'NodeMCU ESP8266': 'bg-teal-100 text-teal-800 border-teal-200',
    'Physical Computing': 'bg-gray-100 text-gray-800 border-gray-200',

    // Mobile & Other Platforms
    'Java': 'bg-red-100 text-red-800 border-red-200',
    'Android': 'bg-green-100 text-green-800 border-green-200',
    'Google Cloud Platform': 'bg-blue-100 text-blue-800 border-blue-200',
    'Web Scraper': 'bg-gray-100 text-gray-800 border-gray-200',
    'Reinforcement Learning': 'bg-purple-100 text-purple-800 border-purple-200',
    'Thompson Sampling': 'bg-purple-100 text-purple-800 border-purple-200',

    // IoT Sensors & Hardware
    'MQ2': 'bg-teal-100 text-teal-800 border-teal-200',
    'LM35': 'bg-teal-100 text-teal-800 border-teal-200',
    'PIR Sensor': 'bg-teal-100 text-teal-800 border-teal-200',
    'Servo Motor': 'bg-teal-100 text-teal-800 border-teal-200',
    'LDR': 'bg-teal-100 text-teal-800 border-teal-200',
    'Smart Film': 'bg-teal-100 text-teal-800 border-teal-200',
    'UV Sensors': 'bg-teal-100 text-teal-800 border-teal-200',
    'Electronics': 'bg-teal-100 text-teal-800 border-teal-200',

    // Other
    'ElasticSearch': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Apache Airflow': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'MLflow': 'bg-blue-100 text-blue-800 border-blue-200',
    'Prometheus': 'bg-orange-100 text-orange-800 border-orange-200',
    'Bloc': 'bg-blue-100 text-blue-800 border-blue-200',
    'JSON': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  };

  return techColors[tech] || 'bg-gray-100 text-gray-800 border-gray-200';
};

const TechBadge = ({ tech, size = 'md' }: TechBadgeProps) => {
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-1' : 'text-xs px-2.5 py-1';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}>

      <Badge
        variant="outline"
        className={`${getTechColor(tech)} ${sizeClasses} font-medium border hover:shadow-sm transition-shadow duration-200`}>

        {tech}
      </Badge>
    </motion.div>);

};

export default TechBadge;