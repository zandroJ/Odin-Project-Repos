const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

//creating and placing new nodes
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);
const text = document.createTextNode(
  " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

//moving and removing dom elements;
// sect.appendChild(linkPara);
// sect.removeChild(linkPara);
// linkPara.remove(); //remove node based only on a reference to itself
// linkPara.parentNode.removeChild(linkPara); //for older browsers


//manipulating styles
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";
para.setAttribute("class", "highlight");
