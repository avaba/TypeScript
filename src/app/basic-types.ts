const BasicTypes = () => {
  // Типы в Javascript
  /*
  * number - числа
  * string - строки
  * boolean - правда/ложь
  * object - объекты
  * null - ничего нет
  * undefined - значение не присвоено
  * symbol - служит для создания уникальных идентификаторов
  * */

  // Определение типов с помощью оператора typeof
  typeof 42;          // "number"
  typeof 'str';       // "string"
  typeof true;        // "boolean"
  typeof [];          // "object"
  typeof {};          // "object"
  typeof null;        // "object"
  typeof undefined;   // "undefined"
  typeof Symbol();    // "symbol"

  // Boolean Type
  let isCompleted: boolean = false;
  // isCompleted = 42    // Type 'number' is not assignable to type 'boolean'.
  // isCompleted = '42'  // Type 'string' is not assignable to type 'boolean'.
  isCompleted = true

  // Number Type
  const decimal: number = 6;
  const integer: number = 7.10;
  const hex: number = 0xf00d;
  const binary: number = 0b1010;
  const octal: number = 0o744;

  // String Type for simple string
  const name: string = 'Sergey';

  // String Type for template string
  const sentence: string = `Hello, my name is ${name}!`;

  // Null & Undefined Types
  // JavaScript:
  typeof null;		// "object"
  typeof undefined;	// "undefined"

  // TypeScript types:
  const u: undefined = undefined;
  const n: null = null;

  // Void Type
  // For function result:
  const greetUser = (): void => {
    alert("Hello, nice to see you!");
  };

  // For 'greetUser'
  // Error: Type '() => void' is not assignable to type 'void'
  // const greetUser: void = () => {
  //   alert("Hello, nice to see you!");
  // };
}

export default BasicTypes
