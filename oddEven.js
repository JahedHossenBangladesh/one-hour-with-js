oddEvenCheck(30);

function oddEvenCheck(numbers) {
  for (let i = 0; i <= numbers; i++) {
    let message = i % 2 === 0 ? "even" : "odd";
    console.log(i, message);
  }
}
