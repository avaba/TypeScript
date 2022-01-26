const Skillbox = () => {
  // 1. Напишите тип функции, конкатенирующей две строки

  const concat = (first: string, second: string): string => `${first} ${second}`

  console.log(concat('Hello', 'World'))

  // 2. Напишите интерфейс для описания следующих данных
  //
  // const MyHomeTask = {
  //   howIDoIt: "I Do It Wel",
  //   simeArray: ["string one", "string two", 42],
  //   withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
  // }

  interface HomeTask {
    howIDoIt: string,
    simeArray: [string, string, number],
    withData: [{howIDoIt: string, simeArray: [string, number]}]
  }

  const MyHomeTask: HomeTask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
  }

}

export default Skillbox
