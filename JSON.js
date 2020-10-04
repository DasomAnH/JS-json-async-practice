let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const Dog = {
  name: 'zz',
  color: 'white and brown',
  size: 'medium',
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(Dog);
console.log(json);

json = JSON.stringify(Dog, ['name', 'color']);
console.log(json);

json = JSON.stringify(Dog, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return value;
});
console.log(json);

json = JSON.stringify(Dog);
const obj = JSON.parse(json);

console.log(obj);

Dog.jump();
