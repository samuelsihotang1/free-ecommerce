class App {
    init() {
        if (window.appInitialized) return;

        document.addEventListener("click", (event) => {
            const target = event.target;

            const themeToggleButton = target.closest("#toggle-theme");
            if (themeToggleButton) {
                const htmlElement = document.querySelector("html");
                const iconElement = themeToggleButton.querySelector("i");
                const isDark = htmlElement.classList.toggle("dark");

                document.body.setAttribute("data-layout-mode", isDark ? "dark" : "light");
                iconElement.className = `ti ti-${isDark ? "sun" : "moon"} text-3xl top-icon`;
                return;
            }

            const collapseToggleButton = target.closest('[data-collapse-toggle]');
            if (collapseToggleButton) {
                const targetId = collapseToggleButton.getAttribute('data-collapse-toggle');
                const collapseTarget = document.getElementById(targetId);
                if (collapseTarget) {
                    collapseTarget.classList.toggle('hidden');
                    const isNowHidden = collapseTarget.classList.contains('hidden');
                    collapseToggleButton.setAttribute('aria-expanded', !isNowHidden);
                }
                return;
            }

            const multiDropButton = target.closest(".drop-multi button, .second-level a");
            if (multiDropButton && multiDropButton.nextElementSibling) {
                multiDropButton.nextElementSibling.classList.toggle("block");
                multiDropButton.parentNode.classList.toggle("block");
                return;
            }

            if (!target.closest(".dropdown-toggle, .dropdown-menu")) {
                dismissDropdownMenu();
            }
        });

        window.appInitialized = true;
    }
}
function windowScroll() {
    let e = document.getElementById("topbar");
    null != e &&
        (document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
            ? e.classList.add("nav-sticky")
            : e.classList.remove("nav-sticky"));
}
function activeMenu() {
    document.querySelectorAll(".tab-menu button").forEach((e) => {
        e.setAttribute("aria-selected", !1);
    }),
        document.querySelectorAll("#Icon-menu a").forEach(function (e, t) {
            var a = window.location.href.split(/[?#]/)[0];
            let n = e;
            if (e.href == a) {
                document
                    .querySelectorAll('#Icon-menu [role="tabpanel"]')
                    .forEach(function (e) {
                        e.classList.add("hidden"),
                            e
                                .querySelectorAll(".collapse-menu")
                                .forEach(function (e) {
                                    e.classList.add("hidden");
                                });
                    }),
                    n.classList.add("active"),
                    n.parentNode.classList.add("menuitem-active");
                let o = null;
                n.parentNode.parentNode.parentNode.hasAttribute("role") &&
                    (n.parentNode.parentNode.parentNode.classList.remove(
                        "hidden"
                    ),
                    (o = n.parentNode.parentNode.parentNode)),
                    n.parentNode.parentNode.parentNode.classList.contains(
                        "collapse-menu"
                    ) &&
                        (n.parentNode.parentNode.parentNode.classList.remove(
                            "hidden"
                        ),
                        (o = n.parentNode.parentNode.parentNode)),
                    n.parentNode.parentNode.parentNode.previousElementSibling &&
                        (n.parentNode.parentNode.parentNode.previousElementSibling
                            .querySelector(".nav-link")
                            .classList.add("active"),
                        n.parentNode.parentNode.parentNode.previousElementSibling
                            .querySelector("[data-accordion-icon]")
                            ?.classList.add("rotate-180"),
                        n.parentNode.parentNode.parentNode.previousElementSibling
                            .querySelector(".nav-link")
                            .setAttribute("aria-expanded", "true"),
                        n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.hasAttribute(
                            "role"
                        ) &&
                            (n.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove(
                                "hidden"
                            ),
                            (o =
                                n.parentNode.parentNode.parentNode.parentNode
                                    .parentNode.parentNode.parentNode))),
                    o &&
                        document
                            .querySelectorAll(
                                `.tab-menu button[data-tabs-target="#${o.id}"]`
                            )
                            .forEach((e) => {
                                e.click();
                            });
            }
        }),
        document.querySelector("nav#topbar") &&
            document
                .querySelectorAll("nav#topbar ul.NavMenu a")
                .forEach(function (e, t) {
                    var a = window.location.href.split(/[?#]/)[0];
                    e.href == a &&
                        (console.info(e),
                        e.classList.add("active"),
                        e.parentElement.parentElement.parentElement
                            .querySelector("a")
                            ?.classList.add("active"),
                        e.parentElement.parentElement.parentElement.parentElement.parentElement
                            .querySelector("a")
                            ?.classList.add("active"));
                });
}
function dismissDropdownMenu() {
    document.querySelectorAll(".dropdown-menu").forEach(function (e) {
        e.classList.remove("block"), e.classList.add("hidden");
    }),
        document.querySelectorAll(".dropdown-toggle").forEach(function (e) {
            e.classList.remove("block");
        });
}

// ===================================================================
// INISIALISASI APLIKASI
// ===================================================================

new App().init();

// Listener yang aman untuk dipasang di `window` karena `window` tidak pernah dibuat ulang.
window.addEventListener("scroll", (e) => {
    e.preventDefault();
    windowScroll();
});

// Fungsi-fungsi ini perlu dijalankan setiap kali halaman "baru" dimuat.
// Dalam SPA seperti Inertia, ini idealnya dipicu oleh event navigasi.
function runOnPageLoad() {
    activeMenu();
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Panggil sekali saat skrip pertama kali dimuat.
runOnPageLoad();
