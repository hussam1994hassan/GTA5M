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
import PaymentsPage from "./pages/auth/PaymentsPage";
import DocsPage from "./pages/auth/DocsPage";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./layouts/AdminLayout";
import ADashboardPage from "./pages/admin/ADashboardPage";

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
                element: <RegisterPage />,
            },
            {
                path: PagesURL.REGISTER.URL,
                element: <RegisterPage />,
            },
            {
                path: PagesURL.TERMS.URL,
                element: <TermsPage />,
            },
            {
                path: PagesURL.PRIVACY.URL,
                element: <PrivacyPage />,
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
        ],
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
