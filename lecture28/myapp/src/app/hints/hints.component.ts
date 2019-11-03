import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HintsService } from '../services/hints.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.scss'],
})
export class HintsComponent implements OnInit {
  private someHint: string;

  constructor(private connect: HintsService, ) { }

  ngOnInit() {
    timer(0, 5000).subscribe(() => {
      this.connect.getHints().subscribe(data => {
        const count = this.connect.getRandom(data);
        this.someHint = data[count].hint;
      });
    });
  }

}
