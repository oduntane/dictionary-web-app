import logo from './assets/logo.svg'
import arrowDown from './assets/icon-arrow-down.svg'
import searchIcon from './assets/icon-search.svg'
import playIcon from './assets/icon-play.svg'
import linkIcon from './assets/icon-new-window.svg'

import './App.css'

function App() {

  return (
    <>
      {/* App */}
      <div className="min-h-[100dvh] bg-[#FFFFFF] w-[87%] mx-auto pt-[24px] pb-[63px] tablet:w-[90%] tablet:pt-[58px] tablet:pb-[118px] desktop:w-[52%] desktop:pt-[58px] desktop:pb-[124px]">
        <h1 className="sr-only">Dictionary App</h1>
        <div className="flex justify-between mb-[24px] tablet:mb-[51px]">
          <img className="w-[28px] h-[32px] tablet:w-[32px] tablet:h-[36px]" src={logo} alt=""/>
          <div className="flex items-center gap-[16px] tablet:gap-[26px]">
            <div>
              <div className="flex gap-[16px] items-center tablet:gap-[18px]">
                <span className="font-bold text-[14px] leading-[24px] text-[#2D2D2D] tablet:text-[18px]">San Serif</span>
                <button className="w-[12px] h-[6px]">
                  <img src={arrowDown} alt=""/>
                </button>
              </div>
              <div className="hidden">
                <button>Sans Serif</button>
                <button>Serif</button>
                <button>Mono</button>
              </div>
            </div>
            {/* separator */}
            <div className="w-[1px] h-[32px] bg-[#E9E9E9]"/>
            <div className="flex gap-[12px] items-center">
              <div className="w-[40px] h-[20px] bg-[#757575] rounded-[10px] relative after:content-[''] after:w-[14px] after:h-[14px] after:bg-[#FFFFFF] after:block after:rounded-full after:absolute after:my-[3px] after:ml-[3px]">
              </div>
              <div className="w-[20px] h-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
              </div>
            </div>
          </div>
        </div>
        {/* Search */}
        <form className="w-full py-[16px] px-[24px] rounded-[16px] bg-[#F4F4F4] flex items-center gap-[20px] mb-[28px] tablet:mb-[41px] tablet:py-[19px] desktop:mb-[45px]">
          <input className="grow font-bold text-[16px] tablet:text-[20px]" type="text" value="keyboard"/>
          <button>
            <img src={searchIcon} alt=""/>
          </button>
        </form>
        {/*Info section */}
        <div className="desktop:flex desktop:flex-col desktop:gap-[40px]">
          <div className="flex justify-between mb-[34px] tablet:mb-[39px] desktop:mb-0">
            <div className="flex flex-col self-stretch gap-[9px] tablet:gap-[5px]">
              <span className="font-bold lowercase text-[32px] tablet:text-[64px]">keyboard</span>
              <span className="font-sans font-normal text-[18px] tablet:text-[24px] text-[#A445ED]">/ˈkiːbɔːd/</span>
            </div>
            <button className="self-center w-[48px] h-[48px] tablet:w-[75px] tablet:h-[75px]">
              <img src={playIcon} alt=""/>
            </button>
          </div>
          {/*meanings section*/}
          <div className="mb-[35px] flex flex-col gap-[35px] tablet:gap-[39px] tablet:mb-[43px] desktop:mb-0">
            <div className="flex gap-[25px] items-center">
              <span className="font-bold text-[18px] leading-[auto] text-[#2D2D2D] tablet:text-[24px]">noun</span>
              <span className="h-[1px] grow bg-[#E9E9E9]"/>
            </div>
            <div className="flex flex-col gap-[17px] tablet:gap-[27px]">
              <span className="font-normal text-[16px] leading-[auto] text-[#757575] tablet:text-[20px]">Meaning</span>
              <ul className="flex flex-col gap-[13px] font-normal text-[15px] leading-[24px] text-[#2D2D2D] tablet:text-[18px] tablet:ml-[22px]">
                <li className="flex gap-[20px] items-start">
                  <span className="mt-[10px] w-[5px] h-[5px] bg-[#8F19E8] inline-block self-start rounded-full shrink-0"/>
                  <div className="flex flex-col gap-[13px]">
                    <span>(etc) A set of keys used to operate a typewriter, computer etc.</span>
                    {/*<q className="text-[#757575]"></q>*/}
                  </div>
                </li>
                <li className="flex gap-[20px]">
                  <span className="mt-[10px] w-[5px] h-[5px] bg-[#8F19E8] inline-block self-start rounded-full shrink-0"/>
                  <div className="flex flex-col gap-[13px]">
                    <span>
                    A component of many instruments including the piano, organ, and harpsichord
                  consisting of usually black and white keys that cause different tonnes to be
                  produced when struck.
                  </span>
                    {/*<q className="text-[#757575]"></q>*/}
                  </div>
                </li>
                <li className="flex gap-[20px]">
                  <span className="mt-[10px] w-[5px] h-[5px] bg-[#8F19E8] inline-block self-start rounded-full shrink-0" />
                  <div className="flex flex-col gap-[13px]">
                    <span>A device with keys of a musical keyboard, used to control electronic sound-producing
                  devices which may be built into or separate from the keyboard device.</span>
                    {/*<q className="text-[#757575]"></q>*/}
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex gap-[40px] text-[16px] tablet:text-[20px]">
              <span className="font-normal text-[#757575]">Synonyms</span>
              <span className="font-bold text-[#A445ED]">electronic keyboard</span>
            </div>
          </div>
          {/* TODO: Remove */}
          <div className="mb-[32px] flex flex-col gap-[35px] desktop:mb-0">
            <div className="flex gap-[25px] items-center">
              <span className="font-bold text-[18px] text-[#2D2D2D]">verb</span>
              <span className="w-full h-[1px] bg-[#E9E9E9]"/>
            </div>
            <div className="flex flex-col gap-[17px]">
              <span>Meaning</span>
              <ul className="flex flex-col gap-[13px] font-normal text-[15px] leading-[24px] text-[#2D2D2D]">
                <li className="flex gap-[20px]">
                  <span className="mt-[10px] w-[5px] h-[5px] bg-[#8F19E8] inline-block self-start rounded-full shrink-0"></span>
                  <div className="flex flex-col gap-[13px]">
                    <span>To type on a computer keyboard.</span>
                    <q className="text-[#757575]">Keyboarding is the part of this job I hate the most.</q>
                  </div>
                </li>
              </ul>
            </div>
            {/*<div className="flex gap-[40px] text-[16px]">*/}
            {/*  <span className="font-normal text-[#757575]">Synonyms</span>*/}
            {/*  <span className="font-bold text-[#A445ED]"></span>*/}
            {/*</div>*/}
          </div>
          {/* TODO End Remove */}
          <div className="h-[1px] w-full bg-[#E9E9E9] mb-[26px] desktop:hidden"/>
          <div className="flex flex-col gap-[10px] items-start tablet:flex-row tablet:items-center tablet:gap-[21px] desktop:mb-0 desktop:border-t-1 border-[#E9E9E9] desktop:pt-[19px]">
            <span className="font-normal text-[14px] text-[#757575] underline">Source</span>
            <a className="text-normal text-[14px] text-[#2D2D2D] inline-flex gap-[8px] underline" target="_blank" href="https://en.wikitionary.org/wiki/keyboard">
              https://en.wikitionary.org/wiki/keyboard
              <img src={linkIcon} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
