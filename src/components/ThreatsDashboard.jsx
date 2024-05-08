import axios from "axios";
import { useState,useEffect } from "react";
import ThreatsReport from "./ThreatsDashboard";
import Sidebar from "../Layouts/Sidebar";

const ThreatsDashboard = () => {
    const [threats, setThreats] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/threats").then((response) => {
        setThreats(response.data);
        });
    }, []);

    return (
        <div className="dashboard flex h-screen">
        <Sidebar />
        <div className="main-content flex-1 bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-4">Threat Reports</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {threats.map((threat) => (
                <ThreatsReport key={threat.id} threat={threat} />
            ))}
            </div>
        </div>
        </div>
    );
    }

export default ThreatsDashboard;