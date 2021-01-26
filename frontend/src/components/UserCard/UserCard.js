import React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardText from "reactstrap/lib/CardText";
import CardTitle from "reactstrap/lib/CardTitle";

export default function UserCard(user) {
    console.log(user);
  return (
    <div>
      <Card style={{width: 300}}>
        <CardBody>
        <CardTitle tag="h5">{user.user.FirstName + " " + user.user.LastName}</CardTitle>
            <CardText>
                Email Address: {user.user.email}<br/>
                Phone Number: {user.user.Phone}<br/>
                {user.user.type === 'admin' ? 'Admin' : 'Not An Admin'}<br/>
                Average Score: {user.user.averageScore}
            </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
