import faker from "@faker-js/faker";

export const colors = [
  '#EFEEEE',
  '#E9CCB1',
  '#D3C4BE',
  '#EBCFC4',
  '#E4DAC2',
  '#C4BDAC',
];

export const iconColors = ['#9FD7F1', '#F3B000', '#F2988F'];

const data = [
  {
    id: 1,
    image: 'https://img.icons8.com/stickers/200/cheburashka.png',
  },
  {
    id: 2,
    image: 'https://img.icons8.com/stickers/200/genie.png',
  },
  {
    id: 3,
    image: 'https://img.icons8.com/stickers/200/brutus.png',
  },
  {
    id: 4,
    image: 'https://image.flaticon.com/icons/png/256/435/435050.png',
  },
  {
    id: 5,
    image: 'https://image.flaticon.com/icons/png/256/435/435037.png',
  },
  {
    id: 6,
    image: 'https://image.flaticon.com/icons/png/256/435/435043.png',
  },
  {
    id: 7,
    image: 'https://image.flaticon.com/icons/png/256/435/435055.png',
  },
  {
    id: 8,
    image: 'https://image.flaticon.com/icons/png/256/435/435049.png',
  },
  {
    id: 9,
    image: 'https://image.flaticon.com/icons/png/256/435/435047.png',
  },
  {
    id: 10,
    image: 'https://image.flaticon.com/icons/png/256/435/435039.png',
  },
  {
    id: 11,
    image: 'https://image.flaticon.com/icons/png/256/435/435036.png',
  },
  {
    id: 12,
    image: 'https://image.flaticon.com/icons/png/256/435/435064.png',
  },
  {
    id: 13,
    image: 'https://image.flaticon.com/icons/png/256/435/435034.png',
  },
  {
    image: 'https://image.flaticon.com/icons/png/256/435/435042.png',
  },
  {
    id: 14,
    image: 'https://image.flaticon.com/icons/png/256/435/435032.png',
  },
  {
    id: 15,
    image: 'https://image.flaticon.com/icons/png/256/435/435031.png',
  },
];

export default data.map((item, index) => ({
  ...item,
  key: item.id,
  color: colors[index % colors.length],
  name: faker.name.findName(),
  jobTitle: faker.name.jobTitle(),
  categories: [...Array(3).keys()].map(() => {
    return {
      key: faker.datatype.uuid(),
      title: faker.name.jobType(),
      subcats: [...Array(3).keys()].map(faker.name.jobType),
    };
  }),
}));
