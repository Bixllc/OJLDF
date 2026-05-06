"use client";

import * as React from "react";
import {
  BookOpen,
  FileText,
  Video,
  Search,
  X,
  ChevronDown,
  Download,
} from "lucide-react";

interface LearningCenterProps {
  onNavigate?: (page: string) => void;
}

type CategoryTitle =
  | "Reason With Rattigan Video Library"
  | "Come Reason With Rattigan Video Library"
  | "Archive"
  | "Document Library";

type BaseResource = {
  type: "video" | "guide";
  title: string;
  description: string;
  category: CategoryTitle;
  date?: string;
};

type VideoResource = BaseResource & {
  type: "video";
  videoId: string;
};

type GuideResource = BaseResource & {
  type: "guide";
  image?: string; // use /public paths or external urls
  fullContent?: string;
  downloadUrl?: string;
};

type Resource = VideoResource | GuideResource;

const CATEGORY_META: Record<
  CategoryTitle,
  { icon: React.ElementType; color: string; softBg: string; border: string }
> = {
  "Reason With Rattigan Video Library": {
    icon: Video,
    color: "#00843D",
    softBg: "#00843D15",
    border: "#00843D",
  },
  "Come Reason With Rattigan Video Library": {
    icon: Video,
    color: "#FCD116",
    softBg: "#FCD11620",
    border: "#FCD116",
  },
  Archive: {
    icon: BookOpen,
    color: "#00843D",
    softBg: "#00843D15",
    border: "#00843D",
  },
  "Document Library": {
    icon: FileText,
    color: "#FCD116",
    softBg: "#FCD11620",
    border: "#FCD116",
  },
};

/* -------------------------------------------------------------------------- */
/*                               Tiny UI Primitives                           */
/* -------------------------------------------------------------------------- */

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

function Card({
  children,
  className,
  style,
}: React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
}>) {
  return (
    <div
      className={cn("rounded-2xl bg-white border border-gray-200", className)}
      style={style}
    >
      {children}
    </div>
  );
}

function CardContent({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

function Button({
  children,
  className,
  variant = "solid",
  asChild = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline";
  asChild?: boolean;
}) {
  // If you need asChild, use <a> directly — no polymorphic component needed here.
  if (asChild) return <>{children}</>;

  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const solid =
    "bg-[#00843D] text-white hover:bg-[#006930] focus:ring-[#00843D]/30";
  const outline =
    "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-gray-200";

  return (
    <button
      className={cn(base, variant === "outline" ? outline : solid, className)}
      {...props}
    >
      {children}
    </button>
  );
}

function Input(
  props: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }
) {
  const { className, ...rest } = props;
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00843D]/30",
        className
      )}
      {...rest}
    />
  );
}

/* ------------------------------- Simple Modal ------------------------------ */

