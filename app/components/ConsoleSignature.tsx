"use client";

import { useEffect } from "react";

export default function ConsoleSignature() {
  useEffect(() => {
    console.log("Updated by Anish");
  }, []);

  return null;
}
