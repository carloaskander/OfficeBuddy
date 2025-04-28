
import React from 'react';
import { Database, Lock, MessageCircle, Zap } from 'lucide-react';

const features = [
  {
    icon: <Database className="h-8 w-8 mb-4 text-robot-blue" />,
    title: "Centralized Information",
    description: "Connect to all company information sources through one unified AI interface for improved efficiency."
  },
  {
    icon: <Lock className="h-8 w-8 mb-4 text-robot-blue" />,
    title: "Role-Based Security",
    description: "Secure access to sensitive information with customizable role-based permissions and authentication."
  },
  {
    icon: <MessageCircle className="h-8 w-8 mb-4 text-robot-blue" />,
    title: "Remote Meetings",
    description: "Participate in meetings remotely with full video, audio, and interaction capabilities."
  },
  {
    icon: <Zap className="h-8 w-8 mb-4 text-robot-blue" />,
    title: "System Integration",
    description: "Seamlessly connect with your existing internal systems for maximum automation benefits."
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container-tight">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI Kontorsrobot provides advanced capabilities for accessing company information 
            and participating in meetings from anywhere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="tech-card flex flex-col items-center text-center group"
            >
              <div className="transform transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
