import fs from 'node:fs/promises';
export const removeLastContact = async () => {
  try {
    // Читаем существующий массив контактов
    const data = await fs.readFile('src/db/db.json', 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('Нет контактов для удаления.');
      return;
    }

    // Удаление последннего контакта
    contacts.pop();

    // Записываем обновленный массив обратно в файл
    await fs.writeFile(
      'src/db/db.json',
      JSON.stringify(contacts, null, 2),
      'utf-8',
    );
    console.log('Последний контакт успешно удален.');
  } catch (error) {
    console.error('Ошибка при удалении последнего контакта:', error);
  }
};

removeLastContact();
