import { Component, OnInit } from '@angular/core';

import * as io from 'socket.io-client';


@Component({
  selector: 'app-home-socket',
  templateUrl: './home-socket.component.html',
  styleUrls: ['./home-socket.component.scss']
})
export class HomeSocketComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    var socket = io.connect('http://localhost:1337');
    socket.on('connect', function(){
      socket.emit('event', { name: 'khore' });

      socket.on('message', function(data){
        console.log(data.msg);
      })

    }); 

  }

}
