import { EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit, OnChanges {
  @Input() timezone: string | undefined;
  @Input() current = false;
  @Output() currentChange = new EventEmitter<boolean>();
  dateString: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timezone) {
      this.setDate();
    }
  }

  updateRequested() {
    this.setDate();
  }

  currentChanged() {
    this.currentChange.emit(!this.current);
  }

  private setDate() {
    this.dateString = new Date().toLocaleString('en-US', {timeZone: this.timezone})
  }

}
