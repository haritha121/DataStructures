function fact(n){
    /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
    if(n===0) return 1;
    if(n<0) return "Error";
    else return n*fact(n-1);
}
//Time Complexity-->O(n)
//Space Complexity-->O(n)
