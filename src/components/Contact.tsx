"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("manqreog"); // ← your Formspree form ID
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  }, [state.succeeded]);

  const contactInfo = [
    {
      label: "EMAIL",
      value: "hello@micaiahdouglas.co.uk",
      href: "mailto:hello@micaiahdouglas.co.uk",
    },
    {
      label: "LINKEDIN",
      value: "Micaiah Douglas",
      href: "https://www.linkedin.com/in/micaiah-d-6b1a05134/",
    },
    {
      label: "INSTAGRAM",
      value: "@micxixh.art",
      href: "https://www.instagram.com/micxixh.art/",
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
      <div
        className="w-full h-full overflow-y-auto hide-scrollbar contact-page-container"
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <div className="w-full mx-auto">
          <motion.div
            style={{
              borderBottom: "var(--border-width) solid var(--border-color)",
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
            <h2 style={{ marginBottom: "var(--space-4)" }}>
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

          <div className="flex flex-col gap-0" style={{ width: "100%" }}>
            {/* Contact Form */}
            <motion.div
              className="w-full mobile-contact-form"
              style={{
                paddingRight: "0",
                borderRight: "none",
                borderBottom: "var(--border-width) solid var(--border-color)",
                paddingBottom: "var(--space-6)",
                marginBottom: "var(--space-6)",
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
            >
              <h4
                style={{
                  marginBottom: "var(--space-4)",
                  textAlign: "center",
                }}
              >
                Send a Message
              </h4>

              {isSubmitted ? (
                <p
                  style={{
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "var(--text-primary)",
                  }}
                >
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0">
                  {/* Name */}
                  <motion.div
                    style={{
                      borderBottom:
                        "var(--border-width) solid var(--border-color)",
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
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    style={{
                      borderBottom:
                        "var(--border-width) solid var(--border-color)",
                      paddingBottom: "var(--space-3)",
                      marginBottom: "var(--space-4)",
                    }}
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.7,
                    }}
                  >
                    <label
                      htmlFor="email"
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
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
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
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    style={{
                      borderBottom:
                        "var(--border-width) solid var(--border-color)",
                      paddingBottom: "var(--space-3)",
                      marginBottom: "var(--space-6)",
                    }}
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.8,
                    }}
                  >
                    <label
                      htmlFor="message"
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
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
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
                        resize: "none",
                        textAlign: "center",
                      }}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </motion.div>

                  {/* Submit Button */}
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
                      disabled={state.submitting}
                      className="relative overflow-hidden cursor-pointer"
                      style={{
                        backgroundColor: "var(--text-primary)",
                        color: "var(--text-inverse)",
                        border:
                          "var(--border-width) solid var(--border-color)",
                        borderRadius: "0",
                        padding: "var(--space-3) var(--space-6)",
                        textTransform: "uppercase",
                        fontSize: "var(--text-sm)",
                        fontFamily: "var(--font-family-inter)",
                        fontWeight: "var(--font-weight-medium)",
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: {
                          duration: 0.15,
                          ease: "easeOut",
                        },
                      }}
                      whileTap={{
                        scale: 0.98,
                        transition: {
                          duration: 0.1,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <span className="relative z-10 blend-difference">
                        {state.submitting ? "Sending..." : "Send Message"}
                      </span>
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              className="w-full mobile-contact-details"
              style={{ paddingLeft: "0" }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5,
              }}
            >
              <div className="flex flex-col items-center">
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

                <div className="flex flex-col md:flex-row md:justify-center md:gap-8 w-full">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center md:items-center"
                      style={{
                        borderBottom:
                          "var(--border-width) solid var(--border-color)",
                        padding: "var(--space-3) var(--space-2)",
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
                          fontFamily: "var(--font-family-inter)",
                          fontSize: "var(--text-sm)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                          lineHeight: "1.5",
                          textTransform: "uppercase",
                          textAlign: "center",
                          marginBottom: "var(--space-1)",
                        }}
                      >
                        {info.label}
                      </h6>
                      {info.href ? (
                        <motion.a
                          href={info.href}
                          className="block cursor-pointer"
                          style={{
                            fontFamily: "var(--font-family-roboto-mono)",
                            fontSize: "var(--text-base)",
                            fontWeight: "var(--text-body-light)",
                            textDecoration: "none",
                            color: "var(--text-primary)",
                            lineHeight: "1.5",
                            textAlign: "center",
                          }}
                          whileHover={{
                            y: -2,
                            transition: { duration: 0.2, ease: "easeOut" },
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </motion.a>
                      ) : (
                        <span
                          style={{
                            fontFamily: "var(--font-family-roboto-mono)",
                            fontSize: "var(--text-base)",
                            fontWeight: "var(--text-body-light)",
                            color: "var(--text-primary)",
                            lineHeight: "1.5",
                            textAlign: "center",
                            display: "block",
                          }}
                        >
                          {info.value}
                        </span>
                      )}
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
