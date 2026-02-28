"use client";

import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type DocumentResource = {
  id: string;
  title: string;
  description: string;
  year: string;
  image?: string;

  mode: "read" | "download";
  fullContent?: string;
  downloadUrl?: string;
};

/* -------------------------------------------------------------------------- */
/*                               Document Data                                */
/* -------------------------------------------------------------------------- */

const DOCUMENTS: DocumentResource[] = [
  {
    id: "magnitsky",
    title:
      "Petition: Implement the Magnitsky Act to Challenge Corruption and Human Rights Violations in Jamaica",
    description:
      "We call upon the U.S., U.K., EU, and Canada to review our claims and apply the Magnitsky Act.",
    year: "2024",
    image: "/magnitskyact.png",
    mode: "read",
    fullContent: `The Issue

The devastating impact of corruption, kleptocracy, and human rights violations on ordinary Jamaican citizens, particularly the poor and marginalized, is a stark reality.

Jamaica is ranked 73 out of 180 on Transparency International's Corruption Perceptions Index (2024).

Kleptocracy—a government characterized by rampant greed and corruption—further exacerbates these issues.

Human rights organizations have documented allegations of unlawful killings, unconstitutional detention, and ill-treatment.

The Magnitsky Act grants nations the authority to impose visa bans and asset freezes on officials involved in corruption and human rights abuses.

We therefore call upon the U.S., U.K., EU, and Canada to apply the Magnitsky Act to combat corruption and injustice in Jamaica.`,
  },

  {
    id: "constitution",
    title: "Key Highlights of the Jamaican Constitution",
    description:
      "The Jamaican Constitution, established in 1962, is the cornerstone of the nation's legal framework.",
    year: "1962",
    image: "/constitution.png",
    mode: "read",
    fullContent: `Key Highlights of the Jamaican Constitution

1. Interpretation and Effect
2. Citizenship
3. Fundamental Rights and Freedoms
4. Governor-General
5. Parliament
6. Executive Powers
7. The Judicature
8. Finance
9. Public Service
10. Amendment of the Constitution

The Constitution remains vital in governing Jamaica and protecting citizens’ rights.`,
  },

  {
    id: "tax-filing",
    title: "Tax Filing Document",
    description:
      "One Jamaica Legal Defense Foundation, Tax Return Document 2023",
    year: "2023",
    image: "/tax.png",
    mode: "download",
    downloadUrl: "/docs/tax-return-2023.pdf",
  },

  {
    id: "tax-letter",
    title: "Tax Letter",
    description: "Tax Audit Letter",
    year: "2023",
    image: "/tax-letter.png",
    mode: "download",
    downloadUrl: "/docs/tax-audit-letter.pdf",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function DocumentLibrary() {
  const [openDoc, setOpenDoc] = useState<DocumentResource | null>(null);

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-3xl font-bold">Document Library</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              {doc.image && (
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="mb-4 h-48 w-full rounded-xl object-cover"
                />
              )}

              <span className="mb-3 inline-block rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                Document Library
              </span>

              <h3 className="mb-2 text-lg font-bold">{doc.title}</h3>
              <p className="mb-6 text-gray-600">{doc.description}</p>

              {doc.mode === "read" ? (
                <button
                  onClick={() => setOpenDoc(doc)}
                  className="w-full rounded-xl border border-yellow-400 py-2 font-semibold text-yellow-600 hover:bg-yellow-50"
                >
                  Read More
                </button>
              ) : (
                <a
                  href={doc.downloadUrl}
                  download
                  className="block w-full rounded-xl border border-green-700 py-2 text-center font-semibold text-green-700 hover:bg-green-50"
                >
                  Download PDF
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openDoc && openDoc.mode === "read" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="max-h-[80vh] w-[92vw] max-w-3xl overflow-y-auto rounded-2xl bg-white p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold">{openDoc.title}</h3>
              <button
                onClick={() => setOpenDoc(null)}
                className="text-xl font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 whitespace-pre-line text-gray-700">
              {openDoc.fullContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
