{
//

    //union types-------------------------> ( | )

    // type FrontendDeveloper = "fakibazDeveloper" | "joniorDeveloper" ;
    // type FullStackDeveloper = "frontendDeveloper" | "fullstackDeveloper" ;

    // type Developer = FrontendDeveloper | FullStackDeveloper ;


    // const newDeveloper: FrontendDeveloper = "joniorDeveloper";


    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: "male"| "female";
    //     bloodGroup: "O+" | "B+" | "A+";
    // }


    // const user1:User ={
    //     name: "Jahid",
    //     gender: "male",
    //     bloodGroup: "O+"
    // }

    // intersection type-----------------------> ( & )

    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ["jahid", "morol", "hasan"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }



//
}