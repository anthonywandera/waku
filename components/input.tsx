interface InputComponentProps extends React.ComponentProps<"input"> {
  name: string;
  label: string;
}

export default function Input({ name, label, className, ...props }: InputComponentProps) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <input
        id={name}
        name={name}
        {...props}
        className={
          "border border-border px-2 py-1 rounded-lg outline-none text-muted " + className
        }
      />
    </div>
  );
}