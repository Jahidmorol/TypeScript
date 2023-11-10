{
  //

  //promise---->

  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async(): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data:Todo = await res.json()
    // console.log(data);
    return data
  }

  getTodo()

  type Something = {
    something: string;
  };
  // simulate--->
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolved, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolved(data);
      } else {
        reject("failed to create promise");
      }
    });
  };

  // calling create promise function---->
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    // console.log(data);
    return data;
  };

  showData();

  //
}
