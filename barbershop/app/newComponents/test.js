// components/MenuOverlay.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MenuOverlay() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // zisti mobil/desktop
  useEffect(() => {
    const detect = () => setIsMobile(window.innerWidth <= 767);
    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  // lock body scroll pri otvorení
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Transform stavy ako v pôvodnom:
  // desktop (closed): translateY(-101.5%)  -> príde zhora
  // mobile  (closed): translateY( 101.5%)  -> príde zdola
  const panelTransform = open
    ? "translate3d(0px, 0%, 0px) scale3d(1,1,1)"
    : isMobile
    ? "translate3d(0px, 101.5%, 0px) scale3d(1,1,1)"
    : "translate3d(0px, -101.5%, 0px) scale3d(1,1,1)";

  return (
    <>
      {/* Toggle button – VŽDY viditeľný (hore na desktope, dole na mobile) */}
      <div className="fixed inset-x-0 z-[2001] flex justify-center">
        <button
          data-lenis-toggle=""
          data-w-id="11ba414c-4fa2-f73a-5564-4d70ebaea601"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
          className={`${
            open ? "stop-scroll" : ""
          } relative mt-2 mb-2 flex w-48 min-h-11 items-center justify-center rounded-b-2xl bg-[#006fe6] text-white shadow focus:outline-none focus:ring-2 focus:ring-white/60`}
          style={{
            position: "fixed",
            top: isMobile ? "auto" : "0.5rem",
            bottom: isMobile ? "0.5rem" : "auto",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-0.5 w-8 bg-white transition-transform duration-200 ${
                open ? "translate-y-[8px] rotate-45" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-150 ${
                open ? "w-0" : "w-8"
              }`}
            />
            <span
              className={`block h-0.5 w-8 bg-white transition-transform duration-200 ${
                open ? "-translate-y-[8px] -rotate-45" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            />
          </div>

          {/* dekoračné rožky */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 9"
            fill="none"
            className="absolute -left-3 top-0 h-3.5 text-[#006fe6]"
          >
            <path d="M0 0H9V9C8.66667 6 6.4 0 0 0Z" fill="currentColor" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 9"
            fill="none"
            className="absolute -right-3 top-0 h-3.5 text-[#006fe6]"
          >
            <path d="M0.00195312 9L0.00195313 0L9.00195 0C6.00195 0.333333 0.00195313 2.6 0.00195312 9Z" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* PANEL (menu_wrap ekvivalent) */}
      <div className="fixed left-[1%] right-[1%] top-[1%] z-[2000] h-[90svh]">
        <div
          className="relative h-full rounded-2xl overflow-hidden"
          style={{
            transform: panelTransform,
            transformStyle: "preserve-3d",
            transition: "transform 300ms ease",
          }}
        >
          <div className="relative h-full w-full bg-[#006fe6]">
            {/* watermarky */}
            <div className="pointer-events-none absolute -top-[6vw] inset-x-0 flex justify-center">
              <div className="text-stroke select-none text-[23vw] leading-none font-black uppercase font-[Ppformula,system-ui,sans-serif]">
                rain delay
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-[10vw] inset-x-0 flex justify-center">
              <div className="text-stroke select-none text-[23vw] leading-none font-black uppercase font-[Ppformula,system-ui,sans-serif]">
                rain delay
              </div>
            </div>

            {/* Links */}
            <nav id="site-menu" className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-4">
              <MenuLink href="#shows" label="Shows" onClick={() => setOpen(false)} />
              <MenuLink href="#services" label="Services" onClick={() => setOpen(false)} />
              <MenuLink href="#advantages" label="advantages" onClick={() => setOpen(false)} />
              <MenuLink href="/careers" label="careers" onClick={() => setOpen(false)} />
            </nav>
          </div>
        </div>
      </div>

      {/* pomocný štýl na obrysový text */}
      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: white;
          color: transparent;
          opacity: 0.2;
        }
      `}</style>
    </>
  );
}

function MenuLink({ href, label, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="group relative block h-24 overflow-hidden">
      <div className="relative">
        <div className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-full">
          <span className="block font-[Pprightgrotesk,system-ui,sans-serif] uppercase leading-none tracking-normal text-white text-[clamp(2.8rem,6vw,6rem)]">
            {label}
          </span>
        </div>
        <div className="absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
          <span className="block font-[Pprightgrotesk,system-ui,sans-serif] uppercase leading-none tracking-normal text-white text-[clamp(2.8rem,6vw,6rem)]">
            {label}
          </span>
        </div>
      </div>
    </Link>
  );
}
