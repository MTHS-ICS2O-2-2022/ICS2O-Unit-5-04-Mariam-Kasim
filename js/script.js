// Copyright (c) 2022 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: May
// This file contains the JS functions for index.html

"use strict"

  // Function to decide whether or not the user would be allowed into the movie theatre
  function myButtonClicked() {
  // input
  const age = parseInt(document.getElementById("age").value);
  const day = document.getElementById("day-of-the-week").value;
  
  // process
  if (age >= 18 && day != "Monday" && day != "Tuesday" && day != "Wednesday" && day != "Thursday") {
    // output
    document.getElementById('answer').innerHTML = "You can go to the movies!";
  }
  else { age < 18 || day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday"
    // output
    document.getElementById('answer').innerHTML = "You cannot go to the movies!";
  }
}