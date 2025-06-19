<<<<<<< HEAD
const getData = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log(data);
};

getData();
=======
const cafe={
    brand:'이디야',
    menu:'아메리카노',
    print: function () {
        console.log(this);
    },
};

const myCafe = cafe.print;
myCafe();
>>>>>>> f2c4191826d1a2c983b1ba5faaa40988e4153f8a
