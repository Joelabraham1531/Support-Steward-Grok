import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Inquiry = {
  id: string;
  at: string;
  candidateId?: string;
  role: string;
  company: string;
  name: string;
  email: string;
  notes: string;
};

type Desk = {
  ids: string[];
  toggle: (id: string) => void;
  inquiries: Inquiry[];
  addInquiry: (i: Omit<Inquiry, "id" | "at">) => Inquiry;
};

export const useDesk = create<Desk>()(
  persist(
    (set) => ({
      ids: [],
      toggle: (id) =>
        set((s) => ({
          ids: s.ids.includes(id) ? s.ids.filter((x) => x !== id) : [...s.ids, id],
        })),
      inquiries: [],
      addInquiry: (i) => {
        const rec: Inquiry = {
          ...i,
          id: crypto.randomUUID(),
          at: new Date().toISOString(),
        };
        set((s) => ({ inquiries: [rec, ...s.inquiries] }));
        return rec;
      },
    }),
    { name: "support-steward-desk" },
  ),
);
