import {
  Component,
  Injector,
  OnInit,
  EventEmitter,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AppComponentBase } from '@shared/app-component-base';
import { StudentServiceProxy, CreateStudentDto } from '@shared/service-proxies/service-proxies';

@Component({
  templateUrl: 'create-student-dialog.component.html',
})
export class CreateStudentDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  student = new CreateStudentDto();
  
  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    private _studentService: StudentServiceProxy,
    public bsModalRef: BsModalRef,
    private cd: ChangeDetectorRef
  ) {
    super(injector);
  }

  ngOnInit(): void {}

  save(): void {
    this.saving = true;
    
    this._studentService.create(this.student)
      .subscribe(() => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();
      }, () => {
        this.saving = false;
        this.cd.detectChanges();
      });
  }
}
