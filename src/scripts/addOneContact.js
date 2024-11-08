import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = (await readContacts()) || [];

    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];

    await writeContacts(updatedContacts);
    console.log('Новый контакт успешно добавлен');
  } catch (error) {
    console.error('Ошибка при добавлении контакта:', error);
  }
};

addOneContact();
