import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SeattleComponent } from "./seattle/seattle.component";
import { SanjoseComponent } from "./sanjose/sanjose.component";
import { BurbankComponent } from "./burbank/burbank.component";
import { DallasComponent } from "./dallas/dallas.component";
import { DcComponent } from "./dc/dc.component";
import { ChicagoComponent } from "./chicago/chicago.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    DcComponent,
    ChicagoComponent,
    PagenotfoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
