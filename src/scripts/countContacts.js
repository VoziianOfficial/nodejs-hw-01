import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = (await readContacts()) || [];

    const contactCount = contacts.length;
    console.log('Количество контактов:', contactCount);
    return contactCount;
  } catch (error) {
    console.error('Ошибка при получении контактов:', error);
    return 0;
  }
};

console.log(await countContacts());
