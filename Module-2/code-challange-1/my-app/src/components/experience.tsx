"use client";

import { postExperience } from "@/helpers/postExperience";
import React, { useState } from "react";
import { useExperiences } from "@/helpers/useExperience";
import type { Experience } from "@/types/experience";

type Category = "fulltime" | "freelance" | "project";

export default function Experience() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<{
    companyName: string;
    position: string;
    from: string;
    to: string;
    description: string;
    category: Category;
  }>({
    companyName: "",
    position: "",
    from: "",
    to: "",
    description: "",
    category: "fulltime",
  });

  const { experiences, loading, error, refresh } = useExperiences();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const grouped: Record<Category, Experience[]> = {
    fulltime: experiences.filter((exp) => exp.category === "fulltime"),
    freelance: experiences.filter((exp) => exp.category === "freelance"),
    project: experiences.filter((exp) => exp.category === "project"),
  };

  const selectedExp = experiences.find((exp) => exp.objectId === selectedId);

  const handleSubmit = async () => {
    try {
      await postExperience(form);
      alert("Experience Added!");
      setShowForm(false);
      setForm({
        companyName: "",
        position: "",
        from: "",
        to: "",
        description: "",
        category: "fulltime",
      });
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="pt-0 px-4 sm:px-6 md:px-8 lg:px-10 pb-5 min-h-screen">
      {/* 
      // --- HIDE ADD BUTTON ---
      <div className="mb-6">
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="bg-black text-white px-3 py-1 rounded-xl hover:bg-zinc-800"
        >
          {showForm ? "Cancel" : "+"}
        </button>
      </div>
      */}

      {/* 
      // --- HIDE ADD EXPERIENCE FORM ---
      {showForm && (
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-10 w-full sm:w-[90%] md:w-[70%] lg:w-[50%]">
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Company Name"
              value={form.companyName}
              onChange={(e) =>
                setForm({ ...form, companyName: e.target.value })
              }
              className="border px-3 sm:px-4 py-2 rounded text-black"
            />
            <input
              type="text"
              placeholder="Position"
              value={form.position}
              onChange={(e) => setForm({ ...form, position: e.target.value })}
              className="border px-3 sm:px-4 py-2 rounded text-black"
            />
            <input
              type="text"
              placeholder="From"
              value={form.from}
              onChange={(e) => setForm({ ...form, from: e.target.value })}
              className="border px-3 sm:px-4 py-2 rounded text-black"
            />
            <input
              type="text"
              placeholder="To"
              value={form.to}
              onChange={(e) => setForm({ ...form, to: e.target.value })}
              className="border px-3 sm:px-4 py-2 rounded text-black"
            />

            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value as Category })
              }
              className="border px-3 sm:px-4 py-2 rounded text-black"
            >
              <option value="fulltime">Fulltime</option>
              <option value="freelance">Freelance</option>
              <option value="project">Internship</option>
            </select>

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="border px-3 sm:px-4 py-2 rounded resize-none text-black"
              rows={4}
            ></textarea>

            <button
              onClick={handleSubmit}
              className="bg-black text-white px-4 py-2 rounded hover:bg-zinc-800"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      */}

      {/* Experience Grids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 capitalize">
              {category === "project" ? "Internship" : category}
            </h2>

            {items.length === 0 ? (
              <p className="text-zinc-500 text-sm sm:text-base">
                No experiences added.
              </p>
            ) : (
              <div className="flex flex-col gap-3 sm:gap-4">
                {items.map((exp) => (
                  <div
                    key={exp.objectId}
                    onClick={() => setSelectedId(exp.objectId)}
                    className="cursor-pointer bg-zinc-500/20 rounded-xl p-3 sm:p-4 text-white shadow-md hover:bg-zinc-400/30 transition-colors"
                  >
                    <h1 className="font-bold text-black text-base sm:text-lg">
                      {exp.companyName}
                    </h1>
                    <p className="text-black text-xs sm:text-sm">
                      {exp.position}
                    </p>
                    <p className="text-black text-xs sm:text-sm">
                      {exp.from} - {exp.to}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Expanded Detail Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 px-4 sm:px-6">
          <div className="bg-white text-black w-full sm:w-[80vw] max-w-xl p-4 sm:p-6 rounded-xl shadow-2xl relative">
            <button
              className="absolute top-2 sm:top-3 right-2 sm:right-3 text-black text-lg sm:text-xl font-bold"
              onClick={() => setSelectedId(null)}
            >
              ✕
            </button>
            <h1 className="text-xl sm:text-2xl font-bold mb-2">
              {selectedExp.companyName}
            </h1>
            <p className="text-xs sm:text-sm font-semibold mb-1">
              {selectedExp.position}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              {selectedExp.from} – {selectedExp.to}
            </p>
            <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
              {selectedExp.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
