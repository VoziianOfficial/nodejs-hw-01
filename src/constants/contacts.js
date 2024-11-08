import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // Получаем абсолютный путь к файлу
const __dirname = path.dirname(__filename); // Получаем абсолютный путь к директории

export const PATH_DB = path.join(__dirname, '../db/db.json');
