import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const defaultTheme = {
    colorPrimary: 'red',
    colorSecondary: 'blue'
};
type Theme = typeof defaultTheme;
// It is possible to type like in jss, but requires a bit more time to play with typings
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
};
const Button = styled.button`
    background: ${({theme}) => theme.colorPrimary};
    border: 1px solid ${({theme}) => theme.colorSecondary};
    &:not(:last-child) {
        position: relative;
        left: '10px';
    }
`;
const DemoStyled = () => <Button>Styled</Button>
const DemoStyledContainer = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <DemoStyled />
        </ThemeProvider>
    )
}

export default DemoStyledContainer;

const DemoStyledLimitation = () => {  
    // No limitation here 
    if (Math.random() > 0.5) {
        return <span>This is not a button</span>;
    }

    return (
        <Button>Styled</Button>
    );
};
