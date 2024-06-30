import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className="flex items-center gap-x-2 text-sm text-destructive bg-destructive/15 p-3 rounded-md">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
};
