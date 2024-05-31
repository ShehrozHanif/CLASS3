// console.log("Hello Shehroz")
//console.log("hello again")
//let a = "Nosh"
//console.log(a);
//let mymessage = ("a")

//var b = "shoz"
//console.log(b)

//const c = 26
//console.log(c)

// let message : string = "sherri"
// message = 123
// console.log(message)

// let myName:string = "Shehroz"
// let age:number = 26;
// let isMarried:boolean = false
// console.log(myName)
// console.log(age)
// console.log(isMarried)

// let m1 = 9
// let m2 = 2;
// let r1 = (m1%m2);
// console.log(r1);

// let e1 = 3**2
// console.log(e1)
function findNextFab29(currentYear: number): number {
    while (true) {
      if (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0)) {
        // Leap year found, check if Feb 29 exists
        const isFeb29 = new Date(currentYear, 1, 29).getDate() === 29;
        
        if (isFeb29) {
          return currentYear;
        }
      }
  
      currentYear++;
    }
  }
  const fab29 = findNextFab29(2028)
  console.log(`the 29th feb is is ${fab29}`)
