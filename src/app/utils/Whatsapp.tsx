"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

interface WhatsAppButtonProps {
  buttonText?: string;
  phoneNumber: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  buttonText = "Chat on WhatsApp",
  phoneNumber,
  defaultMessage = "",
}: WhatsAppButtonProps) {
  const [show, setShow] = useState(false);

  // slide-up + fade-in
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 90);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isAndroid = /Android/i.test(navigator.userAgent);
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const textParam = defaultMessage
    ? `&text=${encodeURIComponent(defaultMessage)}`
    : "";

  const handleClick = () => {
    if (isAndroid) {
      window.location.href =
        `intent://send?phone=${phoneNumber}${textParam}` +
        `#Intent;scheme=smsto;package=com.whatsapp;end`;
    } else if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}${textParam}`;
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}${textParam}`, "_blank");
      return;
    }

    // fallback to wa.me web if app not installed
    setTimeout(() => {
      window.location.href = `https://wa.me/${phoneNumber}${textParam}`;
    }, 500);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: show ? "30px" : "-60px",
        opacity: show ? 1 : 0,
        transition: "bottom 0.6s, opacity 0.6s",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <button
        onClick={handleClick}
        className="flex items-center bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-lg"
      >
        <FaWhatsapp className="mr-2 text-2xl" />
        {buttonText}
      </button>
    </div>
  );
}
