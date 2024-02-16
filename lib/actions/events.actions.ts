"use server";

import { CreateEventParams } from "@/types";
import Event from "../database/models/event.model";
import User from "../database/models/user.model";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();
    const organizer = await User.findById(userId);
    if (!organizer) throw new Error("User not found");
    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    return JSON.parse(JSON.stringify(newEvent))

  } catch (error) {
    handleError(error);
  }
};
