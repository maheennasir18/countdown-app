import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, interval, switchMap, takeWhile, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private apiUrl = '/api/deadline';
  private countdown$ = new BehaviorSubject<number | null>(null);

  constructor(private http: HttpClient) { }

  fetchDeadline(): Observable<number> {
    return this.http.get<{ secondsLeft: number }>(this.apiUrl).pipe(
      map((response) => response.secondsLeft),
      tap((secondsLeft) => this.countdown$.next(secondsLeft))
    );
  }

  startCountdown(initialSeconds: number): void {
    interval(1000)
      .pipe(
        takeWhile(() => initialSeconds > 0),
        tap(() => {
          initialSeconds--;
          this.countdown$.next(initialSeconds);
        })
      )
      .subscribe();
  }

  getCountdown(): Observable<number | null> {
    return this.countdown$.asObservable();
  }
}
