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