"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Overlay({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && setOpen(false)}>
      <AnimatePresence onExitComplete={() => router.back()}>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-black/10"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                className="fixed top-8 right-0 bottom-0 z-50 w-full md:w-[80%] bg-[#f3f3f1] overflow-y-auto"
              >
                <Dialog.Title className="sr-only">Overlay</Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    aria-label="Close"
                    className="sticky top-4 float-right mr-4 mt-4 text-2xl leading-none"
                  >
                    ×
                  </button>
                </Dialog.Close>
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
