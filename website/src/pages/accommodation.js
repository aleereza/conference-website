import React from 'react'
import Link from 'gatsby-link'

import FullSize from "../components/FullSize"
import venue from "../images/venue.jpg"

const AccommodationPage = () => (
  <div>
    <h3>Accommodation</h3>
    <h4>Visa information</h4>
    <p>Depending on where you live, and the reason for your visit, you will need to meet certain entry requirements. In some cases, if you plan to stay in Canada for a certain period of time, you will need a Temporary Resident Visa. <a href="http://www.cic.gc.ca/english/visit/visas.asp">Here</a> you can find out if you need a visa.
    </p>
    <h4>Hotels</h4>
    <FullSize src={venue} caption="Hotels in downtown Vancouver"/>
    <p  style={{ textAlign: "center" }}><small>(Click to enlarge)</small>
    </p>
    <p>Find nearby hotels on <a href="https://www.google.ca/maps/search/Hotels/@49.2876947,-123.1296626,15z/data=!3m1!4b1!4m11!2m10!3m6!1sHotels!2s500+Granville+St,+Vancouver,+BC+V6C+1W6!3s0x5486717897c2f3e3:0x4555f729c4de64f4!4m2!1d-123.1148388!2d49.2843101!5m2!5m1!1s2018-03-25">google map</a>.
    </p>
    <h4>SFU Private Residence Rooms</h4>
    <p>Find more info about SFU Private Residence Rooms <a href="https://www.sfu.ca/stayhere/accommodations/single_room/overview.html">here</a>. It is approximately 45 minutes bus ride from this residence to the conference site at downtown.
    </p>
    <h4>Airbnb</h4>
    <p>Find places to stay in Vancouver on <a href="https://www.airbnb.ca/s/Vancouver--Canada">Airbnb</a>.
    </p>
    <h3>Vancouver Accessibility</h3>
    <h4>Arriving by Air</h4>
    <p>If you're arriving by air, you'll most likely be flying into Vancouver International Airport (YVR). Located just 25 minutes from downtown, YVR is consistently rated one of the best airports in North America. There are more than a dozen international flights in and out of YVR every day, with 22 bound for the United States.
    </p>
    <h4>Getting to/from the Airport</h4>
    <h5>Car</h5>
    <p>Many major car rental companies have desks at YVR, so hiring and returning your rental car is easy and convenient. Driving between downtown and the airport is straightforward and well sign-posted. From downtown, proceed south on Granville Street to West 72nd Avenue. Follow the road left onto SW Marine Drive and over the Arthur Laing Bridge. The bridge takes you to Grant McConachie Way, which leads directly to the airport terminal.
    </p>
    <h5>Taxi</h5>
    <p>If you’re taking a taxi from the airport to your hotel after arriving at YVR, use one of the taxi stands located on Level 2. Taxis operating from the airport are licensed, and will use a zoned fare rate that will depend on your destination.
    </p>
    <h5>Public Transit</h5>
    <p>The SkyTrain’s Canada Line provides rapid rail service linking YVR to downtown Vancouver and parts of Richmond. Trains leave the airport station approximately every seven minutes during most times of the day. There are 16 stops along the line, with downtown Vancouver stops including Yaletown, Vancouver City Centre and Waterfront—the terminus for the line
    </p>
    <p>The trip from YVR to downtown Vancouver takes only 26 minutes on a two zone fare of $3.75, plus the $5.00 Canada Line YVR AddFare. The YVR AddFare is waived if you have a pre-purchased fare, e.g. a day pass, monthly pass or a Fare Saver ticket. Check the TransLink website for maps, schedules and fare information.
    </p>
    <h4>Arriving by Car</h4>
    <p>Highway 1, the Trans-Canada Highway, accesses Vancouver from points east. If planning a driving tour, allow 4 hours from Kelowna in the Okanagan Valley, 12 hours from Calgary, and five days from Montreal. If you’re arriving in Vancouver from Victoria or Vancouver Island, you’ll need to take your car on a BC Ferries vessel across the Strait of Georgia to the mainland. Vancouver is only three hours north of Seattle. Take the Interstate 5, which becomes Highway 99 at the United States-Canada border.
    </p>
    <h4>Arriving by Rail</h4>
    <p>Travel across Canada on VIA Rail’s transcontinental service running from Vancouver to Toronto, via Jasper, three times per week, year-round. Or take in the best of BC and Alberta with a Rocky Mountaineer two-day rail tour, offered from April through October. If you’re heading to Vancouver from the U.S., consider the Amtrak Cascades route between Eugene, Oregon and Vancouver, via Portland and Seattle.
    </p>
    <p>Pacific Central Station is the terminus for both VIA Rail and Amtrak trains, and is located just east downtown Vancouver at Main and Terminal streets. Rocky Mountaineer trains operate out of their own facilities, with stations in East Vancouver (close to Pacific Central Station) and North Vancouver.
    </p>
  </div>
)

export default AccommodationPage
