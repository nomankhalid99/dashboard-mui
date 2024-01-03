import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import GeoGraphyChart from "../../components/GeoGraphyChart";


const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return(
        <Box m='20px'>
            <Header title='Geography Chart' subtitle='Simple Geography Chart' />
            <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
                <GeoGraphyChart/>
            </Box>
        </Box>
    )
}

export default Geography;