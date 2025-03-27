
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SocialLinks from '@/components/SocialLinks';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or suggestions? We'd love to hear from you. Reach out to us using the form below or contact us directly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gray-50 p-6 rounded-lg h-full">
                  <h3 className="text-xl font-serif font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-medium text-gray-500 mb-2">Our Address</h4>
                      <p className="text-gray-900">
                        59/1/2C Gariahat Road South<br />
                        Kolkata - 700 031<br />
                        West Bengal, India
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-medium text-gray-500 mb-2">Email Us</h4>
                      <a href="mailto:kolkataweekends@gmail.com" className="text-primary hover:underline">
                        kolkataweekends@gmail.com
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-medium text-gray-500 mb-2">Call Us</h4>
                      <p className="text-gray-900">
                        +91 9830273758<br />
                        +91 9007138440
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-medium text-gray-500 mb-2">Follow Us</h4>
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="support">Support</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white font-medium px-6 py-3 rounded-md transition-all hover:bg-primary/90 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-bold mb-6 text-center">We're looking for operational partners in Pune!</h3>
                <p className="text-center text-gray-600 max-w-3xl mx-auto">
                  Are you a travel enthusiast based in Pune? Do you have local knowledge and a passion for exploring Maharashtra? 
                  We're looking for operational partners to help us expand PuneWeekends. Contact us to learn more about this exciting opportunity!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
