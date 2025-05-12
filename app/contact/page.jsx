"use client";

import { useRef, useState, } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Social from "@/components/Social";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 806 507 5359",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abdulmuhayminolalekan@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lagos, Nigeria",
  },
]

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)

    emailjs
      .sendForm("service_djlie6u", "template_2ujqv43", form.current, {
        publicKey: "xiMB0h9KBfVPFd47z",
      })
      .then(
        () => {
          alert('Your message is successfully sent!');
          setIsLoading(false)
          
        },
        (error) => {
          alert('FAILED...Something went wrong', error.value);
          setIsLoading(false)
        },
      );
  };
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }} className="py-6">
      <div className="container mx-auto">

        {/* form */}
        <div className="xl:w-[54%] mx-auto order-2 xl:order-none">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent">Let us work together</h3>
            <p className="text-white/60">Ready to take the next step? Fill out the form below to request my services and I will get back to you shortly!</p>
            {/* input */}
            <div className="grid grids-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" name="first_name" placeholder="Firstname" />
              <Input type="lastname" name="last_name" placeholder="Lastname" />
              <Input type="email" name="email" placeholder="Email address" />
              <Input type="phone" name="phone" placeholder="Phone number" />
            </div>
            {/* select */}
            <Select name="service" >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="web_dev">Web development</SelectItem>
                  <SelectItem value="app_dev">Mobile App. development</SelectItem>
                  <SelectItem value="SWE">Software engineering</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* text area */}
            <Textarea name="message" className="h-[200px]" placeholder="Type your message here." />
            {/* btn */}
            <Button size="md" className="max-w-40 h-12" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send message'}
            </Button>

            <div className="mx-auto">
              <Social
                containerStyles="flex gap-8"
                iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </form>

        </div>
      </div>
    </motion.section>
  )
}

export default Contact;