import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Utah Bouldering</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <ExploreContainer name="Search page" />
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
