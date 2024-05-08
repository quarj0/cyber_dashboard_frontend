import axios from "axios";
import { useState,useEffect } from "react";
import IncidentReport from "./IncidentDashboard";
import Sidebar from "../Layouts/Sidebar";

const IncidentDashboard = () => {
    const [incidents, setIncidents] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/incidents").then((response) => {
        setIncidents(response.data);
        });
    }, []);
    return (
        <div className="dashboard flex h-screen">
        <Sidebar />
        <div className="main-content flex-1 bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-4">Incident Reports</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {incidents.map((incident) => (
                <IncidentReport key={incident.id} incident={incident} />
            ))}
            </div>
        </div>
        </div>
    );
    };

export default IncidentDashboard;