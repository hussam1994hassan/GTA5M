import { AiFillBank } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";
import { FaTerminal } from "react-icons/fa";
import { GiStrikingDiamonds } from "react-icons/gi";
import { HiCog6Tooth, HiMiniSquares2X2 } from "react-icons/hi2";
import { MdOutlineErrorOutline, MdOutlinePayments } from "react-icons/md";
import { IoIosHelpBuoy } from "react-icons/io";
import { LuCrown } from "react-icons/lu";

const PagesURL = {
    ROOT: {
        TITLE: "Earn Money Online",
        URL: "/",
        ICON: AiFillBank,
    },
    LOGIN: {
        TITLE: "Login",
        URL: "/login",
        ICON: IoLogInOutline,
    },
    LOGIN_WITH_DISCORD: {
        TITLE: "Login With Discord",
        URL: "/login-with-discord",
        ICON: IoLogInOutline,
    },
    DISCORD_CHECK: {
        TITLE: "Discord Check",
        URL: "/discord/check/:secret",
        ICON: IoLogInOutline,
    },
    ServerStore: {
        TITLE: "Server Store",
        URL: "/server-store",
        ICON: IoLogInOutline,
    },
    DISCORD_CALLBACK: {
        TITLE: "Discord Callback",
        URL: "/discord/callback",
        ICON: IoLogInOutline,
    },
    SUPPORT_TICKETS: {
        TITLE: "Support Tickets",
        URL: "/support-tickets",
        ICON: IoLogInOutline,
    },
    CONTACT_PAGE: {
        TITLE: "Contact Us",
        URL: "/contact",
        ICON: IoLogInOutline,
    },
    REGISTER: {
        TITLE: "Register",
        URL: "/register",
        ICON: IoLogInOutline,
    },
    TERMS: {
        TITLE: "Terms and Conditions",
        URL: "/terms",
        ICON: FaTerminal,
    },
    PRIVACY: {
        TITLE: "Privacy Policy",
        URL: "/privacy",
        ICON: GiStrikingDiamonds,
    },
    STORE: {
        TITLE: "Store",
        URL: "/store",
        ICON: GiStrikingDiamonds,
    },
    DASHBOARD: {
        TITLE: "Dashboard",
        URL: "/dashboard",
        ICON: HiMiniSquares2X2,
    },
    PAYMENTS: {
        TITLE: "Payments",
        URL: "/payments",
        ICON: MdOutlinePayments,
    },
    SETTINGS: {
        TITLE: "Settings",
        URL: "/settings",
        ICON: HiCog6Tooth,
    },
    CHECKOUT: {
        TITLE: "Checkout",
        URL: "/checkout",
        ICON: MdOutlinePayments,
    },
    DOCS: {
        TITLE: "Documentation",
        URL: "/docs",
        ICON: IoIosHelpBuoy,
    },
    ADMIN: {
        TITLE: "Dashboard",
        URL: "/admin",
        ICON: LuCrown,
    },
    NOT_FOUND: {
        TITLE: "404 Not Found",
        URL: "/404",
        ICON: MdOutlineErrorOutline,
    },
};

export default PagesURL;
