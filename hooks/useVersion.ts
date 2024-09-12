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
        localStorage.setItem("appVersion", version);

        if (
          process.env.NEXT_PUBLIC_IS_SERVER === "1" &&
          currentVersion &&
          version !== currentVersion
        ) {
          console.log(
            `App version change from ${currentVersion} to ${version}`,
          );
          setNewVersionAvailable(true);
        } else {
          console.log(`appVersion stays the same ${version}`);
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
