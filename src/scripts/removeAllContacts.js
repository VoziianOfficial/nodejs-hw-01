import fs from 'node:fs/promises';
export const removeAllContacts = async () => {
  try {
    // Записываем пустой массив в файл db.json, что удалит все контакты
    await fs.writeFile('src/db/db.json', JSON.stringify([]), 'utf-8');
    console.log('Все контакты успешно удалены.');
  } catch (error) {
    console.error('Ошибка при удалении контактов:', error);
  }
};

removeAllContacts();
