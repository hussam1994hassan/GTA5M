// pages/AuthDiscordCallbackPage.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../functions/axiosClient";

const AuthDiscordCallbackPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            axiosClient
                .get(`/discord/callback?code=${code}`)
                .then((res) => {
                    localStorage.setItem("token", res?.data?.token);
                    // يمكنك تخزين user في localStorage أو redux
                    navigate("/discord/dashboard");
                })
                .catch((err) => {
                    console.error("Error logging in with Discord:", err);
                    // navigate("/login");
                });
        }
    }, []);

    return <p>Processing Discord login...</p>;
};

export default AuthDiscordCallbackPage;
