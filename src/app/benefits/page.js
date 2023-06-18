import React from 'react';
import './benefits.css';
import Image from 'next/image';
import benefitImage from './benefits.jpg';
const page = () => {
  return (
    <>
      <main id="content" class="main" className="main">
        <div className="row">
          <div className="l-col-three">
            <div className="benefitImage-section">
              <Image
                src={benefitImage}
                alt="this is not working"
                className="benefit-img"
              />
            </div>
            <div
              class="widget__wrapper widget__wrapper--text js-widget js-widget--desktop visible--desktop js-widget--tablet visible--tablet js-widget--mobile visible--mobile"
              data-widget-id="6b9995da1a7d87a7f3ae957fb0ac1bc4"
            >
              <div className="widget widget--body-component">
                <div class="content-center--8-12 prose content-gutter content-center copy copy--large">
                  <p>
                    At Hexfork, we believe in creating a comprehensive
                    compensation and benefits program that supports our
                    employees growth and success in their professional journey.
                    We understand the importance of recognizing expertise,
                    fostering innovation, and driving results, which is why we
                    have developed a range of benefits and incentives that are
                    consistent, equitable, and reflective of our shared
                    achievements.
                  </p>
                  <h2 dir="ltr">Compensation</h2>
                  <p dir="ltr">
                    Just like mastering your skills in a software program,
                    managing your financial well-being is crucial. At Hexfork,
                    we provide transparency and empower our employees with
                    information about their compensation, enabling them to
                    understand their value and career growth potential. Our
                    compensation structure includes:
                  </p>
                  <p dir="ltr">
                    Base Pay Range Visibility: We are committed to providing
                    visibility into base pay ranges for each role. Our job
                    postings clearly indicate the salary range, enabling
                    candidates to make informed decisions from the start.
                    Additionally, our employees have access to their pay range
                    for their current positions, allowing them to better
                    understand their growth opportunities.
                  </p>
                  <p dir="ltr">
                    Incentive Compensation: In addition to base pay, we offer
                    incentive compensation to reward performance and drive
                    results. Our incentive programs encompass both short-term
                    and long-term bonuses, acknowledging individual and team
                    achievements.
                  </p>
                  <ul>
                    <li dir="ltr" aria-level="1" className="li">
                      <p dir="ltr" role="presentation">
                        Base pay is a fixed amount of money (either hourly or
                        salary) that is paid to someone for executing their core
                        job functions. It is focused on recognizing skills and
                        proficiency for the job you do rather than rewarding
                        performance.
                      </p>
                    </li>
                    <li dir="ltr" aria-level="1">
                      <p dir="ltr" role="presentation">
                        The incentive compensation focuses on performance:
                      </p>
                      <ul>
                        <li dir="ltr" aria-level="2" className="sub-li">
                          <p dir="ltr" role="presentation">
                            Short-term incentive: Riot’s Annual Performance
                            Bonus is a discretionary incentive program focused
                            on rewarding short-term performance during an
                            annual, 12-month period.
                          </p>
                        </li>
                        <li dir="ltr" aria-level="2" className="sub-li">
                          <p dir="ltr" role="presentation">
                            Long-term incentive programs: Riot has various
                            additional programs that reward Rioters as we tackle
                            big bets and chase long-term stretch goals for the
                            company.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <h2 dir="ltr">Benefits</h2>
                  <p dir="ltr">
                    We’ve got you covered wherever you are. As part of the total
                    rewards, there are key benefits that all Rioters can opt-in
                    to depending on their personal needs. Benefits at Riot cover
                    the following in the U.S.:&nbsp;&nbsp;
                  </p>
                  <ul>
                    <li dir="ltr" aria-level="1" className="li">
                      <p dir="ltr" role="presentation">
                        <strong>Health Care:</strong> Medical (including
                        LGBTQIA+ support), dental, and vision plans that cover
                        you as well as your spouse/domestic partner and
                        children.&nbsp;
                      </p>
                    </li>
                    <li dir="ltr" aria-level="1" className="li">
                      <p dir="ltr" role="presentation">
                        <strong>Family Care:</strong> Life insurance, parental
                        leave, women’s reproductive health care, plus short and
                        long-term disability.
                      </p>
                    </li>
                    <li dir="ltr" aria-level="1" className="li">
                      <p dir="ltr" role="presentation">
                        <strong>Retirement:</strong> Riot matches retirement
                        contributions so you can continue to play games long
                        after you retire.
                      </p>
                    </li>
                  </ul>
                  <p dir="ltr">
                    <em>
                      Note: While we take a global approach to provide
                      consistent benefits to all Rioters, some regions and
                      countries may differ based on regional and local
                      governance and laws.
                    </em>
                  </p>
                  <h2 dir="ltr">Beyond Compensation + Benefits</h2>
                  <ul>
                    <li dir="ltr" aria-level="1" className="li">
                      <p dir="ltr" role="presentation">
                        <strong>Open Paid Time Off:</strong> Rioters are trusted
                        to take the time they need throughout the year.
                      </p>
                    </li>
                    <li dir="ltr" aria-level="1" className="li">
                      <p dir="ltr" role="presentation">
                        <strong>Company-Wide Breaks:</strong> In addition to
                        holidays, the entire company takes a 2-week end-of-year
                        break and a 1-week mid-year break.
                      </p>
                    </li>
                    <li dir="ltr" aria-level="1" className="li">
                      <p dir="ltr" role="presentation">
                        <strong>Play Fund:</strong> Riot’s annual play fund
                        allows Rioters to broaden their knowledge of the games
                        that matter to players and the community.
                      </p>
                    </li>
                    <li dir="ltr" aria-level="1" className="li">
                      <p dir="ltr" role="presentation">
                        <strong>Wellness Fund:</strong> Rioters have the option
                        of receiving a monthly allowance for both themselves and
                        any beneficiaries that can be spent on things like
                        massages and gym memberships.&nbsp;
                      </p>
                    </li>
                    <li dir="ltr" aria-level="1" className="li">
                      <p dir="ltr" role="presentation">
                        <strong>Donation Matching:</strong> Riot matches
                        donations of time and money to nonprofits to double down
                        on support.
                      </p>
                    </li>
                  </ul>
                  <p dir="ltr" role="presentation">
                    {' '}
                    &nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
