import { Component, OnInit,  ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GptService } from 'src/app/services/gpt.service';
import { MatStepper } from '@angular/material/stepper'; 
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: [ '', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    forthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    // sixthCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    // seventhCtrl: ['', Validators.required],
  });
  selectedProductFormGroup = this._formBuilder.group({
    // seventhCtrl: ['', Validators.required],
  });
  isLinear = true;
  hidden = true;

  userAnswers = {
    has_dependents: false,
    planning_for_child_education: false,
    physically_demanding_job: false,
    specific_financial_goals: false,
    retirement_plan_with_tax_benefits: false
  };

  simplified: string = '';
  recommendations: any[] = [];
  productmeaning: string = ''
  select = false
  prodName: string = ''
  selectedProduct: any; // To store the selected product
  chosenProd: any;
  redirectURL: any
  // selectedProductFormGroup: FormGroup = this._formBuilder.group({}); // Initialize FormGroup for the selected product st // FormGroup for the selected product step
  @ViewChild('stepper') stepper!: MatStepper;

  constructor(private _formBuilder: FormBuilder, private gptservice: GptService) {}


  ngOnInit(): void {
    console.log(this.firstFormGroup)
    this.selectedProductFormGroup = this._formBuilder.group({});
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    
    // this.getMeaningOfWord()
    console.log("this is me selecting: " + this.selectedProduct.title) //This Displays The Selected Product
    console.log("this is me getting explanation: " + this.selectedProduct.explanation) //This Displays The Selected Product
    console.log("meaning is: " + this.simplified)
    this.stepper.selectedIndex = this.stepper.steps.length - 1; // Move to the selected product step
    this.select = true
  }

  async getMeaningOfWord() {
    try {
      const response = await this.gptservice
        .getMeaningOfWord(this.selectedProduct.title)
        .toPromise();
      this.simplified = response.explanation;
      this.prodName = this.selectedProduct.title
      console.log("from async word: " + this.simplified)
      this.select = true
    } catch (error) {
      console.error('Error fetching the meaning of the word:', error);
    }
  }

  clearSelect(){
    this.select = false
    this.simplified = " "
    this.prodName = " "
    this.stepper.selectedIndex = this.stepper.steps.length - 1;
  }

  DONE() {
    this.userAnswers = {
      has_dependents: this.secondFormGroup.get('secondCtrl')?.value === 'true',
      planning_for_child_education: this.fifthFormGroup.get('fifthCtrl')?.value === 'true',
      physically_demanding_job: this.firstFormGroup.get('firstCtrl')?.value === 'true',
      specific_financial_goals: this.forthFormGroup.get('forthCtrl')?.value === 'true',
      retirement_plan_with_tax_benefits: this.thirdFormGroup.get('thirdCtrl')?.value === 'true',
    };
  
    this.gptservice.getRecommendations(this.userAnswers).subscribe(
      (data) => {
        this.recommendations = data.recommendedProducts;
        console.log(this.recommendations);
        console.log('this is returning something');
        console.log(this.userAnswers);
      },
      (error) => {
        console.error('Error fetching recommendations:', error);
      }
    )

}

getThisProduct(title: any){
  this.chosenProd = this.selectedProduct.title
  
  if (this.chosenProd == "Life Cover"){
    this.redirectURL = 'https://www.absa.co.za/personal/insure/my-life/explore/'
  }

  if (this.chosenProd == "Disability Cover"){
    this.redirectURL = 'https://www.absa.co.za/personal/insure/my-life/instant-life/'
  }

  if (this.chosenProd == "Retirement Cover"){
    this.redirectURL = 'https://www.absa.co.za/personal/save-invest/products/absa-retirement-annuity/'
  }

  if (this.chosenProd == "Educational Trust"){
    this.redirectURL = 'https://www.absa.co.za/personal/save-invest/products/absa-fundisa-fund/'
  }

  if (this.chosenProd == "Investments"){
    this.redirectURL = 'https://www.absa.co.za/personal/save-invest/products/'
  }

  const newWindow: Window | null = window.open("", "_blank");
if (newWindow) {
    newWindow.location.replace(this.redirectURL);
}

  // window.location.replace(this.redirectURL)
  console.log("This returns the chosen product: " + this.chosenProd)
  console.log("This returns the external URL: " + this.redirectURL)
}





}
