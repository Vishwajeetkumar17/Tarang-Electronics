import { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        username: 'John Doe',
        phoneNumber: '123-456-7890',
        email: 'johndoe@example.com',
        address: '123 Main St, Anytown, USA',
    });

    const handleLogout = async () => {
        const fetchData = await fetch(SummaryApi.logout_user.url, {
            method: SummaryApi.logout_user.method,
            credentials: "include",
        });

        const data = await fetchData.json();

        if (data.success) {
            toast.success(data.message);
            dispatch(setUserDetails(null));
            navigate("/");
        }

        if (data.error) {
            toast.error(data.message);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-2xl mt-[140px]">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">Profile</h2>
                <div className="flex items-center space-x-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                        onClick={() => window.location.href = '/'}
                    >
                        Home
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div>
                    <h3 className="text-lg font-bold">{profile.username}</h3>
                    <p className="text-gray-600">{profile.phoneNumber}</p>
                    <p className="text-gray-600">{profile.email}</p>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="text-lg font-bold">Address</h3>
                <p className="text-gray-600">{profile.address}</p>
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                onClick={() => console.log('Edit profile')}
            >
                Edit Profile
            </button>
        </div>
    );
};

export default ProfilePage;