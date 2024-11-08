import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    //читаем чуществующие контакти с файла
    const existingContacts = (await readContacts()) || [];

    //генерируем новые контакты
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    //доб новые к существующим
    const updateContacts = [...existingContacts, ...newContacts];

    //записываем обновленный список контактов в файл
    await writeContacts(updateContacts);

    console.log(`Успішно додано ${number} нових контактів`);
  } catch (error) {
    console.error('Помилка генерації контактів:', error);
  }
};

generateContacts(5);
