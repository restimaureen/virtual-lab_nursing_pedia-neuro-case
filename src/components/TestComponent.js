import React from 'react';

const TestComponent = () => {
  console.log('TestComponent rendering...');
  
  return (
    <div className="p-8 max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-green-600 mb-4">✓ App is Working!</h1>
      <p className="text-gray-700">
        If you can see this, the basic app is working. 
        The issue might be in one of the components or imports.
      </p>
      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
        <h2 className="font-semibold">Environment Check:</h2>
        <ul className="mt-2 text-sm text-gray-600">
          <li>Node version: {process.version}</li>
          <li>Environment: {process.env.NODE_ENV}</li>
        </ul>
      </div>
    </div>
  );
};

export default TestComponent;
