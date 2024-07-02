
type rosterType = {
    [key: number]: Array<string>;
  }
  
  type studentType = {
    name: string,
    grade: number
  }

  
export class GradeSchool {
    //_roster: rosterType = {};
    _allKids: rosterType = {};
  
    constructor() {
      this._allKids = this.roster();
    }
   
    private sortNames(grades: string[] = []) {
      return grades.sort((x: string, y: string): number => {
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          }) 
    }
    
    roster() {
      console.log(this._allKids);
      const check =  Object.entries(this._allKids).map((element) => {
        console.log(this.sortNames(element[1]));
        return  this.sortNames(element[1]);
        }
       )
      console.log(check);
      return this._allKids;
    }
  
    private add(name: string, grade: number) {
      if (!(this._allKids.hasOwnProperty(grade))) {
        this._allKids[grade] = [];
        this._allKids[grade].push(name);
      } else if (!(this._allKids[grade].includes(name))) {
        this._allKids[grade].push(name);
      }
    }
  
    grade(whichGrade: number): string[] {
      return this._allKids[whichGrade] ? this.sortNames(this._allKids[whichGrade]) : [];
    }
  
  
  }