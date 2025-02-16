class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    return string.split(' ').map((word, index) => {
      // Lowercase words that are in exceptions array
      if (exceptions.includes(word.toLowerCase()) && index !== 0) {
        return word.toLowerCase();
      } else {
        // Capitalize first letter of each word
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(' ');
  }
}
  

console.log(Formatter.titleize("this is a but of an apple to make me glorious"))



  //   words.map((word) => {
  //     let isExcluded = false;
  //     for (let i = 0; i < exceptions.length; i++) {
  //       if (word.toLowerCase === exceptions[i].toLowerCase()) {
  //         isExcluded = true;
  //       }
  //     }
  //   })
  //   return string.split(' ').map((word) => {
  //     return word.charAt(0).toUpperCase() + word.slice(1)
  //   })
  //   .join(' ');
  // }
  // add static methods her
  