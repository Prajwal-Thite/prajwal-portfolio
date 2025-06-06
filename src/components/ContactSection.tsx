import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle } from
'@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // if (!formData.message.trim()) {
    //   newErrors.message = 'Message is required';
    // } else if (formData.message.trim().length < 10) {
    //   newErrors.message = 'Message must be at least 10 characters';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors below and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // First email: Contact form message sent to you
      const contactFormEmail  = await emailjs.send(
        'service_vw16asm',
        'template_up9xy0h',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `Contact Form: Message from ${formData.name}`,
          message: formData.message,
          html_message: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
        `,        
      }, 
      '81aqhcsYc-dfaLVZF'
    );

    // Second email: Auto-reply to the sender
      const autoReplyEmail = await emailjs.send(
        'service_vw16asm',
        'template_cglbin3', 
        {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message          
        },
        '81aqhcsYc-dfaLVZF'
      );

      if (contactFormEmail.text !== 'OK' || autoReplyEmail.text !== 'OK') {
        throw new Error('Failed to send email');
      }

      // Reset form and show thank you modal
      setFormData({ name: '', email: '', message: '' });
      setShowThankYou(true);

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!"
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50" data-id="yrfm8mph3" data-path="src/components/ContactSection.tsx">
      <div className="container mx-auto max-w-4xl" data-id="x7nygy71g" data-path="src/components/ContactSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" data-id="7pojqbpxn" data-path="src/components/ContactSection.tsx">

          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="gjyv2wvz2" data-path="src/components/ContactSection.tsx">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="uqpa0npbt" data-path="src/components/ContactSection.tsx">
            Have a question or want to work together? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start" data-id="x8n7f73aq" data-path="src/components/ContactSection.tsx">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} data-id="9oy2r5ki2" data-path="src/components/ContactSection.tsx">

            <Card className="shadow-lg" data-id="ofk3ogjoj" data-path="src/components/ContactSection.tsx">
              <CardHeader data-id="nry2esy15" data-path="src/components/ContactSection.tsx">
                <CardTitle className="text-2xl" data-id="exg9p0u7u" data-path="src/components/ContactSection.tsx">Send a Message</CardTitle>
              </CardHeader>
              <CardContent data-id="1wvznomgu" data-path="src/components/ContactSection.tsx">
                <form onSubmit={handleSubmit} className="space-y-6" data-id="iufsvb8w3" data-path="src/components/ContactSection.tsx">
                  <div className="space-y-2" data-id="3p2mmp5zm" data-path="src/components/ContactSection.tsx">
                    <Label htmlFor="name" data-id="wby7h2fg2" data-path="src/components/ContactSection.tsx">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
                      placeholder="Your full name" data-id="y9vym9c8d" data-path="src/components/ContactSection.tsx" />

                    {errors.name &&
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500" data-id="wz9sgsssy" data-path="src/components/ContactSection.tsx">

                        {errors.name}
                      </motion.p>
                    }
                  </div>

                  <div className="space-y-2" data-id="qhxmx70r9" data-path="src/components/ContactSection.tsx">
                    <Label htmlFor="email" data-id="s7irc8e6x" data-path="src/components/ContactSection.tsx">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
                      placeholder="your.email@example.com" data-id="p0ac4njxe" data-path="src/components/ContactSection.tsx" />

                    {errors.email &&
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500" data-id="940wj0zrq" data-path="src/components/ContactSection.tsx">

                        {errors.email}
                      </motion.p>
                    }
                  </div>

                  <div className="space-y-2" data-id="tjmu66uxy" data-path="src/components/ContactSection.tsx">
                    <Label htmlFor="message" data-id="nc08pdgn3" data-path="src/components/ContactSection.tsx">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
                      placeholder="Ask me a question..."
                      rows={5} data-id="yr9zq8b1z" data-path="src/components/ContactSection.tsx" />

                    {errors.message &&
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500" data-id="7lghllpbj" data-path="src/components/ContactSection.tsx">

                        {errors.message}
                      </motion.p>
                    }
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }} data-id="a8gt60igy" data-path="src/components/ContactSection.tsx">

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 relative overflow-hidden group"
                      disabled={isSubmitting} data-id="ep2wtrq42" data-path="src/components/ContactSection.tsx">

                      <motion.div
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        initial={false}
                        whileHover={{
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                        }} data-id="ibdjk0d2n" data-path="src/components/ContactSection.tsx" />

                      <span className="relative flex items-center justify-center gap-2" data-id="wzhmdxvqd" data-path="src/components/ContactSection.tsx">
                        {isSubmitting ?
                        <>
                            <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" data-id="2pij1bp7o" data-path="src/components/ContactSection.tsx" />

                            Sending...
                          </> :

                        <>
                            <Send className="w-4 h-4" data-id="v7qc7vgke" data-path="src/components/ContactSection.tsx" />
                            Send Message
                          </>
                        }
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8" data-id="9ggx6omcf" data-path="src/components/ContactSection.tsx">

            <div data-id="ity8svab8" data-path="src/components/ContactSection.tsx">
              <h3 className="text-2xl font-semibold mb-6" data-id="m4h2p8gv6" data-path="src/components/ContactSection.tsx">Let's Connect</h3>
              <p className="text-gray-600 mb-8" data-id="n2hehl81l" data-path="src/components/ContactSection.tsx">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4" data-id="y447j68af" data-path="src/components/ContactSection.tsx">
              <motion.a
                href="mailto:prajwalthite.sde@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }} data-id="24av030l9" data-path="src/components/ContactSection.tsx">

                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white group-hover:shadow-lg transition-shadow duration-300" data-id="vltr0krld" data-path="src/components/ContactSection.tsx">
                  <Mail className="w-6 h-6" data-id="urnd4g1ve" data-path="src/components/ContactSection.tsx" />
                </div>
                <div data-id="ctk4y7n5w" data-path="src/components/ContactSection.tsx">
                  <h4 className="font-medium text-gray-900" data-id="5fng4b82w" data-path="src/components/ContactSection.tsx">Email</h4>
                  <p className="text-gray-600" data-id="f9v2ri82v" data-path="src/components/ContactSection.tsx">Contact me personally</p>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/prajwal-thite/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }} data-id="tnoxzvelc" data-path="src/components/ContactSection.tsx">

                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white group-hover:shadow-lg transition-shadow duration-300" data-id="5anb72un6" data-path="src/components/ContactSection.tsx">
                  <Linkedin className="w-6 h-6" data-id="a2zujf7zs" data-path="src/components/ContactSection.tsx" />
                </div>
                <div data-id="if3i8s7xt" data-path="src/components/ContactSection.tsx">
                  <h4 className="font-medium text-gray-900" data-id="giez0ftr1" data-path="src/components/ContactSection.tsx">LinkedIn</h4>
                  <p className="text-gray-600" data-id="y45pu6rwl" data-path="src/components/ContactSection.tsx">Connect with me professionally</p>
                </div>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border" data-id="inzuvm9cr" data-path="src/components/ContactSection.tsx">

              <h4 className="font-semibold text-gray-900 mb-2" data-id="32mse61aa" data-path="src/components/ContactSection.tsx">Quick Response</h4>
              <p className="text-gray-600 text-sm" data-id="citqcao1v" data-path="src/components/ContactSection.tsx">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to mention it in your message subject line.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Thank You Modal */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou} data-id="klznk8h88" data-path="src/components/ContactSection.tsx">
        <DialogContent className="sm:max-w-md" data-id="1aquvr783" data-path="src/components/ContactSection.tsx">
          <DialogHeader className="text-center" data-id="chbsy4m9x" data-path="src/components/ContactSection.tsx">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4" data-id="8bx2hdv2x" data-path="src/components/ContactSection.tsx">

              <CheckCircle className="w-8 h-8 text-green-600" data-id="cjbnrbk3j" data-path="src/components/ContactSection.tsx" />
            </motion.div>
            <DialogTitle className="text-2xl font-bold text-gray-900 text-center" data-id="jqiek6ipf" data-path="src/components/ContactSection.tsx">
              Thank You!
            </DialogTitle>
            <DialogDescription className="text-gray-600 mt-2" data-id="bajeycjil" data-path="src/components/ContactSection.tsx">
              Your message has been sent successfully. I'll get back to you as soon as possible!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6" data-id="xyrqslch0" data-path="src/components/ContactSection.tsx">
            <Button
              onClick={() => setShowThankYou(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="w81xxr5z1" data-path="src/components/ContactSection.tsx">

              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>);

};

export default ContactSection;