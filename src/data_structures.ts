// Arrays

type TParams = string | number | boolean | number[] | string[];

const array: Array<TParams> = [
  1,
  1.9,
  true,
  'Hola',
  'mundo',
  [1, 2, 3],
  ['w', 'e'],
];

const ages: Array<number> = [23, 54, 32, 56, 43, 67, 2, 8];

interface IBlock {
  hash: string;
  dato: number;
  prev?: IBlock;
  next?: IBlock;
}

interface IData {
  hash: string;
  dato: number;
}

function append(data: IData, list: Array<IBlock>) {
  const prev = list[list.length - 1];

  const block: IBlock = {
    ...data,
    prev: prev,
  };

  list[list.length - 1].next = block;
  list.push(block);
  return list;
}

const chain: Array<IBlock> = [];

const block1: IBlock = {
  hash: '0001',
  dato: 2345,
  prev: undefined,
  next: undefined,
};

chain.push(block1);

const block2: IBlock = {
  hash: '0002',
  dato: 23445,
  prev: block1,
  next: undefined,
};

chain[chain.length - 1].next = block2;

chain.push(block2);

const block3: IBlock = {
  hash: '0003',
  dato: 25345,
  prev: block2,
  next: undefined,
};

chain[chain.length - 1].next = block3;

chain.push(block3);

console.log(chain);

append({ dato: 98, hash: '5334' }, chain);
append({ dato: 543, hash: '5335434' }, chain);

// let min = ages[0];
// let max = ages[0];

const limits = [ages[0], ages[0]];

for (let i = 1; i <= ages.length; i++) {
  const current = ages[i];
  const [min, max] = limits;

  if (min >= current) {
    limits[0] = current;
    // min = current;
  }
  if (max <= current) {
    limits[1] = current;
    // max = current;
  }
}

// arrow function
// () => {}
ages.forEach((current) => {
  const [min, max] = limits;

  if (min >= current) {
    limits[0] = current;
    // min = current;
  }
  if (max <= current) {
    limits[1] = current;
    // max = current;
  }
});

const aaa = ages.reduce<Array<number>>((acc, current) => {
  const [min, max] = acc;
  if (min >= current) {
    acc[0] = current;
    // min = current;
  }
  if (max <= current) {
    acc[1] = current;
    // max = current;
  }
  return acc;
}, limits);

const minMax = [Math.min(...ages), Math.max(...ages)];

const agesSorted = ages.sort((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
});

interface Student {
  name: string;
  age: number;
  grade: string;
  start_at: number;
}

const nath: Student = {
  name: 'Nathaly Jaramillo',
  age: 20,
  grade: '3 año 1er semestre',
  start_at: 2018,
};

const axl: Student = {
  name: 'Axl Aguilar',
  age: 28,
  grade: '4to',
  start_at: 2016,
};

const uzi: Student = {
  name: 'Daniel Rawlins',
  age: 24,
  grade: '4to',
  start_at: 2018,
};

const studens = [nath, axl, uzi];

studens.reduce<Student | undefined>((acc, current) => {
  if (!acc) {
    acc = current;
    return acc;
  }

  if (acc.age > current.age) {
    acc = current;
  }

  return acc;
}, undefined);

export const list = studens.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  }
  return 0;
})[0];
