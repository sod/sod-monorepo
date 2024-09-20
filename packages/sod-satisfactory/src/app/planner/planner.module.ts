import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DefaultComponent} from './component/default/default.component';
import {PlannerRoutingModule} from './planner-routing.module';

@NgModule({
    imports: [CommonModule, PlannerRoutingModule, SharedModule, DefaultComponent],
})
export class PlannerModule {}
