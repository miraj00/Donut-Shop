//There are two api being used in this project which will require two interfaces as below : 

// Generated by https://quicktype.io
// interface for https://grandcircusco.github.io/demo-apis/donuts.json  created using Paste JSON as Code
export interface Donuts {
    count:   number;
    results: Result[];
}

export interface Result {
    id:                number;
    ref:               string;
    name:              string;
    photo:             string;
    photo_attribution: string;
}
// Generated by https://quicktype.io
// interface for https://grandcircusco.github.io/demo-apis/donuts/${id}.json created using Paste JSON as Code  

export interface Donut {
    id:                number;
    ref:               string;
    name:              string;
    calories:          number;
    extras:            string[];
    photo:             string;
    photo_attribution: string;
}
