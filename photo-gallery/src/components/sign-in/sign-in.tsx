import styled from '@emotion/styled';
import React from "react";
import {IonButton} from "@ionic/react";

export interface SignInProps {
  setShowModal: (showModal: boolean) => void;
}

const SignIn = ({setShowModal}: SignInProps) => {
  return (
    <>
      <div>Sign yo ass in fool</div>
      <IonButton onClick={() => {
        //making it in here but state not changing
        console.log('made it to onclick')
        setShowModal(false)
      }}
                 style=
                   {{
                   padding: '10px',
                   margin: '0',
                   height: '40px',
                   width: '40px'
                 }}
      >
        X
      </IonButton>
    </>
  )
}

export default SignIn;
