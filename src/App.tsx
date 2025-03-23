import React, { useState } from "react";
import { FormSchema } from "./types.ts";
import { JSONViewer } from "./components/JSONViewer.tsx";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [jsonResult, setJsonResult] = useState<FormSchema>();
  const [id, setId] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://dlmx7yo7g5.execute-api.eu-central-1.amazonaws.com/dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        },
      );

      const data = await response.json();

      const formJson = data.response[0];

      setJsonResult(formJson);
      setId(data.id);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Form Schema Generator
        </h1>

        <div className="flex gap-8">
          {/* Prompt Input Section - Left Side */}
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
                  <textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Example: Create a contact form with name, email, and message fields..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !prompt.trim()}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Generating..." : "Generate Form"}
                </button>
              </form>
            </div>
          </div>

          {/* JSON Result Section - Right Side */}
          <div className="flex-1">
            {jsonResult ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Generated Form Schema
                </h2>
                <JSONViewer data={jsonResult} />
                <div className="mt-4">
                  {/*@ts-ignore*/}
                  <a href={`http://dynamic-ui-generator.s3-website.eu-central-1.amazonaws.com/?formId=${encodeURIComponent(id)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Preview Form
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6 h-full flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Generated form schema will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
