const User = {
    first_name: "John",
    last_name: "Doe",
    full_address: "123 Main St, Anytown, USA",
    zip_code: "10116",
    country: "USA",
    city: "New York",
    state: "NY",
    phone: "+1 (123) 456-7890",
    email: "admin@example.com",
    image: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
    balance: 1561.02,
    is_admin: true,
    Notifications: [
        {
            title: "Welcome!",
            body: "Thank you for signing up.",
            created_at: "3 hours ago",
        },
        {
            title: "Update Available",
            body: "A new update has been released.",
            created_at: "2 hours ago",
        },
    ],
    Payments: [
        {
            id: 1,
            method_type: "PayPal",
            biling_to: "user@paypal.com",
            date: "Mar 10, 2025",
            revenue: 52.1,
            status: 0,
        },
        {
            id: 2,
            method_type: "Crypto",
            biling_to: "xSa41Ks4Hsa40wkHs0auaIls4KNsjpLs",
            date: "Apr 05, 2025",
            revenue: 136.1,
            status: 1,
        },
        {
            id: 3,
            method_type: "Binance",
            biling_to: "user@paypal.com",
            date: "May 22, 2025",
            revenue: 1252.1,
            status: 2,
        },
    ],
    PaymentInfo: {
        method_type: "PayPal",
        biling_to: "user@paypal.com",
    },
};

export default User;
