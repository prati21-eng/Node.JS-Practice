function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mull(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}
module.exports={
    add,sub,mull,div
} //is used to export the function for importing in other modeule
                   //if we multiple module.export the previous one is override with new one
                   //so we can use object to exports multiple vaues or fuction

// //another method o exports the module

// exports.add=(a,b)=>a+b;
// exports.sub=(a,b)=>a-b;  //we can use multiple exports in this case