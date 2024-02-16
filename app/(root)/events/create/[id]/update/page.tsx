import EventForm from "@/components/shared/EventForm";
import { useAuth } from "@clerk/nextjs";

const UpdateEvent = () => {
  const { userId } = useAuth();
  if (!userId) return null;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update a Event
        </h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Edit" />
      </div>
    </>
  );
};

export default UpdateEvent;
