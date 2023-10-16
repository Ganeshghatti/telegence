import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function Products_3ph_faq() {
  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem
          collapseId={1}
          headerTitle="High Voltage MPPT Charging"
        >
          To reduce losses in long wiring from solar panels to battery or
          directly used by application. Battery charging circuit is enabled
          automatically when 3Phase load is not working or the generation is
          more than consumption.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Efficiency of conversion">
          Using high-frequency conversion technology without an iron-core
          transformer, it provides ~89% average efficiency from the 10% to 80%
          range.
        </MDBAccordionItem>
        <MDBAccordionItem
          collapseId={3}
          headerTitle="No load power consumption"
        >
          The self-consumption is just &gt; 1% of the capacity.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="Artificial Intelligence">
          <p>
            It is a highly intelligent system to manage different available
            powers and optimize the utilization of resources with self-learning.
            <ul>
              <li>Solar Battery power Management</li>
              <li>Air conditioner current management powered from Solar</li>
              <li>AC current monitor & controls when powered from Grid</li>
              <li>Water pump power management</li>
            </ul>
          </p>
        </MDBAccordionItem>
        <MDBAccordionItem
          collapseId={5}
          headerTitle="Available power information"
        >
          Will display generated power, stored power as well as runtime from
          stored power. Also weekly power generation.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle="Cloud connectivity">
          To monitor & operational controls for system configuration,
          performance, power generation, utilization of power, and more.{" "}
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
}
