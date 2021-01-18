import React from 'react';
import { createTheming, createUseStyles } from 'react-jss';

const defaultTheme = {
    colorPrimary: 'red',
    colorSecondary: 'blue'
};
type Theme = typeof defaultTheme;
const ThemeContext = React.createContext(defaultTheme);
const theming = createTheming(ThemeContext);
const { ThemeProvider, useTheme } = theming;
const useStyles = createUseStyles<Theme, 'button'>((theme) => ({
    button: {
        background: theme.colorPrimary,
        border: `1px solid ${theme.colorSecondary}`,
        '&:not(:last-child)': {
            position: 'relative',
            left: 10
        }
    },
}));
const DemoJSS = (props: any) => {   
    const theme = useTheme();
    console.log('theme', theme);
    const classes = useStyles({...props, theme});
    return (
        <button className={classes.button}>JSS</button>
    );
}
const DemoJSSProvider = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <DemoJSS />
        </ThemeProvider>
    );
}

export default DemoJSSProvider;

const DemoJSSLimitation = (props: any) => {   
    if (Math.random() > 0.5) {
        return <span>This is not a button</span>;
    }

    const theme = useTheme(); // ERROR
    console.log('theme', theme);
    const classes = useStyles({...props, theme});
    return (
        <button className={classes.button}>JSS</button>
    );
}