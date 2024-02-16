import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

const dbPromise = initdb();

export const putDb = async (content) => {
  try {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  await store.add(content);
  } catch {
    console.error('putDb not implemented');
  }
};

export const getDb = async () => {
  try {
  const db = await dbPromise;
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  return store.getAll();
  } catch{
    cconsole.error('getDb not implemented');
  }
}

export default initdb();
