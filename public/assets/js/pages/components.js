(function () {
    if (window.componentsGlobalInitialized) return;
    window.componentsGlobalInitialized = true;

    function qs(root, sel) {
        return (root || document).querySelector(sel);
    }
    function qsa(root, sel) {
        return Array.from((root || document).querySelectorAll(sel));
    }
    function toggleHidden(el, force) {
        if (!el) return;
        if (typeof force === "boolean") {
            el.classList.toggle("hidden", force);
            el.classList.toggle("block", !force);
        } else {
            const willHide =
                !el.classList.contains("hidden") &&
                el.classList.contains("block");
            el.classList.toggle("hidden", !willHide);
            el.classList.toggle("block", willHide);
        }
    }
    function isInDropdown(target) {
        return !!target.closest(
            ".dropdown-menu, .dropdown-toggle, .dropup, .dropstart, .dropend, .dropdown"
        );
    }
    function dismissAllDropdowns() {
        qsa(document, ".dropdown-menu").forEach((m) => {
            m.classList.remove("block");
            m.classList.add("hidden");
        });
        qsa(document, ".dropdown-toggle").forEach((t) =>
            t.classList.remove("show")
        );
    }

    document.addEventListener("click", (ev) => {
        const tabBtn = ev.target.closest('[data-tabs-toggle] [role="tab"]');
        if (!tabBtn) return;

        const tabsRoot = tabBtn.closest("[data-tabs-toggle]");
        if (!tabsRoot) return;

        const targetSelector = tabBtn.getAttribute("data-tabs-target");
        const panel = qs(document, targetSelector);
        if (!panel) return;

        qsa(tabsRoot, '[role="tab"]').forEach((btn) => {
            btn.setAttribute("aria-selected", "false");
            btn.classList.remove(
                "text-blue-600",
                "dark:text-blue-500",
                "border-blue-600",
                "dark:border-blue-500"
            );
            btn.classList.add("text-gray-500", "dark:text-gray-400");
            const sel = btn.getAttribute("data-tabs-target");
            const p = qs(document, sel);
            if (p) p.classList.add("hidden");
        });

        tabBtn.setAttribute("aria-selected", "true");
        tabBtn.classList.add(
            "text-blue-600",
            "dark:text-blue-500",
            "border-blue-600",
            "dark:border-blue-500"
        );
        tabBtn.classList.remove("text-gray-500", "dark:text-gray-400");
        panel.classList.remove("hidden");
    });

    document.addEventListener("click", (ev) => {
        const trigger = ev.target.closest("[data-accordion-target]");
        if (!trigger) return;

        const targetSel = trigger.getAttribute("data-accordion-target");
        const target = qs(document, targetSel);
        if (!target) return;

        const alwaysOpen = trigger.closest('[data-accordion="open"]');

        const activeClasses = (
            trigger
                .closest("[data-active-classes]")
                ?.getAttribute("data-active-classes") ||
            "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        ).split(" ");
        const inactiveClasses = (
            trigger
                .closest("[data-inactive-classes]")
                ?.getAttribute("data-inactive-classes") ||
            "text-gray-500 dark:text-gray-400"
        ).split(" ");

        const isOpen = trigger.getAttribute("aria-expanded") === "true";

        const container = trigger.closest("[data-accordion]") || document;
        if (!alwaysOpen) {
            qsa(container, "[data-accordion-target]").forEach((t) => {
                if (t === trigger) return;
                const sel = t.getAttribute("data-accordion-target");
                const pane = qs(document, sel);
                if (!pane) return;
                t.setAttribute("aria-expanded", "false");
                t.classList.remove(...activeClasses);
                t.classList.add(...inactiveClasses);
                pane.classList.add("hidden");
                const icon = t.querySelector("[data-accordion-icon]");
                icon && icon.classList.remove("rotate-180");
            });
        }

        trigger.setAttribute("aria-expanded", String(!isOpen));
        if (!isOpen) {
            trigger.classList.add(...activeClasses);
            trigger.classList.remove(...inactiveClasses);
            target.classList.remove("hidden");
            trigger
                .querySelector("[data-accordion-icon]")
                ?.classList.add("rotate-180");
        } else {
            trigger.classList.remove(...activeClasses);
            trigger.classList.add(...inactiveClasses);
            target.classList.add("hidden");
            trigger
                .querySelector("[data-accordion-icon]")
                ?.classList.remove("rotate-180");
        }
    });

    function getModalFromTrigger(el) {
        const href = el.getAttribute("href");
        if (!href || !href.includes("#")) return null;
        const id = href.split("#")[1];
        return qs(document, "#" + id);
    }

    function showModal(modal) {
        if (!modal) return;
        document.body.classList.add("modal-enabled");
        setTimeout(() => {
            modal.classList.add("block");
            modal.classList.remove("hidden");
        }, 0);
    }

    function hideModal(modal) {
        if (!modal) return;
        setTimeout(() => {
            modal.classList.remove("block");
            modal.classList.add("hidden");
            document.body.classList.remove("modal-enabled");
        }, 0);
    }

    document.addEventListener("click", (ev) => {
        const openBtn = ev.target.closest('[data-modal-toggle="modal"]');
        if (openBtn) {
            const modal = getModalFromTrigger(openBtn);
            showModal(modal);
            return;
        }

        const closeBtn = ev.target.closest(".modal .btn-close, .modal .close");
        if (closeBtn) {
            const modal = closeBtn.closest(".modal");
            hideModal(modal);
            return;
        }

        const backdrop = ev.target.closest(".modal");
        if (backdrop && ev.target === backdrop) {
            const isStatic =
                backdrop.getAttribute("data-backdrop") === "static";
            if (!isStatic) hideModal(backdrop);
            return;
        }
    });

    document.addEventListener("click", (ev) => {
        const toggle = ev.target.closest(".dropdown-toggle");
        if (toggle) {
            const parent = toggle.closest(
                ".dropdown, .dropup, .dropstart, .dropend"
            );
            const menu = parent && qs(parent, ".dropdown-menu");
            if (!menu) return;

            if (
                window.Popper &&
                typeof window.Popper.createPopper === "function"
            ) {
                window.Popper.createPopper(toggle, menu, {
                    placement: parent.classList.contains("dropup")
                        ? "top-start"
                        : parent.classList.contains("dropstart")
                        ? "left-start"
                        : parent.classList.contains("dropend")
                        ? "right-start"
                        : "bottom-start",
                });
            }

            const willShow = !menu.classList.contains("block");
            dismissAllDropdowns();

            if (willShow) {
                menu.classList.add("block");
                menu.classList.remove("hidden");
                toggle.classList.add("show");
            }
            ev.stopPropagation();
            return;
        }

        if (!isInDropdown(ev.target)) {
            dismissAllDropdowns();
        }
    });

    function onScrollTopbar() {
        const topbar = qs(document, "#topbar");
        if (!topbar) return;
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            topbar.classList.add("nav-sticky");
        } else {
            topbar.classList.remove("nav-sticky");
        }
    }
    window.addEventListener("scroll", onScrollTopbar, { passive: true });

    function runOnPageLoadGlobal() {
        if (typeof feather !== "undefined") {
            try {
                feather.replace();
            } catch (e) {}
        }
    }
    runOnPageLoadGlobal();
})();
