--- Data Binding ---

Two types - 
1. One way data binding
2. Two way data binding

One way ->
1. Component to view only
    String interpolation: {{data.name}}
    property binding: [property] = data  or bind-property = data (disabled, hidded, checked)
                      Ex:-> <img [src]="product.image" />, <input [value]="name" />
    attrbute binding: [attr.aria-hidden]=""
2. View to component only
    Event binding: (data)="expression"
                   Ex:-> <input (input)="onNameChange($event)" />, <input (click)="onNameChange($event)" />

Two way ->
component to view <--=--> View to component
    [(ngModel)] -> to use need- FormModule( @angular/forms )
    Ex:-> 
