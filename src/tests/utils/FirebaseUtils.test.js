import { get, ref, remove, set } from "firebase/database";
import firebaseUtils from "../../utils/FirebaseUtils";
import { v4 as uuidv4 } from 'uuid';

const uniqueId = uuidv4();

beforeAll(async () => {

    // Agregamos algunos datos de prueba a la base de datos

    const formItem1 = { id: '1', motivo: 'Comida', monto: 100 }
    const formItem2 = { id: '2', motivo: 'Transporte', monto: 50 }

    await firebaseUtils.peticionPost(formItem1, 1900, 2, 'gastos', 'TestUser'+uniqueId);
    await firebaseUtils.peticionPost(formItem2, 1900, 2, 'gastos', 'TestUser'+uniqueId);
});

afterAll(async () => {
    // Agregamos algunos datos de prueba a la base de datos
    await remove(ref(firebaseUtils.database, 'TestUser'+uniqueId))
});


test('Agregar elemento a la base de datos', async () => {
    // Crea un objeto para agregar a la base de datos
    const formItem = {
      motivo: 'Comida',
      monto: 150,
      fecha: '2023-02-20'
    };
  
    // Llama al método peticionPost para agregar el elemento a la base de datos
    await firebaseUtils.peticionPost(formItem, 1900, 2, 'gastos', 'TestUser'+uniqueId);
  
    // Obtiene los datos de la ubicación especificada en la base de datos
    const snapshot = await get(ref(firebaseUtils.database, 'TestUser'+uniqueId+'/gastos/1900/2'));
  
    // Verifica que los datos existan en la base de datos
    expect(snapshot.exists()).toBe(true);

  });

  test('Manejo de errores al agregar elemento a la base de datos', async () => {
    // Crea un objeto inválido para agregar a la base de datos
    const formItem = {
      motivo: '',
      monto: 150,
      fecha: '2023-02-20'
    };

    // Llama al método peticionPost para agregar el elemento a la base de datos
    await firebaseUtils.peticionPost(formItem, 1900, 2, 'testManejoErrores', 'TestUser'+uniqueId);
  
    // Obtiene los datos de la ubicación especificada en la base de datos
    const snapshot = await get(ref(firebaseUtils.database, 'TestUser'+uniqueId+'/testManejoErrores/1900/2'));
  
    // Verifica que los datos no existan en la base de datos
    expect(snapshot.exists()).toBe(false);

  });

  test('debe obtener los gastos de febrero de 1900', async () => {
  
    // Llamamos al método peticionGet para obtener los datos de la base de datos
    const data = await firebaseUtils.peticionGet('1900', '2', 'gastos', 'TestUser'+uniqueId);
  
    // Verificamos que se devuelvan los datos esperados
    expect(data).toEqual([
      { id: '1', motivo: 'Comida', monto: 100 },
      { id: '2', motivo: 'Transporte', monto: 50 },
    ]);
  });