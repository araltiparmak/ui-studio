// eslint-disable-next-line
export const JSONViewer = ({ data }: { data: any }) => {
  // eslint-disable-next-line
  const formatJSON = (obj: any) => {
    try {
      return JSON.stringify(obj, null, 2);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return "Invalid JSON";
    }
  };
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      <pre className="font-mono text-sm overflow-x-auto whitespace-pre">
        <code className="text-gray-800">{formatJSON(data)}</code>
      </pre>
    </div>
  );
};
