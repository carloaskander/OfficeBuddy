
import React from 'react';
import { Calendar, Video, Mic, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MeetingSection = () => {
  return (
    <section id="meetings" className="section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Meetings <span className="gradient-text">From Anywhere</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Our AI Agent allows you to participate in meetings remotely through the robot.
              Book in advance, join via video conferencing, and interact in real-time
              as if you were physically present.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-robot-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Easy Booking</h3>
                  <p className="text-gray-600 text-sm">Schedule meeting participation with a few clicks</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                  <Video className="h-6 w-6 text-robot-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Video Presence</h3>
                  <p className="text-gray-600 text-sm">Join with crystal clear video and audio</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                  <Mic className="h-6 w-6 text-robot-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Voice Interaction</h3>
                  <p className="text-gray-600 text-sm">Speak naturally and be heard clearly</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-4 flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-robot-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Realtime Chat</h3>
                  <p className="text-gray-600 text-sm">Send text messages during the meeting</p>
                </div>
              </div>
            </div>
            
            <Button className="btn-gradient">
              Book a Meeting
            </Button>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main device frame */}
              <div className="bg-gray-800 rounded-3xl p-3 shadow-2xl">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl aspect-video overflow-hidden relative">
                  {/* Meeting screen content */}
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-1">
                    <div className="bg-blue-900/30 rounded-lg overflow-hidden flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-robot-blue-light/50 flex items-center justify-center">
                        <span className="text-xs text-white font-tech">U1</span>
                      </div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg overflow-hidden flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-robot-blue-light/50 flex items-center justify-center">
                        <span className="text-xs text-white font-tech">U2</span>
                      </div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg overflow-hidden flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-robot-blue-light/50 flex items-center justify-center">
                        <span className="text-xs text-white font-tech">U3</span>
                      </div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg overflow-hidden flex items-center justify-center relative">
                      <div className="w-full h-full bg-gradient-blue opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-pulse-slow">
                          <div className="w-12 h-12 bg-robot-blue-light rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-tech">YOU</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Control bar */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <Mic className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-robot-blue-light rounded-full flex items-center justify-center animate-pulse-slow">
                      <Video className="h-4 w-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-robot-blue-light rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-4 -left-8 w-24 h-24 bg-robot-blue rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingSection;
