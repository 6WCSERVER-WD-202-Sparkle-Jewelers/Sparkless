<template>
    <div class="container">
      <div class="row">
        <div class="col-md-5 mr-auto">
          <img src="../assets/f3.png" style="width: 500px; height: 500px" />
          <ul class="list-unstyled pl-md-5 mb-5">
            <li class="d-flex text-black mb-2">
              <span class="mr-3"><span class="icon-map"></span></span> Angeles
              City, Pampanga
              <br />
              Philippines
            </li>
            <li class="d-flex text-black mb-2">
              <span class="mr-3"><span class="icon-phone"></span></span>
              +63991050702
            </li>
            <li class="d-flex text-black">
              <span class="mr-3"><span class="icon-envelope-o"></span></span>
              sparklejewelers@gmail.com
            </li>
          </ul>
        </div>
  
        <div class="col-md-6">
          <form class="mb-5" method="post" id="contactForm" name="contactForm">
            <div class="row">
              <h2>Contact Us</h2>
              <div class="col-md-12 form-group">
                <label for="name" class="col-form-label">Name</label>
                <input type="text" class="form-control" name="name" id="name" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="email" class="col-form-label">Email</label>
                <input type="text" class="form-control" name="email" id="email" />
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-12 form-group">
                <label for="message" class="col-form-label">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  style="resize: none"
                ></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <input
                  type="submit"
                  value="Send Message"
                  class="btn btn-primary rounded-0 py-2 px-4"
                />
                <span class="submitting"></span>
              </div>
            </div>
          </form>
  
          <div id="form-message-warning mt-4"></div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  * {
    font-family: 'Poppins',sans-serif;
    height: 100%;
    background: #ffffff;
  }
  
  .row {
  }
  
  .container {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  
  .col-md-5 {
    margin-right: 20px;
  
    justify-content: center;
    font-size: 1.5rem;
  }
  
  .col-md-6 {
  }
  
  .col-md-6 h2 {
    font-weight: 700;
    font-size: 3.5rem;
  }
  
  .col-md-12 input[type='submit'] {
    margin-top: 50px;
    margin-left: 470px;
    background-color: #0b132b;
  }
  
  .col-md-12 input[type='submit']:hover {
    background-color: #172347;
  }
  
  label {
    font-size: 20px;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    .col-md-5 {
      margin-right: 0;
    }
  }
  </style>
  