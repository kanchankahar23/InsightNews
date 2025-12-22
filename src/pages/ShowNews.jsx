import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Category from './Category'
import Footer from '../components/Footer'
import NewsDetail from './NewsDetail'

const Shownews = () => {

  const [news, setNews] = useState([])
  const [categoryitem, setCategoryitem] = useState("general")
  const [loading, setLoading] = useState(false)

  // const api = `https://newsapi.org/v2/top-headlines?country=us&category=${categoryitem}&apiKey=30cefa94e9f44bfca529801ac57cd45e}`
  
  const api = `https://newsapi.org/v2/top-headlines?country=us&category=${categoryitem}&apiKey=30cefa94e9f44bfca529801ac57cd45e`

  useEffect(() => {
    setLoading(true)

    fetch(api)
      .then(res => res.json())
      .then(data => {
        setNews(data.articles || [])
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [categoryitem]) 

  return (
    <>
      <Navbar setCategoryitem={setCategoryitem} />
      <Category
        news={news}
        categoryitem={categoryitem}
      />
      <NewsDetail/>
      <Footer/>
      

    </>
  )
}

export default Shownews
