import React from 'react';

import AppHeader from './components/layout/AppHeader.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';

export default function App() {
    return (
        <div className="w-full h-screen flex flex-col bg-gray-50 text-gray-800">
            <AppHeader />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    );
}

