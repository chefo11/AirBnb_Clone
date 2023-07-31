"use client";
import React, { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [isMounteed, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounteed) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;

//try to fix this function later to avoid hydration error
