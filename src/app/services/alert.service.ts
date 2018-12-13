import { Injectable } from '@angular/core';
declare const    toastr : any;
declare const swal: any;
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  notify(message: string, type: string) {
        toastr[type](message, 'แจ้งเตือน', {
            'closeButton': true,
            'debug': false,
            'newestOnTop': true,
            'progressBar': true,
            'positionClass': 'toast-top-right',
            'preventDuplicates': false,
            'onclick': null,
            'showDuration': '300',
            'hideDuration': '1000',
            'timeOut': '5000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut',
        });
    }

    confirmDelete(message: string = 'คุณต้องการจะลบข้อมูล ?'): Promise<any> {
        return swal(message, {
            icon: 'warning',
            buttons: ['ยกเลิก', 'ยืนยัน'],
            dangerMode: true
        });
    }
}

