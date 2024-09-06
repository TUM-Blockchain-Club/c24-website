"use client";

import { useState, useEffect } from "react";

export function useVersionCheck(intervalMs = 30000) {
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);

  useEffect(() => {
    // Function to check for new version
    const checkVersion = async () => {
      try {
        const res = await fetch("/api/version");
        const { version } = await res.json();
        const currentVersion = localStorage.getItem("appVersion");

        if (
          process.env.VERCEL === "1" &&
          currentVersion &&
          version !== currentVersion
        ) {
          setNewVersionAvailable(true);
        } else {
          localStorage.setItem("appVersion", version);
        }
      } catch (error) {
        console.error("Failed to check for new version:", error);
      }
    };

    // Check immediately on mount
    checkVersion();

    // Set up interval to check periodically
    const intervalId = setInterval(checkVersion, intervalMs);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [intervalMs]);

  return newVersionAvailable;
}
