import  Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import QuestionAccordion from './QuestionAccordion'
import Image from 'next/image'

const FAQContainer = () => {
    const questionAnswer = [
    {
        question: "What is Fronted Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        question: "What is Fronted Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        question: "What is Fronted Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        question: "What is Fronted Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    }
]
  return (
    <Box sx={{backgroundColor: '#fff', padding: '2rem', borderRadius:'2rem',width:"37.5rem",height:"35.3125rem",zIndex:5,marginTop:"1rem",}}>
        <Typography variant='h1' sx={{fontSize:"3rem",fontWeight:"bold"}}><Image src='assets\images\icon-star.svg' alt='star' width={35} height={35} style={{marginRight:"1rem"}}/>FAQs</Typography>
        {questionAnswer.map((qA)=>{
            return <QuestionAccordion questionAnswer={qA} key={qA.question}/>
        })}
    </Box>
  )
}

export default FAQContainer;
