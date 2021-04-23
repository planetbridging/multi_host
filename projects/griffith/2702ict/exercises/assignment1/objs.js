class objSubclassification {
    name = "";
    long = "";
    lat = "";
    constructor(n,lo,la) {
      this.name = n;
      this.long = lo;
      this.lat = la;
    }
}

class objState {
    LstSub = [];
    name = "";
    constructor(n) {
      this.name = n;
    }
}

//data template
/*"State": "Queensland",
"Place": "Gold Coast",
"Latitude": -28.016666,
"Longitude": 153.399994*/