import './sass/main.scss';


// TASK 1

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

// const delay = ms => {
//   // Change this function
// };

// const logger = time => console.log(`Fulfilled after ${time}ms`);

const delay = ms => {

  return new Promise(resolve => {
    setTimeout(() => {
      resolve (`${ms}`)
    }, `${ms}`);
    // Change this function
  })
};

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Tests
delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms


// TASK 2
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и username и возвращала промис.

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: false },
// ];

// const toggleUserState = (allUsers, username, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === username ? { ...user, active: !user.active } : user
//   );

//   callback(updatedUsers);
// };


const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

function toggleUserState(allUsers, username) {
  return new Promise(resolve =>
  resolve (allUsers.map(user => user.name === username ? { ...user, active: !user.active } : user)))
}

toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);


// TASK 3 
// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, 
// а принимала всего один параметр transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction, onSuccess, onError) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       onSuccess({ id: transaction.id, time: delay });
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
// };

// const logSuccess = ({ id, time }) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// // Currently the function works like this
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);

// // The function should work like this
// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
// makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const canProcess = Math.random() > 0.3;

    if (canProcess) {
      resolve({ id: transaction.id, time: delay });
    } else {
      reject(transaction.id);
    }
  }, delay);})
  
};

function logSuccess({ id, time }) {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

function logError (id) {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

// The function should work like this
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
