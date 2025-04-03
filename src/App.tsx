import { PromptSection } from "./components/PromptSection";
import { FormSchemaView } from "./components/FormSchemaView.tsx";
import { FormSchemaPlaceholder } from "./components/FormSchemaPlaceholder.tsx";
import { useFormStore } from "./store/useFormStore.ts";

const App = () => {
  const { jsonResult, id } = useFormStore();

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-8">
          Form Schema Generator
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <PromptSection />

          <div className="flex-1">
            {jsonResult && id ? <FormSchemaView /> : <FormSchemaPlaceholder />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
