import { useEffect, useRef } from "react";
import App from "../Layouts/App";
import { loadScript } from "@/Utils/loadScript";
import { Head } from "@inertiajs/react";
import CategoryTable from "@/Components/CategoryTable";
import ProductTable from "@/Components/ProductTable";

export default function EditProfile() {
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
                await loadScript(
                    "/assets/libs/simple-datatables/umd/simple-datatables.js"
                );
                await loadScript("/assets/js/pages/datatable.init.js");
                await loadScript("/assets/js/app.js");
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <>
            <App>
                <Head title="Edit Profile">
                    <link
                        rel="stylesheet"
                        href="/assets/libs/simple-datatables/style.css"
                    />
                </Head>
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

                            <div className="xl:w-full  min-h-[calc(100vh-138px)] relative mt-8">
                                <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-8 mb-4">
                                    <CategoryTable />
                                    <ProductTable/>
                                    {/*end col*/}
                                </div>
                                {/*end inner-grid*/}
                            </div>
                            {/*end container*/}
                        </div>
                        {/*end container*/}
                    </div>
                </div>
            </App>
        </>
    );
}
