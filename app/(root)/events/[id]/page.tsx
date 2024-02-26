import { getEventById } from "@/lib/actions/events.actions";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

const EventDetail = async ({ params: { id } }: SearchParamProps) => {
  const {userId} = auth();
  const event = await getEventById(id);
  if(!event) return null;
  if(event.organizer !== userId) return redirect('/');

  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={event.imageUrl}
          alt="Image Event"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"	
        />
        <div className="flex flex-col gap-8 justify-center p-5 md:p-10">
          <div className="flex flex-col gap-6">
          <h2 className="h2-bold">{event.title}</h2>

          </div>
          
        </div> 
      </div>
    </section>
  );
};

export default EventDetail;
