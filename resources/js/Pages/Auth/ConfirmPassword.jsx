import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Confirm Password" />

            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full  m-auto bg-white dark:bg-slate-800/60 rounded shadow-lg ring-2 ring-slate-300/50 dark:ring-slate-700/50 lg:max-w-md">
                    <div className="text-center p-6 bg-slate-900 rounded-t">
                        <a href="/">
                            <img
                                src="/assets/images/logo-sm.png"
                                className="w-14 h-14 mx-auto mb-2"
                            />
                        </a>
                        <h3 className="font-semibold text-white text-xl mb-1">
                            Confirm Password For {APP_NAME}
                        </h3>
                    </div>
                    <form onSubmit={submit} className="p-6">
                        <div>
                            <label
                                htmlFor="password"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                placeholder="Your Password"
                                autoComplete="password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                disabled={processing}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
