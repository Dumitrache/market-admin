import { Component } from '@angular/core';
import { ImportFileService } from './import-file.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'import-file',
    templateUrl: 'import-file.component.html',
    styleUrls: ['import-file.component.css']
})
export class ImportFileComponent {

    public fileInput: any;
    public options: any;

    constructor(private service: ImportFileService, private notification: NotificationsService) {
        this.options = {
            position: ["top", "right"],
            timeOut: 3000,
            pauseOnHover: true,
            lastOnBottom: false,
            animate: 'scale'
        };
        this.fileInput = "";
    }

    addFile(): void {
        let inputElement: HTMLInputElement = document.getElementById('fileImport') as HTMLInputElement,
            files: FileList = inputElement.files,
            file = files[0];

        this.service.insertFile(file).subscribe(rez => {
            if (rez !== undefined) {
                for (let item of rez.Errors) {
                    this.notification.error('Import', item);
                }
            }
            else {
                this.notification.success('Import', 'File was saved!')
            }
        });
    }
}
