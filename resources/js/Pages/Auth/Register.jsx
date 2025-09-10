import InputError from "@/Components/InputError";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Register() {
    const APP_NAME = usePage().props.APP_NAME;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Register" />
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-95%  m-auto bg-white dark:bg-slate-800/60 rounded-xl shadow-lg ring-2 ring-slate-300/50 dark:ring-slate-700/50 lg:max-w-md">
                    <div className="text-center p-6 bg-slate-900 rounded-t-xl">
                        <a href="/">
                            <img
                                src="/assets/images/logo-sm.png"
                                className="w-14 h-14 mx-auto mb-2"
                            />
                        </a>
                        {/* <h3 className="font-semibold text-white text-xl mb-1">
                            Let's Get Started {APP_NAME}
                        </h3> */}
                        <p className="text-xs text-slate-400">
                            Daftar untuk melanjutkan ke {APP_NAME}.
                        </p>
                    </div>
                    <form onSubmit={submit} className="p-6">
                        <div>
                            <label
                                htmlFor="name"
                                value="Name"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                placeholder="Masukkan nama"
                                required
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="email"
                                value="Email"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                placeholder="Masukkan Email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="password"
                                value="Password"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                placeholder="Masukkan Password"
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-2">
                            <label
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                            >
                                Konfirmasi Password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                placeholder="Masukkan Konfirmasi Password"
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                        {/* <div className="block mt-3">
                            <label className="custom-label block dark:text-slate-300">
                                <div className="bg-white dark:bg-slate-700  border border-slate-200 dark:border-slate-600 rounded w-4 h-4  inline-block leading-4 text-center -mb-[3px]">
                                    <input type="checkbox" className="hidden" />
                                    <i className="fas fa-check hidden text-xs text-slate-700 dark:text-slate-200" />
                                </div>
                                By registering you agree to the Tailfox Terms of
                                Use
                            </label>
                        </div> */}
                        <div className="mt-5">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Daftar
                            </button>
                        </div>
                    </form>
                    <p className="mb-5 text-sm font-medium text-center text-slate-500">
                        Sudah punya akun ?{" "}
                        <a
                            href={route("login")}
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Masuk
                        </a>
                    </p>
                </div>
            </div>

        </>
    );
}
