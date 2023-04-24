// Styling the component
import "./App.css";
// Third-party libraries
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// Images
import taxi from "./taxi.png";
import home from "./home.jpg";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${home})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "550px",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
        }}
      >
        {/* Link tag will take the user to form component */}
        <Link to="/Form">
          <Button variant="warning" size="lg" className="Home">
            Book Cab
          </Button>{" "}
        </Link>
      </div>
      <div className="Desc">
        <h2>RELIABLE, FLEXIBLE TAXI SERVICES – MAXI TAXI PERTH</h2>
        <img src={taxi} alt="" className="taxi" />
        <p className="seperator" align="center">
          {" "}
          _______________________________________{" "}
        </p>
        <p
          style={{
            textAlign: "justify",
            margin: "40px",
            fontSize: "20px",
          }}
        >
          Maxi Taxi Perth is a professional group of individual taxi drivers in
          Greater Perth. We provide premium taxi charter services, taking pride
          in treating our customers with great care and respect. We are not a
          dispatch company, we provide personalized taxi charter passenger pick
          up and drop off service. We charge the official metered tariffs if you
          travelling little far distance but if you are going to need a taxi
          service for a short distance than we charge little extra because we
          will be providing you a guaranteed pick up service. We will give you
          full peace of mind that your taxi driver will definitely arrive. We
          try our 100 percent best to arrive on time but sometimes delay can
          happen it could be because of a road closure, tunnel closure,
          accidents etc. Therefore, please allow yourself little extra time and
          if incase your driver is even one minute late than please give us a
          call back and we can provide you the live update of your taxi. Our
          taxi fleet is large and diverse, ranging from normal cabs such as
          sedans and station wagons to 7 seater Taragos, 8 seater, 9 seater taxi
          van and 10 seater bus taxi or 13-seater maxi taxis. Efficient group
          transfers, Perth airport transfers and wheelchair taxis are some of
          our specialties. All our taxis are fully insured and meet all
          government regulations. Maxi Taxi Perth’s drivers are all police
          cleared, courteous and highly experienced, safe drivers. You can book
          a taxi in Perth 24/7 via our website and we will send you an email
          with a price mentioned. Perth airport taxi pick up and drop off
          service and wedding transport is one of our favorite activity which
          keeps us very busy throughout the year. We are very famous because of
          our excellent airport taxi service.
        </p>
      </div>
    </div>
  );
};

export default Home;
