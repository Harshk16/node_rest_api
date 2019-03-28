import { Component, OnInit } from "@angular/core";
import { DataService } from "./services/api.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  data: any;
  downloadJsonFile: SafeUrl;

  ngOnInit() {
    this.loadData();
  }

  downloadFile() {
    const jsonData = JSON.stringify(this.data, null, 4);
    const uri = this.sanitizer.bypassSecurityTrustUrl(
      "data:text/pdf;charset=UTF-8," + encodeURIComponent(jsonData)
    );
    this.downloadJsonFile = uri;
  }

  loadData() {
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.downloadFile();
    });
  }
}
