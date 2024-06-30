import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  return (
    <div className="flex items-center gap-x-2 text-sm text-destructive text-emerald-500 bg-emerald-500/15 p-3 rounded-md">
      <CheckCircledIcon className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
};
