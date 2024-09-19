import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegesComponent } from './colleges.component';

const routes: Routes = [
    {
        path: '',
        component: CollegesComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CollegesRoutingModule {}
