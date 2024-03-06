import { IEvent } from "@/lib/database/models/event.model";
import Link from "next/link";

type CardProps = {
  hasOrderLink?: boolean;
  hidePrice?: boolean;
  event: IEvent;
};

const Card = ({ hasOrderLink, hidePrice, event }: CardProps) => {
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden  rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-400"
      ></Link>
    </div>
  );
};

export default Card;
