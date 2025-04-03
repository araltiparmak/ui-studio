import { JSONViewer } from "./JSONViewer.tsx";
import { OpenLiveForm } from "./OpenLiveForm.tsx";
import { useFormStore } from "../store/useFormStore.ts";

export const FormSchemaView = () => {
  const { jsonResult, id } = useFormStore();

  if (!jsonResult || !id) {
    return null;
  }
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Generated Form Schema
        </h2>
        <OpenLiveForm id={id} />
      </div>
      <JSONViewer data={jsonResult} />
    </div>
  );
};
