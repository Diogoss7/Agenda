import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function ButtonInserir() {

    const [inserirForm, setInserirForm] = useState(false);
    const [inserirMusica, setInserirMusica] = useState(false);
    const [Trabalho, setTrabalho] = useState('');
    const [Nome, setNome] = useState('');
    const [Musica, setMusica] = useState('');
    const [Tom, setTom] = useState('');

    const FecharCard = () => {
        setInserirMusica(false);
        setInserirForm(false);
    };

    const EscalaDia = () => {
        localStorage.setItem('nome', Nome);
        localStorage.setItem('trabalho', Trabalho);
        localStorage.setItem('musica', Musica);
        localStorage.setItem('tom', Tom);

    };
    var banda = [];
    if (banda.length == 0) {
        banda.push(
            {
                nome: Nome,
                trabalho: Trabalho,
            }
        )
        localStorage.setItem("banda", JSON.stringify(banda));

    }
    else { alert("Tem Item") };




    const CardMusica = () => {
        setInserirMusica(true);
        setInserirForm(false);
    }
    const AdEscala = () => {
        setInserirForm(true);
        setInserirMusica(false);
    }
    return (
        <div>

            <div className='botaoADtarefa'>
                <Stack spacing={2} direction="row">
                    <Button onClick={AdEscala} variant="outlined">Adicionar Tarefa</Button>
                </Stack>
            </div>
            <div className='containerCard'>
                {inserirForm && (
                    <div className='CardInfo'>

                        <Card sx={{ maxWidth: 345 }} >
                            <div className='topoCard'>
                                <Typography gutterBottom variant="h5" component="div">
                                    <i> <b> Participantes</b> </i>
                                </Typography>
                                <div className='buttonGuardarCard'>
                                    <Button onClick={FecharCard} type="submit" value="cadastrar" variant="outlined"><ClearIcon /></Button>
                                </div>
                            </div>
                            <CardContent >

                                <Typography variant="body2" color="text.secondary">

                                    <Box id='cad-usuario'
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate

                                    >
                                        <TextField
                                            id="name"
                                            name='name'
                                            label="Nome"
                                            variant="outlined"
                                            value={Nome}
                                            onChange={(e) => setNome(e.target.value)}
                                        />


                                        <TextField
                                            id="funcao"
                                            name='funcao'
                                            label="Função"
                                            variant="outlined"
                                            value={Trabalho}
                                            onChange={(e) => setTrabalho(e.target.value)}
                                        />

                                    </Box>

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Container spacing={2} direction="row">
                                    <div className='buttonGuardar'>
                                        <Button onClick={EscalaDia} type="submit" value="cadastrar" variant="outlined">Guardar</Button>
                                    </div>

                                    <Button onClick={CardMusica} variant="outlined">Inserir Musicas</Button>

                                </Container>
                            </CardActions>
                        </Card>
                    </div>
                )}
                {inserirMusica && (

                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent >
                                <div className='topoCard'>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <i><b> Musicas </b> </i>
                                    </Typography>
                                    <div className='buttonGuardarCard'>
                                        <Button onClick={FecharCard} type="submit" value="cadastrar" variant="outlined"><ClearIcon /></Button>
                                    </div>
                                </div>
                                <Typography variant="body2" color="text.secondary">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& > :not(style)': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            id="outlined-basic"
                                            label="Musica"
                                            variant="outlined"
                                            onChange={(e) => setMusica(e.target.value)}
                                        />
                                        <TextField
                                            id="outlined-basic"
                                            label="Tom"
                                            variant="outlined"
                                            onChange={(e) => setTom(e.target.value)}
                                        />
                                    </Box>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Container spacing={2} direction="row">
                                    <div className='buttonFechar'>
                                        <Button onClick={EscalaDia} variant="outlined">Guardar</Button>
                                    </div>
                                </Container>
                            </CardActions>
                        </Card>
                    </div>

                )}
            </div>
        </div>
    )
}
export default ButtonInserir    