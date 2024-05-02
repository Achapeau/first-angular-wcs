import { HttpEvent, HttpHandler, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

export const logInterceptor: HttpInterceptorFn = (req, next) => {
    var start = new Date().getTime();
    var requete = req.url

    return next(req).pipe(
    tap((res) => {
        if (res instanceof HttpResponse) {
            var elapsed = new Date().getTime() - start;
            console.log(`delay for the response from ${requete}: ${elapsed} ms`);            
        }
    })
    )

}