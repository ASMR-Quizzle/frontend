import { Sidebar } from "../../components/shared/sidebar";
import { FiSettings } from "react-icons/fi";

export default function Settings() {
    return (
        <div className='w-full flex h-screen'>
            <Sidebar isActive={{ profile: true }} />
            <div className="w-5/6 px-[141px] max-h-screen overflow-y-auto flex flex-row my-3">
                <div className="flex flex-col justify-center w-1/2 bg-surfacePrimary rounded-md py-4 px-2">
                    <FiSettings className="w-32 h-32 mx-auto rounded-lg mb-8 text-textSecondary"/>
                </div>

            </div>
        </div>
    );
}