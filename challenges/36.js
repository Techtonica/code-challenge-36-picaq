
// The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
//
// make_tags('i', 'Yay') → '<i>Yay</i>'
//
// make_tags('i', 'Hello') → '<i>Hello</i>'
// 
// 1. make_tags('cite', 'Yay') → '<cite>Yay</cite>'

function make_tags(input_tag, input_string){
  // Add functionality here!
  return `<${input_tag}>${input_string}</${input_tag}>`;
}

// console.log(make_tags('i', 'Yay')); //→ '<i>Yay</i>')
// console.log(make_tags('i', 'Hello')); //→ '<i>Hello</i>')
// console.log(make_tags('cite', 'Yay')); //→ '<cite>Yay</cite>')

module.exports = make_tags;
