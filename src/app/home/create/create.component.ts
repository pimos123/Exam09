import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';

import{HerbService} from 'src/app/services/herb.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  herbform: FormGroup;
  submitted = false;
  id: any;
  constructor(private formBuilder: FormBuilder,
    private herb: HerbService,
    private router: Router,
    private activateRoute: ActivatedRoute,) { }

    ngOnInit() {
      this.initialCreateFormData();
  }

  get validate() { return this.herbform.controls; }

  private initialCreateFormData() {
      this.herbform = this.formBuilder.group({
          HerbId: ['0'],
          HerbName:['',[Validators.required]],
          HerbNature :['',[Validators.required]],
          HerbProperties : ['',[Validators.required]],
          });
  }
  onSubmit() {
    this.submitted = true;
    if (this.herbform.invalid) {
        return;
    }
    this.
    herb.onHerb(this.herbform.value)
        .then(() => {
           this.router.navigate(['/','home']);
        })
       
}


}

