import { FaDiscord } from "react-icons/fa";

// LoginButton.jsx
const discordClientId = "1388473807173586994";
const redirectUri = "http://localhost:5173/auth/discord/callback";

const LoginWithDiscord = () => {
    const handleLogin = () => {
        const discordRedirectUri = decodeURIComponent(
            "http://localhost:5173/discord/callback"
        );
        const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${discordClientId}&response_type=code&redirect_uri=${discordRedirectUri}&scope=identify+email`;

        window.location.href = discordAuthUrl;
    };

    return (
        <button
            onClick={handleLogin}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center flex-row gap-2 cursor-pointer"
        >
            <FaDiscord />
            Login with Discord
        </button>
    );
};

export default LoginWithDiscord;
