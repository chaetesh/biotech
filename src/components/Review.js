import React from 'react'

const Review = () => {
  return (
    <>
      <section>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mb-5">Testimonials</h3>
          </div>
        </div>

        <div class="row text-center" style={{marginBottom:'50px'}}>
          <div class="col-md-4 mb-5 mb-md-0">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                class="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 class="mb-3">Maria Smantha</h5>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quod eos id hic tenetur
              quae quaerat ad velit ab hic tenetur.
            </p>
          </div>
          <div class="col-md-4 mb-5 mb-md-0">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                class="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 class="mb-3">Pallavi Madala</h5>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>Ut enim ad minima veniam,
              quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut aliquid commodi.
            </p>
          </div>
          <div class="col-md-4 mb-0">
            <div class="d-flex justify-content-center mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                class="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
            </div>
            <h5 class="mb-3">Karthikeya Manam</h5>
            <p class="px-xl-3">
              <i class="fas fa-quote-left pe-2"></i>At vero eos et accusamus et
              iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review