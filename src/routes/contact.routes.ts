import express from 'express';
import { contactController } from '../controllers/contact.controller';
import { contactValidators } from '../validators/contact.validator';
import { validate } from '../middleware/validate';

const router = express.Router();

router.post(
  '/contacts',
  contactValidators.create,
  validate,
  contactController.createContact
);

router.get('/contacts', contactController.getContacts);

router.put(
  '/contacts/:id',
  contactValidators.update,
  validate,
  contactController.updateContact
);

router.delete(
  '/contacts/:id',
  contactValidators.delete,
  validate,
  contactController.deleteContact
);

export default router;