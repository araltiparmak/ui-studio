type FieldType =
  | "text"
  | "email"
  | "number"
  | "select"
  | "checkbox"
  | "radio"
  | "textarea";

interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder: string;
  required: boolean;
}

interface FormSection {
  id: string;
  label: string;
  fields: FormField[];
}

export interface FormSchema {
  id: string;
  title: string;
  sections: FormSection[];
  submitUrl: string;
  submitButton: {
    text: string;
    color: string;
  };
}
