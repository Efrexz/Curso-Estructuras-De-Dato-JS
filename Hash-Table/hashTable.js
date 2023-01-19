class HashTable {
    constructor(size) {
      // Inicializar un nuevo arreglo con el tamaño especificado
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
      // Iterar sobre cada caracter de la llave esta parte no es necesario ya que la hash 
  //funtion hace todo esto para calcular el address
        for (let i = 0; i < key.length; i++) {
        // Sumar el valor ASCII del caracter multiplicado por su posición en la llave
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
      // Obtener el índice calculado para la llave
        const address = this.hashMethod(key);
      // Si en esa posición no hay ningún valor, crear una nueva casilla vacía
        if (!this.data[address]) {
        this.data[address] = [];
        }
      // Si ya existe ese address .agregamos la llave y el valor como un par al arreglo
        this.data[address].push([key, value]);
      // Devolver el arreglo completo
        return this.data;
    }
/*El método get se utiliza para obtener un valor dada una clave. Primero, se utiliza 
el método hashMethod para obtener la dirección en la tabla para esa clave. Luego, se
busca en el arreglo en esa celda para encontrar el valor asociado con la clave dada.
Si no se encuentra, se devuelve undefined.*/
get(key){
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket){
                for (let i = 0; i < currentBucket.length; i++) {
                    if(currentBucket[i][0] === key){
                        return currentBucket[i][1];
                    }
                }
            }else{
                return undefined;
            }
        }
        getAllKeys(){
            const allKeys = [];
            const allBuckets = Object.values(this.data);
            for (let index = 0; index < allBuckets.length; index++) {
                for (let indexInterior = 0; indexInterior < allBuckets[index].length; indexInterior++) {
                    allKeys.push(allBuckets[index][indexInterior][0]);
                }
            }
            return allKeys;
        }
/*El método delete se utiliza para eliminar un valor dada una clave. Primero, se
utiliza el método hashMethod para obtener la dirección en la tabla para esa clave.
Luego, se busca en el arreglo en esa celda para encontrar el valor asociado con la 
clave dada. Si se encuentra, se elimina ese valor de la tabla y se devuelve la tabla
actualizada. Si no se encuentra, se devuelve undefined.*/
delete(key){
            const address = this.hashMethod(key);
            const currentBucket = this.data[address];
            if(currentBucket){
                for (let i = 0; i < currentBucket.length; i++) {
                    if(currentBucket[i][0] === key){
                        delete this.data[i];
                        return this.data;
                    }
                }
            }else{
                return undefined;
            }
        }
    }

  // Instanciar un nuevo objeto de tabla hash con un tamaño de 50 casillas
const myHashTable = new HashTable(50);

myHashTable.set("Efrain", 1997);
        myHashTable.set("Isabel", 1966);
        myHashTable.set("Freddy", 1960);
        myHashTable.set("Diego", 1990);
        myHashTable.set("Mariana", 1998);