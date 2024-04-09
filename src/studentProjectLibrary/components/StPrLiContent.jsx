import React, { useState, useEffect } from "react";
import "./StPrLiContent.css";
import projectsData from "./StPrLiList";

export default function StPrLiContent({
  subscriptionFilter,
  activityTypeFilter,
  subjectMatterFilter,
  yearLevelFilter,
}) {
  // create a state to hold the projectsData after checkbox filtered.
  const [displayProjects, setDisplayProjects] = useState(projectsData);
  //create a state to hold the difficulty button's filter
  const [displaydifficulty, setDisplaydifficulty] = useState("");
  //create a state to hold the show number button's filter
  const [displayNumber, setDisplayNumber] = useState("ALL");

  // beginner-intermediate-advanced  button
  const handleBtns = (e) => {
    console.log(e.target.value);

    setDisplaydifficulty(e.target.value);
  };
  // 5- 10 - all button
  const handleNumFilter = (e) => {
    console.log(e.target.innerText);
    setDisplayNumber(e.target.innerText);
  };

  useEffect(() => {
    //create an array with all the keys having the true value in subscriptionFilter. (find the checked box in subscription)
    const subscriptionArray = Object.keys(subscriptionFilter).filter(
      (key) => subscriptionFilter[key]
    );
    const activityTypeArray = Object.keys(activityTypeFilter).filter(
      (key) => activityTypeFilter[key]
    );
    const subjectMatterArray = Object.keys(subjectMatterFilter).filter(
      (key) => subjectMatterFilter[key]
    );
    const yearLevelArray = Object.keys(yearLevelFilter).filter(
      (key) => yearLevelFilter[key]
    );
    // console.log(subscriptionArray);
    //initial a variable
    let filterProject = projectsData;

    //5️⃣filter difficulty
    if (!displaydifficulty) {
      console.log("no level selected");
    } else {
      filterProject = filterProject.filter(
        (project) => project.difficulty === displaydifficulty
      );
      console.log(filterProject);
      setDisplayProjects(filterProject);
    }
    //6️⃣filter number to show
    //This is unfinished, should set up pagination
    if (displayNumber === "ALL") {
      console.log("Show All");
    } else {
      if (displayNumber === "5") {
        filterProject = filterProject.slice(0, 5);
      } else if (displayNumber === "10") {
        filterProject = filterProject.slice(0, 10);
      }
      console.log(filterProject);
      setDisplayProjects(filterProject);
    }

    //If no check box checked, then display all project
    if (
      !subscriptionArray.length &&
      !activityTypeArray.length &&
      !subjectMatterArray.length &&
      !yearLevelArray.length
    ) {
      setDisplayProjects(filterProject);
    } else {
      //1️⃣Filter first section: subscription
      if (subscriptionArray.length === 0) {
        //if no checked box, do nothing
        console.log("empty subscription");
      } else {
        filterProject = filterProject.filter((project) => {
          return subscriptionArray.some(
            // find all the project.subscription match the subscriptionArray element
            (element) => element === project.subscription
          );
        });
        //update New filtered project array to display
        setDisplayProjects(filterProject);
      }

      //2️⃣Filter second section: activityType
      if (activityTypeArray.length === 0) {
        console.log("empty activityType");
      } else {
        filterProject = filterProject.filter((project) =>
          activityTypeArray.some((element) => element === project.activityType)
        );
        setDisplayProjects(filterProject);
      }

      //3️⃣Filter third section: subjectMatter
      if (subjectMatterArray.length === 0) {
        console.log("empty subjectMatter");
      } else {
        filterProject = filterProject.filter((project) =>
          subjectMatterArray.some(
            (element) => element === project.subjectMatter
          )
        );
        setDisplayProjects(filterProject);
      }

      //4️⃣Filter fourth section: yearLevel
      if (yearLevelArray.length === 0) {
        console.log("empty year level");
      } else {
        filterProject = filterProject.filter((project) =>
          yearLevelArray.some((element) => element === project.yearLevel)
        );
        console.log(yearLevelArray);
        setDisplayProjects(filterProject);
      }
      console.log(displaydifficulty);
      console.log(displayNumber);
    }
  }, [
    // run above function whenever checkbox update state.
    subscriptionFilter,
    activityTypeFilter,
    subjectMatterFilter,
    yearLevelFilter,
    displaydifficulty,
    displayNumber,
  ]);

  return (
    // Created the main content in a separate component//
    <div className="stPrLiCo">
      {/* Created few buttons for the difficulty filters and show per page */}
      <div className="stPrLiCoMain">
        <div className="stPrLiCoTopBars">
          {/* Difficulty Bars */}
          <div className="stPrLiCoDifficultyFilterBars">
            <button
              value="Beginner"
              onClick={handleBtns}
              id="btn stPrLiCoBeginner"
            >
              Beginner
            </button>
            <button
              value="Intermediate"
              onClick={handleBtns}
              id="btn stPrLiCoIntermediate>"
            >
              Intermediate
            </button>
            <button
              value="Advanced"
              onClick={handleBtns}
              id="btn stPrLiCoAdvanced"
            >
              Advanced
            </button>
          </div>

          <div className="stPrLiCoShowFilterBars">
            <p className="stPrLiCoTitle">show</p>
            <button onClick={handleNumFilter}>5</button>
            <button onClick={handleNumFilter}>10</button>
            <button onClick={handleNumFilter}>All</button>
          </div>
          <div className="StPrLiCoContainer"></div>
        </div>
        {/* project section */}
        <div className="stPrLiCoSquareContainerWrapper">
          {displayProjects &&
            displayProjects.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.title} />
                <h2 className="CoTaTitle">
                  {item.title}⭐{item.yearLevel}
                </h2>
                <p className="CoTaSubtitle">
                  {item.difficulty} | {item.activityType}
                </p>
                <p className="CoTaSubtitle">
                  {item.subscription} | {item.subjectMatter}
                </p>
                {/* Add more elements as per your need */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

