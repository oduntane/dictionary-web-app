import {useReducer, useState, createContext, useEffect} from "react";
import axios from "axios";


export const WordStateContext = createContext<State | null>(null)



import logo from './assets/logo.svg'
import arrowDown from './assets/icon-arrow-down.svg'
import searchIcon from './assets/icon-search.svg'

import WordInfo from "./WordInfo.tsx";

export interface State {
  error: {
    title: string;
    message: string;
    resolution: string
  } | null,
  wordInfo: {
    word: string,
    phonetic: string,
    meanings: {
      partOfSpeech: string,
      definitions: {
        definition: string,
        example: string
      }[],
      synonyms: string[]
    }[],
    sourceUrl: string
  } | null
}

type Action = {
  type: "error" | "word",
  error: {title: string; message: string; resolution: string} | null,
  wordInfo: {
    word: string,
    phonetic: string,
    meanings: {
      partOfSpeech: string,
      definitions: {
        definition: string,
        example: string
      }[],
      synonyms: string[]
    }[],
    sourceUrl: string
  } | null
}

function reducer(state: State, action: Action): State {

  switch (action.type) {
    case "error":
      return {
        ...state,
        error: {...action.error!}
      }
    case "word":
      return  {
        error: null,
        wordInfo: {...action.wordInfo!}
      }
    default: {
      return state
    }
  }
}



