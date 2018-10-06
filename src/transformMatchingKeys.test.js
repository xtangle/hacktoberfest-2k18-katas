import { transformMatchingKeys } from './transformMatchingKeys';
import { cloneDeep } from 'lodash';

const BASE_OBJECT = {
  friends: [
    {
      name: 'Paul',
      age: 24,
      pets: [
        {
          name: 'Rex',
          age: 6,
          soldBy: {
            name: 'Joseph',
            age: 46,
            marriedTo: {
              name: 'Mary',
              age: 43,
            },
          },
        },
        {
          name: 'Coco',
          age: 26,
          giftedBy: {
            name: 'Emily',
            age: 33,
          },
        },
      ],
    },
    {
      name: 'Peter',
      age: 26,
      pets: [
        {
          name: 'SaladMuncher II',
          age: 4,
          sonOf: {
            name: 'SaladMuncher I',
            age: 90,
          },
        },
      ],
    },
  ],
};

const OBJECT_WITH_DOUBLE_AGE = {
  friends: [
    {
      name: 'Paul',
      age: 48,
      pets: [
        {
          name: 'Rex',
          age: 12,
          soldBy: {
            name: 'Joseph',
            age: 92,
            marriedTo: {
              name: 'Mary',
              age: 86,
            },
          },
        },
        {
          name: 'Coco',
          age: 52,
          giftedBy: {
            name: 'Emily',
            age: 66,
          },
        },
      ],
    },
    {
      name: 'Peter',
      age: 52,
      pets: [
        {
          name: 'SaladMuncher II',
          age: 8,
          sonOf: {
            name: 'SaladMuncher I',
            age: 180,
          },
        },
      ],
    },
  ],
};

const OBJECT_WITH_HONORABLE_PEOPLE = {
  friends: [
    {
      name: 'Honorable Paul',
      age: 24,
      pets: [
        {
          name: 'Honorable Rex',
          age: 6,
          soldBy: {
            name: 'Honorable Joseph',
            age: 46,
            marriedTo: {
              name: 'Honorable Mary',
              age: 43,
            },
          },
        },
        {
          name: 'Honorable Coco',
          age: 26,
          giftedBy: {
            name: 'Honorable Emily',
            age: 33,
          },
        },
      ],
    },
    {
      name: 'Honorable Peter',
      age: 26,
      pets: [
        {
          name: 'Honorable SaladMuncher II',
          age: 4,
          sonOf: {
            name: 'Honorable SaladMuncher I',
            age: 90,
          },
        },
      ],
    },
  ],
};

const OBJECT_WITH_NO_PETS = {
  friends: [
    {
      name: 'Paul',
      age: 24,
      pets: [],
    },
    {
      name: 'Peter',
      age: 26,
      pets: [],
    },
  ],
};

const OBJECT_WITH_NO_FRIENDS = {
  friends: [],
};

describe('transformMatchingKeys', () => {
  it('can double your age', () => {
    expect(transformMatchingKeys(BASE_OBJECT, 'age', age => age * 2)).toEqual(
      OBJECT_WITH_DOUBLE_AGE
    );
  });

  it('can make anyone honorable', () => {
    expect(
      transformMatchingKeys(BASE_OBJECT, 'name', name => `Honorable ${name}`)
    ).toEqual(OBJECT_WITH_HONORABLE_PEOPLE);
  });

  it('can, sadly, delete your pets', () => {
    expect(transformMatchingKeys(BASE_OBJECT, 'pets', () => [])).toEqual(
      OBJECT_WITH_NO_PETS
    );
  });

  it('can make all your friends betray you', () => {
    expect(transformMatchingKeys(BASE_OBJECT, 'friends', () => [])).toEqual(
      OBJECT_WITH_NO_FRIENDS
    );
  });

  it('does not mutate the base object', () => {
    const untouchedBaseObject = cloneDeep(BASE_OBJECT);

    // Run the function, expecting it not to mutate base object
    transformMatchingKeys(BASE_OBJECT, 'friends', () => []);

    // Check that BASE_OBJECT was not modified
    expect(BASE_OBJECT).toEqual(untouchedBaseObject);
  });
});
