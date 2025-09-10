import InputError from "@/Components/InputError";
import { Head, useForm, usePage } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    const APP_NAME = usePage().props.APP_NAME;

    return (
        <>
            <Head title="Reset Password" />
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full  m-auto bg-white dark:bg-slate-800/60 rounded shadow-lg ring-2 ring-slate-300/50 dark:ring-slate-700/50 lg:max-w-md">
                    <div className="text-center p-6 bg-slate-900 rounded-t">
                        <a href="/">
                            <img
                                src="/assets/images/logo-sm.png"
                                className="w-14 h-14 mx-auto mb-2"
                            />
                        </a>
                        <p className="text-xs text-slate-400">
                            Masukkan Email anda dan instruksi akan dikirimkan kepada anda!
                        </p>
                    </div>
                    <form onSubmit={submit} className="p-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                placeholder="Masukkan Email"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            {status && (
                                <div className="mb-4 text-sm font-medium text-green-600">
                                    {status}
                                </div>
                            )}

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                disabled={processing}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                    <p className="mb-5 text-sm font-medium text-center text-slate-500">
                        {" "}
                        Sudah ingat?{" "}
                        <a
                            href="/login"
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
