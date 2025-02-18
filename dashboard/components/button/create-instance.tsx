"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/tremor";

const CreateInstanceButton = ({
  onCreateInstance,
  isCreating,
  ...props
}: React.ComponentProps<typeof PrimaryButton> & {
  onCreateInstance: () => void;
  isCreating: boolean;
}) => {
  const [loading, setLoading] = useState(isCreating);

  const createInstance = () => {
    fetch("/api/databases", { method: "POST" });
  };

  const onClick = () => {
    setLoading(true);
    createInstance();
    onCreateInstance();
  };

  return (
    <PrimaryButton size="xl" onClick={onClick} loading={loading} {...props}>
      Create Instance
    </PrimaryButton>
  );
};

export { CreateInstanceButton };
