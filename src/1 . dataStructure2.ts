// let nameVariable: <dataType> = value
// const nameConstant: <dataType> = value

let familyName: string | null = null;

const PAGE_SIZE: number = 25;

const alias: string = '@christhoval';

familyName = 'Perez';

const fecha_nacimiento: Date = new Date(); // x
const fechaNacimiento: Date = new Date(); // lowerCamelCase
const FechaNacimiento: Date = new Date(); // UpperCamelCase

const isAlive: boolean = true;

const price: number = 5.99;

// Data structure

// arrays
type TTupleItem = number | string | boolean;

const ages: Array<number> = [12, 45, 67, 32, 35, 78];
const toyotaCar: Array<TTupleItem> = [4, 'toyota', true]; // tuple
const nissanCar: Array<TTupleItem> = [4, 'nissan', false]; // tuple
// objects (JSON)

enum SubjectEnum {
  programming1 = 'Typescript',
  programming2 = 'Python',
}

type TSubject = Record<SubjectEnum, number>;

interface IStudent {
  firstName: string;
  middleName?: string; // ? undefined
  lastName: string;
  birthday: Date;
  subjects: TSubject;
}

const christhoval: IStudent = {
  firstName: 'Christhoval',
  lastName: 'Barba',
  birthday: new Date(1989, 0, 6),
  subjects: {
    [SubjectEnum.programming1]: 98,
    [SubjectEnum.programming2]: 92,
  },
};

const ramon: IStudent = {
  firstName: 'Ramon',
  lastName: 'Valdez',
  birthday: new Date(1995, 6, 18),
  subjects: {
    [SubjectEnum.programming1]: 58,
    [SubjectEnum.programming2]: 97,
  },
};

const james: IStudent = {
  firstName: 'James',
  lastName: 'Perez',
  birthday: new Date(1998, 11, 22),
  subjects: {
    [SubjectEnum.programming1]: 86,
    [SubjectEnum.programming2]: 76,
  },
};

const studentGroup: IStudent[] = [christhoval, ramon, james];

export const result = studentGroup;
