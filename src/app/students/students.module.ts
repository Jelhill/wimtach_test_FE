import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { CreateStudentDialogComponent } from './create-student/create-student-dialog.component';
import { EditStudentDialogComponent } from './edit-student/edit-student-dialog.component';

@NgModule({
    declarations: [StudentsComponent, CreateStudentDialogComponent, EditStudentDialogComponent],
    imports: [SharedModule, StudentsRoutingModule],
})
export class StudentsModule {}
