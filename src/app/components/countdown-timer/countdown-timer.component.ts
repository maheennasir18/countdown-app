import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CountdownService } from '../../services/countdown.service';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="countdown() !== null">
      <h2>Seconds left to deadline: {{ countdown() }}</h2>
    </div>
  `,
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  countdown = signal<number | null>(null);
  private destroy$ = new Subject<void>();

  constructor(private countdownService: CountdownService) {}

  ngOnInit(): void {
    this.countdownService.fetchDeadline().pipe(takeUntil(this.destroy$)).subscribe((secondsLeft) => {
      if (secondsLeft !== null) {
        this.countdown.set(secondsLeft);
        this.countdownService.startCountdown(secondsLeft);
      }
    });

    this.countdownService.getCountdown().pipe(takeUntil(this.destroy$)).subscribe((secondsLeft) => {
      this.countdown.set(secondsLeft);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
