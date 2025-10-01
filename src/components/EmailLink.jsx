import { Mail } from 'lucide-react';

const EmailLink = ({ email, className = '' }) => {
  return (
    <a 
      href={`mailto:${email}`}
      className={`inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-sm ${className}`}
    >
      <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
      {email}
    </a>
  );
};

export default EmailLink;
