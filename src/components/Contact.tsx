"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      label: "EMAIL",
      value: "hello@micaiahdouglas.com",
      href: "mailto:hello@micaiahdouglas.com",
    },
    {
      label: "LINKEDIN",
      value: "micaiah-douglas",
      href: "https://linkedin.com/in/micaiah-douglas",
    },
    {
      label: "LOCATION",
      value: "Available Worldwide",
      href: null,
    },
  ];

  return (
    <div
      className="w-full h-70vh flex flex-col justify-start items-start"
      style={{
        overflow: "hidden",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Scrollable Content Container */}
      <div
        className="w-full h-full overflow-y-auto hide-scrollbar contact-page-container"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Desktop Top-Aligned Container */}
        <div className="w-full mx-auto">
          {/* Header Section */}
          <motion.div
            style={{
              borderBottom:
                "var(--border-width) solid var(--border-color)",
              paddingBottom: "var(--space-4)",
              marginBottom: "var(--space-6)",
              textAlign: "center",
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
          >
            <h2
              style={{
                marginBottom: "var(--space-4)",
              }}
            >
              Let's Connect
            </h2>
            <p
              style={{
                fontStyle: "italic",
                lineHeight: "1.6",
                marginBottom: "var(--space-4)",
              }}
            >
              Ready to create something meaningful together?
              <br />
              Let's talk about your vision.
            </p>
          </motion.div>

          {/* Main Content - Vertical Layout */}
          <div
            className="flex flex-col gap-0"
            style={{
              width: "100%",
            }}
          >
            {/* Contact Form - Top Section */}
           <form action="https://getform.io/f/bwnyogna" method="POST">
  <motion.div
    style={{
      borderBottom: "var(--border-width) solid var(--border-color)",
      paddingBottom: "var(--space-3)",
      marginBottom: "var(--space-4)",
    }}
    initial={{ x: 20 }}
    animate={{ x: 0 }}
    transition={{
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.6,
    }}
  >
    <label
      htmlFor="name"
      style={{
        display: "block",
        marginBottom: "var(--space-1)",
        textTransform: "uppercase",
        fontSize: "var(--text-sm)",
        fontFamily: "var(--font-family-inter)",
        fontWeight: "var(--font-weight-medium)",
        color: "var(--text-primary)",
        textAlign: "center",
      }}
    >
      Name
    </label>
    <Input
      id="name"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
      required
      style={{
        backgroundColor: "transparent",
        border: "none",
        borderRadius: "0",
        padding: "var(--space-2) 0",
        fontSize: "var(--text-base)",
        fontFamily: "var(--font-family-roboto-mono)",
        fontWeight: "var(--text-body-light)",
        color: "var(--text-primary)",
        outline: "none",
        boxShadow: "none",
        textAlign: "center",
      }}
      className="focus:outline-none focus:ring-0 focus:border-none"
    />
  </motion.div>

  {/* Repeat for email and message fields */}
  
  <motion.div
    style={{
      display: "flex",
      justifyContent: "center",
      width: "100%",
    }}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.9,
    }}
  >
    <motion.button
      type="submit"
      className="relative overflow-hidden cursor-pointer"
      style={{
        backgroundColor: "var(--text-primary)",
        color: "var(--text-inverse)",
        border: "var(--border-width) solid var(--border-color)",
        borderRadius: "0",
        padding: "var(--space-3) var(--space-6)",
        textTransform: "uppercase",
        fontSize: "var(--text-sm)",
        fontFamily: "var(--font-family-inter)",
        fontWeight: "var(--font-weight-medium)",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.15, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
    >
      <motion.span
        className="absolute inset-0"
        style={{ backgroundColor: "var(--text-inverse)", transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      />
      <span className="relative z-10 blend-difference">Send Message</span>
    </motion.button>
  </motion.div>
</form>

            {/* Contact Details - Bottom Section */}
            <motion.div
              className="w-full mobile-contact-details"
              style={{
                paddingLeft: "0",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5,
              }}
            >
              {/* Desktop: Side by side layout, Mobile: Stacked */}
              <div className="flex flex-col items-center">
                {/* Contact Details Header */}
                <motion.div
                  className="w-full"
                  initial={{ x: 20 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.6,
                  }}
                >
                  <h4
                    style={{
                      marginBottom: "var(--space-4)",
                      textAlign: "center",
                      fontFamily: "var(--font-family-inter)",
                      fontSize: "var(--text-h4)",
                      fontWeight: "var(--font-weight-semibold)",
                      textTransform: "uppercase",
                      color: "var(--text-primary)",
                      lineHeight: "1.5",
                    }}
                  >
                    Contact Details
                  </h4>
                </motion.div>

                {/* Contact Info Items - Navigation Style Layout */}
                <div className="flex flex-col md:flex-row md:justify-center md:gap-8 w-full">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center md:items-center"
                      style={{
                        borderBottom:
                          "var(--border-width) solid var(--border-color)",
                        padding:
                          "var(--space-3) var(--space-2)",
                        minHeight: "var(--space-9)",
                      }}
                      initial={{ x: 20 }}
                      animate={{ x: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.7 + index * 0.1,
                      }}
                    >
                      <h6
                        style={{
                          fontFamily:
                            "var(--font-family-inter)",
                          fontSize: "var(--text-sm)",
                          fontWeight:
                            "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                          lineHeight: "1.5",
                          textTransform: "uppercase",
                          textAlign: "center",
                          marginBottom: "var(--space-1)",
                        }}
                      >
                        {info.label}
                      </h6>
                      <div>
                        {info.href ? (
                          <motion.a
                            href={info.href}
                            className="block cursor-pointer"
                            style={{
                              fontFamily:
                                "var(--font-family-roboto-mono)",
                              fontSize: "var(--text-base)",
                              fontWeight:
                                "var(--text-body-light)",
                              textDecoration: "none",
                              color: "var(--text-primary)",
                              lineHeight: "1.5",
                              textAlign: "center",
                            }}
                            whileHover={{
                              y: -2,
                              transition: {
                                duration: 0.2,
                                ease: "easeOut",
                              },
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </motion.a>
                        ) : (
                          <span
                            style={{
                              fontFamily:
                                "var(--font-family-roboto-mono)",
                              fontSize: "var(--text-base)",
                              fontWeight:
                                "var(--text-body-light)",
                              color: "var(--text-primary)",
                              lineHeight: "1.5",
                              textAlign: "center",
                              display: "block",
                            }}
                          >
                            {info.value}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}