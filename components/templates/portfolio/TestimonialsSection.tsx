'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StyleType } from '../../../types';
interface StyleProps {
  style: StyleType
}

const testimonials = [
  { name: 'John Doe', role: 'CEO, Tech Co.', text: 'Working with this developer was an absolute pleasure. Their expertise and dedication to the project were outstanding.', avatar: '/placeholder.svg?height=50&width=50' },
  { name: 'Jane Smith', role: 'CTO, Startup Inc.', text: 'The attention to detail and problem-solving skills demonstrated were truly impressive. I highly recommend their services.', avatar: '/placeholder.svg?height=50&width=50' },
  { name: 'Alex Johnson', role: 'Product Manager, InnovateTech', text: 'Our project was delivered on time and exceeded our expectations. A true professional in every sense.', avatar: '/placeholder.svg?height=50&width=50' },
]

export function TestimonialsSection({ style }: StyleProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

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
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-gray-800 border-gray-700">
                  <CardContent className="pt-6">
                    <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-purple-400">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )
      case 'style2':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
                  <CardContent className="pt-6">
                    <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-purple-400">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )
      case 'style3':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} className="w-full md:w-2/3">
                <Card className="bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
                  <CardContent className="pt-6">
                    <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-purple-400">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )
      case 'style4':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col bg-gray-800 border-gray-700">
                  <CardContent className="pt-6 flex-grow">
                    <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  </CardContent>
                  <CardHeader className="mt-auto">
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg text-purple-400">{testimonial.name}</CardTitle>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )
      case 'style5':
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-800 border-gray-700 mb-6">
                  <CardContent className="pt-6 text-center">
                    <div className="text-4xl mb-4 text-purple-400">💬</div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                    <Avatar className="h-16 w-16 mx-auto mb-2">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="font-bold text-purple-400">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
      {renderContent()}
    </section>
  )
}

