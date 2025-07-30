import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router";
import PagesURL from "../../constants/PagesURL";

const DiscordCheckPage = () => {
    const { secret } = useParams();

    useEffect(async () => {
        localStorage.setItem("secret", secret);
    }, [secret]);

    return <Navigate to={PagesURL.DISCORD_DASHBOARD.URL} replace />;
};

export default DiscordCheckPage;
