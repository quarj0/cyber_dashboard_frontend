import axios from "axios";
import { useState,useEffect } from "react";
import ReportDashboard from "./ReportsDashboard";
import Sidebar from "../Layouts/Sidebar";

const ReportsDashboard = () => {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/reports").then((response) => {
        setReports(response.data);
        });
    }, []);

    return (
        <div className="dashboard flex h-screen">
        <Sidebar />
        <div className="main-content flex-1 bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-4">Reports</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reports.map((report) => (
                <ReportDashboard key={report.id} report={report} />
            ))}
            </div>
        </div>
        </div>
    );
    };

export default ReportsDashboard;