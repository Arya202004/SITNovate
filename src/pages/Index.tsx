
import { ArrowRight, Brain, Code, Share2 } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent">
          {/* Animated light effect */}
          <div className="absolute inset-0 animate-pulse opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-slide" />
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary/20 animate-float"
                style={{
                  width: Math.random() * 10 + 5 + "px",
                  height: Math.random() * 10 + 5 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  animationDelay: Math.random() * 5 + "s",
                  animationDuration: Math.random() * 10 + 10 + "s",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
                Advancing AI Through 
                <span className="text-primary animate-pulse"> Innovation</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            AI-Powered Threat Detection for Safer Environments. AI-powered recognition of weapons, fights, and suspicious behavior that also Identifies unusual movements and behaviors and sends alerts to security teams in real time.
            </p>
            <div className="flex gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <a 
                href="/projects" 
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors inline-flex items-center gap-2 hover:scale-105 transform duration-200"
              >
                View Projects <ArrowRight size={20} />
              </a>
              <a 
                href="/about" 
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:scale-105 transform duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Animated text strip */}
        <div className="absolute bottom-0 left-0 right-0 py-4 bg-primary/5 backdrop-blur-sm overflow-hidden">
          <div className="animate-scroll-x whitespace-nowrap">
            <span className="inline-block mx-4 text-primary/60">Machine Learning</span>
            <span className="inline-block mx-4 text-primary/60">Deep Learning</span>
            <span className="inline-block mx-4 text-primary/60">Computer Vision</span>
            <span className="inline-block mx-4 text-primary/60">Natural Language Processing</span>
            <span className="inline-block mx-4 text-primary/60">Reinforcement Learning</span>
            <span className="inline-block mx-4 text-primary/60">Neural Networks</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-transform animate-hover">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Brain className="text-primary animate-pulse" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI Models</h3>
            <p className="text-gray-600 dark:text-gray-400">
            <ol style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li> Weapon Detection (CNNs) – Detects guns, knives, explosives.</li>
            <li> Behavior Analysis (RNNs) – Identifies fights, aggression, and anomalies.</li>
            <li> Anomaly Detection (Unsupervised Learning) – Detects unusual movement and loitering.Uses CNNs</li>
            </ol>
            </p>
          </div>
          
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-transform animate-hover" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Code className="text-primary animate-pulse" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <p className="text-gray-600 dark:text-gray-400">
            <ol style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li> Real-Time Processing – Instant threat detection.</li>
            <li> Smart Alerts & Notifications – Notifies security teams instantly.</li>
            <li> Seamless CCTV Integration – Works with existing cameras.</li>
            <li> Cloud & On-Premises Support – Scalable and flexible.</li>
            </ol>
            </p>
          </div>
          
          <div className="glass p-8 rounded-2xl hover:scale-105 transition-transform animate-hover" style={{ animationDelay: "0.4s" }}>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Share2 className="text-primary animate-pulse" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Case Studies & Use Cases</h3>
            <p className="text-gray-600 dark:text-gray-400">
            <ol style={{ listStyleType: "disc", marginLeft: "20px" }}>
             <li> Airports, metro stations, malls.</li> 
             <li> Schools, universities, corporate offices.</li> 
             <li> Government security & law enforcement.</li>
            </ol>
            </p>
          </div>
        </div>
      </section>

      {/* Latest Projects Preview */}
      <section className="container mx-auto px-6 pb-32">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-up">Latest Analysis of Threats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {[1].map((i) => (
            <div 
              key={i} 
              className="glass overflow-hidden rounded-2xl hover:scale-105 transition-transform animate-fade-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/30 to-purple-500/30 animate-gradient" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Reference Articles</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        <li>
          <a
            href="https://en.wikipedia.org/wiki/Encounter_killing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Encounter Killings in India - a notable phenomenon in the country is the occurrence of encounter killings, a term used to describe extrajudicial killings by law enforcement agencies. (Wikipedia)
          </a>
        </li>
        <li>
          <a
            href="https://timesofindia.indiatimes.com/topic/shooting-incident"
            target="_blank"
            rel="noopener noreferrer"
          >
            Latest Shooting Incidents - Specific data on shooting incidents are included under broader categories like murder or violent crimes. (Times of India)
          </a>
        </li>
        <li>
          <a
            href="https://www.hindustantimes.com/india-news"
            target="_blank"
            rel="noopener noreferrer"
          >
            Latest Crime News - Recent crime incidents in India have drawn significant attention, highlighting ongoing concerns about violence and public safety. (Hindustan Times)
          </a>
        </li>
        <li>
          <a
            href="https://www.thehindu.com/news/national/"
            target="_blank"
            rel="noopener noreferrer"
          >
            National Security & Crime Reports - The Hindu is a prominent Indian newspaper that provides extensive coverage on national security and crime-related news. (The Hindu)
          </a>
        </li>
      </ul> 
                </p>
                <a 
                  href="#" 
                  className="text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
