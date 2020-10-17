const friends = ["ivan", "petro", "danya", "sasha", "polina"];
for (const friend of friends) {
  if (friend === "danya") {
    console.log("знайдено найкращого друга");
    break;
  }
}

// Додаткове

friends.reverse();
console.log(friends);