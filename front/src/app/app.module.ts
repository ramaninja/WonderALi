import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PreviewArticleCardComponent } from './preview-article-card/preview-article-card.component';
import { CommerceComponent } from './commerce/commerce.component';
import { CompteComponent } from './compte/compte.component';
import { DescriptifComponent } from './descriptif/descriptif.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewArticleCardComponent,
    CommerceComponent,
    CompteComponent,
    DescriptifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }