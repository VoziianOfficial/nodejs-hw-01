import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    // Считываем существующие контакты из файла db.json
    const existingContacts = (await readContacts()) || [];

    // Генерируем новый контакт
    const newContact = createFakeContact();
    // Добавляем новый контакт к существующим
    const updatedContacts = [...existingContacts, newContact];

    // Записываем обновленный список контактов в файл
    await writeContacts(updatedContacts);
    console.log('Новый контакт успешно добавлен');
  } catch (error) {
    console.error('Ошибка при добавлении контакта:', error);
  }
};

addOneContact();
