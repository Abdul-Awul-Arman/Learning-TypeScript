

type Human='hand' | "nose"; //string type literal

type Animal='eye' | 'head';

type Live=Human | Animal;

const man:Human='hand'

const woman:Human='nose';

const man2:Live='nose';


type FrontEndDeveloper={
    skill: string[],
    designation:'frontendDeveloper',
};

type BackEndDeveloper={
    skill: string[],
    designation2:'BackendDeveloper',
};


type FullStackDeveloper= FrontEndDeveloper & BackEndDeveloper;


const Developer:FullStackDeveloper={
    skill:['html',"js"],
    designation:'frontendDeveloper',
    designation2:'BackendDeveloper',
}

console.log(Developer);