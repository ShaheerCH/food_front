import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';

const LoginForm = ({ toggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ email, password });
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ mt: 8 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                        Login
                    </Button>
                    <Box mt={2}>
                        <Typography variant="body2">
                            Don't have an account?    
                            <Link onClick={toggleForm} component="button" variant="body2">
                                Sign Up
                            </Link>
                        </Typography>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default LoginForm;
