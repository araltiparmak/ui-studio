import { ExternalLink } from "lucide-react";

export const OpenLiveForm = ({ id }: { id: string }) => {
  return (
    <a
      href={`https://formsmith.araltiparmak.com/forms/${encodeURIComponent(id ?? "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 my-1 mr-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center gap-1"
    >
      <ExternalLink size={16} />
      Open Live Form
    </a>
  );
};
