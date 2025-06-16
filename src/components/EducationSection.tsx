import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CertificationBadge from "@/components/CertificationBadge";

interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string[];
  // description: string;
}

interface Certification {
  id: string;
  name: string;
  provider: string;
  icon:  string | React.ReactNode;
  color: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verified: boolean;
  link?: string;
}

const EducationSection = () => {
  const education: Education[] = [
  {
    id: "1",
    degree: "Master of Science",
    field: "Computer and Information Science",
    institution: "University Of Konstanz",
    location: "Konstanz, Germany",
    period: "2022 - 2025",
    gpa: "2.5/4.0",
    honors: ["NLP", "Data Science & Visualization", "Database Architecture", "Algorithm Engineering"],
    // description: "Specialized in Machine Learning and Artificial Intelligence with focus on Deep Learning architectures and Natural Language Processing."
  },
  {
    id: "2",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering (spec. Intelligent Systems)",
    institution: "MIT ADT University",
    location: "Pune, India",
    period: "2018 - 2022",
    gpa: "7.92/10.0",
    honors: ["System Programming & Operating Systems", "Block-Chain", "Graphics", "ML & Deep learning", "Processor & Chips", "Computer Organisations", "Micro-processor interfacing", "Computer Networks", "Project Management", "Databases System", "Algorithm Designing", "Databases System" , "AI", "IoT", "Operation Research", "Compiler Design"],
    // description: "Strong foundation in software engineering, algorithms, and data structures with hands-on experience in full-stack development."
  }];


  const certifications: Certification[] = [
  {
    id: "1",
    name: "Salesforce Certified Administrator",
    provider: "Salesforce",
    icon: <img src='https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1617267801000' alt='Admin'/>,
    color: "border-orange-400",
    issueDate: "Mar 2025",
    credentialId: "5961451",
    verified: true,
    link: "https://www.salesforce.com/trailblazer/xmczz5a47sxgtxcci0"
  },
  {
    id: "2",
    name: "Salesforce Certified AI Associate",
    provider: "Salesforce",
    icon: <img src='https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000BEqgH&oid=00DF0000000gZsu&lastMod=1693557495000' alt='AI'/>,
    color: "border-orange-400",
    issueDate: "April 2025",
    credentialId: "6122252",
    verified: true,
    link: "https://www.salesforce.com/trailblazer/xmczz5a47sxgtxcci0"
  },
  {
    id: "3",
    name: "AWS Data Analytics",
    provider: "Amazon Web Services",
    icon: <img src='https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1754524800&v=beta&t=ukKj1jzchfD-BM6SVNEP7OIu9uXuhiCPIGyC1qj0eiU' alt='AWS'/>,
    color: "border-blue-500",
    issueDate: "2021",
    credentialId: "9L5MFP4MK2NS",
    verified: true,
    link: "https://www.coursera.org/account/accomplishments/verify/9L5MFP4MK2NS?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    id: "4",
    name: "Microsoft Professional Program in AI",
    provider: "Microsoft",
    icon: <img src='https://media.licdn.com/dms/image/v2/D560BAQH32RJQCl3dDQ/company-logo_100_100/B56ZYQ0mrGGoAU-/0/1744038948046/microsoft_logo?e=1754524800&v=beta&t=ekV0Y5IMXzk-ZWXUcvw4yYiZJiLtZ-NUuXkIMZew_y4' alt='Microsoft'/>,
    color: "border-cyan-400",
    issueDate: "2020",
    credentialId: "",
    verified: true,
    link: "https://drive.google.com/file/d/1e0RuMoySCu78Ps3hnLxagI_yKqbpV_k-/view"
  },
  {
    id: "5",
    name: "Digital Transformation with Google Cloud",
    provider: "Google",
    icon: <img src='https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380?e=1754524800&v=beta&t=g_4JLgDLzMRnxE4-nFVEMVH0zEiEdBgLYkznhEeInLA' alt='Google'/>,
    color: "border-purple-400",
    issueDate: "2021",
    credentialId: "DBD3JABMJ69K",
    verified: true,
    link: "https://www.coursera.org/account/accomplishments/verify/DBD3JABMJ69K?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    id: "6",
    name: "Foundations: Data, Data, Everywhere",
    provider: "Google",
    icon: <img src='https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380?e=1754524800&v=beta&t=g_4JLgDLzMRnxE4-nFVEMVH0zEiEdBgLYkznhEeInLA' alt='Google'/>,
    color: "border-purple-400",
    issueDate: "2021",
    credentialId: "ARFR9NVA6ERI",
    verified: true,
    link: "https://www.coursera.org/account/accomplishments/verify/ARFR9NVA6ERJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
    {
    id: "7",
    name: "Data-Driven Decisions",
    provider: "Google",
    icon: <img src='https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380?e=1754524800&v=beta&t=g_4JLgDLzMRnxE4-nFVEMVH0zEiEdBgLYkznhEeInLA' alt='Google'/>,
    color: "border-purple-400",
    issueDate: "2021",
    credentialId: "k8emxkbmwc7r",
    verified: true,
    link: "https://www.coursera.org/account/accomplishments/verify/K8EMXKBMWC7R?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12">

          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>

              <GraduationCap className="h-8 w-8 text-blue-600"/>
            </motion.div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Education &amp; Certifications
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic excellence and professional certifications that drive innovation and expertise
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16">

          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">

            <GraduationCap className="h-6 w-6 text-blue-600"/>
            Education
          </motion.h3>

          <div className="space-y-6">
            {education.map((edu, index) =>
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}>

                <Card className="overflow-hidden border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="mt-1">
                            <GraduationCap className="h-5 w-5 text-blue-600"/>
                          </div>
                          <div>
                            <h4 className="text-xl font-semibold text-gray-900">
                              {edu.degree} in {edu.field}
                            </h4>
                            <p className="text-lg text-blue-600 font-medium">{edu.institution}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4"/>
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span >{edu.period}</span>
                          </div>
                          {edu.gpa &&
                        <div className="flex items-center gap-1">
                              <Award className="h-4 w-4"/>
                              <span>GPA: {edu.gpa}</span>
                            </div>
                        }
                        </div>

                        {/* <p className="text-gray-700 mb-3">{edu.description}</p> */}

                        {edu.honors && edu.honors.length > 0 &&
                      <div className="flex flex-wrap gap-2">
                            {edu.honors.map((honor, idx) =>
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">

                                {honor}
                              </motion.span>
                        )}
                          </div>
                      }
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">

            <Award className="h-6 w-6 text-indigo-600"/>
            Professional Certifications
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {certifications.map((cert, index) =>
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1 }
              }}
              viewport={{ once: true }}>

                <CertificationBadge {...cert}/>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center">

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.linkedin.com/in/prajwal-thite/details/certifications/")}
              className="group border-2 border-indigo-200 hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300">

              <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-200"/>
              View All Credentials
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default EducationSection;