import { useEffect, useRef } from "react";
import App from "../Layouts/App";
import ProductList from "../Components/ProductList";
import { loadScript } from "@/Utils/loadScript";
import { Head } from "@inertiajs/react";

export default function Profile() {
    const loadedRef = useRef(false);

    useEffect(() => {
        if (loadedRef.current) return;
        loadedRef.current = true;

        (async () => {
            try {
                await loadScript(
                    "/assets/libs/@popperjs/core/umd/popper.min.js"
                );
                await loadScript("/assets/libs/simplebar/simplebar.min.js");
                await loadScript("/assets/libs/feather-icons/feather.min.js");
                await loadScript("/assets/js/pages/components.js");
                await loadScript("/assets/js/app.js");
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    // START - Scroll horizontal dragging 
    const scrollRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
        isDown = true;
        startX = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft = scrollRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown = false;
    };

    const handleMouseUp = () => {
        isDown = false;
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 0.88;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    // END - Scroll horizontal dragging

    return (
        <>
            <App>
                <Head title="Profile" />
                <div className="ltr:flex flex-1 rtl:flex-row-reverse">
                    <div className="container page-wrapper relative ltr:ml-auto rtl:mr-auto rtl:ml-0 px-4 pt-[54px] duration-300">
                        <div className="pt-4 xl:w-full  min-h-[calc(100vh-138px)] relative ">
                            <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                                <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
                                    <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative">
                                        <div className="flex-auto p-0">
                                            <img
                                                src="/assets/images/widgets/bg-p.png"
                                                className="bg-cover bg-center h-32 w-full rounded-md"
                                            />
                                        </div>
                                        {/*end card-body*/}
                                        <div className="flex-auto p-4 pt-0">
                                            <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                                                <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12">
                                                    <div className="flex items-center relative -mt-[88px] flex-wrap">
                                                        <div className="w-36 h-36 relative">
                                                            <img
                                                                src="/assets/images/users/avatar-4.png"
                                                                className="rounded-full border-[8px] border-white dark:border-slate-800"
                                                            />
                                                            {/* <span className="absolute cursor-pointer w-7 h-7 bg-green-600 rounded-full bottom-4 right-3 flex items-center justify-center border-2 border-white dark:border-slate-800">
                                                                <i className="fas fa-camera text-white text-xs" />
                                                            </span> */}
                                                        </div>
                                                        <div className="self-end ml-3">
                                                            <h5 className="text-3xl font-semibold text-slate-700 dark:text-gray-300 mb-0">
                                                                Nama Pengguna
                                                            </h5>
                                                            {/* <p className="block text-xs lg:text-base  font-medium text-slate-500">
                                                                Deskripsi
                                                                singkat pengguna
                                                            </p> */}
                                                        </div>
                                                        {/*end col*/}
                                                        {/* <div className="w-full xs:w-auto self-end xs:ml-auto mt-5">
                                                            <div className="flex items-center space-x-2 justify-end">
                                                                <div className="border-2 border-slate-200/50 dark:border-slate-600/60 inline-flex rounded-full cursor-pointer">
                                                                    <img src="/assets/images/logos/twitter.png" className="rounded-full h-9 w-9" />
                                                                </div>
                                                                <div className="border-2 border-slate-200/50 dark:border-slate-600/60 inline-flex rounded-full cursor-pointer">
                                                                    <img src="/assets/images/logos/insta.png" className="rounded-full h-9 w-9" />
                                                                </div>
                                                                <div className="border-2 border-slate-200/50 dark:border-slate-600/60 inline-flex rounded-full cursor-pointer">
                                                                    <img src="/assets/images/logos/facebook.png" className="rounded-full h-9 w-9" />
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        {/*end col*/}
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end inner-grid*/}
                                        </div>
                                        {/*end card-body*/}
                                    </div>{" "}
                                    {/*end card*/}
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end inner-grid*/}
                            <div className="border-b mb-4 border-dashed border-gray-200 dark:border-gray-700">
                                <div className="relative">
                                    {/* wrapper scroll horizontal */}
                                    <div
                                        ref={scrollRef}
                                        className="overflow-x-auto scrollbar-thin overflow-y-hidden cursor-grab whitespace-nowrap select-none"
                                        onMouseDown={handleMouseDown}
                                        onMouseLeave={handleMouseLeave}
                                        onMouseUp={handleMouseUp}
                                        onMouseMove={handleMouseMove}
                                    >
                                        <ul
                                            id="myTab"
                                            data-tabs-toggle="#myTabContent"
                                            className="flex flex-nowrap lg:-mb-px gap-2 whitespace-nowrap"
                                        >
                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-1-tab"
                                                    data-tabs-target="#Kategori-1"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-1"
                                                    aria-selected="false"
                                                >
                                                    Kategori-1
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-2-tab"
                                                    data-tabs-target="#Kategori-2"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-2"
                                                    aria-selected="true"
                                                >
                                                    Kategori-2
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-3-tab"
                                                    data-tabs-target="#Kategori-3"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-3"
                                                    aria-selected="false"
                                                >
                                                    Kategori-3
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-4-tab"
                                                    data-tabs-target="#Kategori-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-4"
                                                    aria-selected="false"
                                                >
                                                    Kategori-4
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-4-tab"
                                                    data-tabs-target="#Kategori-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-4"
                                                    aria-selected="false"
                                                >
                                                    Kategori-4
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-4-tab"
                                                    data-tabs-target="#Kategori-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-4"
                                                    aria-selected="false"
                                                >
                                                    Kategori-4
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-4-tab"
                                                    data-tabs-target="#Kategori-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-4"
                                                    aria-selected="false"
                                                >
                                                    Kategori-4
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-4-tab"
                                                    data-tabs-target="#Kategori-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-4"
                                                    aria-selected="false"
                                                >
                                                    Kategori-4
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-4-tab"
                                                    data-tabs-target="#Kategori-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-4"
                                                    aria-selected="false"
                                                >
                                                    Kategori-4
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-4-tab"
                                                    data-tabs-target="#Kategori-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-4"
                                                    aria-selected="false"
                                                >
                                                    Kategori-4
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-4-tab"
                                                    data-tabs-target="#Kategori-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-4"
                                                    aria-selected="false"
                                                >
                                                    Kategori-4
                                                </button>
                                            </li>

                                            <li
                                                className="mr-2 flex-none min-w-fit"
                                                role="presentation"
                                            >
                                                <button
                                                    className="inline-block py-4 px-4 text-md font-medium text-center text-gray-500 rounded-t-lg hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                                                    id="Kategori-4-tab"
                                                    data-tabs-target="#Kategori-4"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="Kategori-4"
                                                    aria-selected="false"
                                                >
                                                    Kategori-4
                                                </button>
                                            </li>
                                            {/* …tambahkan kategori lain sesuka hati—tetap akan scroll ke kanan */}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
                                <div className="sm:col-span-12  md:col-span-12 lg:col-span-12 xl:col-span-12 ">
                                    <div className="w-full relative overflow-hidden">
                                        <div className="p-0">
                                            <div id="myTabContent">
                                                <div
                                                    className="hidden"
                                                    id="Kategori-1"
                                                    role="tabpanel"
                                                    aria-labelledby="Kategori-1-tab"
                                                >
                                                    <ProductList />
                                                </div>
                                                {/*end tab-pan*/}
                                                <div
                                                    className="hidden"
                                                    id="Kategori-2"
                                                    role="tabpanel"
                                                    aria-labelledby="Kategori-2-tab"
                                                >
                                                    <ProductList />
                                                    {/*end grid*/}
                                                </div>
                                                {/*end tab-pan*/}
                                                <div
                                                    className=""
                                                    id="Kategori-3"
                                                    role="tabpanel"
                                                    aria-labelledby="Kategori-3-tab"
                                                >
                                                    <ProductList />
                                                </div>
                                                {/*end tab-pan*/}
                                                <div
                                                    className="hidden"
                                                    id="Kategori-4"
                                                    role="tabpanel"
                                                    aria-labelledby="Kategori-4-tab"
                                                >
                                                    <ProductList />
                                                    {/*end grid*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/*end inner-grid*/}
                                </div>
                            </div>
                            {/*end grid*/}
                        </div>
                        {/*end container*/}
                    </div>
                </div>
            </App>
        </>
    );
}
