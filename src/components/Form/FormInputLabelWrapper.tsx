export const FormInputLabelWrapper = ({
  label,
  input,
}: {
  label: React.ReactNode;
  input: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-start gap-0.5">
      {label}
      {input}
    </div>
  );
};
