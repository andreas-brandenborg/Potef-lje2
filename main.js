const grades = [85, 92, 78, 63, 95, 88, 72, 54]
console.log(`There are ${grades.length} grades in the class`)

console.log("Grades:")
for (let grade of grades) {
    if (grade > 89) {
        console.log(`${grade}:A`)
    }  else if (grade > 79) {
        console.log(`${grade}:B`)
    }  else if (grade > 69) {
        console.log(`${grade}:C`)
    }  else if (grade > 59) {
        console.log(`${grade}:D`)
    }  else if (grade < 60) {
        console.log(`${grade}:F`)
    }
}
let sum = 0
for (let i = 0; i < grades.length; i++) {
    sum = grades[i] + sum
}
let AverageGrade = sum/grades.length
if (AverageGrade>89) {
    console.log("Overall class performance: Excellent")
}   else if (AverageGrade>79) {
    console.log("Overall class performance: Good")
}   else if (AverageGrade>69) {
    console.log("Overall class performance: Satisfactory")
}   else if (AverageGrade<70) {
    console.log("Overall class performance: Needs Improvement")
}

const maxGrades = Math.max(...grades)
if (maxGrades > 89) {
    console.log(`Highest grade: ${maxGrades} (A)`)
}  else if (maxGrades > 79) {
    console.log(`Highest grade: ${maxGrades} (B)`)
}  else if (maxGrades > 69) {
    console.log(`Highest grade: ${maxGrades} (C)`)
}  else if (maxGrades > 59) {
    console.log(`Highest grade: ${maxGrades} (D)`)
}  else if (maxGrades < 60) {
    console.log(`Highest grade: ${maxGrades} (F)`)
}

const lowestGrade = Math.min(...grades)
if (lowestGrade > 89) {
    console.log(`Lowest grade: ${lowestGrade} (A)`)
}  else if (lowestGrade > 79) {
    console.log(`Lowest grade: ${lowestGrade} (B)`)
}  else if (lowestGrade > 69) {
    console.log(`Lowest grade: ${lowestGrade} (C)`)
}  else if (lowestGrade > 59) {
    console.log(`Lowest grade: ${lowestGrade} (D)`)
}  else if (lowestGrade < 60) {
    console.log(`Lowest grade: ${lowestGrade} (F)`)
}

console.log(`Average Grade: ${AverageGrade}`)

//Treasure Hunter
console.log(" ")
console.log("//Treasure Hunter//")

let island = ['-', 'T', 'T', '-'];

let treasuresFound = 0

console.log(`There are ${island.length} moves in this island`)
for (let i = 0; i < island.length; i++) {
    if (island[i] === "T") {
        console.log(`Treasure found at move ${i + 1} :)`)
        treasuresFound ++
    } else {
        console.log("No treasure found :(")
    }
}
console.log(`There were ${treasuresFound} treasure found in the island `)


//Startup name generator
console.log(" ")
console.log("//Startup name Generator//")
function getStartupName() {
    const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
    const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];
    randomFirstName = firstWords[Math.floor(Math.random()*firstWords.length)]
    randomSecondName = secondWords[Math.floor(Math.random()*secondWords.length)]
    return `${randomFirstName} ${randomSecondName}`

}
console.log(getStartupName())
