//                    Codewars
//                   1-masala


// Description:
// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.


{
    function nthEven(n){
        return (n - 1) * 2;
    }
    
    console.log(nthEven(1)); 
    console.log(nthEven(3));     
    console.log(nthEven(100));   
    console.log(nthEven(1298734)); 
}


//                      2-masala


// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"


{
    function whatday(num){
        const weekdays = [
            "Sunday", 
            "Monday",  
            "Tuesday", 
            "Wednesday", 
            "Thursday",  
            "Friday",   
            "Saturday" 
        ];
    
        if (num >= 1 && num <= 7){
            return weekdays[num - 1];
        } else {
            return "Wrong, please enter a number between 1 and 7";
        }
    }
    
    console.log(whatday(1));
    console.log(whatday(4));
    console.log(whatday(7)); 
    console.log(whatday(0)); 
    console.log(whatday(8));
}


//                      2-masala


// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


{
    function getCount(str){
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        return str.split('').filter(char => vowels.includes(char)).length;
    }
    
    console.log(getCount("hello world"));
    console.log(getCount("abracadabra"));
    console.log(getCount("javascript is fun"));
    console.log(getCount(""));
}


//                      3-masala


// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


{
    function filter_list(arr){
        return arr.filter(item => typeof item === 'number');
    }
    
    console.log(filter_list([1, 2, 'a', 'b']));
    console.log(filter_list([1, 'a', 'b', 0, 15]));
    console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); 
}


//                      4-masala


// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.


{
    function booleanToString(b){
        return b.toString();
    }
    
    console.log(booleanToString(true)); 
    console.log(booleanToString(false)); 
}
