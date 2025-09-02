<!DOCTYPE html>
<html lang="{{ str_replace('_','-',app()->getLocale()) }}" class="light scroll-smooth" dir="ltr" >
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title inertia>{{ config('app.name', 'SamZ') }}</title>
    <meta content="SamZ" name="description" />
    <meta content="" name="SamZ" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link rel="shortcut icon" href="/assets/images/favicon.ico" />

    <link href="/assets/libs/@iconscout/unicons/css/line.css" type="text/css" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/icons.css">
    <link rel="stylesheet" href="/assets/css/tailwind.css">
    <link rel="stylesheet" href="/assets/libs/jsvectormap/css/jsvectormap.min.css">

    @viteReactRefresh
    @vite(['resources/css/app.css','resources/js/app.jsx'])
    @inertiaHead
  </head>
  <body data-layout-mode="light" data-theme-layout="vertical"
    class="bg-gray-100 dark:bg-gray-900">
    @inertia
  </body>
</html>
