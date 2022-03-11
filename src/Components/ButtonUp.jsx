import React from 'react';
import "../App.css";

function ButtonUp() {
  return (
    <button type="button" id="myBtn" title="Go to top" onClick={topFunction}>
      <i class="fas fa-angle-up"/>
    </button>
  )
}

  window.onscroll = () => {
    var mybutton = document.getElementById("myBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
  }

  const topFunction = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

export default ButtonUp