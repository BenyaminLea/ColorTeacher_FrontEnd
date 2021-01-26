/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { getScores } from "components/lib/api";
import { UserContext } from "context/UserContext";
import React, { useContext, useEffect, useState } from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
// import {
//   dashboard24HoursPerformanceChart,
//   dashboardEmailStatisticsChart,
//   dashboardNASDAQChart,
// } from "variables/charts.js";

function Dashboard(props) {
  const context = useContext(UserContext).user;
  const [scores, setScores] = useState({
    average: '',
    maxScore: '',
    ranking: [],
    userScores: [],
  })
  useEffect(() => {
    async function getAllScores(){
      const avg = await getScores(`https://group-project-itc.herokuapp.com/api/results/${context.id}/avgscore`)
      const allUserScores = await getScores(`https://group-project-itc.herokuapp.com/api/results/${context.id}/scores`)
      const max = await getScores(`https://group-project-itc.herokuapp.com/api/results/${context.id}/maxscore`)
      const rank = await getScores(`https://group-project-itc.herokuapp.com/api/results/ranking`)
      setScores({
        average: avg.average ? avg.average.toFixed(0) : undefined,
        maxScore: max.Score,
        ranking: rank,
        userScores: allUserScores
      })
    }
    getAllScores()
  }, [])

  let graphData = {
    data: {
      labels: scores.userScores.map(score => {return new Date(score.date).toLocaleString()}),
      datasets: [
        {
          data: scores.userScores.map(score => {return score.Score}),
          fill: false,
          borderColor: "#fbc658",
          backgroundColor: "transparent",
          pointBorderColor: "#fbc658",
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 8,
        }
      ],
    },
    options: {
      legend: {
        display: false,
        position: "top",
      },
    },
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-book-bookmark text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Last Played</p>
                      <CardTitle tag="p">
                        {scores.userScores.length > 0 ? new Date(scores.userScores[0].date).toLocaleString() : "You haven't played yet"}
                      </CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bullet-list-67 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Average Score</p>
                      <CardTitle tag="p">{scores.average !== undefined ? scores.average : "No scores yet"}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> 
                  </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-satisfied text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Max Score</p>
                      <CardTitle tag="p">{scores.maxScore !== undefined ? scores.maxScore : "No scores yet"}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-clock" /> 
                  </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-trophy text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Your Ranking</p>
                      <CardTitle tag="p">{
                        scores.ranking.map(rank => {
                          if (rank._id == context.id){
                            return scores.ranking.indexOf(rank)+1
                          }
                        })
                      }</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" />
                  </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        {/* <Row>
         
        </Row> */}
        <Row>
        <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Ranking</CardTitle>
              </CardHeader>
              <CardBody>
                {/* <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                /> */}
                <ol>
                {scores.ranking.map((user) => {
                  return <li id={Math.random()}>{user.FirstName + " " + user.LastName}: {user.averageScore.toFixed(0)}</li>
                })}
                </ol>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" />
                  </div>
              </CardFooter>
            </Card>
          </Col>
          {/* <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Number of emails sent
                  </div>
              </CardFooter>
            </Card>
          </Col> */}
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">Your scores:</CardTitle>
                <p className="card-category">See Your Improvement!</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={graphData.data}
                  options={graphData.options}
                  width={400}
                  height={150}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  {/* <i className="fa fa-circle text-info" /> Your scores over time{" "} */}
                  <i className="fa fa-circle text-warning" /> Your scores over time
                  </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                  </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
