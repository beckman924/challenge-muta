"use client";

import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useContext, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const key = usePathname();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={key}
        transition={{ type: "linear" }}
        className="overflow-hidden"
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
