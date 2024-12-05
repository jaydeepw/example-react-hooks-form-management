import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  // This is where we will hold the form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Add your API call here
        console.log("Form submitted:", formData);
        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          password: "",
          phone: "",
          terms: false,
        });
      } catch (error) {
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-8 flex items-start justify-center font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="w-full">
        <div className="mb-8 flex flex-col items-center">
          <Image
            className="dark:invert mb-6"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
            Cell 1
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
            Cell 2
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
            Cell 3
          </div>
        </div>
      </main>
    </div>
  );
}
