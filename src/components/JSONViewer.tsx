import { FormSchema } from "../types";

export const JSONViewer = ({ data }: { data: FormSchema }) => {
  const formatJSON = (obj: string) => {
    try {
      return JSON.stringify(obj, null, 2);
    } catch (error) {
      return "Invalid JSON" + error;
    }
  };
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <pre className="font-mono text-sm overflow-x-auto whitespace-pre">
        <code className="text-gray-800">
          {formatJSON(data as unknown as string)}
        </code>
      </pre>
    </div>
  );
};
