import { create } from "zustand";
import { FormSchema } from "../types.ts";

interface FormState {
  // State
  id: string | undefined;
  jsonResult: FormSchema | undefined;
  isLoading: boolean;
  promptText: string;

  // Actions
  setId: (id: string) => void;
  setJsonResult: (result: FormSchema) => void;
  setLoading: (loading: boolean) => void;
  setPromptText: (setPromptText: string) => void;
  generateForm: (promptText: string) => Promise<void>;
}

export const useFormStore = create<FormState>((set) => ({
  // Initial state
  jsonResult: undefined,
  id: undefined,
  isLoading: false,
  promptText: "",

  // Actions
  setJsonResult: (result) => set({ jsonResult: result }),
  setId: (id) => set({ id }),
  setLoading: (loading) => set({ isLoading: loading }),
  setPromptText: (promptText) => set({ promptText }),

  generateForm: async (promptText: string) => {
    try {
      set({ isLoading: true });

      const UI_ENGINE_API_URL =
        "https://dlmx7yo7g5.execute-api.eu-central-1.amazonaws.com/dev/";

      const response = await fetch(UI_ENGINE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ promptText }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      if (!data.response || !data.response[0]) {
        throw new Error("Invalid response format");
      }

      set({
        jsonResult: data.response[0],
        id: data.id,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error:", error);
      set({
        isLoading: false,
      });
    }
  },
}));
