import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CollegesRoutingModule } from './colleges-routing.module';
import { CommonModule } from '@angular/common';
import { CollegesComponent } from './colleges.component';
import { CreateCollegeDialogComponent } from './create-college/create-college-dialog.component';
import { EditCollegeDialogComponent } from './edit-college/edit-college-dialog.component';

@NgModule({
    declarations: [CollegesComponent, CreateCollegeDialogComponent, EditCollegeDialogComponent],
    imports: [CommonModule, SharedModule, CollegesRoutingModule],
})
export class CollegesModule {}
