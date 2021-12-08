import {useRoute} from '@react-navigation/core';

export const route = useRoute();

export const menuItems = [
  {
    id: 1,
    label: 'Name:',
    labelData: useRoute().params.name,
  },
  {
    id: 2,
    label: 'Description:',
    labelData: useRoute().params.description,
  },
  {
    id: 3,
    label: 'Price:',
    labelData: useRoute().params.price,
  },
  {
    id: 4,
    label: 'Ingredients:',
  },
];
