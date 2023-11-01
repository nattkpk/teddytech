import { Component } from '@angular/core';
import { UserRepository } from 'src/app/models/userModel/user.repository';
import { UserDataService } from 'src/app/services/user-data.service';
import { StickerDataService } from 'src/app/services/sticker-data.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class History {
  constructor(
    private router: Router,
    private user_repository: UserRepository,
    private userDataService: UserDataService,
    private sticker_service: StickerDataService
  ) {
    this.historyData = [];
  }

  ngOnInit() {
    // Fetch the user data when the component initializes
    this.user_repository
      .getUserById(this.userDataService.getUserId())
      .subscribe((user) => {
        console.log('User Data:', user);
        this.user = user;

        this.historyData = this.user.stickerHistory;
      });
  }

    user: any | null = {};
    historyData: any[];
    itemsPerPage: number = 3;
    currentPage: number = 1;

    getDataForPage(page: number): any[] {
        const startIndex = (page - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.historyData.slice(startIndex, endIndex);
      }
    
      changePage(offset: number): void {
        this.currentPage += offset;
      }
    
      get totalNumberOfPages(): number {
        return Math.ceil(this.historyData.length / this.itemsPerPage);
    }

    getPageNumbers(): number[] {
        return Array(this.totalNumberOfPages).fill(0).map((_, index) => index + 1);
      }


    deleteHistory(index: number){
        Swal.fire({
            title: 'Delete this week?',
            text: 'Are you sure? ',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes !',
            cancelButtonText: 'cancel !',
            reverseButtons: true,
            confirmButtonColor: '#A1C554',
            cancelButtonColor: '#FC6F6F',
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                console.log(this.historyData);
                const chooseIndex = index+((this.currentPage-1)*this.itemsPerPage)
                this.deleteDataByIndex(chooseIndex);
                const updatedHistoryData = {
                    stickerHistory: this.historyData,
                  };
                  this.user_repository.updateUserFields(
                    this.userDataService.getUserId(),
                    updatedHistoryData
                  );

                await Swal.fire({
                  icon: 'success',
                  title: 'Delete Success',
                  confirmButtonText: 'OK',
                  confirmButtonColor: '#A1C554',
                });
              } catch (error) {
                console.error(error);
              }
            }
          });

    }

    deleteDataByIndex(index: number): void {
        if (index >= 0 && index < this.historyData.length) {
          this.historyData.splice(index, 1);
        }
      }

    checkBoard(index: number){
        const chooseIndex = index+((this.currentPage-1)*this.itemsPerPage)
        this.sticker_service.setHistoryIndex(chooseIndex);
        this.router.navigate(['/history_board']);
      }

}
