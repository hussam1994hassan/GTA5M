import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { discordCheck } from "../../redux/reducers/authSlice";

const DiscordCheckPage = () => {
    const { secret } = useParams();
    const dispatch = useDispatch();
    const userDiscord = useSelector((state) => state.auth.userDiscord);

    useEffect(async () => {
        localStorage.setItem("secret", secret);
        dispatch(discordCheck({ secret }));
    }, [secret]);

    return <div>Loading...</div>;
};

export default DiscordCheckPage;
