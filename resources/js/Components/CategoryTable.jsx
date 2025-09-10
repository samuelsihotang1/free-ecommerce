export default function CategoryTable() {
    return (
        <>
            <div className="sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 ">
                <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative">
                    <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                        <h4 className="font-medium">Kategori</h4>
                    </div>
                    {/*end header-title*/}
                    <div className="grid grid-cols-1 p-4">
                        <div className="sm:-mx-6 lg:-mx-8">
                            <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                                <table
                                    className="w-full border-collapse"
                                    id="datatable_1"
                                >
                                    <thead className="bg-gray-50 dark:bg-gray-600/20">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                            >
                                                Nama
                                            </th>
                                            <th
                                                scope="col"
                                                className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                            >
                                                Nama Slug
                                            </th>
                                            <th
                                                scope="col"
                                                className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                            >
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* 1 */}
                                        <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                Kategori 1
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                kategori-1
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                                    Aktif
                                                </span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-edit text-lg text-gray-500 dark:text-gray-400" />
                                                </a>
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-trash text-lg text-red-500 dark:text-red-400" />
                                                </a>
                                            </td>
                                        </tr>
                                        {/* 2 */}
                                        <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                Kategori 2
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                kategori-2
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                                    Aktif
                                                </span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-edit text-lg text-gray-500 dark:text-gray-400" />
                                                </a>
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-trash text-lg text-red-500 dark:text-red-400" />
                                                </a>
                                            </td>
                                        </tr>
                                        {/* 3 */}
                                        <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                Kategori 3
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                kategori-3
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                                    Tidak Aktif
                                                </span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-edit text-lg text-gray-500 dark:text-gray-400" />
                                                </a>
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-trash text-lg text-red-500 dark:text-red-400" />
                                                </a>
                                            </td>
                                        </tr>
                                        {/* 4 */}
                                        <tr className="bg-white dark:bg-gray-800">
                                            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                Kategori 4
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                kategori-4
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                                    Aktif
                                                </span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-edit text-lg text-gray-500 dark:text-gray-400" />
                                                </a>
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-trash text-lg text-red-500 dark:text-red-400" />
                                                </a>
                                            </td>
                                        </tr>
                                        {/* 5 */}
                                        <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                Kategori 5
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                kategori-5
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                                    Aktif
                                                </span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-edit text-lg text-gray-500 dark:text-gray-400" />
                                                </a>
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-trash text-lg text-red-500 dark:text-red-400" />
                                                </a>
                                            </td>
                                        </tr>
                                        {/* 6 */}
                                        <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                Kategori 6
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                kategori-6
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                                    Aktif
                                                </span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-edit text-lg text-gray-500 dark:text-gray-400" />
                                                </a>
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-trash text-lg text-red-500 dark:text-red-400" />
                                                </a>
                                            </td>
                                        </tr>
                                        {/* 7 */}
                                        <tr className="bg-white border-b border-dashed dark:bg-gray-800 dark:border-gray-700">
                                            <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                                Kategori 7
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                kategori-7
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                                    Aktif
                                                </span>
                                            </td>
                                            <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-edit text-lg text-gray-500 dark:text-gray-400" />
                                                </a>
                                                <a href="#" className="px-1">
                                                    <i className="ti ti-trash text-lg text-red-500 dark:text-red-400" />
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*end card-body*/}
                </div>{" "}
                {/*end card*/}
            </div>
            {/*end col*/}
        </>
    );
}
