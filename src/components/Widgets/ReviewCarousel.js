import React from "react";
import { Rating } from "semantic-ui-react";
import Slider from "react-slick";

class ReviewCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>
            "These guys did an excellent job. We had our front yard tilled,
            smoothed out and sod installed, including a cutout for a future fire
            pit. I could not have asked for a better transformation. We will
            definitely hire them again for other landscaping projects." <br />
          </h3>
          <h2>- Anne S.</h2>
          <Rating icon="star" defaultRating={5} maxRating={5} disabled />
          <br />
        </div>
        <div>
          <br /> <br />
          <h3>
            "They are busy for a reason. They do a very good job for a
            reasonable fee. I plan to use them again for my future needs."
          </h3>
          <br />
          <h2>- Silvio D.</h2>
          <Rating icon="star" defaultRating={5} maxRating={5} disabled />
        </div>
        <div>
          <br /> <br />
          <h3>
            "The job was done with all the plants I requested. Pacers were put
            in, path, etc. Love it!"
          </h3>
          <br />
          <h2>- Alex S.</h2>
          <Rating icon="star" defaultRating={4} maxRating={5} disabled />
        </div>

        <div>
          <h3>
            "I had Cruz and crew come out and do a landscape for my wife and, at
            first, as Cruz walked around and told us what was wrong with our
            landscape, he seemed a little abrupt but the more Cruz talked, the
            more my wife agreed with him, so I decided to be quiet. Now my wife
            is a award winning gardener. [...] Thanks Cruz."
          </h3>
          <br />
          <h2>- Brian W.</h2>
          <Rating icon="star" defaultRating={5} maxRating={5} disabled />
        </div>
        <div>
          <h3>
            "Cruz did a beautiful job with our yard. The sod is healthy, the
            edges are clean and the seams are tight. The entire layout is
            attractive. Cruz is clearly a talented landscape artist. The cost
            was very reasonable. I definitely recommend Cruz to others and I
            will hire him again for future projects."
          </h3>
          <br />
          <h2>- Tim S.</h2>
          <Rating icon="star" defaultRating={5} maxRating={5} disabled />
        </div>
        <div>
          <h3>
            "I had Cruz and crew come out and do a paver driveway for us. They
            did a nice job. The pavers was nice and level and are still nice
            after 2 years of driving on it. 1 brick did get loose when my R.V.
            ran over [the] curb. Even though warranty had expired, Cruz and crew
            came out the next day and fixed it. <br /> <br /> I offer to pay
            him, but he said '<i>No Charge</i>'."
          </h3>
          <h2>- Keith G.</h2>
          <Rating icon="star" defaultRating={5} maxRating={5} disabled />
        </div>
        <div>
          <h3>
            "We are extremely happy about the landscaping job that he did for
            our backyard. He installed the sods and built herb box for us. We
            highly recommend to hire them. Puppet approved :)"
          </h3>
          <h2>- Jigyasha S.</h2>
          <Rating icon="star" defaultRating={5} maxRating={5} disabled />
          <br /> <br />{" "}
          <h6
            style={{
              color: "grey"
            }}
          >
            Website Editor's Note: <br /> Puppet is a dog and, apparently, a
            good boy.
          </h6>
        </div>
        <div>
          <h3>
            "Cruz installed a French Drain system for me, in late October, when
            conditions were beyond muddy. He did the best job possible of
            leveling the mud when the drains were in. I plan to use him again
            for other similar projects... but I will do it [during] summer when
            it isn't quite so muddy!"
          </h3>
          <br />
          <h2>- John O.</h2>
          <Rating icon="star" defaultRating={5} maxRating={5} disabled />
        </div>
        <div>
          <h3>
            "From the bid process and hiring Cruz for a complete landscape
            project to the completion of the job, Cruz was always professional,
            informative, hard-working, and truly listened to what we wanted. His
            knowledge and eye for details were appreciated as he made some great
            recommendations. He made the job look easier that it was as he has
            the machinery and equipment [that] not many contractors do."
          </h3>
          <h2>- Wail D.</h2>
          <Rating icon="star" defaultRating={5} maxRating={5} disabled />
        </div>
      </Slider>
    );
  }
}

export default ReviewCarousel;
