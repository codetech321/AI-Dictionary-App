import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Search } from 'lucide-react'
import { GoogleGenAI } from '@google/genai'
import { FadeLoader } from 'react-spinners'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const App = () => {
  const [word, setWord] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const changeBgColor = () => {
    let inputBox = document.querySelector('.inputBox')
    inputBox.style.borderColor = '#9333ea'
  }
  const resetColor = () => {
    let inputBox = document.querySelector('.inputBox')
    inputBox.style.borderColor = '#374151'
  }

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  })

  async function getResult() {
    setLoading(true)
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Considered you are a dictionery AI. we will give to a word and you need to give all the dictionery details in good from including examples also, Meanings, Definations, synonyms, Phonetics etc the word is ${word} `,
    })
    setResult(response.text)
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <div className="searchContainer mt-5 px-4 sm:px-8 md:px-16 lg:px-[150px] xl:px-[250px]">
        <div className="inputBox flex items-center w-full">
          <Search color="gray" className="ml-3 cursor-pointer" />
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                getResult()
              }
            }}
            onChange={(e) => setWord(e.target.value)}
            value={word}
            type="text"
            onBlur={resetColor}
            onFocus={changeBgColor}
            placeholder="Search a word..."
          />
        </div>
      </div>

      <div
        className="resultContainer py-[20px] mt-5 min-h-[40vh] mx-4 sm:mx-8 md:mx-16 lg:mx-[150px] xl:mx-[250px]"
        style={{
          borderTop: '1px solid #374251',
          borderBottom: '1px solid #374251',
        }}
      >
        <Markdown remarkPlugins={[remarkGfm]}>{result}</Markdown>
        {loading && (
          <div className="flex justify-center mt-5">
            <FadeLoader color="#9333ea" />
          </div>
        )}
      </div>

      <div className="footer flex items-center justify-center h-[80px] bg-[#1F2937] text-center px-4">
        <p className="text-sm sm:text-base">
          Created by Chandrakesh Dhawal - all rights reserved
        </p>
      </div>
    </>
  )
}

export default App
