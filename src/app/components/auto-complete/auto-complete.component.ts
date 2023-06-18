import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group({
    ingredientName: [''],
  });

  // subject: Subject<any> = new Subject();

  // selectedCity: Ingredient | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.getIngredientList();
    // this.subject.pipe(debounceTime(500)).subscribe((inputValue: string) => {
    //   if (!inputValue) {
    //     this.autoCompleteResults = [];
    //     return;
    //   }
    //   this.autoCompleteResults = this.ingredientList.filter((ingredient) => {
    //     return ingredient.name
    //       .toLocaleLowerCase()
    //       .includes(inputValue.toLocaleLowerCase());
    //   });
    // });
  }

  // public searchForFood(event: any) {
  //   this.subject.next(event.target.value);
  // }

  // selectIngredient(ingredient: Ingredient) {
  //   this.selectedIngredient = ingredient;
  //   this.formGroup.get('ingredientName')?.setValue(ingredient.name);
  //   this.autoCompleteResults = [];
  // }

  // ngOnDestroy() {
  //   this.subject.unsubscribe();
  // }

  // private getIngredientList() {
  //   this.fetchDataService.fetchIngredients().subscribe(
  //     (data: []) => {
  //       this.ingredientList = data.map((o) => {
  //         return new Ingredient(o);
  //       });
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
