import { usePage } from "@inertiajs/react";

export default function Footer() {
    const { APP_NAME } = usePage().props;
    return (
        <>
            <div className="ltr:flex flex-1 rtl:flex-row-reverse">
                <div className="container page-wrapper relative ltr:ml-auto rtl:mr-auto rtl:ml-0 px-4 pt-[54px] duration-300">
                    <div className="xl:w-full  relative ">
                        <div className="absolute bottom-0 left-0 right-0 block print:hidden">
                            <div>
                                {/* Footer Start */}
                                <footer className="footer mt-4 rounded-tr-md rounded-tl-md bg-transparent py-4 font-medium text-slate-600 dark:text-slate-400 md:text-left">
                                    © {APP_NAME}
                                    <span className="float-right text-slate-600 dark:text-slate-400 md:inline-block">
                                        Dibuat dengan {" "}
                                        <i className="ti ti-heart text-red-500" />
                                        {" "}oleh SamZ
                                    </span>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
