import React,{useState} from 'react'
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const DashLayout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-64 fixed top-0 left-0 h-full">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Main Section */}
            <div className="flex-1 ml-0 md:ml-64 flex flex-col">
                {/* Topbar */}
                <div className="fixed top-0 left-0 md:left-64 right-0 z-10">
                    <TopBar userName="Umar" setIsOpen={setIsOpen} />
                </div>

                {/* Page Content */}
                <div className="mt-16 p-6 bg-gray-50 flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashLayout