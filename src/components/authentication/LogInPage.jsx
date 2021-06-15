import React from "react";
import styled from '@emotion/styled'
import theme  from "../../theme/theme"
import { Box, Text, FormControl, FormLabel, Input } from "@chakra-ui/react";


export const LogInPage = () => {
  return (
    <PageBackground >
      <Image>

      </Image>
        <FormBackground>
          <FormContainer>
            <Header>Login To Your Account</Header>
              <FormItem >
                <Label>Email address</Label>
                <Input type="email" />
              </FormItem>
            <FormItem>
              <Label>Password</Label>
              <Input type="password" />
            </FormItem>
          </FormContainer>
        </FormBackground>
    </PageBackground>
  );
}


const PageBackground = styled(Box)`
background-color: ${theme.colors.lightBlue};
height: 100vh;
display: flex;
`

const FormBackground = styled(Box)`
background-color: white;
border-radius: 12px; 
width: 30%;
height: 90%;
margin-top: 32px;
margin-right: 56px;
`

const FormContainer = styled(Box)`
padding-top: 25%;
padding-right: 20%;
padding-left: 20%;
`

const Label = styled(FormLabel)`
color: ${theme.colors.black};
font-size: 18px;
`

const FormItem = styled(FormControl)`
padding-bottom: 24px;
`

const Image = styled(Box)`
width: 70%;
`

const Header = styled(Text)`
font-weight: 700;
font-size: 24px;
text-align: center;
padding-bottom: 48px;
`
