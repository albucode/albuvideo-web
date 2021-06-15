import React from "react";
import styled from '@emotion/styled'
import theme  from "../../theme/theme"
import { Box, Text } from "@chakra-ui/react";


export const LogInPage = () => {
  return (
    <PageBackground >
      <Image>

      </Image>
        <FormBackground>
          <FormContainer>
            <Header>Login To Your Account</Header>
          </FormContainer>

        </FormBackground>
    </PageBackground>
  );
}

const Image = styled(Box)`
width: 70%;
`

const PageBackground = styled(Box)`
background-color: ${theme.colors.lightBlue};
height: 100vh;
display: flex;
`

const FormContainer = styled(Box)`
padding-top: 25%;
`

const FormBackground = styled(Box)`
background-color: white;
border-radius: 12px; 
width: 30%;
height: 90%;
margin-top: 32px;
margin-right: 56px;
`

const Header = styled(Text)`
font-weight: 700;
font-size: 24px;
text-align: center;
`
