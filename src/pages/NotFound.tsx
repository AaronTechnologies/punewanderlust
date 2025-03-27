
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-32 px-6">
        <div className="text-center max-w-lg mx-auto animate-fade-up">
          <h1 className="text-6xl font-serif font-bold text-primary mb-6">404</h1>
          <p className="text-2xl text-gray-800 mb-8">Oops! We couldn't find that page.</p>
          <p className="text-gray-600 mb-10">
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-md transition-all hover:bg-primary/90 after:hidden"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
