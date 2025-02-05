interface FormField {
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface FormSchema {
  formTitle: string;
  fields: FormField[];
  submitButton: {
    text: string;
    color: string;
  };
}
