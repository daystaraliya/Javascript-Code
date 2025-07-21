# variables 
"let"- generalized keyword for all type of variable(like int,char,string etc)
# constants
"const" - definig constant
#Datatype
1. "Number" - range 2 raise 53
2. "bigint - 
3. String :"",''
4. boolean : true/false
5. null : standalone value/it's representation of empty value
6. undefined : non assigned variable/when you have not defined value of declared variable
7. symbol- uniqueness & immutable,used oftenly as a key of abject.It is created by caling symbol() function.Once it is created,it's value cannot be changed. for example
const s1 = symbol("123");
const s2 = symbol("123");
console.log(s1 === s2) //false

#conversion
into "Number" - Number(variable)
"33" -> 33
"true" -> 1, "false"->0

#memory
primitive(int,string,float etc) data types used stack memory(it sends copy of value )
Non-primitive(object,array,funtion) datatypes used heap memory(it send refrence of original value)

#String
In modern:use `` for string interpolation and ${} for variable to inject into string


#javascript Execution Context
javascript is single threaded
browser and node envireonment me execution is different

javascript run files in two phase
1. Global Execution Context : (koi v javascript ko code diya jata h, toh firstly global  execution context bnta h. And Global execution context located to the variable "this" and browser me this ki value "windows" aati h)
2. functional execution phase
3. eval execution context

js code run in two phase 
1. memory creation phase(sare variable se name store krke unme value "undefined" store kiya jata and function ke ander "definition" store kiya jata h ,then jo v variable ka value hota ho usko assign kiya jata h)
2. execution phase