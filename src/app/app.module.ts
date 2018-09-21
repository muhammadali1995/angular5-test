import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { PostService } from './post/post.service';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostRoutingModule } from './post/post.routes';
import { PostModule } from './post/post.module';
import { RouterModule } from '@angular/router';
import { PostResolver } from './post/post.resolve';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    PostModule,
  ],
  providers: [
    PostResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
