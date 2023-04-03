import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteRecordComponent } from '../delete-record/delete-record.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatDialogModule, DeleteRecordComponent],
  template: `<div class="container-fluid text-center mt-5">
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <ul
          class="nav nav-pills nav-fill gap-2 p-1 small bg-secondary rounded-5 shadow-sm"
          id="pillNav2"
          role="tablist"
          style="
          --bs-nav-link-color: var(--bs-white);
          --bs-nav-pills-link-active-color: var(--bs-secondary);
          --bs-nav-pills-link-active-bg: var(--bs-white);
        "
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link  rounded-5"
              id="home-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="true"
              routerLink="/meal-form"
              routerLinkActive="active"
            >
              Meal
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-5"
              id="profile-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
              routerLink="/all"
              routerLinkActive="active"
            >
              All Meal Records
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-5"
              id="profile-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
              routerLinkActive="active"
              (click)="deleteAllRecords()"
            >
              Delete Records
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link rounded-5"
              id="contact-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
              routerLink="/detail-view"
              routerLinkActive="active"
            >
              Detail
            </button>
          </li>
        </ul>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div> `,
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  deleteAllRecords() {
    this.dialog
      .open(DeleteRecordComponent, { width: '500px' })
      .afterClosed()
      .subscribe(console.log);
  }
}
