"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl text-center space-y-6"
      >
        <h1 className="text-4xl font-bold">Landing Template Starter</h1>

        <p className="text-muted-foreground">
          Next.js 15 with App Router, TypeScript, Tailwind CSS, shadcn/ui,
          lucide-react, and framer-motion are all wired up and ready to go.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button>
            <Rocket className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
