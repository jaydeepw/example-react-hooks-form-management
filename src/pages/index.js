import localFont from "next/font/local";
import Image from "next/image";

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
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-8 flex items-center justify-center font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
          <Image
            className="dark:invert mb-6"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Fill in your information to get started
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="rounded border-gray-300 dark:border-gray-700 text-blue-500 focus:ring-blue-500"
              required
            />
            <label
              className="text-sm text-gray-600 dark:text-gray-400"
              htmlFor="terms"
            >
              I agree to the Terms and Conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </main>
    </div>
  );
}
