import { Linkedin, User } from "lucide-react";

const linkedinContacts = [
  { name: "Michael Scott", handle: "@michaelbiz", link: "https://linkedin.com/in/michaelbiz", image: "" },
  { name: "Pam Beesly", handle: "@pam_creative", link: "https://linkedin.com/in/pam_creative", image: "" },
  { name: "Jim Halpert", handle: "@jim_networking", link: "https://linkedin.com/in/jim_networking", image: "" },
];

const LinkedinPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <Linkedin size={80} className="text-primary mb-4" />
      <h1 className="text-3xl font-bold mb-6">LinkedIn Contacts</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {linkedinContacts.map((contact, index) => (
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

export default LinkedinPage;
