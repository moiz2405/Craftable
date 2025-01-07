import { motion } from "framer-motion";

interface TestimonialsSectionProps {
  style: 'style1' | 'style2' | 'style3' | 'style4' | 'style5';
}

export default function TestimonialsSection({ style }: TestimonialsSectionProps) {
  const testimonials = [
    { name: 'John Doe', role: 'CEO, Tech Co.', text: 'Working with this developer was an absolute pleasure. Their expertise and dedication to the project were outstanding.' },
    { name: 'Jane Smith', role: 'CTO, Startup Inc.', text: 'The attention to detail and problem-solving skills demonstrated were truly impressive. I highly recommend their services.' },
    { name: 'Alex Johnson', role: 'Product Manager, InnovateTech', text: 'Our project was delivered on time and exceeded our expectations. A true professional in every sense.' },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const renderContent = () => {
    switch (style) {
      case 'style1':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <p className="text-gray-800 mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-purple-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'style2':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-purple-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                <p className="text-white mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-purple-200">{testimonial.name}</p>
                <p className="text-sm text-purple-300">{testimonial.role}</p>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'style3':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-blue-600 w-full md:w-2/3"
              >
                <p className="text-white mb-4">"{testimonial.text}"</p>
                <p className="font-bold text-purple-200">{testimonial.name}</p>
                <p className="text-sm text-purple-300">{testimonial.role}</p>
              </motion.div>
            ))}
          </motion.div>
        );
      case 'style4':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 flex flex-col"
              >
                <div className="flex-grow">
                  <p className="text-gray-800 mb-4">"{testimonial.text}"</p>
                </div>
                <div className="mt-4 flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-purple-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
        case 'style5':
            return (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 text-center"
                  >
                    <div className="text-4xl mb-4 text-purple-500">💬</div>
                    <p className="text-gray-800 mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-bold text-purple-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </motion.div>
                ))}
              </motion.div>
            );
          
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      {renderContent()}
    </div>
  );
}

