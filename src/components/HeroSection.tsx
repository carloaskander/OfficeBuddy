
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <ParticleBackground />
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              <span className="gradient-text">AI Kontorsrobot</span>
              <br />Enhanced Information Access
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Connect to company information and participate in meetings seamlessly with our advanced AI agent technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="btn-gradient">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="shadow-sm">
                View Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-full h-[400px] bg-gradient-blue rounded-2xl overflow-hidden shadow-2xl relative animate-float">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-xl bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-robot-blue-light rounded-full flex items-center justify-center shadow-lg mb-4">
                      <div className="w-12 h-12 bg-white rounded-full animate-pulse-slow"></div>
                    </div>
                    <p className="text-white font-tech tracking-wider">AI AGENT ONLINE</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-robot-blue-light rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-robot-blue rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
