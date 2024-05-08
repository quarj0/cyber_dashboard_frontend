import Sidebar from "./Sidebar";
import MetricCard from "../components/MetricCard";
import { useState } from "react";

const Dashboard = () => {
  const [isAddingWebsite, setIsAddingWebsite] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleAddWebsite = () => {
    setIsAddingWebsite(true);
  };

  const handleWebsiteInputChange = (e) => {
    setWebsiteUrl(e.target.value);
  };

  const handleWebsiteSubmit = () => {
    console.log("Website submitted:", websiteUrl);
    // Perform scanning or other operations with the website URL
    // Reset state
    setWebsiteUrl('');
    setIsAddingWebsite(false);
  };

  return (
    <div className="dashboard flex h-screen">
      <Sidebar />
      <div className="main-content flex-1 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to the Cybersecurity Dashboard
        </h1>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">Websites</h2>
          {!isAddingWebsite ? (
            <button
              onClick={handleAddWebsite}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add Website
            </button>
          ) : (
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter website URL"
                value={websiteUrl}
                onChange={handleWebsiteInputChange}
                className="w-full p-2 border border-gray-300 rounded-md mr-2"
              />
              <button
                onClick={handleWebsiteSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Summary Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <MetricCard title="Total Incidents" value="102" />
              <MetricCard title="High Severity Threats" value="15" />
              {/* Add more summary metrics here */}
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Recent Incidents</h2>
            {/* Display recent incidents */}
            <ul>
              <li className="py-2">Incident 1</li>
              <li className="py-2">Incident 2</li>
              {/* Add more recent incidents */}
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Threats Overview</h2>
            {/* Display threats overview */}
            <ul>
              <li className="py-2">Threat 1</li>
              <li className="py-2">Threat 2</li>
              {/* Add more threats */}
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Reports</h2>
            {/* Display reports */}
            <ul>
              <li className="py-2">Report 1</li>
              <li className="py-2">Report 2</li>
              {/* Add more reports */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
