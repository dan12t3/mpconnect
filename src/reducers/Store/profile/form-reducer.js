export const pageTitle = () => {
  return { title: 'Store OnBoarding' }
}

export const formSections = () => {
  return [
    { title: 'Targetted Age' },
    { title: 'Targetted Sex' },
    { title: 'Targetted Location' },
    { title: 'Estimated fulfillment time (200+ orders)' },
    { title: 'Award Winning Products' }
  ]
}

export const targetAge = () => {
  return [
    { option: 'less than 18' },
    { option: '18 - 25' },
    { option: '26 - 45' },
    { option: '46 - 55'},
    { option: 'greater than 55'}
  ]
}
