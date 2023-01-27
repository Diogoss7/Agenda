import * as React from 'react';
import { useState } from "react"

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ButtonDays() {

    const [CronogramaDia, setCronogramaDia] = useState(false);
    const [AbrirMusicas, setAbrirMusicas] = useState(false);

    const LimparF = () => {

        localStorage.removeItem("nome")
        localStorage.removeItem("trabalho")
    }
    const LimparM = () => {

        localStorage.removeItem("musica")
        localStorage.removeItem("tom")
    }

    const VerMusicas = () => {

        setAbrirMusicas(true);
        setCronogramaDia(false);
    }


    const ExibirCronograma = () => {

        setCronogramaDia(true)
        setAbrirMusicas(false)
    }

    return (<div>
        <h1 id='cronogramaSemana'>Cronograma da Semana</h1>

        <ButtonGroup variant="outlined" size='large' aria-label="outlined primary button group">
            <Button onClick={ExibirCronograma} >Seg</Button>
            <Button onClick={ExibirCronograma} >Ter</Button>
            <Button onClick={ExibirCronograma} >Qua</Button>
            <Button onClick={ExibirCronograma} >Qui</Button>
            <Button onClick={ExibirCronograma} >Sex</Button>
            <Button onClick={ExibirCronograma} >Sab</Button>
            <Button onClick={ExibirCronograma} >Dom</Button>
        </ButtonGroup>

        {CronogramaDia && (

            <div className='CardInfo' >

                <Card sx={{ maxWidth: 345 }}>
                    <CardContent >
                     
                        <Typography className='CardDia' variant="body2" color="text.secondary">
                            Nome:{localStorage.getItem("nome")} &nbsp; Função:{localStorage.getItem("trabalho")}
                            <br />
                            <div className='botaoVerMusicas'>
                                <Stack spacing={2} direction="row">
                                    <Button onClick={VerMusicas} variant="outlined">Ver Musicas</Button>
                                </Stack>
                            </div>
                            <Stack spacing={2} direction="row">
                                <Button onClick={LimparF} variant="outlined">Limpar</Button>
                            </Stack>
                        </Typography>
                    </CardContent>
                </Card>


            </div>

        )}
       <div className='containerCard'>
          {AbrirMusicas && (
           <div className='CardInfo'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            <i> <b> Musicas do Dia </b> </i>
                        </Typography>
                        <Typography className='CardDia' variant="body2" color="text.secondary">
                            Musica:{localStorage.getItem("musica")} &nbsp; <p></p> Tom:{localStorage.getItem("tom")}
                            <div className='botaoVerMusicas'>
                                <Stack spacing={2} direction="row">
                                    <Button onClick={ExibirCronograma} variant="outlined">Ver Cronograma</Button>
                                </Stack>
                                <Stack spacing={2} direction="row">
                                    <Button onClick={LimparM} variant="outlined">Limpar</Button>
                                </Stack>
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
                </div>
           
        )}
        
        </div>
    </div>)
}
export default ButtonDays 
