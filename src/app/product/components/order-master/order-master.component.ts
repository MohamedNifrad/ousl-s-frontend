import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderMasterService } from '../../service/order-master.service'

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit {

  constructor(private api:OrderMasterService, private router: Router) { }

  ngOnInit(): void {
    this.getStyle()
    this.getBuyer()
  }

  form = new FormGroup({
    orderNumber: new FormControl('', Validators.required),
    orderDescription: new FormControl('', Validators.required),
    buyer: new FormControl('', Validators.required),
    styleNo: new FormControl('', Validators.required),
    orderQTY: new FormControl('', Validators.required)
  });

  
  arrayFor = []
  style
  getStyle()
  {
    this.api.getstyleService().subscribe(
      response => this.style = response
    )
  }

  buyer
  getBuyer()
  {
    this.api.getBuyerService().subscribe(
      response => this.buyer = response
    )
  }

 

  message
  userSelectStyle
  save()
  {
    let formValue = 
    {
      orderNo:'',
      description:'',
      orderQuantity:'',
      buyer:
      {
        id:''
      },
      styleMaster:
      {
        id:''
      }
    }

    formValue.orderNo = this.form.get('orderNumber').value;
    formValue.description = this.form.get('orderDescription').value;
    formValue.orderQuantity = this.form.get('orderQTY').value;
    formValue.buyer.id = this.form.get('buyer').value;
    formValue.styleMaster.id = this.form.get('styleNo').value;
      

    this.api.saveOrderMasterService(formValue).subscribe(
      response =>
      {
        this.userSelectStyle = this.style.filter((item) => item.id == formValue.styleMaster.id);
        console.log(response)
        console.log(this.userSelectStyle)



        this.arrayFor.push(
          {
            "style":this.userSelectStyle,
            "formValue":this.form.value
          }
        )

        console.log(this.arrayFor)
        //this.arrayFor.push(response)
      },
      error =>
      {
        // console.log(error)
        // this.message =  "Oops. something went wrong. Please try again later"
        // document.getElementById('error').click()
      }
    )
  }

  myvalue=0

  onCheckedBox(a, b, c)
  {
    console.log(a)
    console.log(b)
    console.log(c)

    if(a == true)
    {
      this.myvalue = Number(this.myvalue) + Number(c.formValue.orderQTY)
    }
    else
    {
      this.myvalue = Number(this.myvalue) - Number(c.formValue.orderQTY)
    }
  }

}
