
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD:angular/src/app/app.module.ts
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// browser animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

>>>>>>> 69f6805568475729dd0dda642c21e8a13149bba8:simskpi/src/app/app.module.ts
import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ModalModule } from 'ng2-bootstrap/modal';
import { SelectModule } from 'ng2-select';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

<<<<<<< HEAD:angular/src/app/app.module.ts
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

// App as root module,  library
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { ToastrModule } from 'toastr-ng2';

// auth
import { AuthModule } from './auth/auth.module';
// admin
import { AdminModule } from './admin/admin.module';
// mahasiswa
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
// departemen
import { DepartemenModule } from './departemen/departemen.module';
// fakultas
import { FakultasModule } from './fakultas/fakultas.module';
// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals/modals.component';


// rpovider Guard for canActive
import { AuthGuard } from './_guards/auth.guard';
=======
// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { EkstrakurikulerComponent } from './ekstrakurikuler/ekstrakurikuler.component';
import { SkpiComponent } from './skpi/skpi.component';
import { LoginComponent } from './login/login.component';
import { VerifikasiComponent } from './verifikasi/verifikasi.component';
>>>>>>> 69f6805568475729dd0dda642c21e8a13149bba8:simskpi/src/app/app.module.ts

// providers servvice
import { AuthenticationService } from './_services/authentication.service';
import { DataService } from './_services/data.service';
import { AdminService } from './_services/admin.service';
import { MahasiswaService } from './_services/mahasiswa.service';
import { DepartemenService } from './_services/departemen.service';

@NgModule({
  imports: [
    BrowserModule,
<<<<<<< HEAD:angular/src/app/app.module.ts
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
=======
>>>>>>> 69f6805568475729dd0dda642c21e8a13149bba8:simskpi/src/app/app.module.ts
    AppRoutingModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
<<<<<<< HEAD:angular/src/app/app.module.ts
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    ChartsModule,

    HttpModule,
    //global module
    ModalModule,    
    //app
    AuthModule,
    AdminModule,
    MahasiswaModule,
    DepartemenModule,
    FakultasModule
=======
    ModalModule.forRoot(),
    SelectModule,
    ChartsModule
>>>>>>> 69f6805568475729dd0dda642c21e8a13149bba8:simskpi/src/app/app.module.ts
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
<<<<<<< HEAD:angular/src/app/app.module.ts
    ModalsComponent,
  ],
  exports: [
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,    

=======
    EkstrakurikulerComponent,
    SkpiComponent,
    LoginComponent,
    VerifikasiComponent
>>>>>>> 69f6805568475729dd0dda642c21e8a13149bba8:simskpi/src/app/app.module.ts
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
<<<<<<< HEAD:angular/src/app/app.module.ts
  },
  AuthGuard,
  AuthenticationService,
  AdminService,
  MahasiswaService,
  DepartemenService

  ],
  schemas: [NO_ERRORS_SCHEMA],
=======
  }],
>>>>>>> 69f6805568475729dd0dda642c21e8a13149bba8:simskpi/src/app/app.module.ts
  bootstrap: [ AppComponent ]
})
export class AppModule { }
