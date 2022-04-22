import { render, waitFor, fireEvent } from '@testing-library/react'

import App from './App'

const setup = () => {
  const utils = render(<App />)

  return {
    ...utils,
  }
}

describe('App', () => {
  it('Should have the title', async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => [
        {
          id: 1,
          active: false,
          flickr_images: ['https://imgur.com/DaCfMsj.jpg'],
          wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
          description:
            'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
          rocket_name: 'Falcon 1',
        },
      ],
    })
    window.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    const { getByText } = setup()

    await waitFor(() => fireEvent.click(getByText('Rockets')))

    await waitFor(() => {
      getByText('Falcon 1')
    })
  })

  it('Should have this Mission name', async () => {
    const mockFetchPromise = Promise.resolve({
      json: () => [
        {
          mission_name: 'Thaicom',
          mission_id: '9D1B7E0',
          manufacturers: ['Orbital ATK'],
          description:
            'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
          wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
        },
      ],
    })
    window.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

    const { getByText } = setup()

    await waitFor(() => fireEvent.click(getByText('Missions')))

    await waitFor(() => {
      getByText('Thaicom')
    })
  })
})
