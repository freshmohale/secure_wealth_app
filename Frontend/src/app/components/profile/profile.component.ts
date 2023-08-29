import { Component, OnInit } from '@angular/core';
import { GptService } from 'src/app/services/gpt.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private gptservice: GptService) { }

  ngOnInit(): void {
  }
 
}


