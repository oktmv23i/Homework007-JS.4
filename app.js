//             1-masala 
//               loop
{
    function numbers(a, b){
        const result = [];
        for (let i = a; i < b; i++){
          if (i % 2 === 0) result.push(i);
        }
        return result;
      }
      console.log(numbers(3, 8));
}


//                  recursive 
{
    function recursive(a, b, result = []){
        if (a >= b) return result;
        if (a % 2 === 0) result.push(a);
        return recursive(a + 1, b, result);
      }
      console.log(recursive(3, 8));
}


//                 2-masala
//                   loop
{
    function array(a){
        const result = [];
        for (let i = 10; i < a; i += 10){
          result.push(i);
        }
        return result;
      }
      console.log(array(95)); 
}


//                    recursive 
{
    function recursive(a, current = 10, result = []){
        if (current >= a) return result;
        result.push(current);
        return recursive(a, current + 10, result);
      }
      console.log(recursive(95)); 
}


//                     3-masala
//                       loop
{
    function array(a){
        const result = [];
        for (let i = 1; i <= a; i++){
          result.push(i * i);
        }
        return result;
      }
      console.log(array(8)); 
}


//                    recursive 
{
    function recursive(a, current = 1, result = []){
        if (current > a) return result;
        result.push(current * current);
        return recursive(a, current + 1, result);
      }
      console.log(recursive(8));
}


//                     4-masala
{ 
  function number(num){
    return parseInt(String(num).split('').sort((a, b) => a - b).join(''));
  }
  console.log(number(239574681));
}


//                     5-masala
{
  function remove(str){
    return str.endsWith('?') ? str.slice(0, -1) : str;
}

console.log(remove("whats your name?"));
console.log(remove("hello world"));     
}


//                     6-masala
//                       loop
{
  function array(n, times = 8){
    let result = [];
    for (let i = 0; i < times; i++){
        result.push(n);
    }
    return result;
}

console.log(array(6));
}


//                    recursive 
{
  function recursive(n, times = 8, result = []){
    if (times === 0) return result;
    result.push(n);
    return recursive(n, times - 1, result);
}

console.log(recursive(6));
}


//                     7-masala
{
  function truthy(value){
    return !!value;
}

console.log(truthy(0));
console.log(truthy(null));   
console.log(truthy("salom")); 
}


