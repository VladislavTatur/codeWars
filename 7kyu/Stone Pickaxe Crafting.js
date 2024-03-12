// DESCRIPTION:
// Note: Based off Minecraft, hopefully you at least know the game!

// Story: You want to create a giant mine shaft, but you're a little stingy with your iron and diamonds and would not mine out all of the stone with iron or diamond pickaxes. Instead, you rely on less durable but cheaper stone pickaxes! You will need a lot of stone pickaxes though as they break faster than diamond or iron ones, so you need to find out how many stone pickaxes you can craft before you run out of sticks and cobblestones. Unfortunately, you're not an organized person, and you leave all of your materials in a single chest with random junk that you need to filter.

// Task: Given an array, return the maximum amount of stone pickaxes you can craft before you run out of sticks and cobblestones. Within the array would be a series of strings with the exact names of the materials listed below. A single stone pickaxe is made of 3 "Cobblestone" and 2 "Sticks", check if your given array contains enough "Sticks" and "Cobblestone" to craft a single stone pickaxe or even more. Do not count any materials apart from "Cobblestones", "Sticks" and "Wood". Wood can be converted into 4 sticks!

// SOLUTION:
function stonePick(arr) {
  let sticks = 0;
  let cobblestone = 0;
  for (material of arr) {
    if (material === "Sticks") {
      sticks++;
    }
    if (material === "Cobblestone") {
      cobblestone++;
    }
    if (material === "Wood") {
      sticks += 4;
    }
  }
  let res = 0
  if (sticks < 2) {
    return 0;
  } else {
    res = Math.min(Math.floor(sticks / 2), Math.floor(cobblestone / 3))
   
  }
  return res;
}

console.log(
  stonePick(["Sticks", "Wool", "Dirt", "Diamond", "Stone", "Cobblestone", "Sticks", "Cobblestone", "Cobblestone"])
);