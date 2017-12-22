import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";

import {MessageComponent} from "./message/message.component";

const routes : Routes = [
    {
        path: "",
        redirectTo: "/messages",
        pathMatch: "full"
    }, {
        path: "message",
        component: MessageComponent
    },
    //{ path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}