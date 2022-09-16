import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useEffect, useState} from "react";

const Tab1: React.FC = () => {

  const [areas, setAreas] = useState([])
  // Function to collect data

  const getApiData = async () => {
    const response = await fetch(
      "http://localhost:3002/areas"
    ).then((response) => response.json());
    // update the state
    setAreas(response);
  };

  useEffect(() => {
    getApiData();
  }, []);
  //TODO write logic to get the
  console.log(areas);

  return (
    <IonPage>
      {areas && areas.map((area: any) =>
        <p key={area.id}>
          {area.name}
        </p>
        )}
    </IonPage>
  );
};

export default Tab1;
