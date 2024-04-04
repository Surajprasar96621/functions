function replaceSpaces(str) {
    return str.replace(/\s/g, '-');
  }
  
  const message = "Hii i,m Suraj";
  const messageWithHyphens = replaceSpaces(message);
  console.log(messageWithHyphens); 
  