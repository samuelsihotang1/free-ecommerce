import { Head } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function Home() {
    const loadedRef = useRef(false);

    useEffect(() => {
        if (loadedRef.current) return;
        loadedRef.current = true;

        const loadScript = (src) =>
            new Promise((resolve, reject) => {
                const s = document.createElement("script");
                s.src = src;
                s.async = false;
                s.onload = () => resolve();
                s.onerror = () => reject(new Error(`Failed to load ${src}`));
                document.body.appendChild(s);
            });

        (async () => {
            await loadScript("/assets/libs/@popperjs/core/umd/popper.min.js");
            await loadScript("/assets/libs/simplebar/simplebar.min.js");
            await loadScript("/assets/libs/feather-icons/feather.min.js");
            await loadScript("/assets/js/pages/components.js");

            await loadScript("/assets/libs/jsvectormap/js/jsvectormap.min.js");
            await loadScript("/assets/libs/jsvectormap/maps/world.js");
            await loadScript("/assets/libs/chart.js/chart.min.js");
            await loadScript("/assets/libs/echarts/echarts.min.js");
            await loadScript("/assets/libs/apexcharts/apexcharts.min.js");
            await loadScript("/assets/js/pages/analytics-index.init.js");
            await loadScript("/assets/js/app.js");
        })();
    }, []);

    return (
        <>
            <Head title="Home" />

            {/* leftbar-tab-menu */}
            <div className="leftbar-tab min-w-[260px] z-[99] duration-300 print:hidden">
                <div
                    className="flex w-[60px] bg-iconbar dark:bg-slate-800 py-4 items-center fixed top-0 z-[99]
        rounded-[100px] m-4 flex-col h-[calc(100%-30px)]"
                >
                    <a href="index-2.html" className="block text-center logo">
                        <span>
                            <img
                                src="/assets/images/logo-sm.png"
                                alt="logo-small"
                                className="logo-sm
                h-8"
                            />
                        </span>
                    </a>

                    <div className="icon-body max-h-full w-full overflow-hidden">
                        <div className="relative h-full">
                            <ul
                                className="flex-col w-[60px] items-center mt-[60px] flex-1 border-b-0 tab-menu"
                                id="tab-menu"
                                data-tabs-toggle="#Icon-menu"
                            >
                                <li
                                    className="my-0 flex justify-center menu-items"
                                    role="presentation"
                                >
                                    <button
                                        className="inline-block py-4 px-4 text-sm font-medium relative
                    text-center text-gray-700 rounded-t-lg border-0
                    border-transparent hover:text-primary-500
                    dark:text-gray-400 dark:hover:text-primary-400 menu-link"
                                        id="Dashboards-tab"
                                        data-tabs-target="#Dashboards"
                                        type="button"
                                        role="tab"
                                        aria-controls="Dashboards"
                                        aria-selected="false"
                                    >
                                        <i className="ti ti-smart-home text-3xl"></i>
                                    </button>
                                </li>
                                <li
                                    className="my-0 flex justify-center menu-items"
                                    role="presentation"
                                >
                                    <button
                                        className="inline-block py-4 px-4 text-sm font-medium relative
                    text-center text-gray-700 rounded-t-lg border-0
                    border-transparent hover:text-primary-500
                    dark:text-gray-400 dark:hover:text-primary-400 menu-link"
                                        id="Apps-tab"
                                        data-tabs-target="#Apps"
                                        type="button"
                                        role="tab"
                                        aria-controls="Apps"
                                        aria-selected="false"
                                    >
                                        <i className="ti ti-apps text-3xl"></i>
                                    </button>
                                </li>
                                <li
                                    className="my-0 flex justify-center menu-items"
                                    role="presentation"
                                >
                                    <button
                                        className="inline-block py-4 px-4 text-sm font-medium relative
                    text-center text-gray-700 rounded-t-lg border-0
                    border-transparent hover:text-primary-500
                    dark:text-gray-400 dark:hover:text-primary-400 menu-link"
                                        id="Uikit-tab"
                                        data-tabs-target="#Uikit"
                                        type="button"
                                        role="tab"
                                        aria-controls="Uikit"
                                        aria-selected="false"
                                    >
                                        <i className="ti ti-planet text-3xl"></i>
                                    </button>
                                </li>
                                <li
                                    className="my-0 flex justify-center menu-items"
                                    role="presentation"
                                >
                                    <button
                                        className="inline-block py-4 px-4 text-sm font-medium relative
                    text-center text-gray-700 rounded-t-lg border-0
                    border-transparent hover:text-primary-500
                    dark:text-gray-400 dark:hover:text-primary-400 menu-link"
                                        id="Pages-tab"
                                        data-tabs-target="#Pages"
                                        type="button"
                                        role="tab"
                                        aria-controls="Pages"
                                        aria-selected="false"
                                    >
                                        <i className="ti ti-files text-3xl"></i>
                                    </button>
                                </li>
                                <li
                                    className="my-0 flex justify-center menu-items"
                                    role="presentation"
                                >
                                    <button
                                        className="inline-block py-4 px-4 text-sm font-medium relative
                    text-center text-gray-700 rounded-t-lg border-0
                    border-transparent hover:text-primary-500
                    dark:text-gray-400 dark:hover:text-primary-400 menu-link"
                                        id="Authentication-tab"
                                        data-tabs-target="#Authentication"
                                        type="button"
                                        role="tab"
                                        aria-controls="Authentication"
                                        aria-selected="false"
                                    >
                                        <i className="ti ti-shield-lock text-3xl"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-auto bg-iconbar dark:bg-slate-800 shrink-0">
                        <a href="#">
                            <img
                                src="/assets/images/users/avatar-3.png"
                                className="rounded-full w-8 h-8"
                            />
                        </a>
                    </div>
                </div>
                <div className="main-menu-inner h-full w-[200px] my-4  fixed top-0 z-[99] left-[calc(60px+16px)] rtl:right-[calc(60px+16px)] rtl:left-0 rounded-lg transition delay-150 duration-300 ease-in-out">
                    <div className="main-menu-inner-logo">
                        <div className="flex items-center">
                            <a href="index-2.html" className="leading-[60px]">
                                <img
                                    src="/assets/images/logo-2.png"
                                    className="inline-block dark:hidden h-[15px] ltr:ml-4 rtl:ml-0 rtl:mr-4"
                                />
                                <img
                                    src="/assets/images/logo.png"
                                    className=" hidden dark:inline-block h-[15px] ltr:ml-4 rtl:ml-0 rtl:mr-4"
                                />
                            </a>
                            <div className="ltr:mr-2 ltr:lg:mr-4 rtl:mr-0 rtl:ml-2 rtl:lg:mr-0 rtl:lg:ml-4 ml-auto block xl:hidden">
                                <button
                                    id="toggle-menu-hide-2"
                                    className="button-menu-mobile-2 flex rounded-full md:mr-0 relative"
                                >
                                    <i className="ti ti-chevrons-left top-icon text-3xl"></i>
                                </button>
                            </div>
                        </div>
                        <div
                            className="menu-body h-[calc(100vh-60px)] p-4"
                            data-simplebar
                        >
                            <div id="Icon-menu">
                                <div
                                    className="hidden"
                                    id="Dashboards"
                                    role="tabpanel"
                                    aria-labelledby="Dashboards-tab"
                                >
                                    <div className="title-box mb-3">
                                        <h6 className="text-sm font-medium uppercase text-slate-400">
                                            Dashboards
                                        </h6>
                                    </div>
                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                        <li className="nav-item relative block">
                                            <a
                                                href="index-2.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Analytics
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="crypto-index.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Crypto
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="crm-index.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                CRM
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="project-index.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Project
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="ecommerce-index.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500  dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Ecommerce
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="helpdesk-index.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500  dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Helpdesk
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="hidden"
                                    id="Apps"
                                    role="tabpanel"
                                    aria-labelledby="Apps-tab"
                                >
                                    <div className="title-box mb-3">
                                        <h6 className="text-sm font-medium uppercase text-slate-400">
                                            Applications
                                        </h6>
                                    </div>
                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                        <li>
                                            <div
                                                id="accordion-flush"
                                                data-accordion="collapse"
                                                data-active-classes=""
                                                data-inactive-classes="text-gray-700 hover:text-primary-500 dark:text-gray-400"
                                            >
                                                <div id="Apps-Analytics">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Analytics-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Analytics-flush"
                                                    >
                                                        <span>Analytics</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Analytics-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="Apps-Analytics"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="analytics-customers.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Customers
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="analytics-reports.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Reports
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="Apps-Crypto">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Crypto-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Crypto-flush"
                                                    >
                                                        <span>Crypto</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Crypto-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="Apps-Crypto"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="crypto-exchange.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Exchange
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="crypto-wallet.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Wallet
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="crypto-news.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Crypto News
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="crypto-ico.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                ICO List
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="crypto-settings.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Settings
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="Apps-CRM">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#CRM-flush"
                                                        aria-expanded="false"
                                                        aria-controls="CRM-flush"
                                                    >
                                                        <span>CRM</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="CRM-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="Apps-CRM"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="crm-contacts.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Contacts
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="crm-opportunities.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Opportunities
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="crm-leads.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Leads
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="crm-customers.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Customers
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="Apps-Projects">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Projects-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Projects-flush"
                                                    >
                                                        <span>Projects</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Projects-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="Apps-Projects"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="projects-clients.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Clients
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="projects-team.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Team
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="projects-project.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Projects
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="projects-task.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Tasks
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="projects-kanban-board.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Kanban Board
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="projects-chat.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Chat
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="projects-users.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Users
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="projects-create.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Project Create
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="Apps-Ecommerce">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Ecommerce-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Ecommerce-flush"
                                                    >
                                                        <span>Ecommerce</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Ecommerce-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="Apps-Ecommerce"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ecommerce-products.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Products
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ecommerce-product-list.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Product List
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ecommerce-product-detail.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Product Detail
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ecommerce-cart.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Cart
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ecommerce-checkout.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Chackout
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="Apps-Helpdesk">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer "
                                                        data-accordion-target="#Helpdesk-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Helpdesk-flush"
                                                    >
                                                        <span>Helpdesk</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Helpdesk-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="Apps-Helpdesk"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="helpdesk-tickets.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Tickets
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="helpdesk-reports.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Reports
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="helpdesk-agents.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Agents
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="Apps-Email">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Email-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Email-flush"
                                                    >
                                                        <span>Email</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Email-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="Apps-Email"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="apps-email-inbox.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Inbox
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="apps-email-read.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Read Email
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="nav-item relative block">
                                            <a
                                                href="apps-chat.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Chat
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="apps-contact-list.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Contact List
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="apps-calendar.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Calendar
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="apps-invoice.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Invoice
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="hidden"
                                    id="Uikit"
                                    role="tabpanel"
                                    aria-labelledby="Uikit-tab"
                                >
                                    <div className="title-box mb-3">
                                        <h6 className="text-sm font-medium uppercase text-slate-400">
                                            UI Kit
                                        </h6>
                                    </div>
                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                        <li className="nav-item relative block">
                                            <div
                                                id="UI-flush"
                                                data-accordion="collapse"
                                                data-active-classes=""
                                                data-inactive-classes="text-gray-700 hover:text-primary-500 dark:text-gray-400"
                                            >
                                                <div id="UIKit-Elements">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#UI-Elements"
                                                        aria-expanded="false"
                                                        aria-controls="UI-Elements"
                                                    >
                                                        <span>UI Elements</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="UI-Elements"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="UIKit-Elements"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-alerts.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Alerts
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-avatar.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Avatar
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-buttons.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Buttons
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-badges.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Badges
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-cards.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Crads
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-carousels.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Carousels
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-dropdowns.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Dropdowns
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-grids.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Grids
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-images.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Images
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-lists.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Lists
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-modals.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Modals
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-navs.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Navs
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-navbar.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Navbar
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-paginations.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Paginations
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-popover-tooltips.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Popover &
                                                                Tooltips
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-progress.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Progress
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-spinners.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Spinners
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-tabs-accordions.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Tabs &
                                                                Accordions
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-typography.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Typography
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="ui-videos.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Videos
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="UIKit-Advanced">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#AdvancedUI-flush"
                                                        aria-expanded="false"
                                                        aria-controls="AdvancedUI-flush"
                                                    >
                                                        <span>Advanced UI</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="AdvancedUI-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="UIKit-Advanced"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="advanced-animation.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Animation
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="advanced-clipboard.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Clip Board
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="advanced-dragula.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Dragula
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="advanced-files.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                File Manager
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="advanced-highlight.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Highlight
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="advanced-rangeslider.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Range Slider
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="advanced-ratings.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Ratings
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="advanced-ribbons.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Ribbons
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="advanced-sweetalerts.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Sweet Alerts
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="UIKit-Forms">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Forms-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Forms-flush"
                                                    >
                                                        <span>Forms</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Forms-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="UIKit-Forms"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="forms-elements.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Basic Elements
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="forms-advance.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Advance Elements
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="forms-validation.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Validation
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="forms-wizard.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Wizard
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="forms-editors.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Editors
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="forms-uploads.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                File Upload
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="forms-img-crop.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Image Crop
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="UIKit-Charts">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Charts-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Charts-flush"
                                                    >
                                                        <span>Charts</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Charts-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="UIKit-Charts"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="charts-apex.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Apex
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="charts-echarts.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Echarts
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="charts-justgage.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                JustGage
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="charts-chartjs.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Chartjs
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="charts-toast-ui.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Toast
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="UIKit-Tables">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Tables-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Tables-flush"
                                                    >
                                                        <span>Tables</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Tables-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="UIKit-Tables"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="tables-basic.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Basic
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="tables-datatable.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Datatables
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="tables-editable.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Editable
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="UIKit-Icons">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer "
                                                        data-accordion-target="#Icons-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Icons-flush"
                                                    >
                                                        <span>Icons</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Icons-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="UIKit-Icons"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="icons-materialdesign.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Material Design
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="icons-fontawesome.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Fontawesome
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="icons-tabler.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Tabler
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="icons-feather.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Feather
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div id="UIKit-Maps">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500  font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Maps-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Maps-flush"
                                                    >
                                                        <span>Maps</span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Maps-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="UIKit-Maps"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="maps-google.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Google Maps
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="maps-leaflet.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Leaflet Maps
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="maps-vector.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Vector Maps
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="UIKit-Email-Templates">
                                                    <a
                                                        href="#"
                                                        className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4 cursor-pointer  "
                                                        data-accordion-target="#Email-Templates-flush"
                                                        aria-expanded="false"
                                                        aria-controls="Email-Templates-flush"
                                                    >
                                                        <span>
                                                            Email Templates
                                                        </span>
                                                        <i
                                                            className="fas fa-angle-down ml-auto inline-block text-sm transform transition-transform duration-300"
                                                            data-accordion-icon
                                                        ></i>
                                                    </a>
                                                </div>
                                                <div
                                                    id="Email-Templates-flush"
                                                    className="collapse-menu hidden"
                                                    aria-labelledby="UIKit-Email-Templates"
                                                >
                                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="email-templates-basic.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Basic Action
                                                                Email
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="email-templates-alert.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Alert Email
                                                            </a>
                                                        </li>
                                                        <li className="nav-item relative block">
                                                            <a
                                                                href="email-templates-billing.html"
                                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                                            >
                                                                Billing Email
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="hidden"
                                    id="Pages"
                                    role="tabpanel"
                                    aria-labelledby="Pages-tab"
                                >
                                    <div className="title-box mb-3">
                                        <h6 className="text-sm font-medium uppercase text-slate-400">
                                            Pages
                                        </h6>
                                    </div>
                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                        <li className="nav-item relative block">
                                            <a
                                                href="pages-profile.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Profile
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="pages-tour.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Tour
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="pages-timeline.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Timeline
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="pages-treeview.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Treeview
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="pages-starter.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Starter Page
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="pages-pricing.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Pricing
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="pages-blogs.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Blogs
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="pages-faq.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                FAQs
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="pages-gallery.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Gallery
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="hidden"
                                    id="Authentication"
                                    role="tabpanel"
                                    aria-labelledby="Authentication-tab"
                                >
                                    <div className="title-box mb-3">
                                        <h6 className="text-sm font-medium uppercase text-slate-400">
                                            Authentication
                                        </h6>
                                    </div>
                                    <ul className="nav flex-col flex flex-wrap pl-0 mb-0">
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-login.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Login
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-login-alt.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Login-alt
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-register.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Register
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-register-alt.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Register-alt
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-recover-pw.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Re-Password
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-recover-pw-alt.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Re-Password-alt
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-lock-screen.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Lock Screen
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-lock-screen-alt.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Lock Screen-alt
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-404.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Error 404
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-404-alt.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Error 404-alt
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-500.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Error 500
                                            </a>
                                        </li>
                                        <li className="nav-item relative block">
                                            <a
                                                href="auth-500-alt.html"
                                                className="nav-link hover:bg-gray-50 hover:text-primary-500 dark:hover:bg-gray-800/20 rounded-md dark:hover:text-primary-500 relative font-medium text-sm flex items-center h-[38px] decoration-0 px-2 py-4"
                                            >
                                                Error 500-alt
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed ltr:left-0 ltr:right-4 rtl:right-0 rtl:left-4 print:hidden z-50">
                <nav
                    id="topbar"
                    className="topbar border-gray-200  relative ltr:ml-0 rtl:ml-0 ltr:lg:ml-0  rtl:lg:mr-0   ltr:xl:ml-[calc(260px+32px)]  rtl:xl:mr-[calc(260px+32px)] duration-300
            block "
                >
                    <div className="mx-0 flex max-w-full flex-wrap items-center lg:mx-auto">
                        <div className="ltr:mr-2 ltr:lg:mr-4 rtl:mr-0 rtl:ml-2 rtl:lg:mr-0 rtl:lg:ml-4 ml-4 xl:ml-0">
                            <button
                                id="toggle-menu-hide"
                                className="button-menu-mobile flex rounded-full md:mr-0 relative"
                            >
                                <i className="ti ti-chevrons-left text-3xl  top-icon"></i>
                            </button>
                        </div>
                        <div className="flex items-center md:w-[40%] lg:w-[30%] xl:w-[20%]">
                            <div className="relative ltr:mr-2 rtl:mr-0 rtl:ml-2 hidden lg:mr-4 md:block lg:block w-full">
                                <div
                                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center
                pl-3"
                                >
                                    <i className="ti ti-search text-gray-400 z-10"></i>
                                </div>
                                <input
                                    type="text"
                                    id="email-adress-icon"
                                    className="block w-full rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-200/10 p-2
                pl-10 text-slate-600 dark:text-slate-400 outline-none focus:border-slate-300
                focus:ring-slate-300 dark:bg-slate-800/20 sm:text-sm"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                        <div className="order-1 ltr:ml-auto rtl:ml-0 rtl:mr-auto flex items-center md:order-2">
                            <div className="ltr:mr-2 ltr:lg:mr-4 rtl:mr-0 rtl:ml-2 rtl:lg:mr-0 rtl:lg:ml-4">
                                <button
                                    id="toggle-theme"
                                    className="flex rounded-full md:mr-0 relative"
                                >
                                    <i className="ti ti-moon text-3xl top-icon"></i>
                                </button>
                            </div>
                            <div className="ltr:mr-2 ltr:lg:mr-4 rtl:mr-0 rtl:ml-2 rtl:lg:mr-0 rtl:lg:ml-4 dropdown relative">
                                <button
                                    type="button"
                                    className="dropdown-toggle flex rounded-full md:mr-0"
                                    id="Notifications"
                                    aria-expanded="false"
                                    data-dropdown-toggle="navNotifications"
                                >
                                    <i className="ti ti-bell text-3xl top-icon"></i>
                                </button>

                                <div
                                    className="dropdown-menu dropdown-menu-right z-50 my-1 hidden w-64
                list-none divide-y h-52 divide-gray-100 rounded border-slate-700
                md:border-white text-base shadow dark:divide-gray-600 bg-white
                dark:bg-slate-800"
                                    id="navNotifications"
                                    data-simplebar
                                >
                                    <ul
                                        className="py-1"
                                        aria-labelledby="navNotifications"
                                    >
                                        <li className="py-2 px-4">
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item"
                                            >
                                                <div className="flex align-items-start">
                                                    <img
                                                        className="object-cover rounded-full h-8 w-8 shrink-0 mr-3"
                                                        src="/assets/images/users/avatar-2.png"
                                                        alt="logo"
                                                    />
                                                    <div className="flex-grow ml-0.5 overflow-hidden">
                                                        <p
                                                            className="text-sm font-medium text-gray-800 truncate
                            dark:text-gray-300"
                                                        >
                                                            Karen Robinson
                                                        </p>
                                                        <p
                                                            className="text-gray-500 mb-0 text-xs truncate
                            dark:text-gray-400"
                                                        >
                                                            Hey ! i'm available
                                                            here
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="py-2 px-4">
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item"
                                            >
                                                <div className="flex align-items-start">
                                                    <img
                                                        className="object-cover rounded-full h-8 w-8 shrink-0 mr-3"
                                                        src="/assets/images/users/avatar-3.png"
                                                        alt="logo"
                                                    />
                                                    <div className="flex-grow ml-0.5 overflow-hidden">
                                                        <p
                                                            className="text-sm font-medium text-gray-800 truncate
                            dark:text-gray-300"
                                                        >
                                                            Your order is placed
                                                        </p>
                                                        <p
                                                            className="text-gray-500 mb-0 text-xs truncate
                            dark:text-gray-400"
                                                        >
                                                            Dummy text of the
                                                            printing and
                                                            industry.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="py-2 px-4">
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item"
                                            >
                                                <div className="flex align-items-start">
                                                    <img
                                                        className="object-cover rounded-full h-8 w-8 shrink-0 mr-3"
                                                        src="/assets/images/users/avatar-9.png"
                                                        alt="logo"
                                                    />
                                                    <div className="flex-grow ml-0.5 overflow-hidden">
                                                        <p
                                                            className="text-sm font-medium text-gray-800 truncate
                            dark:text-gray-300"
                                                        >
                                                            Robert McCray
                                                        </p>
                                                        <p
                                                            className="text-gray-500 mb-0 text-xs truncate
                            dark:text-gray-400"
                                                        >
                                                            Good Morning!
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="py-2 px-4">
                                            <a
                                                href="javascript:void(0);"
                                                className="dropdown-item"
                                            >
                                                <div className="flex align-items-start">
                                                    <img
                                                        className="object-cover rounded-full h-8 w-8 shrink-0 mr-3"
                                                        src="/assets/images/users/avatar-6.png"
                                                        alt="logo"
                                                    />
                                                    <div className="flex-grow ml-0.5 overflow-hidden">
                                                        <p
                                                            className="text-sm font-medium text-gray-800 truncate
                            dark:text-gray-300"
                                                        >
                                                            Meeting with
                                                            designers
                                                        </p>
                                                        <p
                                                            className="text-gray-500 mb-0 text-xs truncate
                            dark:text-gray-400"
                                                        >
                                                            It is a long
                                                            established fact
                                                            that a reader.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mr-2 lg:mr-0 dropdown relative">
                                <button
                                    type="button"
                                    className="dropdown-toggle flex items-center rounded-full text-sm
                focus:bg-none focus:ring-0 dark:focus:ring-0 md:mr-0"
                                    id="user-profile"
                                    aria-expanded="false"
                                    data-dropdown-toggle="navUserdata"
                                >
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="/assets/images/users/avatar-1.png"
                                        alt="user photo"
                                    />
                                    <span className="ltr:ml-2 rtl:ml-0 rtl:mr-2 hidden text-left xl:block">
                                        <span className="block font-medium text-slate-600 dark:text-gray-400">
                                            John Doe
                                        </span>
                                        <span className="-mt-1 block text-xs text-slate-500 dark:text-gray-500">
                                            Admin
                                        </span>
                                    </span>
                                </button>

                                <div
                                    className="dropdown-menu dropdown-menu-right z-50 my-1 hidden list-none
                divide-y divide-gray-100 rounded border-slate-700 md:border-white
                text-base shadow dark:divide-gray-600 bg-white dark:bg-slate-800"
                                    id="navUserdata"
                                >
                                    <div className="py-3 px-4">
                                        <span className="block text-sm font-medium text-gray-900 dark:text-white">
                                            John Doe
                                        </span>
                                        <span
                                            className="block truncate text-sm font-normal text-gray-500
                    dark:text-gray-400"
                                        >
                                            johndoe@linky.com
                                        </span>
                                    </div>
                                    <ul
                                        className="py-1"
                                        aria-labelledby="navUserdata"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50
                        dark:text-gray-200 dark:hover:bg-gray-900/20
                        dark:hover:text-white"
                                            >
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50
                        dark:text-gray-200 dark:hover:bg-gray-900/20
                        dark:hover:text-white"
                                            >
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50
                        dark:text-gray-200 dark:hover:bg-gray-900/20
                        dark:hover:text-white"
                                            >
                                                Earnings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50
                        dark:text-gray-200 dark:hover:bg-gray-900/20
                        dark:hover:text-white"
                                            >
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="ltr:flex flex-1 rtl:flex-row-reverse">
                <div className="page-wrapper relative ltr:ml-auto rtl:mr-auto rtl:ml-0 w-[calc(100%-276px)] px-4 pt-[54px] duration-300">
                    <div className="xl:w-full">
                        <div className="flex flex-wrap">
                            <div className="flex items-center py-4 w-full">
                                <div className="w-full">
                                    <div className="">
                                        <div className="flex flex-wrap justify-between">
                                            <div className="items-center ">
                                                <h1 className="font-semibold text-xl mb-1 block dark:text-slate-100">
                                                    Analytics
                                                </h1>
                                                <ol className="list-reset flex text-sm">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="text-gray-500"
                                                        >
                                                            SamZ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span className="text-gray-500 mx-2">
                                                            /
                                                        </span>
                                                    </li>
                                                    <li className="text-gray-500">
                                                        Dashboards
                                                    </li>
                                                    <li>
                                                        <span className="text-gray-500 mx-2">
                                                            /
                                                        </span>
                                                    </li>
                                                    <li className="text-blue-600 hover:text-blue-700">
                                                        Analytics
                                                    </li>
                                                </ol>
                                            </div>
                                            <div className="flex items-center">
                                                <button className="px-3 py-2 lg:px-4 bg-blue-500 collapse:bg-green-100 text-white text-sm font-semibold rounded hover:bg-blue-600">
                                                    Create New
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end container*/}

                    <div className="xl:w-full  min-h-[calc(100vh-138px)] relative pb-14 ">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4  mb-4">
                            <div className=" sm:col-span-3 md:col-span-4 lg:col-span-4 xl:col-span-3">
                                <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
                                    <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
                                        <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative">
                                            <div className="flex justify-between xl:gap-x-2 items-cente">
                                                <div className="relative overflow-hidden text-transparent -m-3">
                                                    <i
                                                        data-feather="hexagon"
                                                        className="h-20 w-20 fill-slate-500/5 group-hover:fill-white/10 mx-auto rotate-90 relative top-1"
                                                    ></i>
                                                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-slate-500 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                                        <i className="ti ti-users text-3xl"></i>
                                                    </div>
                                                </div>
                                                <div className="self-center ml-auto">
                                                    <h3 className="my-1 font-semibold text-2xl dark:text-slate-200">
                                                        24k
                                                    </h3>
                                                    <p className="text-gray-400 mb-0 font-medium">
                                                        Sessions
                                                    </p>
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/*end inner-grid*/}
                                    </div>
                                    <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
                                        <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative">
                                            <div className="flex justify-between xl:gap-x-2 items-cente">
                                                <div className="relative overflow-hidden text-transparent -m-3">
                                                    <i
                                                        data-feather="hexagon"
                                                        className="h-20 w-20 fill-slate-500/5 group-hover:fill-white/10 mx-auto rotate-90 relative top-1"
                                                    ></i>
                                                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-slate-500 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                                        <i className="ti ti-clock text-3xl"></i>
                                                    </div>
                                                </div>
                                                <div className="self-center ml-auto">
                                                    <h3 className="my-1 font-semibold text-2xl dark:text-slate-200">
                                                        01
                                                        <span className="text-sm text-slate-500">
                                                            m
                                                        </span>
                                                        03
                                                        <span className="text-sm text-slate-500">
                                                            s
                                                        </span>
                                                    </h3>
                                                    <p className="text-gray-400 mb-0 font-medium">
                                                        Avg.Sessions
                                                    </p>
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/*end inner-grid*/}
                                    </div>
                                    <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
                                        <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative">
                                            <div className="flex justify-between xl:gap-x-2 items-cente">
                                                <div className="relative overflow-hidden text-transparent -m-3">
                                                    <i
                                                        data-feather="hexagon"
                                                        className="h-20 w-20 fill-slate-500/5 group-hover:fill-white/10 mx-auto rotate-90 relative top-1"
                                                    ></i>
                                                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-slate-500 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                                        <i className="ti ti-activity text-3xl"></i>
                                                    </div>
                                                </div>
                                                <div className="self-center ml-auto">
                                                    <h3 className="my-1 font-semibold text-2xl dark:text-slate-200">
                                                        $1800
                                                    </h3>
                                                    <p className="text-gray-400 mb-0 font-medium">
                                                        Bounce Rate
                                                    </p>
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/*end inner-grid*/}
                                    </div>
                                    <div className="md:col-span-2 lg:col-span-1 xl:col-span-1">
                                        <div className="bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative">
                                            <div className="flex justify-between xl:gap-x-2 items-cente">
                                                <div className="relative overflow-hidden text-transparent -m-3">
                                                    <i
                                                        data-feather="hexagon"
                                                        className="h-20 w-20 fill-slate-500/5 group-hover:fill-white/10 mx-auto rotate-90 relative top-1"
                                                    ></i>
                                                    <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-slate-500 rounded-xl group-hover:text-white transition-all duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                                                        <i className="ti ti-confetti text-3xl"></i>
                                                    </div>
                                                </div>
                                                <div className="self-center ml-auto">
                                                    <h3 className="my-1 font-semibold text-2xl dark:text-slate-200">
                                                        75000
                                                    </h3>
                                                    <p className="text-gray-400 mb-0 font-medium truncate ">
                                                        Goal Completions
                                                    </p>
                                                </div>
                                            </div>
                                        </div>{" "}
                                        {/*end inner-grid*/}
                                    </div>
                                </div>
                            </div>

                            <div className="md:row-span-1 lg:row-span-1 xl:row-span-2 md:col-span-4 lg:col-span-4 xl:col-span-1">
                                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative h-full overflow-hidden">
                                    <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                                        <h4 className="font-medium">
                                            Sessions Device
                                        </h4>
                                    </div>
                                    {/*end header-title*/}
                                    <div className="flex-auto p-4">
                                        <div
                                            id="ana_device"
                                            className="apex-charts"
                                        ></div>
                                        <div className="flex flex-col">
                                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                                                    <div className="overflow-hidden">
                                                        <table className="min-w-full">
                                                            <thead className="bg-gray-50 dark:bg-slate-600/20">
                                                                <tr>
                                                                    <th
                                                                        scope="col"
                                                                        className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                    >
                                                                        Device
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                    >
                                                                        Sassions
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                    >
                                                                        Day
                                                                    </th>
                                                                    <th
                                                                        scope="col"
                                                                        className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                    >
                                                                        Week
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* Product 1 */}
                                                                <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                    <td className="p-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-slate-300">
                                                                        Dasktops
                                                                    </td>
                                                                    <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                        1843
                                                                    </td>
                                                                    <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                        -3
                                                                    </td>
                                                                    <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                        -12
                                                                    </td>
                                                                </tr>
                                                                {/* Product 2 */}
                                                                <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                    <td className="p-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-slate-300">
                                                                        Tablets
                                                                    </td>
                                                                    <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                        2543
                                                                    </td>
                                                                    <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                        -5
                                                                    </td>
                                                                    <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                        -2
                                                                    </td>
                                                                </tr>
                                                                {/* Product 2 */}
                                                                <tr className="bg-white dark:bg-gray-800">
                                                                    <td className="p-3 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-slate-300">
                                                                        Mobiles
                                                                    </td>
                                                                    <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                        3654
                                                                    </td>
                                                                    <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                        -5
                                                                    </td>
                                                                    <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                        -6
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end card-body*/}
                                </div>{" "}
                                {/*end card*/}
                            </div>
                            <div className="md:col-span-4 lg:col-span-4 xl:col-span-3">
                                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative h-full">
                                    <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                                        <h4 className="font-medium">
                                            Audience Overview
                                        </h4>
                                    </div>
                                    {/*end header-title*/}
                                    <div className="flex-auto p-4">
                                        <div className="chart-container">
                                            <canvas
                                                id="bar"
                                                height="290"
                                            ></canvas>
                                        </div>
                                    </div>
                                    {/*end card-body*/}
                                </div>{" "}
                                {/*end card*/}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-4">
                            <div className="sm:col-span-1  md:col-span-2 lg:col-span-4 xl:col-span-1 ">
                                <div className="h-full bg-white dark:bg-slate-800 shadow  rounded-md w-full relative">
                                    <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                                        <h4 className="font-medium dark:text-slate-300">
                                            Total Visits
                                        </h4>
                                    </div>
                                    <div className="flex-auto p-4">
                                        <div
                                            id="map_1"
                                            className="w-full h-60"
                                        ></div>
                                        <div className="grid gap-0 xl:gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 mt-2">
                                            <div className="col-span-4 xs:col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-1 border-r-0 xs:border-r border-dashed dark:border-slate-700 border-b md:border-b-0 xl:border-b-0">
                                                <div className="p-4 text-center">
                                                    <p className="my-1 font-semibold text-2xl inline-block relative dark:text-slate-300">
                                                        $15,520{" "}
                                                        <span className="w-1 h-1 rounded-full bg-pink-500 absolute top-0 right-0"></span>
                                                    </p>
                                                    <h6 className="uppercase text-slate-400 mt-2 text-xs font-semibold">
                                                        Domestic
                                                    </h6>
                                                </div>
                                            </div>
                                            <div className="col-span-4 xs:col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-1">
                                                <div className="p-4 text-center">
                                                    <p className="my-1 font-semibold text-2xl inline-block relative dark:text-slate-300">
                                                        $36,880{" "}
                                                        <span className="w-1 h-1 rounded-full bg-blue-500 absolute top-0 right-0"></span>
                                                    </p>
                                                    <h6 className="uppercase text-slate-400 mt-2 text-xs font-semibold">
                                                        International
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end card-body*/}
                                    <div className="flex flex-col flex-auto p-4">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <thead className="bg-gray-50 dark:bg-slate-700/20">
                                                            <tr>
                                                                <th
                                                                    scope="col"
                                                                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                >
                                                                    Channel
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                >
                                                                    Sessions
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                >
                                                                    Prev.Period
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                >
                                                                    % Change
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/* 1 */}
                                                            <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <a
                                                                        href="#"
                                                                        className="text-blue-500"
                                                                    >
                                                                        Organic
                                                                        search
                                                                    </a>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%{" "}
                                                                    <i className="ti ti-caret-up text-green-500 text-base"></i>
                                                                </td>
                                                            </tr>
                                                            {/* 2 */}
                                                            <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <a
                                                                        href="#"
                                                                        className="text-blue-500"
                                                                    >
                                                                        Direct
                                                                    </a>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%{" "}
                                                                    <i className="ti ti-caret-down text-red-500 text-base"></i>
                                                                </td>
                                                            </tr>
                                                            {/* 3 */}
                                                            <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <a
                                                                        href="#"
                                                                        className="text-blue-500"
                                                                    >
                                                                        Referal
                                                                    </a>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%{" "}
                                                                    <i className="ti ti-caret-up text-green-500 text-base"></i>
                                                                </td>
                                                            </tr>
                                                            {/* 4 */}
                                                            <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <a
                                                                        href="#"
                                                                        className="text-blue-500"
                                                                    >
                                                                        Email
                                                                    </a>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%{" "}
                                                                    <i className="ti ti-caret-down text-red-500 text-base"></i>
                                                                </td>
                                                            </tr>
                                                            {/* 5 */}
                                                            <tr className="bg-white dark:bg-gray-800">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <a
                                                                        href="#"
                                                                        className="text-blue-500"
                                                                    >
                                                                        Social
                                                                    </a>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%{" "}
                                                                    <i className="ti ti-caret-up text-green-500 text-base"></i>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/*end inner-grid*/}
                            </div>
                            <div className="sm:col-span-1  md:col-span-2 lg:col-span-4 xl:col-span-1">
                                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative mb-4">
                                    <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                                        <h4 className="font-medium dark:text-slate-300">
                                            Active Users
                                        </h4>
                                    </div>
                                    <div className="flex-auto p-4">
                                        <div
                                            id="Revenu_Status"
                                            className="apex-charts"
                                        ></div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative">
                                    <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                                        <h4 className="font-medium dark:text-slate-300">
                                            Browser Used By Users
                                        </h4>
                                    </div>
                                    <div className="flex flex-col flex-auto p-4">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <thead className="bg-gray-50 dark:bg-slate-700/20">
                                                            <tr>
                                                                <th
                                                                    scope="col"
                                                                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                >
                                                                    Browser
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                >
                                                                    Sessions
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                >
                                                                    Bounce Rate
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                                                                >
                                                                    Transactions
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/* 1 */}
                                                            <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <img
                                                                        src="/assets/images/logos/chrome.png"
                                                                        className="mr-2 h-5 inline-block"
                                                                    />
                                                                    Chrome
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566{" "}
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                            </tr>
                                                            {/* 2 */}
                                                            <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <img
                                                                        src="/assets/images/logos/in-explorer.png"
                                                                        className="mr-2 h-5 inline-block"
                                                                    />
                                                                    Explorer
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566{" "}
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                            </tr>
                                                            {/* 3 */}
                                                            <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <img
                                                                        src="/assets/images/logos/safari.png"
                                                                        className="mr-2 h-5 inline-block"
                                                                    />
                                                                    Safari
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566{" "}
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                            </tr>
                                                            {/* 4 */}
                                                            <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <img
                                                                        src="/assets/images/logos/mozilla.png"
                                                                        className="mr-2 h-5 inline-block"
                                                                    />
                                                                    Mozilla
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566{" "}
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                            </tr>
                                                            {/* 5 */}
                                                            <tr className="bg-white dark:bg-gray-800">
                                                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                                    <img
                                                                        src="/assets/images/logos/opera.png"
                                                                        className="mr-2 h-5 inline-block"
                                                                    />
                                                                    Opera
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    10853
                                                                    <small className="text-gray-400">
                                                                        (52%)
                                                                    </small>
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    52.80%
                                                                </td>
                                                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                    566{" "}
                                                                    <small className="text-gray-400">
                                                                        (92%)
                                                                    </small>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{" "}
                                {/*end inner-grid*/}
                            </div>
                        </div>
                        <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
                            <div className="sm:col-span-12  md:col-span-12 lg:col-span-6 xl:col-span-6 ">
                                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative h-full">
                                    <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                                        <h4 className="font-medium">
                                            Users at a Time
                                        </h4>
                                    </div>
                                    {/*end header-title*/}
                                    <div className="flex-auto p-4">
                                        <div
                                            id="Users_Time"
                                            className="h-60 my-6"
                                        ></div>
                                    </div>
                                    {/*end card-body*/}
                                </div>{" "}
                                {/*end card*/}
                            </div>
                            {/*end col*/}
                            <div className="sm:col-span-12  md:col-span-12 lg:col-span-6 xl:col-span-6 ">
                                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative">
                                    <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                                        <h4 className="font-medium">
                                            Live Visits Our New Site
                                        </h4>
                                    </div>
                                    {/*end header-title*/}
                                    <div className="flex-auto p-4">
                                        <div
                                            id="visitors"
                                            className="h-60 my-6"
                                        ></div>
                                    </div>
                                    {/*end card-body*/}
                                </div>{" "}
                                {/*end card*/}
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end inner-grid*/}
                        {/* footer */}
                        <div className="absolute bottom-0 left-0 right-0 block print:hidden">
                            <div className="">
                                {/* Footer Start */}
                                <footer className="footer mt-4 rounded-tr-md rounded-tl-md bg-transparent py-4 text-center font-medium text-slate-600 dark:text-slate-400 md:text-left">
                                    &copy;
                                    <script>
                                        var year = new Date();
                                        document.write(year.getFullYear());
                                    </script>
                                    SamZ
                                    <span className="float-right hidden text-slate-600 dark:text-slate-400 md:inline-block">
                                        Crafted with{" "}
                                        <i className="ti ti-heart text-red-500"></i>{" "}
                                        by Mannatthemes
                                    </span>
                                </footer>
                                {/* end Footer */}
                            </div>
                        </div>
                    </div>
                    {/*end container*/}
                </div>
            </div>
        </>
    );
}
