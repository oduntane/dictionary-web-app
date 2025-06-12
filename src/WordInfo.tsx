import {useContext} from "react";
import playIcon from "./assets/icon-play.svg";
import linkIcon from "./assets/icon-new-window.svg";
import {type State, WordStateContext} from "./App.tsx";


export default function WordInfo({font}: {font: string}) {

    const wordState = useContext<State | null>(WordStateContext)




    if (wordState!.error !== null) {
        return (
            <div className={`${font === 'Sans Serif' ? 'font-sans' : font === 'Serif' ? 'font-serif' : 'font-mono'} mt-[72px] tablet:mt-[132px] items-center text-center`}>
                <span className="block text-[32px] tablet:text-[64px]">😕</span>
                <span className="font-bold text=[18px] text-[#2D2D2D] tablet:text-[20px] dark:text-[#FFFFFF]">{wordState!.error.title}</span>
                <p className="font-normal text-[15px]  text-[#757575] tablet:text-[18px]">{wordState!.error.message + " " + wordState!.error.resolution}</p>
            </div>
        )
    }

    return (
        <>
            <div className={`${font === 'Sans Serif' ? 'font-sans' : font === 'Serif' ? 'font-serif' : 'font-mono'} desktop:flex desktop:flex-col desktop:gap-[40px]`}>
                <div className="flex justify-between mb-[34px] tablet:mb-[39px] desktop:mb-0">
                    <div className="flex flex-col self-stretch gap-[9px] tablet:gap-[5px]">
                        <span className="font-bold lowercase text-[32px] tablet:text-[64px] dark:text-[#FFFFFF]">{wordState?.wordInfo?.word}</span>
                        <span className="font-sans font-normal text-[18px] tablet:text-[24px] text-[#A445ED]">{wordState?.wordInfo?.phonetic}</span>
                    </div>
                    <button className="self-center w-[48px] h-[48px] tablet:w-[75px] tablet:h-[75px]" onClick={() => {
                        const utterance = new SpeechSynthesisUtterance(wordState?.wordInfo?.word)

                        window.speechSynthesis.speak(utterance)
                    }}>
                        <img src={playIcon} alt=""/>
                    </button>
                </div>
                {/*meanings section*/}
                {wordState?.wordInfo?.meanings.map((meaning, index) => {
                    return (
                        <div className="mb-[35px] flex flex-col gap-[35px] tablet:gap-[39px] tablet:mb-[43px] desktop:mb-0">
                            <div className="flex gap-[25px] items-center">
                                <span className="font-bold text-[18px] leading-[auto] text-[#2D2D2D] tablet:text-[24px] dark:text-[#FFFFFF]">{meaning.partOfSpeech}</span>
                                <span className="h-[1px] grow bg-[#E9E9E9] dark:bg-[#3A3A3A]"/>
                            </div>
                            <div className="flex flex-col gap-[17px] tablet:gap-[27px]">
                                <span className="font-normal text-[16px] leading-[auto] text-[#757575] tablet:text-[20px]">Meaning</span>
                                <ul className="flex flex-col gap-[13px] font-normal text-[15px] leading-[24px] text-[#2D2D2D] dark:text-[#FFFFFF] tablet:text-[18px] tablet:ml-[22px]">
                                    {
                                        meaning.definitions.map((definition, index) => {
                                            return (
                                                <li className="flex gap-[20px] items-start">
                                                    <span className="mt-[10px] w-[5px] h-[5px] bg-[#8F19E8] inline-block self-start rounded-full shrink-0"/>
                                                    <div className="flex flex-col gap-[13px]">
                                                        <span>{definition.definition}</span>
                                                        {definition.example && <q className="text-[#757575]">{definition.example}</q>}
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            {meaning.synonyms.length > 0 && (
                                <div className="flex gap-[40px] text-[16px] tablet:text-[20px]">
                                    <span className="font-normal text-[#757575]">Synonyms</span>
                                    <span className="font-bold text-[#A445ED]">{meaning.synonyms.join(', ')}</span>
                                </div>
                            )}
                        </div>
                    )
                })}
                <div className="h-[1px] w-full bg-[#E9E9E9] dark:bg-[#3A3A3A] mb-[26px] desktop:hidden"/>
                <div className="flex flex-col gap-[10px] items-start tablet:flex-row tablet:items-center tablet:gap-[21px] desktop:mb-0 desktop:border-t-1 desktop:border-[#E9E9E9] desktop:dark:border-[#3A3A3A] desktop:pt-[19px]">
                    <span className="font-normal text-[14px] text-[#757575] underline">Source</span>
                    <a className="text-normal text-[14px] text-[#2D2D2D] dark:text-[#FFFFFF] inline-flex gap-[8px] underline" target="_blank" href={wordState?.wordInfo?.sourceUrl}>
                        {wordState?.wordInfo?.sourceUrl}
                        <img src={linkIcon} alt=""/>
                    </a>
                </div>
            </div>
        </>
    )
}