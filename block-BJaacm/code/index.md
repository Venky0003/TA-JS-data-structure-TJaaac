```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->
(./memeoryrep.jpeg)

2. Answer the following with reason:

- `user == newUser;` // true and reason is both have same values snd its coopy by reference
- `user === newUser;`//  true both vae the equal values and has same address and original value
- `user.name === newUser.name;` // true both have the equal values  and has  same address and original value
- `user.name == newUser.name;` // true both have the equal values  and has  same address and original value
- `user.sibling == newUser.sibling;` // true both vae the equal values  and has  same address and original value
- `user.sibling === newUser.sibling;`// true both vae the equal values  and has  same address and original value
- `user.sibling == allBrothers;` //  false values may be equal but the adress refence to store it is different
- `user.sibling === allBrothers;` //  false values may be equal but the adress refence to store it is different
- `brothersCopy === allBrothers;` // false values may be equal but the adress refence to store it is different
- `brothersCopy == allBrothers;` // false values may be equal but the adress refence to store it is different
- `brothersCopy == user.sibling;` // true both have the equal values  and has  same address and original value
- `brothersCopy === user.sibling;`//true both have the equal values  and has  same address and original value
- `brothersCopy[0] === user.sibling[0];`//true both have the equal values  and has  same address and original value
- `brothersCopy[1] === user.sibling[1];`//true both have the equal values  and has  same address and original value
- `user.sibling[1] === newUser.sibling[1];`//true both have the equal values  and has  same address and original value
