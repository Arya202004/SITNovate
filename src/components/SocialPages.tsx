import React from "react";

const people = [
  {
    name: "Alice Johnson",
    role: "AI Engineer",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Bob Smith",
    role: "Machine Learning Researcher",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Charlie Lee",
    role: "Data Scientist",
    image: "https://via.placeholder.com/100",
  },
];

const SocialPage = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-primary mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {people.map((person, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <img src={person.image} alt={person.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const GitHubPage = () => <SocialPage title="GitHub Contributors" />;
export const TwitterPage = () => <SocialPage title="Top AI Influencers on Twitter" />;
export const LinkedInPage = () => <SocialPage title="AI Professionals on LinkedIn" />;
export const MailPage = () => <SocialPage title="Contact Our AI Experts" />;
