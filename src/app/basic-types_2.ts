const BasicTypes_2 = () => {
  // Array type
  const list: number[] = [1,2,3,4,5]
  // Array type Generic
  const listGeneric: Array<number> = [1,2,3,4,5]

  // Tuple type
  const tuple: [string, number] = ['str', 10]

  // Any Type
  // Any type for array
  let y: [any, any] = ["buy", 42];
  let z: Array<any> = [10, "hello"];

  // Any type for string
  let notSure: any = false;

  // Issue case (no error)
  notSure = true;		// boolean
  notSure = 42;		// number
  notSure = "hello";	// string

  // Enum Type
  enum Directions {
    Up,
    Down,
    Left,
    Right
  }

  Directions.Up;      // 0
  Directions.Down;    // 1
  Directions.Left;    // 2
  Directions.Right;   // 3

// Custom index for enum elements
  enum Direct {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
  }

  Direct.Up;      // 2
  Direct.Down;    // 4
  Direct.Left;    // 6
  Direct.Right;   // 7

  // Never Type
  // Function return Error
  const msg = "hello";
  const error = (msg: string): never => {
    throw new Error(msg);
  };

  // Function infinite loop
  const infiniteLoop = (): never => {
    while (true) {
    }
  };

  // Object Type
  const create = (o: object | null): void => { };

  // create(1);		// Argument of type '1' is not assignable to parameter of type 'object | null'
  // create('42');	// Argument of type '"42"' is not assignable to parameter of type 'object | null'
  create({ obj: 1 });

  // Multiple types for one value
  let id: number | string;

  id = 10;	// number is valid
  id = '42';	// string is valid
  // id = true;	// Type 'true' is not assignable to type 'string | number'

  // Type
  type Name = string;	// Custom type creation

  let name: Name = 'Сергей';	// Apply custom type

  name = "42";	// No error, because type of "42" is a string
  // name = 10;	// Type '10' is not assignable to type 'string'
}

export default BasicTypes_2
