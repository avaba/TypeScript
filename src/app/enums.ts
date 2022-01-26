const Enums = () => {
// Simple example of enum type
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

  // Reverse enum
  enum Direct {
    Up,
    Down,
    Left,
    Right
  }

  Direct[0]	// "Up"
  Direct[1]	// "Down"
  Direct[2]	// "Left"
  Direct[3]	// "Right"

  // Custom index for enum elements
  enum Custom {
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8
  }

  Custom.Up;	// 2
  Custom.Down;	// 4
  Custom[6];	// Left
  Custom[8];	// Right

  // Custom name for keys
  enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
  }

  // Using
  links.vk        // "https://vk.com/"
  links.youtube 	// "https://youtube.com/"
}

export default Enums
