'use client'
import { useState } from "react";
import { FormControl, Box, Container, Typography, Input, Button, FormLabel, colors } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";

export default function Login({ data, updateIngredient }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email && password) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    return (
        <Container>
            <FormControl sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <FormLabel sx={{ color: "cyan" }}>Email: </FormLabel>
                    <Input type='text' placeholder='Email' name='email' required onChange={(e) => setEmail(e.target.value)}></Input>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <FormLabel sx={{ color: "yellow" }}>Password: </FormLabel>
                    <Input type='text' placeholder='Password' name='password' required onChange={(e) => setPassword(e.target.value)}></Input>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Button type='submit' onClick={handleLogin}>Sign Up</Button>
                </Box>
            </FormControl>
        </Container>
    )
}