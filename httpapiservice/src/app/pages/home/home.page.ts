import { Component, OnInit } from "@angular/core";
import { GlobVarService } from "src/app/services/glob-var.service";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  public data: any;
  public obj: any = { name: "morpheus", job: "leader",id:""};
  public loginDetails: any = { username: "peter@klaven", password: "" };

  constructor(public httpData: HomeService, public globVar: GlobVarService) {}

  ngOnInit(): void {
    this.getData();
  }

  public getData() {
    this.httpData.GetData().subscribe((response) => {
      if (response.data != "") {
        this.data = response.data;
      }
    });
  }

}
