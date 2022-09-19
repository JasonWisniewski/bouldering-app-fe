import styled from '@emotion/styled';
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButtons} from '@ionic/react';
import {person} from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';

const SettingsPage: React.FC = () => {

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
            <IonIcon icon={person} style={{fontSize: `24px`}}/>
          </ IonButtons>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Settings"/>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
