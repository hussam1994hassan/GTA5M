import { createBrowserRouter } from "react-router";
import PagesURL from "./constants/PagesURL";
import IndexPage from "./pages/guest/IndexPage";
import DashboardPage from "./pages/auth/DashboardPage";
import RegisterPage from "./pages/auth/RegisterPage";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import SettingsPage from "./pages/auth/SettingsPage";
import TermsPage from "./pages/guest/TermsPage";
import PrivacyPage from "./pages/guest/PrivacyPage";
import Store from "./pages/guest/CustomerStorePage";
import PaymentsPage from "./pages/auth/PaymentsPage";
import DocsPage from "./pages/auth/DocsPage";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./layouts/AdminLayout";
import ADashboardPage from "./pages/admin/ADashboardPage";
import LoginPage from "./pages/guest/LoginPage";
import LoginWithDiscordPage from "./pages/guest/LoginWithDiscordPage";
import AuthDiscordCallbackPage from "./pages/guest/AuthDiscordCallbackPage";
import BlankLayout from "./layouts/BlankLayout";
import CheckoutPage from "./pages/guest/CheckoutPage";
import ContactPage from "./pages/guest/ContactPage";

const router = createBrowserRouter([
    {
        path: PagesURL.ROOT.URL,
        element: <GuestLayout />,
        children: [
            {
                path: PagesURL.ROOT.URL,
                element: <IndexPage />,
            },
            {
                path: PagesURL.LOGIN.URL,
                element: <LoginPage />,
            },
            {
                path: PagesURL.LOGIN_WITH_DISCORD.URL,
                element: <LoginWithDiscordPage />,
            },
            {
                path: PagesURL.REGISTER.URL,
                element: <RegisterPage />,
            },
            {
                path: PagesURL.CONTACT_PAGE.URL,
                element: <ContactPage />,
            },
        ],
    },
    {
        path: PagesURL.ROOT.URL,
        element: <BlankLayout />,
        children: [
            {
                path: PagesURL.TERMS.URL,
                element: <TermsPage />,
            },
            {
                path: PagesURL.PRIVACY.URL,
                element: <PrivacyPage />,
            },
            {
                path: PagesURL.STORE.URL,
                element: <Store />,
            },
            {
                path: PagesURL.CHECKOUT.URL,
                element: <CheckoutPage />,
            },
        ],
    },
    {
        path: PagesURL.ROOT.URL,
        element: <AuthLayout />,
        children: [
            {
                path: PagesURL.DASHBOARD.URL,
                element: <DashboardPage />,
            },
            {
                path: PagesURL.SETTINGS.URL,
                element: <SettingsPage />,
            },
            {
                path: PagesURL.PAYMENTS.URL,
                element: <PaymentsPage />,
            },
        ],
    },
    {
        path: PagesURL.ADMIN.URL,
        element: <AdminLayout />,
        children: [
            {
                path: PagesURL.ADMIN.URL,
                element: <ADashboardPage />,
            },
            {
                path: PagesURL.SUPPORT_TICKETS.URL,
                element: <SupportTicketsPage />,
            },
        ],
    },
    {
        path: PagesURL.DISCORD_CALLBACK.URL,
        element: <AuthDiscordCallbackPage />,
    },

    {
        path: PagesURL.DOCS.URL,
        element: <DocsPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default router;
