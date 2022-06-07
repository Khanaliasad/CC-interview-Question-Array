import "./styles.css";

let test1 = [1, 2, 1, 1, 2]; //3
let test2 = [1, 2, 1, 1, 2, 2, 1, 2, 2]; // 5
let test3 = [1, 2, 2, 1]; //2

// above is the test Data

let anfn = (arr) => {
  let tar1 = [];
  let tar2 = [];
  // start of foreach
  arr.forEach((ele) => {
    if (ele == 1) {
      tar1.push(ele);
    } else {
      tar2.push(ele);
    }
  });
  // end of foreach

  let funchecker = (a, b) => {
    if (a.length > b.length) {
      let x = a[0];
      let y = a.length;
      let z = ["player ", x, "score", y, "ㅤㅤㅤ"];
      return z;
    }
    if (a.length < b.length) {
      let x = b[0];
      let y = b.length;
      let z = ["player ", x, "score", y, "ㅤㅤㅤ"];
      return z;
    } else {
      let x = "Tie";
      let y = b.length;
      let z = [x, "score", y, "ㅤㅤㅤ"];
      return z;
    }
  };
  // end of fun checker

  return funchecker(tar1, tar2);
};
// end of anfn
// i've used this clg variable to log the result on site
// need to add test arrays in anfn as param
let clg = [anfn(test1), anfn(test2), , anfn(test3)];

document.getElementById("clg").innerHTML = clg;

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
