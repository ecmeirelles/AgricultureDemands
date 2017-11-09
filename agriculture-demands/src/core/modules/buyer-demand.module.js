const initialState = {
  total: 0,
  data: [{
    buyer: 'Bioon',
    demands: [
      {
        total: 200,
        inactive: 70,
        price: 2
      },
      {
        total: 100,
        inactive: 20,
        price: 1.2
      },
      {
        total: 300,
        inactive: 50,
        price: 1.5
      },
      {
        total: 300,
        inactive: 50,
        price: 1.5
      },
      {
        total: 100,
        inactive: 20,
        price: 1.2
      },
      {
        total: 200,
        inactive: 70,
        price: 2
      },
      {
        total: 200,
        inactive: 70,
        price: 2
      },
      {
        total: 300,
        inactive: 50,
        price: 1.5
      },
       {
        total: 200,
        inactive: 70,
        price: 2
      },
      {
        total: 100,
        inactive: 20,
        price: 1.2
      },
       {
        total: 200,
        inactive: 70,
        price: 2
      },
      {
        total: 100,
        inactive: 20,
        price: 1.2
      },
    ]
  },
  {
    buyer: 'Extra',
    demands: [
      {
        total: 150,
        inactive: 70,
        price: 2
      },
      {
        total: 85,
        inactive: 20,
        price: 1.2
      },
      {
        total: 200,
        inactive: 50,
        price: 1.5
      },
      {
        total: 200,
        inactive: 50,
        price: 1.5
      },
      {
        total: 85,
        inactive: 20,
        price: 1.2
      },
      {
        total: 150,
        inactive: 70,
        price: 2
      },
      {
        total: 150,
        inactive: 70,
        price: 2
      },
      {
        total: 200,
        inactive: 50,
        price: 1.5
      },
       {
        total: 150,
        inactive: 70,
        price: 2
      },
      {
        total: 85,
        inactive: 20,
        price: 1.2
      },
       {
        total: 150,
        inactive: 70,
        price: 2
      },
      {
        total: 85,
        inactive: 20,
        price: 1.2
      },
    ]
  }]
}

export default (state = initialState) => {
  return state
}
