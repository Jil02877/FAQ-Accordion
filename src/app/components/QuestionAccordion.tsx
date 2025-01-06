'use client'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'
const WIDTH = "36.25rem"
interface Props {
    questionAnswer: {
        question: string;
        answer: string;
    }
}
const QuestionAccordion = ({ questionAnswer }: Props) => {
    const { question, answer } = questionAnswer
    const [showAnswer, setShowAnswer] = useState(false)
    const handleChange = () => {
        setShowAnswer(!showAnswer);
    }
    return (
        <Box sx={{ display: "flex", justifyContent: "center", width: WIDTH, flexDirection: "column", borderBottom: "1px solid #F8EEFF", padding: "1.5rem 0", marginTop: "1rem" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography sx={{
                    fontWeight: "600", "&:hover": {
                        color: "#AD28EB"
                    }
                }}>{question}</Typography>
                <Button onClick={handleChange} sx={{
                    backgroundColor: showAnswer ? "#301534" : "#AD28EB", borderRadius: "50%", minWidth: "2rem", minHeight: "2rem", padding: 0, color: "#ffffff", "&:hover": {
                        backgroundColor: "#301534"
                    },marginBottom:"0.5rem"
                }}>{showAnswer ? "-" : "+"}</Button>
            </Box>
            <Box sx={{ width: WIDTH, display: showAnswer ? "flex" : "none" }}>
                <Typography sx={{ color: "#BB6990" }}>{answer}</Typography>
            </Box>
        </Box>
    )
}

export default QuestionAccordion;
