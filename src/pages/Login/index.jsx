import React, {useState, useEffect} from 'react';
import { Grid, FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';


const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login:', login);
    console.log('Password:', password);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor="login_nome">Login</InputLabel>
          <Input
            id="login_nome"
            aria-describedby="login_nome_helper_text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <FormHelperText id="login_nome_helper_text">Digite seu nome de usuário.</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor="login_senha">Senha</InputLabel>
          <Input
            id="login_senha"
            type="password"
            aria-describedby="login_senha_helper_text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText id="login_senha_helper_text">Digite sua senha.</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Entrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;