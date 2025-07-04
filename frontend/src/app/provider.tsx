"use client";

import React from "react";
import StoreProvider from "@/state/redux";

const Provider = ({ children }: { children: React.ReactNode }) => {
    return <StoreProvider>{children}</StoreProvider>;
};

export default Provider;