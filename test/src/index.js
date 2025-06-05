const cafe={
    brand:'이디야',
    menu:'아메리카노',
    print: function () {
        console.log(this);
    },
};

const myCafe = cafe.print;
myCafe();