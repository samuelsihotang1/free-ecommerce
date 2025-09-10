import { Head, useForm, usePage } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };
    
    const APP_NAME = usePage().props.APP_NAME;

    return (
        <>
            <Head title="Email Verification" />

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
                            Verify Email For {APP_NAME}
                        </h3>
                    </div>
                    <form onSubmit={submit} className="p-6">
                        <div>
                            {status === "verification-link-sent" && (
                                <div className="mb-4 text-sm font-medium text-green-600">
                                    A new verification link has been sent to the
                                    email address you provided during
                                    registration.
                                </div>
                            )}
                        </div>
                        <div className="mt-6">
                            <button
                                disabled={processing}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Resend Verification Email
                            </button>
                        </div>
                    </form>
                    <p className="mb-5 text-sm font-medium text-center text-slate-500">
                        <a
                            href="/login"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Sign in here
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
