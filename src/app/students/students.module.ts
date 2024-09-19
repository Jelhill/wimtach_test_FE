import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { CreateStudentDialogComponent } from './create-student/create-student-dialog.component';
import { EditStudentDialogComponent } from './edit-student/edit-student-dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [StudentsComponent, CreateStudentDialogComponent, EditStudentDialogComponent],
    imports: [CommonModule, SharedModule, StudentsRoutingModule],
})
export class StudentsModule {}
