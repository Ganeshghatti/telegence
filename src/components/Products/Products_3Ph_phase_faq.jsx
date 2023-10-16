import React from "react";
import Faq from "react-faq-component";

export default function Products3PhPhaseFaq() {
  const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "High Voltage MPPT Charging",
        content: `To reduce losses in long wiring from solar
            panels to battery or directly used by application. Battery charging circuit is
            enabled automatically when 3Phase load is not working or the generation is
            more than consumption.`,
      },
      {
        title: "Efficiency of conversion",
        content:
          "- Using high-frequency conversion technology without an iron-core transformer, it provides ~89% average efficiency from the 10% to 80% range.",
      },
      {
        title: "No load power consumption",
        content: `The self-consumption is just < 1% of the capacity.`,
      },
      {
        title: "Artificial Intelligence",
        content: (
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
        ),
      },
      {
        title: "Available power information",
        content: `Will display generated power, stored power as well as runtime from stored power. Also weekly power generation.`,
      },
      {
        title: "Cloud connectivity",
        content: `To monitor & operational controls for system configuration, performance, power generation, utilization of power, and more.`,
      },
    ],
  };

  const styles = {
    rowContent: {
      // Control the height of the content here, e.g., you can set a max-height
      maxHeight: "300px", // Adjust this value as needed
      overflowY: "auto", // Enable vertical scrolling if content exceeds maxHeight
    },
    // You can add other custom styles here as needed
    // ...
  };

  const config = {
    // Your configuration options here
  };

  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px"}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Question #1">
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Question #2">
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Question #3">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
}
