// Created by: Zaida Hammel
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length-of-rectangle').value)
  const width = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const area = length * width

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
