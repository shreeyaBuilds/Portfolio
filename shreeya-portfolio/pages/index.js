import React from "react";
//import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <header className="mb-16">
        <h1 className="text-4xl font-bold">Shreeya Srivastava</h1>
        <p className="text-xl mt-2">A Passionate Full Stack Developer</p>
        <a
          href="/resume.pdf"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 text-sm flex items-center gap-2"
          download
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5 7.5 7.5-7.5M12 3v16.5" />
          </svg>
          Download My Resume
        </a>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          With 8 years of experience building scalable web applications, I
          specialise in crafting backend systems with Java, Vert.x and Spring
          Boot while delivering sleek user experiences with React. Passionate
          about cloud infrastructure, data platforms, and simplifying complex
          problems.
        </p>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <div className="border rounded-xl p-4 shadow-md mb-6">
          <h3 className="text-xl font-bold">Petflix – A Video Library App</h3>
          <p className="text-sm text-gray-700 mt-1">
            A video library for pet-related content built using React.js and
            integrated with the YouTube API.
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm">
            <li>JWT-based authentication (Sign-in, Sign-up, Logout)</li>
            <li>Video play & fetch from YouTube API</li>
            <li>Infinite scroll, sort, search, and filters</li>
            <li>Playlist, Watch Later, History, Like/Dislike features</li>
          </ul>
          <a
            href="https://petflix-vl.vercel.app/login"
            className="inline-block mt-3 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Demo
          </a>
        </div>

        <div className="border rounded-xl p-4 shadow-md mb-6">
          <h3 className="text-xl font-bold">Microservice User-Hotel Rating App</h3>
          <p className="text-sm text-gray-700 mt-1">
            A microservice architecture-based application where users can check and rate hotels based on reviews.
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm">
            <li>Built using Java, Spring Boot, Eureka Discovery, API Gateway</li>
            <li>Microservices for User, Hotel, and Rating management</li>
            <li>REST APIs to view hotel details and aggregated user reviews</li>
            <li>Scalable design with service-to-service communication</li>
          </ul>
          <a
            href="https://github.com/shreeyaBuilds/microservice-user-hotel-rating-project"
            className="inline-block mt-3 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="border rounded-xl p-4 shadow-md">
          <h3 className="text-xl font-bold">DevConnect – A Social Media App for Developers</h3>
          <p className="text-sm text-gray-700 mt-1">
            A full-featured social media platform built for developers using React.js, Redux, and Tailwind CSS.
          </p>
          <ul className="list-disc pl-6 mt-2 text-sm">
            <li>JWT-based authentication (Sign-in, Sign-up, Logout)</li>
            <li>Create posts, media upload, profile editing</li>
            <li>Dark & Light theme, infinite loading, sort, search</li>
            <li>Follow/Unfollow users, User feed, Bookmarks</li>
          </ul>
          <a
            href="https://devgram-sm.vercel.app/"
            className="inline-block mt-3 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Demo
          </a>
        </div>

      </section>

      <footer className="pt-10 border-t text-sm text-gray-600">
        <p>
          Built by Shreeya Srivastava &mdash; © {new Date().getFullYear()}
        </p>
        <p className="mt-2">
          <a
            href="https://www.linkedin.com/in/shreeya-srivastava29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Connect on LinkedIn
          </a>
        </p>
        <p className="mt-1">
          <a
            href="https://github.com/shreeyaBuilds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View my GitHub
          </a>
        </p>
        <p className="mt-1">
          <a
            href="mailto:shreeyag29@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email Me
          </a>
        </p>
      </footer>
    </main>
  );
}