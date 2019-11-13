import { IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar, 
        IonSearchbar, 
        IonList, 
        IonBadge, 
        IonLabel, 
        IonNote, 
        IonCheckbox, 
        IonItem, 
        IonFab, 
        IonFabButton, 
        IonIcon } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';

import { add } from 'ionicons/icons';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonHeader>
      <IonContent>
    <IonList>
      <IonItem>
        <IonCheckbox slot="start" />
        <IonLabel>
          <h1>Create Idea</h1>
          <IonNote>Run Idea by Brandy</IonNote>
        </IonLabel>
        <IonBadge color="success" slot="end">
          5 Days
        </IonBadge>
      </IonItem>
      <IonItem>
        <IonCheckbox slot="start"/>
        <IonLabel>
          <h1>Set up goals</h1>
          <IonNote>For every week</IonNote>
        </IonLabel>
        <IonBadge color="success" slot="end">
          1 Day
        </IonBadge>
      </IonItem>
    </IonList>
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton  onClick={() => props.history.push('./new')}>
        <IonIcon icon={add} />
      </IonFabButton>
    </IonFab>
  </IonContent>
    </IonPage>
  );
};

export default Home;
