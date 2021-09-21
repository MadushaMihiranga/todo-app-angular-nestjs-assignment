import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LoginPageComponent } from './login-page/login-page.component';

import {MatCardModule} from '@angular/material/card';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NG_VALIDATORS, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import { ToolbarComponent } from './landing-page/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatTooltipModule} from "@angular/material/tooltip";
import { HttpClientModule } from "@angular/common/http";
import { TodoFormComponent } from './landing-page/todo-form-dialog/todo-form/todo-form.component';
import {
  TodoFormDialogComponent,
  /*TodoFormDialogContent*/
} from './landing-page/todo-form-dialog/todo-form-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatGridListModule} from "@angular/material/grid-list";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodoTableComponent } from './landing-page/todo-table/todo-table.component';
import {MatMenuModule} from "@angular/material/menu";
import { TodoNotificationsComponent } from './landing-page/todo-notifications/todo-notifications.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { TodoUpdateDuedateComponent } from './landing-page/todo-update-duedate/todo-update-duedate.component';
import { TodoUpdateDuedateFormComponent } from './landing-page/todo-update-duedate/todo-update-duedate-form/todo-update-duedate-form.component';
import {TodoDeleteConfirmationComponent} from './landing-page/todo-delete-confirmation/todo-delete-confirmation.component';
import { TodoDeleteConfirmationContentComponent } from './landing-page/todo-delete-confirmation/todo-delete-confirmation-content/todo-delete-confirmation-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LandingPageComponent,
    ToolbarComponent,
    TodoFormComponent,
    TodoFormDialogComponent,
    /*TodoFormDialogContent,*/
    PagenotfoundComponent,
    TodoTableComponent,
    TodoNotificationsComponent,
    TodoUpdateDuedateComponent,
    TodoUpdateDuedateFormComponent,
    TodoDeleteConfirmationComponent,
    TodoDeleteConfirmationContentComponent,
  ],
  entryComponents:[TodoFormDialogComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        HttpClientModule,
        MatDialogModule,
        MatSelectModule,
        MatDatepickerModule,
        MatGridListModule,
        MatMenuModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
