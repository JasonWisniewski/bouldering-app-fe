import styled from '@emotion/styled';
import {IonContent, IonModal, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButtons} from '@ionic/react';
import {person} from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';
import SignIn from '../components/sign-in/sign-in';
import {useState} from "react";
import SignUp from "../components/sign-up/sign-up";

const SettingsPage: React.FC = () => {

  const [showModal, setShowModal] = useState(false);

  const Title = styled.div(`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 25px
  `)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
              <Title>
                Utah Bouldering
              </Title>
          </IonTitle>
          {/*TODO make below in seperate component*/}
          {/*TODO if logged in go to account else signin/ signup*/}
          <IonButtons slot="start"  style={{padding: `16px`}} >
            <IonIcon onClick={() => setShowModal(true)} icon={person} style={{fontSize: `24px`}}/>
          </ IonButtons>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Settings"/>
      </IonContent>
      <IonModal isOpen={showModal}>
        {/*<SignIn setShowModal={setShowModal} />*/}
        <SignUp setShowModal={setShowModal} />
      </IonModal>
    </IonPage>
  );
};

export default SettingsPage;
