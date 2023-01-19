//imitando un array en clases 

class MyArray {
    constructor(){
        this.length = 0;// Longitud inicial del array
        this.data = {};// Acá vamos a estar agregando los elementos del array
      
    };
	// Este método nos va a servir para obtener un elemento del array
      // Recibe por parámetro el índice al cual queremos acceder
    get(index){
        return this.data[index];
    };
	// Para hacer crecer nuestro array
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    };
	// Método para eliminar el último elemento del arreglo
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    //este metodo es para eliminar el indice que le mandemos y actualice el orden de
// sus indices

    delete(index){
        const itemEliminado = this.data[index];
        delete this.data[index];
        this.shiftIndex(index);
        this.length--;
        return itemEliminado;
    }
    shiftIndex(index){
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        };
        delete this.data[this.length - 1]
    }
		//Este metodo agrega un elemento al principio del arreglo
    unshift(item){

        for (let i = this.length; i > 0; i--) {
        //recorre el arreglo desde el ultimo elemento hasta el primero
            this.data[i] = this.data[i-1];
        }
        //asigna el nuevo elemento en la posicion 0
        this.data[0] = item;
        this.length++;
    }
}

const array1 = new MyArray();

array1.push("carolina");
array1.push("oswaldo");
array1.push("alfredo");
array1.push("maduro");
array1.push("isabel");
array1.push("efrain");
array1.push("carlos");


array1.delete(3);

/* Este código define una clase llamada "MyArray" que simula el comportamiento de un 
arreglo en JavaScript. La clase tiene varios métodos como "get", "push", "pop", 
"delete" y "shiftIndex" que permiten interactuar con el arreglo de una manera similar
 a como se haría con un arreglo nativo en JavaScript.

    El método "constructor" inicializa la longitud del arreglo en cero y crea un
 objeto vacío llamado "data" que es donde se almacenarán los elementos del arreglo.

    El método "get" devuelve el elemento en una posición específica del arreglo.

    El método "push" agrega un elemento al final del arreglo y aumenta el valor de 
   la longitud del arreglo en uno.

    El método "pop" elimina el último elemento del arreglo, reduce la longitud del
		 arreglo en uno y devuelve el elemento eliminado.

    El método "delete" elimina un elemento en una posición específica del arreglo, 
llama a un método "shiftIndex" para reordenar los índices del arreglo y reduce la 
longitud del arreglo en uno y devuelve el elemento eliminado.

    El método "shiftIndex" recorre los elementos del arreglo desde un índice 
específico hasta el final del arreglo, reordenando los índices para que queden
 consecutivos.

    Finalmente, se crea una instancia del MyArray y se agrega varios elementos al
 mismo y se elimina el elemento en el indice 3.*/