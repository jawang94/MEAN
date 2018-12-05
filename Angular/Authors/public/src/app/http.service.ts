import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAuthors() {
    return this._http.get("/api/authors/");
  }

  getOneAuthor(authorID) {
    return this._http.get("/api/authors/" + authorID);
  }

  editAuthor(author) {
    return this._http.put("/api/authors/" + author.editID, author);
  }

  addAuthor(newAuthor) {
    return this._http.post("/api/authors", newAuthor);
  }

  deleteOneAuthor(deleteID: string) {
    console.log("inside service");
    console.log("the id is ", deleteID);
    return this._http.delete("/api/authors/" + deleteID);
  }
}
