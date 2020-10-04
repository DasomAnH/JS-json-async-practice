class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'dasom' && password === 'dream') ||
        (id === 'coder' && password === 'success')
      ) {
        onSuccess(id);
      } else {
        onError(new error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'dasom') {
        onSuccess({ name: 'dasom', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const UserStorage = new UserStorage();

const id = prompt('enter your ID');
const password = prompt('enter your password');
UserStorage.loginUser(
  id,
  password,
  user => {
    UserStorage.getRoles(
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role `
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
