import { Component } from '@angular/core'

import { HeroSectionComponent } from "../../components/features/hero-section/hero-section.component"
import { HowItWorksComponent } from "../../components/features/how-it-works/how-it-works.component"
import { DividerComponent } from "../../layout/divider/divider.component"
import { RecentUploadsComponent } from "../../components/features/recent-uploads/recent-uploads.component"
import {environment} from "../../../environments/environment";

@Component({
	selector: 'app-homepage',
	standalone: true,
	imports: [
		HeroSectionComponent,
		HowItWorksComponent,
		RecentUploadsComponent,
		DividerComponent
	],
	templateUrl: './homepage.component.html',
	styleUrl: './homepage.component.css'
})
export class HomepageComponent {
	ngOnInit() {
		console.log('log from homepage, checking apiUrl')
		console.log('API URL:', environment.apiUrl);
	}

}
