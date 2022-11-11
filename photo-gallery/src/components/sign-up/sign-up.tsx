import styled from '@emotion/styled';
import React from "react";
import {useState} from "react";
import {IonButton, IonContent, IonInput, IonItem, IonLabel, IonList} from "@ionic/react";

export interface SignUpProps {
  setShowModal: (showModal: boolean) => void;
}

const SignUp = ({setShowModal}: SignUpProps) => {

  const [userName, setUserName] = useState('')

  const handleSubmit = () => {
    fetch("http://localhost:3002/users", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application.json'
      },
      body: JSON.stringify({
          email: 'userfrom@FE222.com',
          password: 'passymcfe'
        }
      )
    }).then((response) => {
      console.log(response.json)
      if (response.status >= 200 && response.status < 300) {
        console.log(response.json())
      } else {
        console.log('failed to create account')
      }
    })
  }

  // fetch('/quad_messages/send_quad', {
  //   method: 'POST',
  //   headers: {
  //     'X-CSRF-Token': props.authenticityToken,
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     message: {
  //       id: message.id,
  //       code: message.code,
  //       subject: message.title,
  //       text: messageBody
  //     }
  //   })

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
        <form>

          <IonList>
            <IonItem>
              <IonLabel position="stacked">User Name</IonLabel>
              <IonInput value='' type='text' required={true}> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput value='' type='email' required={true}> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput value='' type='password' required={true}> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Confirm Password</IonLabel>
              <IonInput value='' type='password' required={true}> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Already have an account?
                <a>Sign in!</a>
              </IonLabel>
            </IonItem>
          </IonList>
          <IonButton onClick={() => handleSubmit()}>
            Submit!
          </IonButton>
        </form>
      </IonContent>
    </>
  )
}

export default SignUp;
