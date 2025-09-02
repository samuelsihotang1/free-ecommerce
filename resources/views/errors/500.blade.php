<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="light scroll-smooth" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <title inertia>{{ config('app.name', 'Linky') }}</title>
    <meta content="Linky" name="description" />
    <meta content="" name="Linky" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link href="/assets/libs/%40iconscout/unicons/css/line.css" type="text/css" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/icons.css">
    <link rel="stylesheet" href="/assets/css/tailwind.css">

    <link rel="shortcut icon" href="/assets/images/favicon.ico" />
</head>

<body data-layout-mode="light" data-sidebar-size="default" data-theme-layout="vertical"
    class="bg-gray-100 dark:bg-gray-900">

    <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div
            class="w-full  m-auto bg-white dark:bg-slate-800/60 rounded shadow-lg ring-2 ring-slate-300/50 dark:ring-slate-700/50 lg:max-w-md">
            <form class="p-6">
                <div class="text-center">
                    <img src="/assets/images/widgets/500.png"
                        alt="" class="w-64 h-64 block mx-auto my-6">
                    <h1 class="font-bold text-7xl dark:text-slate-200">500!</h1>
                    <h5 class="font-medium text-lg text-slate-400">Waduhh! Ada masalah nih</h5>
                </div>
                <div class="mt-6">
                    <a href="/"
                        class="w-full block text-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Kembali pulang
                    </a>
                </div>
            </form>
        </div>
    </div>

    <script src="/assets/libs/%40popperjs/core/umd/popper.min.js"></script>
    <script src="/assets/libs/simplebar/simplebar.min.js"></script>
    <script src="/assets/libs/feather-icons/feather.min.js"></script>
    <script src="/assets/js/pages/components.js"></script>
    <script src="/assets/js/app.js"></script>
</body>

</html>
