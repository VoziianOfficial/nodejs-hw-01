import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Ошибка при получении контактов:', error);
    return []; //пустой массив если ошибка
  }
};

console.log(await getAllContacts());
