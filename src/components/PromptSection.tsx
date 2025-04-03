import { useFormStore } from "../store/useFormStore.ts";
import { ExamplePrompts } from "./ExamplePrompts.tsx";

export const PromptSection = () => {
  const { isLoading, generateForm, prompt, setPrompt } = useFormStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateForm();
  };

  return (
    <div className="flex-1">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="prompt"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Describe your form
            </label>

            <ExamplePrompts />

            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Example: Create a contact form with name, email, and message fields..."
            />
            <div className="mt-1 flex justify-between text-sm">
              <p className="text-gray-500">
                Be specific about fields, validations, and sections.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className={`flex-1 px-4 py-2 ${
                isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2`}
            >
              {isLoading ? "Generating..." : "Generate Form"}
            </button>

            <button
              type="button"
              onClick={() => setPrompt("")}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
