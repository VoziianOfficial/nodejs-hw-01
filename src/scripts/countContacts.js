import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile('src/db/db.json', 'utf-8');
    const contacts = JSON.parse(data);

    const contactCount = contacts.length;
    console.log('Количество контактов:', contactCount);
    return contacts;
  } catch (error) {
    console.error('Ошибка при получении контактов:', error);
    return [];
  }
};

console.log(await countContacts());
