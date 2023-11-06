import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserRepository } from '../../models/userModel/user.repository';
import Swal from 'sweetalert2';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class Signin {
  pack: boolean = false;
  package = 0;
  username = '';
  password = '';
  email = '';
  checkPassword = '';
  kid_name = '';
  kid_age: number = 0;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private userRepository: UserRepository,
    private router: Router
  ) {}


    

  toggleChangeClass() {
    const mainContainer =
      this.elementRef.nativeElement.querySelector('.container');
    if (mainContainer) {
      if (mainContainer.classList.contains('change')) {
        this.renderer.removeClass(mainContainer, 'change');
      } else {
        this.renderer.addClass(mainContainer, 'change');
      }
    }
  }

  changeBackgroundColor(section: string) {
    const element = document.querySelector(`.${section}`);
    if (element) {
      element.classList.toggle('choose');
    }
  }

  packChange() {
    this.pack = !this.pack;
  }

  login() {
    const isAuthenticated = this.userRepository.loginUser(
      this.username,
      this.password
    );
    if (isAuthenticated) {
      this.calcuLogin();
    } else {
      console.log('ERROR: Login failed');
      Swal.fire({
        icon: 'error',
        title: 'Incorrect',
        text: '',
        confirmButtonColor: '#A1C554',
      });
    }
  }

  ///[บัค]
  register() {
    const isRegister = this.userRepository.registerUser(
      this.package, //เลือกแพ็ค [0 = 3-6 ขวบ] , [1 = 7-9 ขวบ]
      this.username,
      this.email,
      this.password,
      this.checkPassword,
      this.kid_name,
      this.kid_age
    );

    if (isRegister) {
      this.toggleChangeClass();
      console.log('Pass : registration is done');

      //  this.login();
      // console.log('Pass : registration and login done');
      // window.location.reload();
      //บัคที่ต้อง reload ก่อน เพราะข้อมูลยังไม่เข้า อาจะใช้  sweet alert ช่วยกด ok แล้ว reload หน้าให้ smooth ขึ้น
    } else {
      console.log('ERROR: registration is failed');
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'Please try again',
        confirmButtonColor: '#A1C554',
      });
    }
  }

  calcuLogin() {
    const num1: number = Math.floor(Math.random() * 13) + 3;
    const num2: number = Math.floor(Math.random() * 6) + 4;
    const result: number = num1 * num2;

    Swal.fire({
      title: 'Go to the board',
      text: `Calculate: ${result} ÷ ${num1} = ?`,
      input: 'range',
      confirmButtonText: 'Yes!',
      confirmButtonColor: '#A1C554',
    }).then((userResult) => {
      if (userResult.isConfirmed) {
        if (userResult.value == num2) {
          Swal.fire({
            title: 'Go to the board',
            icon: 'success',
            confirmButtonText: 'Yes!',
            confirmButtonColor: '#A1C554',
          });
          this.router.navigate(['/board']);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Incorrect',
            text: 'Please try again',
            confirmButtonColor: '#A1C554',
          });
        }
      }
    });
  }
}
