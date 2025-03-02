const expertise = [
  {
    id: 0,
    title: 'About MySelf',
    desc: 'Engineered high-performance Web3 applications using React, Next.js, ethers.js, and wagmi, ensuring seamless interaction with blockchain networks while maintaining an average loading time under 2 seconds. Prioritized user experience by implementing responsive design principles, enhancing accessibility for diverse users across decentralized platforms. I am really eager to develop my skills and learn new skills.'
  }
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
