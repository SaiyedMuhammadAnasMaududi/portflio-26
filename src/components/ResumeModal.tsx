'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl h-[85vh] bg-zinc-900 border border-white/20 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a0c] border-b border-white/10">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#00ff66]" />
                <h3 className="text-base md:text-lg font-bold font-montserrat text-white">
                  Syed Muhammad Anas Maududi — Resume
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/resume/Syed_Muhammad_Anas_Maududi_Resume.pdf"
                  download="Syed_Muhammad_Anas_Maududi_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00ff66] hover:bg-[#00cc52] text-black text-xs font-bold transition-all"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content - PDF Viewer */}
            <div className="flex-1 bg-zinc-950 p-2 md:p-4 relative">
              <iframe
                src="/resume/Syed_Muhammad_Anas_Maududi_Resume.pdf"
                className="w-full h-full rounded-xl border border-white/10 bg-white"
                title="Syed Muhammad Anas Maududi Resume"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
