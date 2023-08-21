//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


function doubleChar(str) {
    let doubleString = '';
 for (  i = 0; i < str.length; i++){
      doubleString = doubleString + str[i] + str[i]
  };
  return doubleString
};
 doubleChar("pasha")