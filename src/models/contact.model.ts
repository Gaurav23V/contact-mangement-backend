import mongoose, { Schema, Document } from "mongoose";
import { IContact } from "../interfaces/contact.interface";

export interface IContactDocument extends IContact, Document {}

const contactSchema = new Schema<IContactDocument>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    jobTitle: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = mongoose.model<IContactDocument>(
  "Contact",
  contactSchema
);
