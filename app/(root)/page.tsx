import Collection from "@/components/shared/Collection";
import MotionSection from "@/components/shared/animated/MotionSection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/events.actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const events = await getAllEvents({
    query: "",
    limit: 4,
    page: 1,
    category: "",
  });
  return (
    <>
      <MotionSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ delay: 0.5 }}
        className=" py-5 md:py-10"
      >
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold dark:text-white">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24 dark:text-gray-400">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button
              size="lg"
              asChild
              className="button w-full font-semibold sm:w-fit"
            >
              <Link href="#events" className="dark:text-white font-semibold">
                Explore Now
              </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/images/hero.png"
              alt="Hero Image"
              width={1000}
              height={1000}
              className="object-contain max-h-[70vh] 2xl:max-h-[50vh] object-center"
            />
          </div>
        </div>
      </MotionSection>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold dark:text-white">
          Trust by <br /> Thousands of Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          {/* <Search />
          <CategoryFilter /> */}
          <Collection
            data={events?.data || []}
            emptyTitle="No events found"
            emptyStateSubtext="Check back later for more events"
            collectionType="All_Events"
            limit={6}
            page={1}
            totalPages={1}
          />
        </div>
      </section>
    </>
  );
}
