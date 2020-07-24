import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userVector: any[] = []
  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe(
      (data) =>{
        console.log(data)
        this.userVector = data['results']
      },
      (error) =>{
        console.error(error)
      }
    )
  }

}
