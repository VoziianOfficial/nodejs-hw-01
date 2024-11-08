import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    // Чтение содержимого файла db.json
    const data = await fs.readFile('src/db/db.json', 'utf-8');

    // Парсим JSON-строку в JavaScript объект
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Ошибка при получении контактов:', error);
    return []; //пустой массив если ошибка
  }
};

console.log(await getAllContacts());
