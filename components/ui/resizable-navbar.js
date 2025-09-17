"use client";

import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image"; 

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const AnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => mod.AnimatePresence),
  { ssr: false }
);

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  return (
    <MotionDiv
      ref={ref}
      className={cn("fixed inset-x-0 z-40 w-full", className)}
      role="navigation" 
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </MotionDiv>
  );
};

export const NavBody = ({ children, className, visible }) => (
  <MotionDiv
    animate={{
      backdropFilter: "blur(100px)",
      boxShadow: visible
        ? "0 0 24px rgba(34,42,53,.06),0 1px 1px rgba(0,0,0,.05),0 0 0 1px rgba(34,42,53,.04),0 0 4px rgba(34,42,53,.08),0 16px 68px rgba(47,48,55,.05),0 1px 0 rgba(255,255,255,.1) inset"
        : "none",
      y: visible ? 20 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    style={{ width: "100%" }}
    className={cn(
      "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
      visible && "dark:bg-neutral-950/80",
      className
    )}
  >
    {children}
  </MotionDiv>
);

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);
  return (
    <MotionDiv
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-800 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item) => (
        <Link
          key={item.link} 
          href={item.link}
          onClick={onItemClick}
          onMouseEnter={() => setHovered(item.link)}
          className="relative px-4 py-2 text-neutral-300"
        >
          {hovered === item.link && (
            <MotionDiv
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </MotionDiv>
  );
};

export const MobileNav = ({ children, className, visible }) => (
  <MotionDiv
    animate={{
      backdropFilter: visible ? "blur(10px)" : "none",
      boxShadow: visible
        ? "0 0 24px rgba(34,42,53,.06),0 1px 1px rgba(0,0,0,.05),0 0 0 1px rgba(34,42,53,.04),0 0 4px rgba(34,42,53,.08),0 16px 68px rgba(47,48,55,.05),0 1px 0 rgba(255,255,255,.1) inset"
        : "none",
      y: visible ? 20 : 0,
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    style={{ width: "100%" }}
    className={cn(
      "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-4xl bg-transparent px-0 py-2 lg:hidden",
      visible && "bg-neutral-950/80",
      className
    )}
  >
    {children}
  </MotionDiv>
);

export const MobileNavHeader = ({ children, className }) => (
  <div
    className={cn("flex w-full flex-row items-center justify-between", className)}
  >
    {children}
  </div>
);

export const MobileNavMenu = ({ children, className, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <MotionDiv
        id="mobile-menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start gap-4 rounded-lg bg-gradient-to-tl from-gray-700 to-black px-4 py-8 shadow-lg dark:bg-neutral-950",
          className
        )}
      >
        {children}
      </MotionDiv>
    )}
  </AnimatePresence>
);

export const MobileNavToggle = ({ isOpen, onClick }) => (
  <button
    aria-expanded={isOpen} 
    aria-controls="mobile-menu"
    onClick={onClick}
    className="p-2"
  >
    {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
  </button>
);

export const NavbarLogo = () => (
  <Link
  href="/"
  className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
>
  <span className="text-3xl font-medium bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
    AutomateAce
  </span>
  <Image
    src="/logo.webp"
    alt="AutomateAce logo"
    width={10} 
    height={10}
    priority
    className="rounded-full max-h-10 w-auto object-contain" 
  />
</Link>

);

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white text-black text-sm font-bold cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";
  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,42,53,.06),_0_1px_1px_rgba(0,0,0,.05),_0_0_0_1px_rgba(34,42,53,.04),_0_0_4px_rgba(34,42,53,.08),_0_16px_68px_rgba(47,48,55,.05),_0_1px_0_rgba(255,255,255,.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark:
      "bg-black text-white shadow-[0_0_24px_rgba(34,42,53,.06),_0_1px_1px_rgba(0,0,0,.05),_0_0_0_1px_rgba(34,42,53,.04),_0_0_4px_rgba(34,42,53,.08),_0_16px_68px_rgba(47,48,55,.05),_0_1px_0_rgba(255,255,255,.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_rgba(255,255,255,.3)_inset]",
  };
  const combined = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={combined} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <Tag className={combined} {...props}>
      {children}
    </Tag>
  );
};
