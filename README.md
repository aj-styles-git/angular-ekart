#Directives

1. Component Directives
2. Attribute Directives 
    - Built in ---> ngStyle, ngClass
    - <div changeToGreen>Some content</div>
    @Directive({
        selector: '[changeToGreen]'
    })
    export class ChangeToGreen{

    }
3. Structural Directive
    - ngIf, ngFor, ngSwitch

4. @Input: Custom Property Binding(pass data from component to component)
    - Use @Input to Pass data to Parent component to child component

5. @Output: Custom Property Binding(pass data from component to component)
    - Use @Output to Pass data to Child component to Parent component

6. Pass data to Sibling components



###### ADDITIONAL INFO ######

1. Template reference variable
 ex- <p #searchInput></p>
     <button (click)="greet(childComp)">Greet from Parent</button>

2. ViewChild
3. ViewChildren
4. ng-template
5. ng-container
6. ng-content
7. @ContentChild()
8. @ContentChildren()