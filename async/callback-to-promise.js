class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'dasom' && password === 'dream') ||
          (id === 'coder' && password === 'success')
        ) {
          resolve(id);
        } else {
          reject(new error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'dasom') {
          resolve({ name: 'dasom', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your ID');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
