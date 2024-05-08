import axios from "axios";
import { useState,useEffect } from "react";
// import settings from "./SettingsDashboard";
import Sidebar from "../Layouts/Sidebar";

const SettingsDashboard = () => {
    const [settings, setSettings] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/settings").then((response) => {
        setSettings(response.data);
        });
    }, []);
    return (
        <div className="dashboard flex h-screen">
        <Sidebar />
        <div className="main-content flex-1 bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-4">Settings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {settings.map((setting) => (
                <SettingsDashboard key={setting.id} setting={setting} />
            ))}
            </div>
        </div>
        </div>
    );
    };

export default SettingsDashboard;