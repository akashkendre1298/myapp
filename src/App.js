import './App.css';


function App() {
  return (


    <div class="container">
      {/* first card for header and photo */}
      <div style={{ width: '75em' }}>
        <div className="main-division-of-section-first-flex">
          <div className="column">
            <h1>Pricing & Commission</h1>
            <p className="price">Meesho charges 0% Commission rate across all categories making it the most profitable platform
              for you to sell online.
              <br /><br /><br />
              {/* enroll mobile number */}
              <input type="text" placeholder="Enter mobile number.." style={{ height: "2em" }} />
              {/* button  */}
              <button className="btn">Start Scrolling</button>

            </p>

          </div>
          <div className="image-background" style={{ width: '70em' }}>
            <img src="https://supplier.meesho.com/images/banner-4-p-500.png" alt="" class="commission" />
          </div>
        </div>
        <br /> <br /> <br />
        {/* cards */}
        <div className="Flex-boxes-in-three-steps">
          <div style={{ width: '25em' }} className="card">
            <div className="three-steps-pricinh-defination">
              <img src="https://supplier.meesho.com/images/icon-14.svg" alt="" />
            </div>
            <h2 style={{ textAlign: 'Center' }} >No Registration Fee</h2>
            <p style={{ textAlign: 'Center' }}>
              Registering as a Meesho seller is free - no cost of creating your account or getting your products listed.
            </p>
          </div>&nbsp;&nbsp;&nbsp;
          <div style={{ width: '25em' }} className="card">
            <div className="three-steps-pricinh-defination">
              <img src="https://supplier.meesho.com/images/icon-15.svg" alt="" />
            </div>
            <h2 style={{ textAlign: 'Center' }}>No Collection Fee</h2>
            <p style={{ textAlign: 'Center' }}>
              Registering as a Meesho seller is free - no cost of creating your account or getting your products listed.
            </p>
          </div>&nbsp;&nbsp;&nbsp;
          <div style={{ width: '25em' }} className="card">
            <div className="three-steps-pricinh-defination">
              <img src="https://supplier.meesho.com/images/icon-16.svg" alt="" />
            </div>
            <h2 style={{ textAlign: 'Center' }}>No Penalty</h2>
            <p style={{ textAlign: 'Center' }}>
              Sell on Meesho stress-free without the fear of
              penalties for order cancellations.</p>
          </div>


        </div>


      </div>


    </div>






  );
}

export default App;