import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugStorageService } from "./bugStorage.service";

@Injectable()
export class BugOperationsService{

    constructor(private bugStorage : BugStorageService){

    }

    createNew(bugName : string) : Bug {
         const newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugStorage.save(newBug);
    }

    toggle(bugToToggle : Bug) : Bug {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        return this.bugStorage.save(toggledBug);
    }

    remove(bugToRemove : Bug) : void {
        this.bugStorage.remove(bugToRemove)
    }

    getAll() : Bug[] {
        return this.bugStorage.getAll();
    }
}

/* 
bugTrackerComponent -> bugOperations -> bugStorage
*/