import { makeStyles } from "@material-ui/core"; 



export const usesStyles = makeStyles((theme)=>({
    
    mainView:{
        margin: '2em',
        display: 'flex',
        justifyContent: 'space-around', 
    },

    imgStyle:{
        width:'50%',
    },

    buttonPink:{
        background: '#ED06B2',
        color: 'white',
        textTransform: 'capitalize'
    },

    paperView:{
        margin: '2em',
        padding: '1.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: '10px',
        boxShadow: 'inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45)'
    },

    label:{
        margin: '0.5em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },

    h2:{
        fontSize:'2em',
        fontFamily: 'Comic Sans'
    }

}))