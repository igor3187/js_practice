let re;
//literal characters
re = /hello/;
re = /hello/i;

//metacharacters symbols
re = /^h/i; //must start with
re = / world$/i; //must ends with
re = /^hello$/i; //must begin and end with
re = /^h.llo$/i; //matches any one character
re = /^h*llo$/i; //any character zero or more times
re = /gre?a?y/i; //optional character
re = /gre?a?y\?/i; //escape character

//brackets [] - character sets
re = /gr[ae]y/i; //must by an a or b
re = /[GF]ray/; //must by  a G or F
re = /[^GF]ray/; //match anything except a G or F
re = /^[GF]ray/; //match only a G or F
re = /[A-Z]ray/; //match any uppercase letter
re = /[a-z]ray/; //match any lowercase letter
re = /[A-Za-z]ray/; //match any letter
re = /[0-9]ray/; //match any digit
re = /[0-9][0-9]ray/; //match any digit

//braces {} - quantifiers
re = /Hel{2}o/i; //must occur exactly {m} amount of times
re = /Hel{2,4}o/i; //must occur exactly {m} amount of times
re = /Hel{2,}o/i; //must occur at least {m} times

//parentheses () - grouping
re = /([0-9]x){3}/;

//shorthand character classes
re = /\w/; //all word character - alphanumeric or _
re = /\w+/; //+ = one or more
re = /\W/; //non word characters
re = /\d/; //match any digit
re = /\d+/; //match any digit 0 or more tomes
re = /\D/; //match any non-digit
re = /\s/; //match whitespace character
re = /\S/; //match non-whitespace character
re = /Hell\b/i; //word boundary

//assertions
re = /x(?=y)/; //match x only if follow by y
re = /x(?!y)/; //match x only if not follow by y

//string to match
const str = '3x6c6n88,';


//log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not matches ${re.source}`);
    }
}

reTest(re, str);
