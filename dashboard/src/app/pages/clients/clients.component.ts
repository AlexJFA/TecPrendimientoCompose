import { Component, DoCheck, inject, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import swal from 'sweetalert';
import { ClientsService } from '../../services/clients.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { CardService } from '../../services/card.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NavbarComponent, RouterLink],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
/**
 * Represents the ClientsComponent class.
 * This component is responsible for managing the clients data.
 */
export class ClientsComponent implements OnInit {
  public clients: Client[] = [];

  public oneClientForm: FormGroup = new FormGroup({
    userId: new FormControl('', Validators.required),
  });

  public createForm: FormGroup = new FormGroup({
    userId: new FormControl('') || null || undefined,
    firtsName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    instagram: new FormControl(''),
    linkedin: new FormControl(''),
    website: new FormControl(''),
    photo: new FormControl(null),
    description: new FormControl(''),
    spotify: new FormControl(''),
    facebook: new FormControl(''),
    youtube: new FormControl(''),
    x: new FormControl(''),
    tiktok: new FormControl(''),
    twitch: new FormControl(''),
    idCard: new FormControl(''),
    map: new FormControl(''),
    myfile: new FormControl(''),
    userName: new FormControl(''),
  });

  public updateForm: FormGroup = new FormGroup({
    userId: new FormControl('') || null || undefined,
    firtsName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    instagram: new FormControl(''),
    linkedin: new FormControl(''),
    website: new FormControl(''),
    photo: new FormControl(''),
    photoNew: new FormControl(null),
    description: new FormControl(''),
    spotify: new FormControl(''),
    facebook: new FormControl(''),
    youtube: new FormControl(''),
    x: new FormControl(''),
    tiktok: new FormControl(''),
    twitch: new FormControl(''),
    idCard: new FormControl(''),
    map: new FormControl(''),
    myfile: new FormControl(''),
    userName: new FormControl(''),
  });

  public deleteForm: FormGroup = new FormGroup({
    userId: new FormControl('', Validators.required),
  });

  // --------------------------------------- inyect of dependencies ---------------------------------------
  // inject the ClientsService
  public router = inject(Router);
  // inject the ClientsService
  public clientService = inject(ClientsService);

  public cardService = inject(CardService);

  // --------------------------------------- methods ---------------------------------------
  ngOnInit(): void {
    // get all clients
    this.getall();
  }

