
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
function SelectDay(){


return(

    <div>

       <Box sx={{ minWidth: 120 }} style={{fontFamily :"Raleway"}}>
        <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Dia
        </InputLabel>
        <NativeSelect
        >
          <option value={1}>Segunda</option>
          <option value={1}>Terça</option>
          <option value={2}>Quarta</option>
          <option value={3}>Quinta</option>
          <option value={4}>Sexta</option>
          <option value={5}>Sabado</option>
          <option value={6}>Domingo</option>

        </NativeSelect>
       </FormControl>
      </Box>
    </div>
);
}
export default SelectDay
