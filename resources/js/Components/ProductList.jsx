export default function ProductList() {
    const items = Array.from(
        { length: 12 },
        () => `Product ${Math.floor(Math.random() * 100) + 1}`
    );

    return (
        <>
            <div className="xl:w-full  min-h-[calc(100vh-138px)] relative pb-14 ">
                <div className="grid grid-cols-2 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4 mb-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="sm:col-span-6  md:col-span-4 lg:col-span-3 xl:col-span-3 "
                        >
                            <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative overflow-hidden">
                                {/* <div className="absolute left-0 top-0 h-14 w-14">
                                <div className="absolute left-[-36px] top-[32px] w-[170px] transform -rotate-45 bg-primary-500 text-center text-sm text-white font-semibold py-1">
                                    50% off
                                </div>
                            </div> */}
                                <div className="flex-auto p-4 text-center">
                                    <img
                                        src="/assets/images/users/avatar-4.png"
                                        className="h-auto inline-block mb-4"
                                    />
                                    <span className="text-slate-500 text-sm block font-medium">
                                        <a
                                            href="ecommerce-product-detail.html"
                                            className="text-lg font-semibold text-slate-700 dark:text-gray-400 leading-3"
                                        >
                                            {item}
                                        </a>
                                        <span className="text-slate-500 text-sm block font-medium">
                                            <span className="bg-yellow-600/5 text-yellow-500 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                                4.7{" "}
                                                <i className="mdi mdi-star" />
                                            </span>
                                        </span>
                                    </span>
                                    <div className="py-1 px-3 rounded-md">
                                        <h4 className="text-3xl font-medium dark:text-slate-300">
                                            <sup className="text-sm text-slate-500">
                                                Rp{" "}
                                            </sup>
                                            50.000
                                        </h4>
                                    </div>
                                    <div className="py-1 px-3 rounded-md bg-slate-50 dark:bg-slate-600/20">
                                        <button className="inline-block focus:outline-none text-primary-500 hover:bg-transparent hover:text-primary-500 bg-transparent text-md font-medium py-1 px-3 rounded">
                                            <i className="ti ti-shopping-cart" />{" "}
                                            Masukkan Keranjang
                                        </button>
                                    </div>
                                </div>
                                {/*end card-body*/}
                            </div>
                            {/*end card*/}
                            {/*end col*/}
                        </div>
                    ))}
                </div>
                {/*end inner-grid*/}
            </div>
        </>
    );
}
