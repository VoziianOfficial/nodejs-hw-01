import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]); // Записываем пустой массив, чтобы удалить все контакты
    console.log('Все контакты успешно удалены.');
  } catch (error) {
    console.error('Ошибка при удалении контактов:', error);
  }
};

removeAllContacts();
