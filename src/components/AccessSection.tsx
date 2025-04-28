
import React from 'react';
import { Shield, Users, User, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const accessLevels = [
  {
    icon: <Users className="h-10 w-10 text-blue-400" />,
    title: "General Access",
    description: "Open access to general company information, policies, and public resources for all employees.",
    features: [
      "Company announcements",
      "General policies",
      "Public documents",
      "Basic tools and resources"
    ],
    highlight: false
  },
  {
    icon: <User className="h-10 w-10 text-indigo-500" />,
    title: "Team Access",
    description: "Role-specific access to department resources and collaborative team tools.",
    features: [
      "Department documentation",
      "Team calendars and schedules",
      "Project management tools",
      "Shared team resources"
    ],
    highlight: true
  },
  {
    icon: <Lock className="h-10 w-10 text-purple-600" />,
    title: "Secure Access",
    description: "Highly secure access to sensitive company information with advanced authentication.",
    features: [
      "Financial information",
      "HR records",
      "Strategic planning documents",
      "Confidential business data"
    ],
    highlight: false
  }
];

const AccessSection = () => {
  return (
    <section id="access" className="section bg-gray-50">
      <div className="container-tight">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-robot-blue" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Role-Based <span className="gradient-text">Access Levels</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our system provides different levels of information access based on roles and security clearance,
            ensuring that the right information is available to the right people.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessLevels.map((level, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 md:p-8 transition-all duration-300 ${
                level.highlight 
                  ? 'bg-gradient-blue text-white shadow-xl transform hover:-translate-y-1' 
                  : 'bg-white text-gray-800 border border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              <div className={`p-3 rounded-full inline-flex ${
                level.highlight ? 'bg-white/20' : 'bg-gray-100'
              } mb-6`}>
                {level.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{level.title}</h3>
              <p className={`${level.highlight ? 'text-blue-100' : 'text-gray-600'} mb-6`}>
                {level.description}
              </p>
              <ul className="mb-6 space-y-2">
                {level.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className={`mr-2 mt-1 h-4 w-4 rounded-full ${
                      level.highlight ? 'bg-white/80' : 'bg-blue-100'
                    } flex items-center justify-center flex-shrink-0`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                variant={level.highlight ? "secondary" : "outline"} 
                className={`w-full ${
                  level.highlight 
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20' 
                    : ''
                }`}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
