import React from "react";
import "./Services.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Services() {
  return (
    <section className="services">
      <p className="services-title">Our Services</p>
      <p className="services-heading">Boost your Business With Us</p>
      <div
        className="all-services-div"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap:"wrap",
          gap:"20px"
        }}
      >
        <Card style={{width:"300px"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./Assets/Images/services/4.png"
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <b>System Integration</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Valley Telegance offers complete System Integration: Supply,
              Install, Test, and Commission IT/ICT projects, with strong OEM
              partnerships for nationwide success.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{width:"300px"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./Assets/Images/services/2.png"
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <b>Managed Services</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Companies often prioritize core capabilities over non-core areas
              like IT/Networking. They increasingly opt for Managed Service
              Providers (MSPs) to handle network deployment and management,
              rather than hiring in-house IT/Networking personnel.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{width:"300px"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./Assets/Images/services/3.png"
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <b>New Product Development</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Valley Telegance has always fostered a culture of Problem-Solving
              using frugal innovation. We realize that at times COTS solutions
              are not available for certain use-cases that Customers may have.
              In such cases, we undertake development of a new product using
              existing systems/solutions.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{width:"300px"}}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./Assets/Images/services/1.png"
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <b>Internet Of Things (IoT)</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It means devices/systems communicate via protocols without human
              intervention. Our expertise includes IoT protocols like LoraWAN,
              Bluetooth, and Wi-Fi. Application areas: Smart Streetlighting,
              Agriculture, Solar Power, and Environment Sensors.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
