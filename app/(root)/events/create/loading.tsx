import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex-center w-full min-h-full">
      <Loader className="animate-spin text-primary" />
    </div>
  );
};

export default Loading;
