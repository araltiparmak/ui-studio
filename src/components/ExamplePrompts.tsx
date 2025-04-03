import { useFormStore } from "../store/useFormStore.ts";

export const ExamplePrompts = () => {
  const { setPrompt } = useFormStore();

  const examples = [
    "Create a user registration form with personal info (name, email) and contact details (phone, address)",
    "Create a contact form with name, email, and message fields",
    // "Make a job application form with personal info, education, and experience sections",
    // "Build a product feedback form with rating, category, and comments"
  ];

  return (
    <div className="mb-2 flex flex-wrap gap-2">
      <span className="text-sm text-gray-500">Try examples:</span>
      {examples.map((example, i) => (
        <ExampleButton
          key={i}
          example={example}
          index={i}
          onClick={(example) => setPrompt(example)}
        />
      ))}
    </div>
  );
};
const ExampleButton = ({
  example,
  index,
  onClick,
}: {
  example: string;
  index: number;
  onClick: (val: string) => void;
}) => (
  <button
    type="button"
    onClick={() => onClick(example)}
    className="text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
  >
    Example {index + 1}
  </button>
);
