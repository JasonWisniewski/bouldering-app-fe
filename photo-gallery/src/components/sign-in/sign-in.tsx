import styled from '@emotion/styled';
import React from "react";
import {IonButton, IonContent, IonInput, IonItem, IonLabel, IonList} from "@ionic/react";

export interface SignInProps {
  setShowModal: (showModal: boolean) => void;
}

const SignIn = ({setShowModal}: SignInProps) => {
  return (
    <>
      <IonContent>

        <div>Sign yo ass in fool</div>
        <IonButton onClick={() => {
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
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput value=''> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput value=''> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Don't have an account? Signup!</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  )
}

export default SignIn;
