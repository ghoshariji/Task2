function save() {
  let input = document.getElementById("i1").value;
  let old = JSON.parse(localStorage.getItem("data")) || [];
  old.push(input);
  localStorage.setItem("data", JSON.stringify(old));
}

function show() {
  document.getElementById("view").innerHTML = JSON.parse(
    localStorage.getItem("data")
  );
}

function addTask() {
  save();
  let left = document.getElementById("left");
  let a = document.getElementById("i1");
  let d = document.createElement("div");
  let b = document.createElement("span");
  b.innerText = a.value;
  a.value = " ";
  a.placeholder = " ";
  let chbtn = document.createElement("button");
  chbtn.innerText = "+";
  let crbtn = document.createElement("button");
  crbtn.innerText = "-";
  // let edit = document.createElement('button');
  // let editImg = document.createElement('img');
  // editImg.src = "edit.png";
  // editImg.style.width = "10%";
  // edit.appendChild(editImg);
  let edit = document.createElement("button");
  edit.innerHTML = "i";
  b.style.padding = "20%";
  d.style.padding = "0%";
  d.append(b, chbtn, crbtn, edit);
  left.append(d);
  chbtn.addEventListener("click", () => {
    b.style.textDecoration = "line-through";
  });
  crbtn.addEventListener("click", () => {
    d.remove();
  });
  edit.addEventListener("click", () => {
    b.contentEditable = "true";
  });
  b.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      b.contentEditable = "false";
    }
  });
}
document.getElementById("i1").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let a = document.getElementById("i1");
    if (a.value !== " ") {
      addTask();
    } else {
      alert("Enter some Text!");
    }
  }
});

document.getElementById("show").addEventListener("click", show);
