"use client";

import { PDF } from "@/components";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

export default function PdfPage() {
  return (
    <div className="min-h-screen w-[80%] m-auto flex flex-col items-center gap-8 py-10">
      <div className="text-center text-2xl">PDF Page</div>

      <PDFViewer className="w-full h-[500px]">
        <PDF.TrialDocument />
      </PDFViewer>

      <PDFDownloadLink
        document={<PDF.TrialDocument />}
        fileName="trial.pdf"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {({ loading }) => (loading ? "Loading document..." : "Download PDF Trial")}
      </PDFDownloadLink>
    </div>
  );
}
