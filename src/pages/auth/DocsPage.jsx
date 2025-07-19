import React, { useEffect } from "react";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import { Toaster } from "react-hot-toast";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";

const DocsPage = () => {
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.DOCS.TITLE}`;
    }, []);

    return (
        <>
            <Toaster reverseOrder={false} />
            <div className="flex">
                <div className="flex-1 min-h-screen flex flex-col">
                    <HeaderComponent />
                    <div className="bg-gray-800 h-auto min-h-[calc(100vh-195px)] flex items-start justify-start p-10 box-border">
                        Documentation
                    </div>
                    <FooterComponent />
                </div>
            </div>
        </>
    );
};

export default DocsPage;
