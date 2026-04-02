import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20">
      <div className="container mx-auto">
        <h2 className="section-heading text-white text-center mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
              <Card className="w-full group relative overflow-hidden card-shadow border border-gray-800 bg-gray-900/60 backdrop-blur transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:border-blue-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 pointer-events-none" />
                <CardContent className="relative pt-6 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6">

                  <div className="flex items-start">
                    <div className="bg-techblue text-white p-3 rounded-full mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:ishawaris844@gmail.com" className="text-techblue hover:underline">
                        ishawaris844@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-techblue text-white p-3 rounded-full mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-400">Lahore, Pakistan</p>
                    </div>
                  </div>
                   <div className="pt-4">
                  <h4 className="font-medium mb-2">Social Profiles</h4>
                  <div className="flex space-x-3">
                    <a 
                      href="https://github.com/isha-waris" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white-200 hover:bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full transition-colors"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/isha-waris" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white-200 hover:bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>

                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Card - WhatsApp CTA */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="group relative h-full overflow-hidden card-shadow border border-gray-800 bg-gray-900/60 backdrop-blur transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:border-blue-500 flex items-center justify-center">
  
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 pointer-events-none" />

            <CardContent className="relative flex flex-col items-center justify-center text-center space-y-6">
              
              <h3 className="text-xl font-semibold">Send Me a Message</h3>

              <p className="text-gray-400">
                Click below to contact me directly on WhatsApp.
              </p>

              <a
                href="https://wa.me/923084138763?text=Hi%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white-300 hover:bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full transition-colors">
                  <MessageCircle size={16} className="mr-2" />
                  Send Message on WhatsApp
                </Button>
              </a>

            </CardContent>
          </Card>
          </motion.div> */}

        </div>
      </div>
    </section>
  );
};

export default Contact;