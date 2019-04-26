
/**
 * Export a string with salting or just only the string
 */
module.exports = function(string, times, saltString){
    var salt = "";

    if(times === 1){ // add salt string only to the front
        salt = saltString+string;
    }else if(times === 2){ // add salt string front and back
        salt = saltString+string+saltString;
    }else if(times === 3){ // add salt front,back with two times
        salt = saltString+saltString+string+saltString+saltString
    }else if(times === 0){ // salt method, return only the salt string
        salt = saltString
    }else{ // no salt method, return only the password string
        salt = string
    }

    return salt;
}