import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  // add setter to add condition whenever the property changes
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}

// with this directive, we tried to create a custom structural directive.
// the way a structural directive works, is that it transform the element into a <ng-template> element. ex:
/*
 * <div *ngIf="true">Test</div> will transform into:
 * <ng-template [ngIf]="true"><div>Test</div></ng-template>
 */
