'use client';
import Image from "next/image";
import styles from "./page.module.css";
import AuthContainer from '../components/AuthContainer';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';

export default function Home() {
  return (
    <main className={styles.main}>
          <div className={styles.description}>
              <Box
                  sx={{ display: 'inline-flex'}}
              >
              <Image
                  src="/logo.png"
                  alt="Logo"
                  width={50} // Adjust width as needed
                  height={50} // Adjust height as needed
          
              />
              <Typography variant="h4" component="h1" gutterBottom>

                  Welcome to the Food App
                  </Typography>
                  </Box>
              <AuthContainer/>
        
      </div>
    </main>
  );
}
