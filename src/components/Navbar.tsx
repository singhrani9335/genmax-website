"use client";

import { useState } from "react";

const navItems = [
    { name: "ABOUT US", href: "#about" },
    { name: "SOLUTIONS", href: "#services", dropdown: true },
    { name: "SERVICES", href: "#services", dropdown: true },
    { name: "PROJECTS", href: "#projects" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTACTS", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const query = searchQuery.trim().toLowerCase();

        if (!query) return;

        const elements = Array.from(
            document.querySelectorAll("h1, h2, h3, h4, h5, p, a, span")
        );

        const match = elements.find((element) =>
            element.textContent?.toLowerCase().includes(query)
        );

        if (match) {
            match.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        } else {
            alert(`No results found for "${searchQuery}"`);
        }
    };

    const closeSearch = () => {
        setSearchOpen(false);
        setSearchQuery("");
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white">

            {/* ================= TOP ORANGE BAR ================= */}
            <div className="bg-[#f7941d] text-white">
                <div className="mx-auto flex h-[40px] max-w-[1400px] items-center justify-between px-5 lg:px-8">

                    {/* Contact Information */}
                    <div className="flex items-center gap-5 text-[12px] font-medium">

                        <a
                            href="tel:+919873746635"
                            className="flex items-center gap-2 transition hover:opacity-80"
                        >
                            <svg
                                className="h-[15px] w-[15px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect
                                    x="7"
                                    y="2"
                                    width="10"
                                    height="20"
                                    rx="2"
                                />
                                <path d="M10 5h4" />
                                <circle cx="12" cy="18" r="1" />
                            </svg>

                            <span>+91-98737-46635</span>
                        </a>

                        <a
                            href="mailto:info@genmaxitsolution.com"
                            className="hidden items-center gap-2 transition hover:opacity-80 sm:flex"
                        >
                            <svg
                                className="h-[16px] w-[16px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect
                                    x="3"
                                    y="5"
                                    width="18"
                                    height="14"
                                    rx="1"
                                />
                                <path d="m3 7 9 6 9-6" />
                            </svg>

                            <span>info@genmaxitsolution.com</span>
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="hidden items-center gap-4 text-[13px] md:flex">

                        <a
                            href="#"
                            aria-label="Facebook"
                            className="hover:opacity-70"
                        >
                            f
                        </a>

                        <a
                            href="#"
                            aria-label="Twitter"
                            className="hover:opacity-70"
                        >
                            𝕏
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="hover:opacity-70"
                        >
                            ◎
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="hover:opacity-70"
                        >
                            in
                        </a>
                    </div>
                </div>
            </div>


            {/* ================================================= */}
            {/* ================= SEARCH STRIP ================== */}
            {/* ================================================= */}

            {searchOpen && (
                <div
                    className="
                        w-full
                        bg-[#0b3158]
                        text-white
                        shadow-[0_2px_8px_rgba(11,49,88,0.15)]
                    "
                >
                    <div className="mx-auto flex h-[48px] max-w-[1400px] items-center px-5 lg:px-8">

                        <form
                            onSubmit={handleSearch}
                            className="flex w-full items-center"
                        >

                            {/* Search Icon */}
                            <svg
                                className="mr-4 h-[21px] w-[21px] shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <circle cx="11" cy="11" r="6.5" />
                                <path d="m16 16 4.5 4.5" />
                            </svg>

                            {/* Search Input */}
                            <input
                                autoFocus
                                type="text"
                                value={searchQuery}
                                onChange={(e) =>
                                    setSearchQuery(e.target.value)
                                }
                                placeholder="Search"
                                className="
                                    flex-1
                                    bg-transparent
                                    text-[14px]
                                    font-semibold
                                    text-white
                                    outline-none
                                    placeholder:text-white
                                "
                            />

                            {/* Close */}
                            <button
                                type="button"
                                onClick={closeSearch}
                                aria-label="Close search"
                                className="
                                    ml-4
                                    flex
                                    h-[32px]
                                    w-[32px]
                                    items-center
                                    justify-center
                                    text-[24px]
                                    font-light
                                    leading-none
                                    text-white
                                    transition
                                    hover:opacity-60
                                "
                            >
                                ×
                            </button>

                        </form>
                    </div>
                </div>
            )}


            {/* ================= MAIN NAVBAR ================= */}
            <div className="border-b border-[#e8edf2] bg-white shadow-[0_2px_12px_rgba(11,49,88,0.06)]">

                <div className="mx-auto flex h-[88px] max-w-[1400px] items-center px-5 lg:px-8">

                    {/* ================= LOGO ================= */}
                    <a
                        href="/"
                        className="flex items-center"
                        onClick={() => setMenuOpen(false)}
                    >

                        {/* Logo Symbol */}
                        <div className="relative mr-3 flex h-[58px] w-[58px] items-center justify-center">

                            {/* G */}
                            <div className="absolute left-[2px] top-[4px] h-[48px] w-[48px] rounded-full border-[8px] border-[#0b3158] border-r-transparent rotate-[-12deg]" />

                            {/* M */}
                            <div className="absolute left-[17px] top-[15px] h-[28px] w-[32px] border-t-[7px] border-[#f7941d]" />

                            <div className="absolute left-[29px] top-[19px] h-[25px] w-[7px] bg-[#f7941d] rotate-[35deg]" />

                            <div className="absolute left-[43px] top-[19px] h-[25px] w-[7px] bg-[#f7941d] rotate-[-35deg]" />

                            {/* Small Squares */}
                            <div className="absolute right-[-1px] top-[1px] h-[7px] w-[7px] bg-[#f7941d]" />

                            <div className="absolute right-[7px] top-[-6px] h-[6px] w-[6px] bg-[#f7941d]" />

                            {/* Wave */}
                            <div className="absolute bottom-[5px] left-[-7px] h-[10px] w-[65px] rounded-[50%] border-t-[5px] border-[#0b3158] rotate-[-8deg]" />
                        </div>

                        {/* Logo Text */}
                        <div className="leading-none">

                            <div className="text-[25px] font-extrabold tracking-[-0.7px] text-[#0b3158]">
                                GEN
                                <span className="text-[#f7941d]">
                                    MAX
                                </span>
                            </div>

                            <div className="mt-[6px] text-center text-[8px] font-semibold tracking-[4.5px] text-[#0b3158]">
                                IT SOLUTION
                            </div>

                        </div>
                    </a>


                    {/* ================= DESKTOP MENU ================= */}
                    <nav className="ml-auto hidden h-full items-center lg:flex">

                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="
                                    group
                                    relative
                                    flex
                                    h-full
                                    items-center
                                    px-[16px]
                                    text-[13px]
                                    font-bold
                                    tracking-[0.3px]
                                    text-[#173653]
                                    transition-colors
                                    hover:text-[#f7941d]
                                "
                            >

                                <span>{item.name}</span>

                                {item.dropdown && (
                                    <svg
                                        className="ml-[6px] h-[12px] w-[12px]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                )}

                                {/* Orange Hover Line */}
                                <span
                                    className="
                                        absolute
                                        bottom-0
                                        left-[16px]
                                        right-[16px]
                                        h-[3px]
                                        scale-x-0
                                        bg-[#f7941d]
                                        transition-transform
                                        duration-300
                                        group-hover:scale-x-100
                                    "
                                />

                            </a>
                        ))}


                        {/* ================= SEARCH BUTTON ================= */}
                        <button
                            type="button"
                            aria-label="Search"
                            onClick={() => setSearchOpen(true)}
                            className="
                                ml-[8px]
                                flex
                                h-[42px]
                                w-[42px]
                                items-center
                                justify-center
                                text-[#0b3158]
                                transition
                                hover:text-[#f7941d]
                            "
                        >
                            <svg
                                className="h-[20px] w-[20px]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="11" cy="11" r="6.5" />
                                <path d="m16 16 4.5 4.5" />
                            </svg>
                        </button>


                        {/* ================= CONNECT ================= */}
                        <a
                            href="#contact"
                            className="
                                ml-[8px]
                                flex
                                h-[45px]
                                min-w-[115px]
                                items-center
                                justify-center
                                border-[2px]
                                border-[#0b3158]
                                bg-white
                                px-5
                                text-[12px]
                                font-extrabold
                                tracking-[0.5px]
                                text-[#0b3158]
                                transition-all
                                duration-300
                                hover:border-[#f7941d]
                                hover:bg-[#f7941d]
                                hover:text-white
                            "
                        >
                            CONNECT
                        </a>

                    </nav>


                    {/* ================= MOBILE BUTTON ================= */}
                    <button
                        type="button"
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="
                            ml-auto
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            border
                            border-[#dce3e9]
                            text-[#0b3158]
                            transition
                            hover:border-[#f7941d]
                            hover:text-[#f7941d]
                            lg:hidden
                        "
                    >
                        {menuOpen ? (
                            <span className="text-2xl leading-none">
                                ×
                            </span>
                        ) : (
                            <span className="text-xl leading-none">
                                ☰
                            </span>
                        )}
                    </button>

                </div>


                {/* ================= MOBILE MENU ================= */}
                {menuOpen && (
                    <div className="border-t border-[#e8edf2] bg-white lg:hidden">

                        <nav className="px-6 py-3">

                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        border-b
                                        border-[#edf1f4]
                                        py-4
                                        text-[14px]
                                        font-bold
                                        text-[#173653]
                                        transition
                                        hover:text-[#f7941d]
                                    "
                                >
                                    {item.name}

                                    {item.dropdown && (
                                        <svg
                                            className="h-4 w-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    )}
                                </a>
                            ))}

                            <div className="flex items-center gap-4 py-5">

                                {/* Mobile Search */}
                                <button
                                    type="button"
                                    aria-label="Search"
                                    onClick={() => setSearchOpen(true)}
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        border
                                        border-[#dce3e9]
                                        text-[#0b3158]
                                        transition
                                        hover:border-[#f7941d]
                                        hover:text-[#f7941d]
                                    "
                                >
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="11" cy="11" r="6.5" />
                                        <path d="m16 16 4 4" />
                                    </svg>
                                </button>

                                <a
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="
                                        flex
                                        h-11
                                        items-center
                                        justify-center
                                        border-[2px]
                                        border-[#0b3158]
                                        px-7
                                        text-sm
                                        font-bold
                                        text-[#0b3158]
                                        transition
                                        hover:border-[#f7941d]
                                        hover:bg-[#f7941d]
                                        hover:text-white
                                    "
                                >
                                    CONNECT
                                </a>

                            </div>

                        </nav>
                    </div>
                )}

            </div>
        </header>
    );
}