import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NotificationPanelComponent } from './components/notification-panel/notification-panel.component';
import { MessagesPanelComponent } from './components/messages-panel/messages-panel.component';
import { RecentPostsPanelComponent } from './components/recent-posts-panel/recent-posts-panel.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, NotificationPanelComponent, MessagesPanelComponent, RecentPostsPanelComponent]
})
export class DashboardModule { }
