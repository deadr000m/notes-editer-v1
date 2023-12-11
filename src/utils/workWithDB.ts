import { openDB, IDBPDatabase, IDBPTransaction, deleteDB } from 'idb';
import { Dispatch } from 'redux';
import { useAppDispatch } from '../hooks/hooks';
import { setInitialState } from '../redux/slices/notesSlice';
import { configConsumerProps } from 'antd/es/config-provider';

const DB_NAME = 'reduxStateDB';
const STORE_NAME = 'reduxStateStore';

export const saveStateToIndexedDB = async (state: any) => {
  const jsonState = JSON.stringify(state);
  let db;
  try {
    db = await openDB(DB_NAME, 1, {
      //openDBзапрос на создание базы данных с имененим DB_NAME
      upgrade(db) {
        //обработчик событиея upgrade для запроаса openDB
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          console.log('object store создается');
          //тут проверяем, есть у нас в базе табличка(хранилище объектов) с имененм STORE_NAEM
          db.createObjectStore(STORE_NAME); //если таблицы(хранилища объектов) с таким имененм нету, то создаем
        }
      },
    });
  } catch (error) {
    console.log('Создание хранилища объектов' + error);
    throw error;
  }

  //   db.onerror = function (err) {
  //     console.log('catched err: ' + err);
  //   };

  const tx = db?.transaction(STORE_NAME, 'readwrite'); //создание транзакции, тут STORE_NAME - имя нашей таблички(хранилища объектов)
  const store = tx?.objectStore(STORE_NAME); //создается объект обертка для доступа к хранилищу объектов STORE_NAME через транзакцию tx
  await store?.put(jsonState, 'state'); //добавляем на сирализированный стэйт jsonState во 2ую колонку таблицы(хранилища объектов), а "state" добавляем в первую
  //если ключ "state" уже есть в таблице, то просто произойдет замена привязанного к нему значения из 2ой колонки
  await tx?.done; //ждем пока транзакция tx выполнится
  await db?.close();
};

export const loadStateFromIndexedDB = async (dispatch: Dispatch<any>) => {
  let jsonState;
  const db = await openDB(DB_NAME, 1);
  if (db.objectStoreNames.contains(STORE_NAME)) {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    jsonState = await store.get('state');
    await tx.done;
  }

  await db.close();
  await deleteDB(DB_NAME);

  if (jsonState) {
    const state = JSON.parse(jsonState as string);
    // Диспетчеризуйте действие Redux для установки восстановленного состояния
    dispatch(setInitialState(state));
  }
};
