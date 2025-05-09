// string - Combination of characters - this, chracters

/*
1. SingleQuote ('') - String literal
2. DoubleQuote ("") - String literal
3. backtick (``) -  Template literal
*/

let singleQuote1 : string= 'JavaScript'
let doubleQuote2 : string = "JavaScript"

let backtick1 : string = `JavaScript`

let age1 = 10 // ${age}

let info1 = `You are of age ${age1}`
console.log(info1);

console.log("*******************************************")

// 1. length - Return the number of characters that are available in a string
// Syntax:
// stringName.length
let str1 = "Hello World!" // 0 - 11
console.log(str1.length);

// 2.chartAt(index) - It retunr the character at the specified index
// SYntax:
// stringName.chartAt(index)
console.log(str1.charAt(0))

let str2 : string[]= [] 
for(let i =0; i<str1.length; i++){
    str2.push(str1.charAt(i))
}
console.log(str2);


// 3. concat(str1, str2,.....) - Joins 2 or more string and return a new string
// Syntax
// stringName.concat(str1,.....)\
console.log(str1.concat(" ", "Javascript", " TS"));
console.log(str1);

// 4. includes(SearchString, position) - 
// Syntax
// StringName.includes(searchString, position)
console.log(str1.includes("World"));

// 5. startsWith(searchString, pos?) - Checks if a string starts with the specified char or string
// Syntax
// StringName.startWith(searchString, position)
//let str1 = "Hello World!" // 0 - 11
console.log(str1.startsWith('l', 2));
console.log(str1.startsWith('World'));

// 6. endsWith(searchString, pos?) - Checks if a string ends with the specified char or string

// 7. indexOf(element) - Return the index of an first occurances of specified value
// stringnName.indexOf(string or character)

// 8. lastIndexOf() -- array

// 9 . replace(oldString, newString)
// Syntax:
// StringName.replace(oldString, newString)

let str3 = "This is a string"
console.log(str3.replace('s', 'a'));
console.log(str3.replaceAll('is', 'a'));

// 10. slice(startIndex?, endIndex?) - Returns the portion of an string
// startIndex - The position where you want to start the slice
// end index (exclusive) - The position where you want to end the slice
// Syntax:
// stringName.slice(startIndex, endIndex)
console.log(str3.slice());

console.log(str3.slice(9, 3));

// 11. substring(startIndex, endIndex?)
// startIndex - The position where you want to start the slice
// end index (exclusive) - The position where you want to end the slice
// Syntax:
// stringName.substring(startIndex, endIndex)
console.log(str3.substring(3));
console.log(str3.substring(7, 3));

// 12. toLowerCase() - Converts all the characters to lowercase letter
// Syntax
// StringName.toLowerCase()
console.log(str3);
console.log(str3.toLowerCase());

// 13. toUpperCase() - Converts all the characters to uppercase letter
// Syntax
// StringName.toUpperCase()
console.log(str3.toUpperCase());

// 14. trim() - Removes the whitespace from beginning and the end of a string
// Syntax
// stringName.trim()
let str4 = "    This is a string4    " 
console.log(str4.length);
console.log(str4.trim().length);

// 15. trimStart()
console.log(str4.trimStart().length);

// 15. trimEnd()
console.log(str4.trimEnd().length);











