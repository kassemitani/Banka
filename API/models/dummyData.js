import Utils from '../utils/common';

export default {
  accounts: [
    [
      2220107727,
      1,
      'savings',
      'active',
      0.00,
    ],
    [
      2220108726,
      3,
      'current',
      'dormant',
      0.00,
    ],
  ],
  users: [
    [
      'tejumoladavid@gmail.com',
      'David',
      'Tejumola',
      Utils.hashPassword('password'),
      'staff',
      true,
    ],
    [
      'johnoke@gmail.com',
      'John',
      'Oke',
      Utils.hashPassword('password'),
      'staff',
      false,
    ],
    [
      'boladeojo@gmail.com',
      'Bolade',
      'Ojo',
      Utils.hashPassword('password'),
      'client',
      false,
    ],
    [
      'sholaadeola@gmail.com',
      'Shola',
      'Adeola',
      Utils.hashPassword('password'),
      'client',
      false,
    ],
  ],
  transactions: [
    [
      2220107727,
      1,
      'debit',
      10000.00,
      0.00,
      10000.00,
    ],
    [
      2220107727,
      2,
      'debit',
      10000.00,
      0.00,
      10000.00,
    ],
    [
      2220107727,
      1,
      'debit',
      10000.00,
      0.00,
      10000.00,
    ],
  ],
};