function Modal({
  open,
  onClose,
  title,
  description,
  children,
}: React.PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}>) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close modal overlay"
      />
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b p-5">
          <div className="min-w-0">
            {title ? (
              <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            ) : null}
            {description ? (
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function Resources({ onNavigate }: LearningCenterProps) {
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryTitle | null>(null);
  const [query, setQuery] = React.useState("");
  const [openDialogIndex, setOpenDialogIndex] = React.useState<number | null>(
    null
  );

  const categories: { title: CategoryTitle }[] = [
    { title: "Reason With Rattigan Video Library" },
    { title: "Come Reason With Rattigan Video Library" },
    { title: "Archive" },
    { title: "Document Library" },
  ];

  // NOTE:
  // Replace these image paths with files you put in /public (recommended).
  // Example: public/learning/claim.png -> "/learning/claim.png"
  const resources: Resource[] = [
    // Reason With Rattigan Video Library
    {
      type: "video",
      title:
        "Holness 'BINGO' & Hits the JACKPOT- A Treasure Trove of Gold Spoons! Astonishing Financial Secrets!",
      description:
        "Reason With Rattigan investigates financial controversies and political accountability in Jamaica.",
      category: "Reason With Rattigan Video Library",
      date: "Nov 2025",
      videoId: "vBYI-416cK8",
    },
    {
      type: "video",
      title:
        "Rattigan Brought His RECEIPTS: TITLE & BILL of SALES – Bus for $1? Exposing the Jamaican Bus Scandal",
      description:
        "In-depth analysis of the controversial bus sale with documented evidence.",
      category: "Reason With Rattigan Video Library",
      date: "Nov 2025",
      videoId: "MQLml-wMPEA",
    },
    {
      type: "video",
      title:
        "Holness' GRIFTING & NUFF GOLD SPOON - Jamaica's Corruption Exposed! Political Promises & Truths",
      description:
        "Examining political corruption and broken promises with hard-hitting commentary.",
      category: "Reason With Rattigan Video Library",
      date: "Oct 2025",
      videoId: "qYzHNFJCED8",
    },

    // Come Reason With Rattigan Video Library
    {
      type: "video",
      title:
        "Emergency School Bus Campaign PROPS – School Bus LIE Exposed! $5 Billion Truth Revealed!",
      description:
        "Come Reason With Rattigan investigates the school bus campaign and exposes crucial truths.",
      category: "Come Reason With Rattigan Video Library",
      date: "Nov 2025",
      videoId: "l43se7u3KDw",
    },
    {
      type: "video",
      title:
        "School Bus Robbery Exposed! JA'n Govt's USD 80K Lies INFLATED PRICE TAGS, Retired Bus Cost USD 2K!",
      description:
        "Come Reason With Rattigan exposes government lies about inflated school bus prices.",
      category: "Come Reason With Rattigan Video Library",
      date: "Nov 2025",
      videoId: "6XjE0DKBN40",
    },
    {
      type: "video",
      title:
        "No Man Is An Island; Remembering Jamaica's Pledge: A Call for UNITY!",
      description:
        "Come Reason With Rattigan reflects on Jamaica's pledge and calls for unity in our community.",
      category: "Come Reason With Rattigan Video Library",
      date: "Nov 2025",
      videoId: "s9IZy79vJL4",
    },

    // Archive
    {
      type: "video",
      title: "Constitution Reform Q&A Mystic Sensation",
      description:
        "Watch this excerpt from the Global Jamaica Diaspora Conference 2024",
      category: "Archive",
      date: "2024",
      videoId: "3QGDK2yuXXU",
    },
    {
      type: "video",
      title: "HealthCare in Jamaica Dr Alfred Dawes",
      description:
        "What are the current healthcare delivery issues and the way forward!",
      category: "Archive",
      date: "2024",
      videoId: "QLen_ZMo8SI",
    },
    {
      type: "video",
      title: "Tourism Strategies Robert Stephens",
      description:
        "Is tourism only to benefit multi-national Hotel chains, what about the locals?",
      category: "Archive",
      date: "2024",
      videoId: "496E15CI1XU",
    },
    {
      type: "video",
      title: "Profile of Kartel Lawyers Isat Buchanan",
      description:
        "This broadcast focusses on the life of these renowned attorneys.",
      category: "Archive",
      date: "2024",
      videoId: "8hOadbPqQ-o",
    },
    {
      type: "video",
      title: "Hear Directly from the Maroons Ambassador Anu",
      description: "What are the Maroon's plans for the next 3 years?",
      category: "Archive",
      date: "2024",
      videoId: "RtDg9q1ciCM",
    },
    {
      type: "video",
      title: "Hurricane Response Nigel Clarke",
      description: "Hurricane Beryl and the undoing of Minister Nigel Clarke.",
      category: "Archive",
      date: "2024",
      videoId: "KRIS8Tg51LI",
    },

    // Document Library
    {
      type: "guide",
      title: "Craig Beresford Second Affidavit March 2025",
      description: "SECOND AFFIDAVIT OF CRAIG BERESFORD",
      category: "Document Library",
      date: "March 2025",
      image: "/craigberesford.png",
      fullContent:
        "SECOND AFFIDAVIT OF CRAIG BERESFORD - Full legal affidavit document available for download.",
      downloadUrl: "/Craig-Beresford-Second-Affidavit-March-2025-1-4.pdf",
    },
    {
      type: "guide",
      title: "How to File an ATI with the Government of Jamaica",
      description:
        "To file an Access to Information (ATI) request with the Government of Jamaica...",
      category: "Document Library",
      date: "2025",
      image: "/atifiling.png",
      fullContent: `To file an Access to Information (ATI) request with the Government of Jamaica, you can follow these steps:

1. Identify the Public Authority
2. Obtain the ATI Request Form
3. Complete the ATI Request Form
4. Submit the ATI Request
5. Pay the Required Fees (if any)
6. Await Response
7. Review the Response
8. Appeal if Necessary`,
    },
    {
      type: "guide",
      title:
        "Petition: Implement the Magnitsky Act to Challenge Corruption and Human Rights Violations in Jamaica",
      description:
        "We call upon the U.S., U.K., EU, and Canada to review our claims and apply the Magnitsky Act...",
      category: "Document Library",
      date: "2024",
      image: "/magnitskyact.png",
      fullContent:
        "Please sign and support the petition. Full text available in this document.",
    },
    {
      type: "guide",
      title: "Tax Filing Document",
      description:
        "One Jamaica Legal Defense Foundation, Tax Return Document 2023",
      category: "Document Library",
      date: "2023",
      image: "/taxfiling.png",
      fullContent: "Complete tax filing documentation available for download.",
      downloadUrl: "/2023-Tax-Return-Documents-ONE-JAMAICA-LEGAL-DEFE-Client-Copy6.pdf",
    },
    {
      type: "guide",
      title: "Tax Letter",
      description: "Tax Audit Letter",
      category: "Document Library",
      date: "2023",
      image: "/taxfiling.png",
      fullContent: "Official tax audit correspondence available for download.",
      downloadUrl: "/Letter-One.pdf",
    },
    {
      type: "guide",
      title: "Key Highlights of the Jamaican Constitution",
      description:
        "The Jamaican Constitution, established in 1962, is the cornerstone of the nation's legal framework.",
      category: "Document Library",
      date: "1962",
      image: "/keyhighlights.png",
      fullContent:
        "Summary of key chapters and provisions. See the attached constitution documents for full detail.",
      downloadUrl: "/Ja-Constitution-Order-in-Council-1962-full.pdf",
    },
  ];

  const countsByCategory = React.useMemo(() => {
    const counts: Record<CategoryTitle, number> = {
      "Reason With Rattigan Video Library": 0,
      "Come Reason With Rattigan Video Library": 0,
      Archive: 0,
      "Document Library": 0,
    };
    for (const r of resources) counts[r.category] += 1;
    return counts;
  }, [resources]);

  const filteredResources = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((r) => {
      const matchesCategory = selectedCategory ? r.category === selectedCategory : true;

      const haystack = `${r.title} ${r.description} ${r.category} ${r.date ?? ""}`.toLowerCase();
      const matchesQuery = q ? haystack.includes(q) : true;

      return matchesCategory && matchesQuery;
    });
  }, [resources, selectedCategory, query]);

  const selectedResource =
    openDialogIndex !== null ? resources[openDialogIndex] : null;

  const handleCategoryClick = (title: CategoryTitle) => {
    setQuery("");
    setSelectedCategory((prev) => (prev === title ? null : title));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero
      <section className="bg-gradient-to-br from-[#00843D] to-[#009B3A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <BookOpen className="h-12 w-12 text-[#FCD116]" />
              <h1 className="text-5xl font-extrabold">Learning Center</h1>
            </div>
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Access a comprehensive library of legal resources, educational
              materials, and cultural content designed to empower and inform our
              community.
            </p>
          </div>
        </div>
      </section> */}

      {/* Search */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources, guides, videos..."
                className="h-14 pl-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center font-playfair text-2xl font-bold">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const meta = CATEGORY_META[category.title];
              const Icon = meta.icon;
              const active = selectedCategory === category.title;

              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => handleCategoryClick(category.title)}
                  className="text-left"
                >
                  <Card
                    className={cn(
                      "h-full border-2 transition-all",
                      active ? "shadow-lg" : "border-transparent hover:shadow-md"
                    )}
                    style={{ borderColor: active ? meta.border : "transparent" }}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                        style={{ backgroundColor: meta.softBg }}
                      >
                        <Icon className="h-8 w-8" style={{ color: meta.color }} />
                      </div>

                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {countsByCategory[category.title]} item
                        {countsByCategory[category.title] === 1 ? "" : "s"}
                      </p>
                    </CardContent>
                  </Card>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-playfair text-3xl font-bold">
                {selectedCategory ? selectedCategory : "All Resources"}
              </h2>
              <p className="mt-2 text-gray-600">
                {selectedCategory
                  ? `Showing ${filteredResources.length} result${
                      filteredResources.length === 1 ? "" : "s"
                    }`
                  : "Essential materials to help you navigate legal, cultural, and educational topics"}
              </p>
            </div>

            {(selectedCategory || query) && (
              <Button
                onClick={() => {
                  setSelectedCategory(null);
                  setQuery("");
                }}
                variant="outline"
                className="border-[#00843D] text-[#00843D] hover:bg-[#00843D]/10"
              >
                <X className="mr-2 h-4 w-4" />
                Clear
              </Button>
            )}
          </div>

          {/* About banners */}
          {selectedCategory === "Reason With Rattigan Video Library" && (
            <div className="mb-8 rounded-lg border-l-4 border-[#00843D] bg-gradient-to-r from-[#00843D]/10 to-[#009B3A]/10 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                About Reason With Rattigan
              </h3>
              <p className="text-gray-700">
                Reason With Rattigan is our weekly Saturday broadcast. We cover
                political topics relevant to Jamaica and engage with the diaspora
                to bring education, awareness, and advocacy.
              </p>
            </div>
          )}

          {selectedCategory === "Come Reason With Rattigan Video Library" && (
            <div className="mb-8 rounded-lg border-l-4 border-[#FCD116] bg-gradient-to-r from-[#FCD116]/10 to-[#FFD700]/10 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                About Come Reason With Rattigan
              </h3>
              <p className="text-gray-700">
                Come Reason With Rattigan is our weekly Wednesday broadcast. We
                cover political topics relevant to Jamaica and engage with the
                diaspora to bring education, awareness, and advocacy.
              </p>
            </div>
          )}

          {selectedCategory === "Archive" && (
            <div className="mb-8 rounded-lg border-l-4 border-[#00843D] bg-gradient-to-r from-[#00843D]/10 to-[#009B3A]/10 p-6">
              <h3 className="mb-2 text-xl font-semibold">About the Archive</h3>
              <p className="text-gray-700">
                Your access to videos & documents from past broadcasts & events.
              </p>
            </div>
          )}

          {selectedCategory === "Document Library" && (
            <div className="mb-8 rounded-lg border-l-4 border-[#FCD116] bg-gradient-to-r from-[#FCD116]/10 to-[#FFD700]/10 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                About Document Library
              </h3>
              <p className="text-gray-700">Your access to important documents.</p>
            </div>
          )}

          {/* Grid */}
          {filteredResources.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-10 text-center text-gray-600">
              No results found. Try a different search.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource, index) => {
                const actualIndex = resources.indexOf(resource);
                const meta = CATEGORY_META[resource.category];

                return (
                  <Card
                    key={`${resource.title}-${index}`}
                    className="transition-shadow hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      {/* category pill */}
                      <div className="mb-4">
                        <span
                          className="inline-block rounded px-3 py-1 text-xs font-semibold text-white"
                          style={{ backgroundColor: meta.color }}
                        >
                          {resource.category}
                        </span>
                      </div>

                      {resource.type === "video" ? (
                        <>
                          <div
                            className="relative mb-4 w-full overflow-hidden rounded-lg bg-black"
                            style={{ paddingBottom: "56.25%" }}
                          >
                            <iframe
                              className="absolute left-0 top-0 h-full w-full"
                              src={`https://www.youtube.com/embed/${resource.videoId}`}
                              title={resource.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>

                          <h3 className="mb-2 text-lg font-semibold">
                            {resource.title}
                          </h3>
                          <p className="text-gray-600">{resource.description}</p>
                        </>
                      ) : (
                        <>
                          {resource.image ? (
                            <img
                              src={resource.image}
                              alt={resource.title}
                              className="mb-4 h-48 w-full rounded-lg object-cover"
                            />
                          ) : null}

                          <h3 className="mb-2 text-lg font-semibold">
                            {resource.title}
                          </h3>
                          <p className="mb-4 text-gray-600">
                            {resource.description}
                          </p>

                          <div className="space-y-2">
                            {resource.fullContent ? (
                              <Button
                                className="w-full"
                                variant="outline"
                                onClick={() => setOpenDialogIndex(actualIndex)}
                                style={{
                                  borderColor: meta.color,
                                  color: meta.color,
                                }}
                              >
                                <ChevronDown className="mr-2 h-4 w-4" />
                                Read More
                              </Button>
                            ) : null}

                            {resource.downloadUrl ? (
                              <a
                                className={cn(
                                  "inline-flex w-full items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition hover:bg-gray-50"
                                )}
                                style={{
                                  borderColor: "#00843D",
                                  color: "#00843D",
                                }}
                                href={resource.downloadUrl}
                                download
                              >
                                <Download className="mr-2 h-4 w-4" />
                                Download
                              </a>
                            ) : null}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <Modal
        open={openDialogIndex !== null}
        onClose={() => setOpenDialogIndex(null)}
        title={
          selectedResource && selectedResource.type === "guide"
            ? selectedResource.title
            : undefined
        }
        description={
          selectedResource && selectedResource.type === "guide"
            ? selectedResource.description
            : undefined
        }
      >
        {selectedResource &&
        selectedResource.type === "guide" &&
        selectedResource.fullContent ? (
          <div className="whitespace-pre-line text-gray-700">
            {selectedResource.fullContent}
          </div>
        ) : (
          <p className="text-gray-600">No content available.</p>
        )}
      </Modal>
    </div>
  );
}