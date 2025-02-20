import { Github, User } from "lucide-react";

const githubContacts = [
  { name: "Arya Hotey", handle: "Arya202004", link: "https://github.com/Arya202004", image: "" },
  { name: "Aryan Paratakke", handle: "Aryan152005", link: "https://github.com/Aryan152005", image: "" },
  { name: "Nishtha Kashyap", handle: "nishtha932005", link: "https://github.com/nishtha93200", image: "" },
];

const GithubPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <Github size={80} className="text-primary mb-4" />
      <h1 className="text-3xl font-bold mb-6">GitHub Contacts</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {githubContacts.map((contact, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            {contact.image ? (
              <img src={contact.image} alt={contact.name} className="w-24 h-24 rounded-full mb-4" />
            ) : (
              <User className="w-24 h-24 text-gray-500 mb-4" />
            )}
            <h2 className="text-xl font-semibold">
              <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {contact.name}
              </a>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              <a href={contact.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {contact.handle}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubPage;
