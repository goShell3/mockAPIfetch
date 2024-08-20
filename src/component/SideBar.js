import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white p-5 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        <li className="mb-2">
          <button href="#" className="text-gray-700 hover:text-gray-900">Category 1</button>
        </li>
        <li className="mb-2">
          <button href="#" className="text-gray-700 hover:text-gray-900">Category 2</button>
        </li>
        <li className="mb-2">
          <button href="#" className="text-gray-700 hover:text-gray-900">Category 3</button>
        </li>
        <li className="mb-2">
          <button href="#" className="text-gray-700 hover:text-gray-900">Category 4</button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
