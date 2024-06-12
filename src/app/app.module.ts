import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoiceCommandComponent } from './components/voice-command/voice-command.component';
import { CameraCaptureComponent } from './camera-capture/camera-capture.component';

@NgModule({
  declarations: [
    AppComponent,
    VoiceCommandComponent,
    CameraCaptureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
