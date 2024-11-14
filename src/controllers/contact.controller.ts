import { Request, Response, NextFunction } from 'express';
import { Contact } from '../models/contact.model';

// Create a new contact
export const createContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

// Get all contacts
export const getContacts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// Update a contact
export const updateContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
      return;
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

// Delete a contact
export const deleteContact = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.status(404).json({ message: 'Contact not found' });
      return;
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Export the controller
export const contactController = {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};