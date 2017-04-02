const MEETUP_BASE_API = 'http://localhost:8009/'
const PEOPLE_BASE_API = 'http://localhost:8008/'

export async function listMeetup() {
  try {
    let response = await fetch(`${MEETUP_BASE_API}meetups/`)
    let responseJson = await response.json()
    return responseJson
  } catch(error) {
    console.error(error)
  }
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
