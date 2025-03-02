const portfolio = [
  {
    id: 0,
    projectName: 'Rango Exchange',
    url: 'https://rango.exchange/',
    image: 'projects/rango.png',
    projectDetail:
      'Rango Exchange is a leading cross-chain decentralized exchange (DEX) and bridge aggregator, enabling seamless asset transfers across over 60 blockchains. Launched in August 2021, Rango integrates more than 80 DEXs, automated market makers (AMMs), and bridges, supporting networks such as Bitcoin, Ethereum, Solana, Tron, and StarkNet.',
    technologiesUsed: []
  },
  {
    id: 1,
    projectName: 'Community Gaming',
    url: 'https://www.communitygaming.io/',
    image: 'projects/gaming.png',
    projectDetail:
      'Community Gaming is an all-in-one esports tournament platform that streamlines the creation, management, and participation in gaming competitions. Founded in 2018 and based in New York City, the platform integrates efficient payment infrastructures, allowing gamers to earn rewards seamlessly.',
    technologiesUsed: []
  },
  {
    id: 2,
    projectName: 'KOALA42',
    url: 'https://koala42.com/',
    image: 'projects/koala.png',
    projectDetail:
      'KOALA42 is a Czech-based software development studio specializing in custom solutions for both startups and established enterprises. Founded in 2018, the company operates from offices in Prague and Zlín, employing a team of approximately 40 professionals.',
    technologiesUsed: []
  },
  {
    id: 3,
    projectName: 'Magmutual',
    url: 'https://magmutual.com/',
    image: 'projects/magmutual.png',
    projectDetail:
      'MagMutual is a leading mutual insurance company specializing in medical professional liability coverage for healthcare providers and organizations across the United States. Established in 1982, it has grown to insure over 40,000 physicians and healthcare entities nationwide.',
    technologiesUsed: []
  },
  {
    id: 4,
    projectName: 'Braze',
    url: 'https://braze.com/',
    image: 'projects/braze.png',
    projectDetail:
      'Braze is a leading customer engagement platform that enables brands to create personalized and memorable experiences across various channels. Founded in 2011 as Appboy, the company rebranded to Braze in 2017 and has since grown to serve a diverse clientele, including brands like HBO Max, Skyscanner, and Burger King.',
    technologiesUsed: []
  },
  {
    id: 5,
    projectName: 'QUALIFIED',
    url: 'https://qualified.com/',
    image: 'projects/piper.png',
    projectDetail:
      'Qualified is a leading pipeline generation platform designed for revenue teams utilizing Salesforce. Founded by former Salesforce executives and engineers, the company specializes in transforming corporate websites into dynamic engines for pipeline growth.',
    technologiesUsed: []
  },
  {
    id: 6,
    projectName: 'Blip Delivery',
    url: 'https://blip-delivery.com/',
    image: 'projects/blipdelivery.png',
    projectDetail:
      'Blip Delivery is a logistics company specializing in on-demand drone delivery services, aiming to revolutionize last-mile logistics by integrating advanced air and ground solutions. Founded in 2024 and headquartered in Marina del Rey, California, Blip Delivery offers a software platform that enables businesses to provide same-day delivery services to their customers.',
    technologiesUsed: []
  },
  {
    id: 6,
    projectName: 'Blip Photos',
    url: 'https://blipphoto.com/',
    image: 'projects/blipphoto.png',
    projectDetail:
      'Blip Photos is a division of Blip Delivery Inc., specializing in comprehensive drone inspection services across various industries.',
    technologiesUsed: []
  }
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
