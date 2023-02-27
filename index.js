                 //1
function createInstagramPost (handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}
  
                //2
const instagramPost1 =  new createInstagramPost ("krakstv", "wow!, the waves are waving","www. insta.com", "40,200", "39,244" );
const instagramPost2 = new createInstagramPost ("miz_leeh", "vote wisely", "www.inst.com", "55", "37");
console.log (instagramPost1);
console.log (instagramPost2);

//3
function createPerson (name, age, location) {
    return {
        name : name,
        age : age,
        location: location,
    };
}
const musa = createPerson ("Musa", 20, "Kano");
console.log (musa)

//3b
function createJambScore ( Eng, Govt, Lit, CRK) {
    return {
        Eng: Eng,
        Govt: Govt,
        Lit: Lit,
        CRK: CRK,
    }
}
const jambScore = createJambScore ( 70, 85, 82, 94);
console.log (jambScore)

musa.jambScores = jambScore;
console.log (musa)

//4
//WAYS TO CLONE AN OBJECT INCLUDE:
const firstState = {
    Name: "Adamawa",
    country: 'Nigeria"',
    dateOfCreation: 1991,
}

//Object.assign method
const secondState = Object.assign({}, firstState)
secondState.Name = "Osun";
console.log (firstState);
console.log (secondState);

//spread syntax method
const thirdState = {... firstState};
thirdState.Name = "Edo";
console.log ({firstState});
console.log ({thirdState});

//JSON Method
const fourthState = JSON.parse;
fourthState.Name = "Enugu";
console.log ({ firstState});
console.log ({ fourthState});

console.log (JSON.stringify(fourthState))

//5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imunolen',
    APC: 'Bola Ahmed Tinubu',
    LP:'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}
for (const property in presidentialCandidates) {
    console.log (presidentialCandidates[property] + " is the presidential candidate of " + property);
}