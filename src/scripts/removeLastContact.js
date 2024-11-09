import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Нет контактов для удаления.');
      return;
    }
    // Удаление последннего контакта
    contacts.pop();

    // Записываем обновленный массив обратно в файл
    await writeContacts(contacts); // Запись обновленого массива
    console.log('Последний контакт успешно удален.');
  } catch (error) {
    console.error('Ошибка при удалении последнего контакта:', error);
  }
};

removeLastContact();
