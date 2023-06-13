import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-900">
      <div className="bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-800 mb-6">We apologize for the inconvenience.</p>
        <Link to='/'><button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Go back to homepage
        </button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;