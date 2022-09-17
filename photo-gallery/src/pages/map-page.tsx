import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonGrid, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {useEffect, useState} from "react";
import {AreasListView} from '../../../libs/components/src/lib/areas-list/areas-list'
import styled from "@emotion/styled";

const StyledAreasListView = styled.div(
  `
  color: red;
  `
)

const MapPage: React.FC = () => {

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
  console.log(areas);

  //TODO write fxn to get # of problems in each area
  const areaProblems = () => {

  }

  //TODO write fxn to get

  return (
    <IonPage>
      <IonGrid>

        {areas && areas.map((area: any) =>
          <IonRow key={area.id}>
            <IonCol >
              {area.name}
            </IonCol>
          </IonRow>
        )}

      </IonGrid>
      {/*<AreasListView />*/}
    </IonPage>
  );
};

export default MapPage;
