import React, { useEffect, useState } from "react";
import "./Numbers.scss";

export default function Numbers() {
  const animationDuration = 3000;

  const [sites, setSites] = useState(0);
  const [offices, setOffices] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);
  const [contracts, setContracts] = useState(0);
  const [partners, setPartners] = useState(0);
  const [clients, setClients] = useState(0);

  const incrementRateSites = (40000 / animationDuration) * 50;
  const incrementRateOffices = (7 / animationDuration) * 50;
  const incrementRateTeamMembers = (100 / animationDuration) * 50;
  const incrementRateContracts = (100 / animationDuration) * 50;
  const incrementRatePartners = (20 / animationDuration) * 50;
  const incrementRateClients = (20 / animationDuration) * 50;

  useEffect(() => {
    const updateNumbers = () => {
      if (sites < 40000) setSites(sites + incrementRateSites);
      if (offices < 7) setOffices(offices + incrementRateOffices);
      if (teamMembers < 100)
        setTeamMembers(teamMembers + incrementRateTeamMembers);
      if (contracts < 100) setContracts(contracts + incrementRateContracts);
      if (partners < 20) setPartners(partners + incrementRatePartners);
      if (clients < 20) setClients(clients + incrementRateClients);

      if (
        sites >= 40000 &&
        offices >= 7 &&
        teamMembers >= 100 &&
        contracts >= 100 &&
        partners >= 20 &&
        clients >= 20
      ) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(updateNumbers, 50);

    return () => clearInterval(interval);
  }, [sites, offices, teamMembers, contracts, partners, clients]);

  return (
    <section className="numbers">
      <p className="numbers-sites">{Math.round(sites).toLocaleString()}+</p>
      <p className="numbers-offices">{Math.round(offices)}+</p>
      <p className="numbers-team-members">{Math.round(teamMembers)}+</p>
      <p className="numbers-contracts">{Math.round(contracts)}+</p>
      <p className="numbers-partners">{Math.round(partners)}+</p>
      <p className="numbers-clients">{Math.round(clients)}+</p>
    </section>
  );
}
