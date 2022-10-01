import styled from '@emotion/styled';
import React from "react";
import {IonButton, IonContent, IonInput, IonItem, IonLabel, IonList} from "@ionic/react";

export interface SignUpProps {
  setShowModal: (showModal: boolean) => void;
}

const SignUp = ({setShowModal}: SignUpProps) => {
  return (
    <>
      <IonContent>
        <div>Sign up for a account fool</div>
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
            <IonLabel position="stacked">User Name</IonLabel>
            <IonInput value=''> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput value=''> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput value=''> </IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Confirm Password</IonLabel>
            <IonInput value=''> </IonInput>
          </IonItem>
          <IonItem>
            {/*<IonButton OnClick={() => console.log('click')}>*/}
            {/*  <IonLabel position="stacked">Don't have an account? Signup!</IonLabel>*/}
            {/*</IonButton>*/}
          </IonItem>
        </IonList>
      </IonContent>
    </>
  )
}

export default SignUp;
