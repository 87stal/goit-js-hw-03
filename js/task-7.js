/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
let operation;

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    operation = {
      amounts: amount,
      types: type,
      id: 0,
    };

    return operation;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.createTransaction(amount, 'deposit');
    this.transactions.push(operation);
    if (operation.types === Transaction.DEPOSIT) {
      this.balance += amount;
    }
    for (const transaction of this.transactions) {
      operation.id += 1;
    }
    return this.transactions;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.createTransaction(amount, 'withdraw');
    this.transactions.push(operation);
    if (
      operation.types === Transaction.WITHDRAW &&
      operation.amounts < this.balance
    ) {
      this.balance -= amount;
    } else {
      console.log('Недостаточно средств на счету');
    }
    for (const transaction of this.transactions) {
      operation.id += 1;
    }
    return this.transactions;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let operationId;
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        operationId = transaction;
      }
    }
    return operationId;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.types === type) {
        total += transaction.amounts;
      }
    }
    return total;
  },
};

console.log(operation);
console.log(account.deposit(20));
console.log(account.withdraw(6));
console.log(account.getBalance());
console.log(account.deposit(8));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.withdraw(6));
console.log(account.getTransactionDetails(2));
