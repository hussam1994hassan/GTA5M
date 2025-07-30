import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Background from "../components/Background";
import LoadingComponent from "../components/LoadingComponent";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import PagesURL from "../constants/PagesURL";
import { discordCheck } from "../redux/store";

const DiscordLayout = () => {
    const dispatch = useDispatch();
    const secret = localStorage.getItem("secret");

    useEffect(() => {
        dispatch(discordCheck({ secret }));
    }, [dispatch]);

    const isAuthenticated = useSelector(
        (state) => state.discord.isAuthenticated
    );

    const status = useSelector((state) => state.discord.status);

    console.log(isAuthenticated, status);

    if (status == "loading") return <LoadingComponent />;

    // Check User isAuthenticated
    if (status == "failed" && !isAuthenticated) {
        return <Navigate to={PagesURL.LOGIN_WITH_DISCORD.URL} replace />;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
            <Toaster position="top-center" reverseOrder={false} />
            {/* Background Layer - Fixed position with all effects */}
            <Background />

            {/* Header Layer - Fixed navigation */}
            <HeaderComponent />

            {/* Main Content Layer */}
            <main className="relative z-20">
                <Outlet />
            </main>

            {/* Footer Layer */}
            <FooterComponent />
        </div>
    );
};

export default DiscordLayout;
