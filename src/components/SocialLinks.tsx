
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  className = "", 
  iconSize = 20, 
  iconColor = "currentColor" 
}) => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/aarontech2001', 
      icon: Facebook 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/aaron-technologies', 
      icon: Linkedin 
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/AaronTechCom', 
      icon: Twitter 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/aarontechcom/', 
      icon: Instagram 
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social) => (
        <a 
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 hover:text-primary after:hidden"
          aria-label={social.name}
        >
          <social.icon size={iconSize} color={iconColor} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
