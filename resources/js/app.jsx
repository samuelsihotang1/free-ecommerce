import "./bootstrap";
import '../css/app.css';
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.APP_NAME || 'SamZ';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.{js,jsx,ts,tsx}")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});