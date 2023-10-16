import githubLogo from './github_logo.png'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'inline-flex',
        width: '100vw',
        height: '65px',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f5f5'
    },
    logo: {
        marginTop: '20px',
        height: '30px',
        width: '30px',
        marginBottom: '10px'
    },
    label: {
        marginTop: '28px',
        marginLeft: '10px'
    }
});

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img className={classes.logo} src={githubLogo} alt="GithubLogo" />
            <label className={classes.label}><b>GitHub</b></label>
        </div>
    )
}