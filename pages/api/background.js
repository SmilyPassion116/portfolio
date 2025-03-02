const background = [
  {
    eduCards: [
      {
        id: 0,
        title: 'Dublin City University',
        degree: 'BS, Computer System Engineering',
        detail: "Bachelor's Degree in Computer System Engineering from DCU.",
        year: '2012-2016'
      },
      {
        id: 0,
        title: 'Letterkenny Institute of Technology',
        degree: 'BS, Information and Communication Technology',
        detail:
          "Bachelor's Degree in Information and Communication Technology from DCU.",
        year: '2016-2018'
      }
    ]
  },
  {
    expCards: [
      {
        id: 1,
        title: 'Rosie Lee Digital',
        role: 'Frontend Developer',
        url: 'https://rosielee.digital/',
        year: '02/2023 - 01/2025'
      },
      {
        id: 2,
        title: 'Community Gaming',
        role: 'Web3 Frontend Engineer',
        url: 'https://www.communitygaming.io/',
        year: '06/2023 - 09/2024'
      },
      {
        id: 3,
        title: 'Rango Exchange',
        role: 'Web3 Frontend Developer',
        url: 'https://rango.exchange/',
        year: '06/2022 - 11/2023'
      },
      {
        id: 4,
        title: 'KOALA42',
        role: 'Frontend Developer',
        url: 'https://koala42.com/',
        year: '10/2020 - 06/2022'
      }
    ]
  }
];

export default function handler(req, res) {
  res.status(200).json(background);
}
