"use client";

import { useEffect } from "react";

export default function Error() {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return <div style={{ backgroundColor: "#02040a", minHeight: "100vh" }} />;
}
