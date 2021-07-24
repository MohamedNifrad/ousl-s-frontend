import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StyleMasterService } from '../../service/style-master.service'

@Component({
  selector: 'app-style-master',
  templateUrl: './style-master.component.html',
  styleUrls: ['./style-master.component.css']
})
export class StyleMasterComponent implements OnInit {

  constructor(private api:StyleMasterService, private router: Router) { }

  ngOnInit(): void {
    this.getCategory()
    this.getItem()
  }

  form = new FormGroup({
    styleCode: new FormControl('', Validators.required),
    styleName: new FormControl('', Validators.required),
    styleQuantity: new FormControl('', Validators.required),
    styleStatus: new FormControl('', Validators.required),
    styleType: new FormControl('', Validators.required)
  });

  category
  getCategory()
  {
    this.api.getCategoryService().subscribe(
      response => this.category = response
    )
  }

  item
  getItem()
  {
    this.api.getItemService().subscribe(
      response => this.item = response
    )
  }

  arrayFor = [];
  i=0
  Add()
  {
    this.i++;

    let value = {
      "idMy":this.i,
      "styleCode":this.form.get('styleCode').value,
      "styleName":this.form.get('styleName').value,
      "styleQuantity":this.form.get('styleQuantity').value,
      "styleStatus":this.form.get('styleStatus').value,
      "styleType":this.form.get('styleType').value,
      "category":
      {
        "id":''
      },
      "item":
      {
        "id":''
      },
      "consumption":''
    }

    this.arrayFor.push(
      value
    )


    console.log(this.arrayFor)
  }

  selectArrayFor = [];
  onCheckedBox(a, b, c, d)
  {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    this.selectArrayFor.push(d)
    //this.arrayFor = this.arrayFor.filter((item) => item.idMy !== d.idMy);
  }

  onChangeCategory(a, b, c)
  {
    console.log(c.idMy)
    for(let i = 0; i < this.arrayFor.length; i++)
    {
      if(c.idMy = this.arrayFor[i].idMy)
      {
        this.arrayFor[i].category.id = a
      }
    }
    console.log(this.arrayFor)
    for(let j = 0; j <this.arrayFor.length; j++)
    {
      console.log(this.arrayFor[j])
    }
  }

  onChangeItem(a, b, c)
  {
    console.log(c.idMy)
    for(let i = 0; i < this.arrayFor.length; i++)
    {
      if(c.idMy = this.arrayFor[i].idMy)
      {
        this.arrayFor[i].item.id = a
      }
    }
    console.log(this.arrayFor)
  }

  onConsumption(a, b, c)
  {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(c.idMy)
    for(let i = 0; i < this.arrayFor.length; i++)
    {
      if(c.idMy = this.arrayFor[i].idMy)
      {
        this.arrayFor[i].consumption = a
      }
    }
    console.log(this.arrayFor)
  }

  delete()
  {
    for(let i =0; i < this.selectArrayFor.length; i++)
    {
      this.arrayFor = this.arrayFor.filter((item) => item.idMy !== this.selectArrayFor[i].idMy);
    }

  }

  message
  save()
  {
    console.log(this.arrayFor)
    this.api.saveList(this.arrayFor).subscribe(
      response =>
      {
        console.log(response)
        this.message =  "saved successfully."
        document.getElementById('success').click()
      },
      error =>
      {
        console.log(error)
        this.message =  "Oops. something went wrong. Please try again later"
        document.getElementById('error').click()
      }
    )
  }

}
