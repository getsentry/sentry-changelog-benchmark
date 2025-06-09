"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

type sessionProps = {
  children: ReactNode;
};

export function NextAuthSessionProvider({ children }: sessionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
