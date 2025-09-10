import { Link, usePage } from "@inertiajs/react";

export default function Header() {
    const auth = usePage().props.auth;
    const APP_NAME = usePage().props.APP_NAME;
    return (
        <>
            <div className="fixed ltr:left-4 ltr:right-4 rtl:right-4 rtl:left-4 print:hidden z-50">
                <nav
                    id="topbar"
                    className="topbar border-gray-200 relative ltr:ml-0 rtl:ml-0 ltr:lg:ml-0  rtl:lg:mr-0   ltr:xl:ml-[calc(100%)]  rtl:xl:mr-[calc(100%)] duration-300
    block "
                >
                    <div className="mx-0 flex max-w-full flex-wrap items-center lg:mx-auto">
                        <div className="flex-auto">
                            <div className="container flex flex-wrap justify-between items-center mx-auto p-0">
                                <a href="/" className="flex items-center">
                                    <img
                                        src="/assets/images/logo-sm.png"
                                        className="mr-3 h-6 sm:h-9"
                                        alt={APP_NAME + " Logo"}
                                    />
                                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                        {APP_NAME}
                                    </span>
                                </a>
                                <div className="flex items-center md:order-2">
                                    <div className="ltr:mr-2 ltr:lg:mr-4 rtl:mr-0 rtl:ml-2 rtl:lg:mr-0 rtl:lg:ml-4">
                                        <button
                                            id="toggle-theme"
                                            className="flex rounded-full md:mr-0 relative"
                                        >
                                            <i className="ti ti-moon text-3xl top-icon" />
                                        </button>
                                    </div>
                                    {auth.user ? (
                                        <div className="dropdown">
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
                                                        {auth.user.name}
                                                    </span>
                                                    {/* <span className="-mt-1 block text-xs text-slate-500 dark:text-gray-500">
                                                        {auth.user.email}
                                                    </span> */}
                                                </span>
                                            </button>
                                            <div
                                                className="dropdown-menu z-50 my-1 hidden list-none
                                                divide-y divide-gray-100 rounded border-slate-700 md:border-white
                                                text-base shadow dark:divide-gray-600 bg-white dark:bg-slate-800"
                                                id="navUserdata"
                                                aria-labelledby="navUserdata"
                                            >
                                                <div className="py-3 px-4">
                                                    <span className="block text-sm font-medium text-gray-900 dark:text-white">
                                                        {auth.user.name}
                                                    </span>
                                                    <span
                                                        className="block truncate text-sm font-normal text-gray-500
                dark:text-gray-400"
                                                    >
                                                        {auth.user.email}
                                                    </span>
                                                </div>
                                                <ul className="py-1">
                                                    <li>
                                                        <a
                                                            href={route(
                                                                "editprofile"
                                                            )}
                                                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50
                dark:text-gray-200 dark:hover:bg-gray-900/20
                dark:hover:text-white"
                                                        >
                                                            Ubah Profil
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href={route(
                                                                "logout"
                                                            )}
                                                            method="post"
                                                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50
                                                                dark:text-gray-200 dark:hover:bg-gray-900/20
                                                                dark:hover:text-white"
                                                        >
                                                            Keluar
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <Link
                                                href={route("login")}
                                                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Masuk
                                            </Link>
                                        </>
                                    )}
                                    <button
                                        data-collapse-toggle="mobile-menu"
                                        type="button"
                                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        aria-controls="mobile-menu"
                                        aria-expanded="false"
                                    >
                                        <i className="fas fa-bars" />
                                    </button>
                                </div>
                                <div
                                    className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                                    id="mobile-menu"
                                >
                                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-large">
                                        <li>
                                            <a
                                                href="/"
                                                className="block py-2 pr-4 pl-3 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                                aria-current="page"
                                            >
                                                Beranda
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Cara Pakai
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Kontak
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
