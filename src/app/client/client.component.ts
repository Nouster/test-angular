import { Component, OnInit } from '@angular/core';
import { ClientAPIService } from '../client-api.service';
import { IClient } from './IClient.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  client: IClient = {
    clientID: 'client',
    email: 'client@example.com',
  };
  constructor(private clients: ClientAPIService) {}

  ngOnInit(): void {
    this.displayClient();
  }

  displayClient(): void {
    this.clients.getClient().subscribe((client) => {
      this.client = client;
    });
  }
}
