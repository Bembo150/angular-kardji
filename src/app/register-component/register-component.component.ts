import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interface/user';

@Component({
  selector: 'register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  User !: User;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
