// Copyright (c) 2022 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: May
// This file contains the JS functions for index.html

"use strict"

  // Function to decide whether or not the user would be allowed into the movie theatre
  function myButtonClicked() {
  // input
  const age = parseInt(document.getElementById("Age").value);
  const day = document.getElementById("dayofweek").value;
  
  // process
  if ((age >= 18) && (day == "Saturday" || day == "Sunday")) {
    // output
    document.getElementById('answer').innerHTML = "You can go to the movies!";
  }
  else {
    // output
    document.getElementById('answer').innerHTML = "You cannot go to the movies!";
  }
}