import React from 'react';
import { IonToolbar, IonTitle, IonFooter, IonContent } from '@ionic/react';

export const Footer: React.FC = () => (
	<>
		<IonContent />
	
		<IonFooter>
			<IonToolbar color="tertiary">
				<IonTitle>Underscore</IonTitle>
			</IonToolbar>
		</IonFooter>
		
	</>
);