  // get all clients
  getall() {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });
  }

  // get one client
  getOne() {
    let userId = this.oneClientForm.value.userId;
    this.clientService.getOneClient(userId).subscribe((data) => {});
  }

  /**
   * Creates a new client.
   *
   * @remarks
   * This method creates a new client by sending a POST request to the server with the client data.
   * It retrieves the client data from the `createForm` FormGroup and appends it to a FormData object.
   * The FormData object is then sent to the server using the `addClient` method of the `clientService`.
   * After a successful response from the server, the method displays a modal alert with the response message,
   * retrieves all clients using the `getall` method, and resets the `createForm` FormGroup.
   */

  /**
   * Handles the file selection event.
   */
  public file: File | null = null;

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      // this.createForm.get('photo')?.setValue(file);
    }
    return;
  }

  create() {
    // const client: Client = this.createForm.value;

    const formData = new FormData();
    formData.append('firtsName', this.createForm.get('firtsName')?.value);
    formData.append('lastName', this.createForm.get('lastName')?.value);
    formData.append('email', this.createForm.get('email')?.value);
    formData.append('phone', this.createForm.get('phone')?.value);
    formData.append('instagram', this.createForm.get('instagram')?.value);
    formData.append('linkedin', this.createForm.get('linkedin')?.value);
    formData.append('website', this.createForm.get('website')?.value);
    formData.append('photo', this.file as Blob);
    formData.append('description', this.createForm.get('description')?.value);
    formData.append('spotify', this.createForm.get('spotify')?.value);
    formData.append('facebook', this.createForm.get('facebook')?.value);
    formData.append('youtube', this.createForm.get('youtube')?.value);
    formData.append('x', this.createForm.get('x')?.value);
    formData.append('tiktok', this.createForm.get('tiktok')?.value);
    formData.append('twitch', this.createForm.get('twitch')?.value);
    formData.append('idCard', this.createForm.get('idCard')?.value);
    formData.append('map', this.createForm.get('map')?.value);
    formData.append('myfile', this.createForm.get('myfile')?.value);
    formData.append('userName', this.createForm.get('userName')?.value);

    let backendResponse: any = {};
    this.clientService.addClient(formData).subscribe((data) => {
      backendResponse = data;

      //   // modal of alert
      swal({
        title: `${backendResponse.title}`,
        text: `${backendResponse.message}`,
        icon: `${backendResponse.status}`,
        timer: 3000,
      });

      //   // get all clients
      this.getall();

      // reset the form
      this.createForm.reset();
      this.file = null;
      return;
    });
  }

  // get one client to update
  /**
   * Retrieves and updates a single client based on the provided userId.
   */
  getBackEndOneUpdateClient() {
    // let userId = this.oneClientForm.value.userId;

    // get the client by userId and set the values to the form

    // this.clientService.getOneClient(userId).subscribe((data) => {
    //   this.updateForm.setValue({
    //     userId: data.userId,
    //     firtsName: data.firtsName,
    //     lastName: data.lastName,
    //     country: data.country,
    //     email: data.email,
    //     phone: data.phone,
    //     instagram: data.instagram,
    //     linkedin: data.linkedin,
    //     website: data.website,
    //     photo: data.photo,
    //   });
    // });

    // reset the form
    this.oneClientForm.reset();
  }

  getLocalOneClient(index: number) {
    const client = this.clients[index];

    // set the values to the form
    this.updateForm.setValue({
      userId: client.userId,
      firtsName: client.firtsName,
      lastName: client.lastName,
      email: client.email,
      phone: client.phone,
      instagram: client.instagram,
      linkedin: client.linkedin,
      website: client.website,
      photo: client.photo,
      photoNew: this.file as Blob,
      description: client.description,
      spotify: client.spotify,
      facebook: client.facebook,
      youtube: client.youtube,
      x: client.x,
      tiktok: client.tiktok,
      twitch: client.twitch,
      idCard: client.idCard,
      map: client.map,
      myfile: client.myfile,
      userName: client.userName,
    });
    return;
  }

  // update a client
  update() {
    const formData = new FormData();
    const client: Client = this.updateForm.value;
    const id = this.updateForm.get('userId')?.value;
    let backendResponse: any = {};

    // en caso de que tenga un archivo, se agrega el archivo al formData
    if (this.file) {
      formData.append('firtsName', this.updateForm.get('firtsName')?.value);
      formData.append('lastName', this.updateForm.get('lastName')?.value);
      formData.append('email', this.updateForm.get('email')?.value);
      formData.append('phone', this.updateForm.get('phone')?.value);
      formData.append('instagram', this.updateForm.get('instagram')?.value);
      formData.append('linkedin', this.updateForm.get('linkedin')?.value);
      formData.append('website', this.updateForm.get('website')?.value);
      formData.append('photo', this.updateForm.get('photo')?.value);
      formData.append('photoNew', this.file as Blob);
      formData.append('description', this.updateForm.get('description')?.value);
      formData.append('spotify', this.updateForm.get('spotify')?.value);
      formData.append('facebook', this.updateForm.get('facebook')?.value);
      formData.append('youtube', this.updateForm.get('youtube')?.value);
      formData.append('x', this.updateForm.get('x')?.value);
      formData.append('tiktok', this.updateForm.get('tiktok')?.value);
      formData.append('twitch', this.updateForm.get('twitch')?.value);
      formData.append('idCard', this.updateForm.get('idCard')?.value);
      formData.append('map', this.updateForm.get('map')?.value);
      formData.append('myfile', this.updateForm.get('myfile')?.value);
      formData.append('userName', this.updateForm.get('userName')?.value);

      this.clientService.updateClient(formData, id).subscribe((data) => {
        backendResponse = data;

        // modal of alert
        swal({
          title: `${backendResponse.title}`,
          text: `${backendResponse.message}`,
          icon: `${backendResponse.status}`,
          timer: 3000,
          buttons: [false],
        });

        // get all clients
        this.getall();

        // reset the form and the file
        this.updateForm.reset();
        this.file = null;  
      });
      return;
    }else{
      // en caso de que este sin archivo soolo enviamos el client
    this.clientService.updateClient(client, id).subscribe((data) => {
      backendResponse = data;

      // modal of alert
      swal({
        title: `${backendResponse.title}`,
        text: `${backendResponse.message}`,
        icon: `${backendResponse.status}`,
        timer: 3000,
        buttons: [false],
      });

      // get all clients
      this.getall();

      // reset the form
      this.updateForm.reset();
      return;
    });
    }
  }

  // get one client to delete
  public clientToDelete?: Client;

  // get the index of the client to delete
  getIndex(index: number) {
    this.clientToDelete = this.clients[index];
    return;
  }

  /**
   * Navigates to the card page for a given client's user ID.
   *
   * @param index - The index of the client in the clients array.
   */
  navigateToCardPage(index: number): void {
    // const userId = client.userId
    // const idCard = client.idCard
    // this.router.navigate(['/card', idCard]);

    const client = this.clients[index];
    const userName = client.userName;
    const url = `https://web.tecprendimiento.com/card/${userName}`;
    this.cardService.setOneUser(client);
    // this.router.navigate(['/card', userName]);
    window.open(url, '_blank')
    return;
  }

  // delete a client
  delet() {
    let backendResponse: any = {};
    if (this.clientToDelete && this.clientToDelete.userId) {
      this.clientService
        .deleteClient(this.clientToDelete.userId)
        .subscribe((data) => {
          backendResponse = data;

          // modal of alert
          swal({
            title: `${backendResponse.title}`,
            text: `${backendResponse.message}`,
            icon: `${backendResponse.status}`,
            timer: 3000,
          });

          // get all clients
          this.getall();

          // reset the form
          this.deleteForm.reset();
          return;
        });
    }
  }

  // ---------------------------------  Seccion de cards  ---------------------------------------------

  // getLocalOneClientToCard(index: number) {
  // const client = this.clients[index];

  // this.router.navigate(['/card', client.userId]);
  // this.router.navigateByUrl('/card');

  // this.clientService.getClientCard(client.userId).subscribe((data) => {
  //   this.card = data;
  // });

  // }
}