function App() {
  const [searchWord, setSearchWord] = useState('')
  const [darkTheme, setDarkTheme] = useState(false)
  const [font, setFont] = useState('Sans Serif')
  const [optionToggle, setOptionToggle] = useState(false)
  const [wordState, dispatch] = useReducer(reducer, {
    error: null,
    wordInfo: null
  })

  useEffect(() => {
    if (!darkTheme) {
      document.querySelector('#root')?.classList.remove('dark')
      return
    }
    document.querySelector('#root')?.classList.add('dark')
  }, [darkTheme])


  return (
    <>
      {/* App */}
      <div className="min-h-[100dvh] bg-[#FFFFFF] w-[87%] mx-auto pt-[24px] pb-[63px] tablet:w-[90%] tablet:pt-[58px] tablet:pb-[118px] desktop:w-[52%] desktop:pt-[58px] desktop:pb-[124px] dark:bg-[#050505]">
        <h1 className="sr-only">Dictionary App</h1>
        <div className="flex justify-between mb-[24px] tablet:mb-[51px]">
          <img className="w-[28px] h-[32px] tablet:w-[32px] tablet:h-[36px]" src={logo} alt=""/>
          <div className="flex items-center gap-[16px] tablet:gap-[26px]">
            <div className="relative">
              <div className="flex gap-[16px] items-center tablet:gap-[18px]">
                <span className="font-bold text-[14px] leading-[24px] text-[#2D2D2D] tablet:text-[18px] dark:text-[#FFFFFF]">{font}</span>
                <button className="w-[12px] h-[6px]" onClick={() => {
                  setOptionToggle(!optionToggle)
                }}>
                  <img src={arrowDown} alt=""/>
                </button>
              </div>
              <div className={`${optionToggle ? '': 'hidden'} absolute z-10 top-[47px] right-0 flex flex-col gap-[16px] items-start w-[183px] h-[152px] bg-[#FFFFFF] dark:bg-[#1F1F1F] text-[#2D2D2D] dark:text-[#FFFFFF] p-[24px] shadow-[0_5px_30px_0_hsla(0,0%,0%,10%)] dark:shadow-[0_5px_30px_0_#A445ED] rounded-[16px] font-bold text-[18px] leading-[24px]`}>
                <button className="font-sans hover:text-[#A445Ed] cursor-pointer" onClick={() => {
                  setFont('Sans Serif')
                  setOptionToggle(!optionToggle)
                }}>Sans Serif</button>
                <button className="font-serif hover:text-[#A445Ed] cursor-pointer" onClick={() => {
                  setFont('Serif')
                  setOptionToggle(!optionToggle)
                }}>Serif</button>
                <button className="font-mono hover:text-[#A445Ed] cursor-pointer" onClick={() => {
                  setFont('Mono')
                  setOptionToggle(!optionToggle)
                }}>Mono</button>
              </div>
            </div>
            {/* separator */}
            <div className="w-[1px] h-[32px] bg-[#E9E9E9]"/>
            <div className="flex gap-[12px] items-center">
              {/*toggle button*/}
              <div onClick={() => {
                setDarkTheme(!darkTheme)
              }} className={`${darkTheme ? 'on' : ''} w-[40px] h-[20px] bg-[#757575] rounded-[10px] relative after:content-[''] after:w-[14px] after:h-[14px] after:bg-[#FFFFFF] after:block after:rounded-full after:absolute after:my-[3px] after:ml-[3px] dark:bg-[#A445ED] toggle-on:after:right-0 toggle-on:after:mr-[3px]`}>
              </div>
              <div className="w-[20px] h-[20px]">
                <svg className="stroke-[#838383] dark:stroke-[#A445ED]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
              </div>
            </div>
          </div>
        </div>
        {/* Search */}
        <div className="w-full py-[16px] px-[24px] rounded-[16px] bg-[#F4F4F4] flex items-center gap-[20px] mb-[28px] tablet:mb-[41px] tablet:py-[19px] desktop:mb-[45px] dark:bg-[#1F1F1F] dark:hover:border-[1px] dark:hover:border-[#A445ED]">
          <input className="grow font-bold text-[16px] tablet:text-[20px] dark:text-[#FFFFFF] dark:caret-[#A445ED]" type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} onKeyUp={(e) => {
            e.preventDefault()
            if (e.key === 'Enter') {
              axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
                  .then((res) => {
                    console.log(res.data)
                    const wordInfo : {
                      word: string,
                      phonetic: string,
                      meanings: {
                        partOfSpeech: string,
                        definitions: {
                          definition: string,
                          example: string
                        }[],
                        synonyms: string[]
                      }[],
                      sourceUrl: string
                    } = {
                      word: "",
                      phonetic: "",
                      sourceUrl: "",
                      meanings: []
                    }

                    wordInfo.phonetic = res.data[0].phonetic
                    wordInfo.word = res.data[0].word
                    wordInfo.sourceUrl = res.data[0].sourceUrls[0]
                    res.data[0].meanings.forEach((meaning: { partOfSpeech: never; synonyms: never; definitions: never; }, index: number) => {
                      wordInfo.meanings[index] = {
                        partOfSpeech: meaning.partOfSpeech,
                        synonyms: meaning.synonyms,
                        definitions: meaning.definitions
                      }

                    })

                    dispatch({
                      type: 'word',
                      error: null,
                      wordInfo: wordInfo
                    })
                  })
                  .catch((err) => {

                    const errData: {title: string, message: string, resolution: string} = err.response.data

                    dispatch({
                      wordInfo: null,
                      type: 'error',
                      error: {
                        ...errData
                      }
                    })
                  })
            }
          }}/>
          <button>
            <img src={searchIcon} alt=""/>
          </button>
        </div>
        {/*Info section */}
        <WordStateContext.Provider value={wordState}>
          {
            wordState?.error != null && searchWord !== ''?
                <div className={`${font === 'Sans Serif' ? 'font-sans' : font === 'Serif' ? 'font-serif' : 'font-mono'} mt-[72px] tablet:mt-[132px] items-center text-center`}>
                  <span className="block text-[32px] tablet:text-[64px]">😕</span>
                  <span className="font-bold text=[18px] text-[#2D2D2D] tablet:text-[20px] dark:text-[#FFFFFF]">{wordState!.error.title}</span>
                  <p className="font-normal text-[15px]  text-[#757575] tablet:text-[18px]">{wordState!.error.message + " " + wordState!.error.resolution}</p>
                </div>
                    :
            (searchWord === '' || wordState.wordInfo === null ?
              (
                  <div className={`${font === 'Sans Serif' ? 'font-sans' : font === 'Serif' ? 'font-serif' : 'font-mono'} mt-[72px] tablet:mt-[132px] items-center text-center`}>
                    <span className="block text-[32px] tablet:text-[64px]">😕</span>
                    <span className="font-bold text=[18px] text-[#2D2D2D] tablet:text-[20px] dark:text-[#FFFFFF]">You Have Not Entered a word</span>
                    <p className="font-normal text-[15px]  text-[#757575] tablet:text-[18px]">Enter a word and press  <code> Enter </code> to search</p>
                  </div>
              ) : <WordInfo font={font}/>)
          }

        </WordStateContext.Provider>
      </div>
    </>
  )
}

export default App
