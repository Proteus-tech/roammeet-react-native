// @flow

export const listMeetup = () => {
  return new Promise((resolve) => {
    resolve([
      {
        inviter: 'Somjai',
        date: '10-2-2017',
        description: 'ma ter yhak jer :-)',
        title: 'Reunion Angel gang xoxo.',
        pic:'./butter.jpg'
      },
      {
        inviter: 'SomChai',
        date: '10-2-2017',
        description: 'kidtueng jung ma ha nhoi <3',
        title: 'Tee derm',
        pic:'./butter.jpg'
      }
    ])
  })
}

export const meetupDetail = (id) => {
  return new Promise((resolve) => {
    return resolve({
      inviter: 'Somjai',
      date: '10-2-2017',
      description: 'ma ter yhak jer :-)',
      title: 'Reunion Angel gang xoxo.',
      pic:'./butter.jpg'
    })
  })
}

export const createMeetUp = (meetup) => {
  return new Promise((resolve) => resolve(meetup))
}
