
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen space-y-24">
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up">
              About <span className="text-primary">Netrum</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
               AI-Powered Threat Detection for Safer Environments, AI-powered recognition of weapons, fights, and suspicious behavior that also Identifies unusual movements and behaviors and sends alerts to security teams in real time.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-2xl animate-fade-up">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400">
              To develop an AI-powered surveillance system capable of detecting and preventing threats in real-time.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-400">
              To revolutionize security surveillance by enabling AI-driven, autonomous threat detection, ensuring safer environments worldwide. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
