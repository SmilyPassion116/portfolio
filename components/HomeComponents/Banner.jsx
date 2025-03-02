import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail, HiUser } from 'react-icons/hi';

const Banner = () => {
  return (
    <BannerLayout>
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
          <div className="flex items-center md:items-center md:justify-around">
            <div className="">
              <div className="">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">
                  Hello, Check This Out!
                </h1>
              </div>
              <div className="">
                <div className=" py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                  <span>
                    <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                      {' '}
                      I am a{' '}
                      <span className="inline-block">
                        <Typewriter
                          options={{
                            strings: [
                              'Web3 Frontend Developer',
                              'Mid-senior Frontend Engineer'
                            ],
                            autoStart: true,
                            loop: true
                          }}
                        />
                      </span>
                    </span>{' '}
                  </span>
                </div>
              </div>
              <div className="h-16 w-full text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center space-between text-Snow">
                <a
                  className="hover:scale-125 ease-in-out duration-700"
                  href="/contact"
                  target="_self"
                  rel="noreferrer"
                >
                  <HiMail />
                </a>
                <a
                  className="hover:scale-125 ease-in-out duration-700"
                  href="https://github.com/bestpractice116"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="hover:scale-125 ease-in-out duration-700"
                  href="https://www.linkedin.com/in/paul-breen-passion/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <Link
                  href="/portfolio"
                  spy={true}
                  smooth={true}
                  className="button my-2"
                >
                  See Projects
                </Link>
              </div>
            </div>
            <div className="w-48 h-52 relative hidden md:block">
              <img
                className="absolute top-8 w-full h-full rounded-lg hover:scale-105"
                src="images/paul.avif"
                alt="emoji"
              />
            </div>
          </div>
        </div>
      </div>
    </BannerLayout>
  );
};

export default Banner;
