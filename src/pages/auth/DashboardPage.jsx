import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import { FaEye, FaDownload } from "react-icons/fa";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import {
    LuBadgeDollarSign,
    LuCompass,
    LuLandmark,
    LuMousePointerClick,
} from "react-icons/lu";

const DashboardPage = () => {
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.DASHBOARD.TITLE}`;
    }, []);

    const metrics = [
        {
            title: "Revenue",
            value: "$2,580.00",
            icon: LuBadgeDollarSign,
        },
        {
            title: "Clicks",
            value: "15,847",
            icon: LuMousePointerClick,
        },
        {
            title: "Conversions",
            value: "2,341",
            icon: LuCompass,
        },
        {
            title: "Cashout",
            value: "$18,420.00",
            icon: LuLandmark,
        },
    ];

    // Chart configurations
    const revenueChartOptions = {
        chart: {
            type: "area",
            height: 350,
            toolbar: { show: false },
            fontFamily: "Inter, sans-serif",
        },
        colors: ["#3B82F6", "#10B981"],
        dataLabels: { enabled: false },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                formatter: (value) => `$${value}k`,
            },
        },
        grid: {
            borderColor: "#f1f5f9",
            strokeDashArray: 5,
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
        },
    };

    const revenueChartSeries = [
        {
            name: "Revenue",
            data: [31, 40, 28, 51, 42, 109, 100, 91, 70, 85, 95, 120],
        },
        {
            name: "Profit",
            data: [11, 32, 45, 32, 34, 52, 41, 60, 45, 55, 65, 80],
        },
    ];

    const conversionChartOptions = {
        chart: {
            type: "donut",
            height: 350,
            fontFamily: "Inter, sans-serif",
        },
        colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
        dataLabels: {
            enabled: true,
            formatter: (val) => `${val.toFixed(1)}%`,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: "Total",
                            formatter: () => "100%",
                        },
                    },
                },
            },
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
        },
        labels: ["Desktop", "Mobile", "Tablet", "Other"],
    };

    const conversionChartSeries = [45.2, 32.8, 15.4, 6.6];

    return (
        <div className="w-full h-auto flex flex-col gap-10">
            <div className="w-full h-auto flex flex-row items-center justify-between">
                <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                    <PagesURL.DASHBOARD.ICON size={32} />
                    {PagesURL.DASHBOARD.TITLE}
                </h1>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-xl shadow-sm border border-gray-600 p-6 hover:shadow-md transition-all duration-300 animate-fade-in"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="">
                                    <IconComponent
                                        size={32}
                                        className="text-gray-200"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-300 mb-1">
                                    {metric.value}
                                </h3>
                                <p className="text-gray-100 text-sm">
                                    {metric.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="bg-gray-900 rounded-xl shadow-sm border border-gray-600 p-6 animate-slide-up col-span-1 lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-400">
                            Revenue Overview
                        </h2>
                        <div className="flex items-center space-x-2">
                            <FaEye className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                                Last 12 months
                            </span>
                        </div>
                    </div>
                    <Chart
                        options={revenueChartOptions}
                        series={revenueChartSeries}
                        type="area"
                        height={350}
                    />
                </div>

                {/* Conversion Chart */}
                <div className="bg-gray-900 rounded-xl shadow-sm border border-gray-600 p-6 animate-slide-up col-span-1">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-400">
                            Traffic Sources
                        </h2>
                        <div className="flex items-center space-x-2">
                            <FaDownload className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                                Export
                            </span>
                        </div>
                    </div>
                    <Chart
                        options={conversionChartOptions}
                        series={conversionChartSeries}
                        type="donut"
                        height={350}
                    />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
