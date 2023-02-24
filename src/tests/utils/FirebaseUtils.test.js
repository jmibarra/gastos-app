import { get, ref, remove, set } from "firebase/database";
import firebaseUtils from "../../utils/FirebaseUtils";
import { v4 as uuidv4 } from 'uuid';

const uniqueId = uuidv4();

beforeAll(async () => {

    // Agregamos algunos datos de prueba a la base de datos

    const formItem1 = { id: '1', motivo: 'Comida', monto: 100 }
    const formItem2 = { id: '2', motivo: 'Transporte', monto: 50 }

    firebaseUtils.peticionPost(formItem1,'TestUser'+uniqueId+"/testItemsGeneral/1900/2")
    firebaseUtils.peticionPost(formItem2,'TestUser'+uniqueId+"/testItemsGeneral/1900/2")
});

afterAll(async () => {
    // Agregamos algunos datos de prueba a la base de datos
    await remove(ref(firebaseUtils.database, 'TestUser'+uniqueId))
});

/****** TEST SOBRE EL METODO DE POST */
describe('Metodo Post', () => {
    test('Agregar elemento a la base de datos', async () => {
        // Crea un objeto para agregar a la base de datos
        const formItem = {
        motivo: 'Comida',
        monto: 150,
        fecha: '2023-02-20'
        };
  
        // Llama al método peticionPost para agregar el elemento a la base de datos
        await firebaseUtils.peticionPost(formItem,'TestUser'+uniqueId+"/gastos/1900/2")
    
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
        await firebaseUtils.peticionPost(formItem,'TestUser'+uniqueId+"/testManejoErrores/1900/2")
    
        // Obtiene los datos de la ubicación especificada en la base de datos
        const snapshot = await get(ref(firebaseUtils.database, 'TestUser'+uniqueId+'/testManejoErrores/1900/2'));
    
        // Verifica que los datos no existan en la base de datos
        expect(snapshot.exists()).toBe(false);

    });

})

  /****** TEST SOBRE EL METODO DE GET */
describe('Metodo Get', () => {
    test('debe obtener los gastos de febrero de 1900', async () => {
        // Llamamos al método peticionGet para obtener los datos de la base de datos
        
        const data = await firebaseUtils.peticionGet("TestUser"+uniqueId+"/testItemsGeneral/1900/2");

        // Verificamos que se devuelvan los datos esperados
        expect(Object.values(data)).toEqual([
            { id: '1', motivo: 'Comida', monto: 100 },
            { id: '2', motivo: 'Transporte', monto: 50 },
        ]);
    });
})

  /****** TEST SOBRE EL METODO DE PUT */

  /****** TEST SOBRE EL METODO DE DELETE */
// describe('Metodo Delete', () => {
//     /*
//     * Esta prueba crea un objeto de formulario, lo agrega a la base de datos con el método peticionPost, 
//     * obtiene el ID del objeto recién agregado y luego llama al método peticionDelete 
//     * para eliminar el objeto de la base de datos. Luego verifica que el objeto ya no esté en la base de datos 
//     * llamando al método peticionGet.
//     */

//     describe('peticionDelete', () => {
//         it('elimina un elemento de la base de datos', async () => {
//             // Crea un objeto de formulario para usar en las pruebas
//             const formItem = { id: '1', motivo: 'Comida', monto: 100 };
        
//             // Agrega el objeto de formulario a la base de datos
//             const año = 1900;
//             const mes = 2;
//             const tipo = 'testDelete';
//             const pushRef = firebaseUtils.peticionPost(formItem, año, mes, tipo, uniqueId);
//             const pushSnapshot = await pushRef;
            
//             console.log(pushSnapshot)
//             // Obtiene el ID del objeto recién agregado
//             const id = pushSnapshot;
        
//             // Elimina el objeto de la base de datos
//             const removeRef = firebaseUtils.peticionDelete(formItem, año, mes, tipo, id, uniqueId);
//             await expect(removeRef).resolves.toEqual(undefined);
        
//             // Verifica que el objeto ya no esté en la base de datos
//             const getSnapshot = firebaseUtils.peticionGet(año, mes, tipo, uniqueId); //Reemplazar por nuevo llamado
//             expect(getSnapshot).toEqual({});
//         });
//     });
// })