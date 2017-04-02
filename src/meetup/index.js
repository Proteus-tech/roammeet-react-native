const MEETUP_BASE_API = 'http://localhost:8009'
const PEOPLE_BASE_API = 'http://localhost:8008/'

export async function listMeetup() {
  try {
    let response = await fetch(`${MEETUP_BASE_API}/meetups/`)
    return await response.json()
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

export async function createMeetUp(meetup) {
  try {
    let response = await fetch(`${MEETUP_BASE_API}/meetups/`, {
      method: 'PUT',
      body: JSON.stringify(meetup)
    })
    return await response.json()
  } catch(error) {
    console.error(error)
  }
}
