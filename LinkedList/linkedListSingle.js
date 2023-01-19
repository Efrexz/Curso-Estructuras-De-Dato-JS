1-- > 2-- > 3-- > 4-- > 5-- > null;

/*
let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    // creamos el inicio de nuestro SinglyLinkedList
    this.head = {
      value,
      next: null,
    };

    // Todo lo que modifiquemos en los atributos de tail
    // se modificará en la estructura inicial por la REFENCIA!
    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    // aquí estamos creando un nuevo nodo instancia de la clase Node
    const newNode = new Node(value);

    // Como mencionamos anteriormente si modificamos la cola por la REFERENCIA se modificará la estructura inicial!

    this.tail.next = newNode;

    // Pero aun tail sigue apuntando a la CABEZA de la estructura inicial entonces es momento de apuntar al nuevo nodo creado para que posteriormente podamos agregar más nodos! 

    this.tail = newNode;
    // Finalmente aumentamos el tamaño definido de nuestra estructura 👨‍🔧
    this.length++;

    return this;
  }
  prepend(value){
    const newNode = new Node(value);
    const nodeAnterior = this.head;

    this.head = newNode;
    this.head.next = nodeAnterior;
    this.length++;

    return this;
  };
  //este metodo es para poder agregar un nodo intermedio
  insert(index,value){
    //SI el index que mandamos es mayor a nuestro length. lo mandamos al final normal
    if(index >= this.length){
      console.log("no hay suficientes nodo y se agregara al final");
      return this.append(value);
    }

    const newNode = new Node(value);
    //con prenode buscamos el node que viene antes del cual ingresaremos
    const preNode = this.getIndexNode(index - 1);
    //en holdingNode lo usamos para almacenar el valor ya que si no el garbage colector lo eliminara. lo mantenemos para luego volverlo a ingresar en el next de nuestro nuevo node
    const holdingNode = preNode.next;
    //añadimos al next del node anterior nuestro nuevo node
    preNode.next = newNode;
    //añadimos al next de nuestro nuevo node el valor que existia antes y holdeamos para que no se lo eliminara el garbage
    newNode.next = holdingNode;

    this.length++;

    return this;
  }

// Nos permite obtener un nodo a partir de un index
  getIndexNode(index){
    let counter = 0;
    //nuestro nodo actual inicial es nuestro head ya que este siempre sera el inicial para empezar a recorrer nuestra lista por orden
    let currentNode = this.head;

    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    //devolvemos el valor
    return currentNode;
  }
  
  // Nos permite eliminar un nodo de la lista
  remove(index) {
    const firstPointer = this.getIndexNode(index - 1);
    const nextPointer = this.getIndexNode(index + 1);

    firstPointer.next = nextPointer;
    this.length -= 1;

    return this;
  }
};


let myLinkedList = new MySinglyLinkedList(1);

myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(50);
