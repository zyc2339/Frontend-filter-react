import "./StudentProjectLibrary.css";
import StPrLiHeader from "./components/StPrLiHeader";
import StPrLiSideFilter from "./components/StPrLiSideFilter";
import StPrLiContent from "./components/StPrLiContent";
import StPrLiBottomSection from "./components/StPrLiBottomSection";
import { useState } from "react";

export default function StudentProjectLibrary() {
 const [subscriptionFilter, setSubscriptionFilter] = useState({
   Free: false,
   Premium: false,
 });
 const [activityTypeFilter, setActivityTypeFilter] = useState({
   Animation: false,
   Game: false,
   ChatBot: false,
   AugmentedReality: false,
 });
 const [subjectMatterFilter, setSubjectMatterFilter] = useState({
   Free: false,
   Premium: false,
 });
 const [yearLevelFilter, setYearLevelFilter] = useState({
   "1-4": false,
   "5-6": false,
   "7-8": false,
   "9-13": false,
 });

 const handleSubscriptionFilterChange = (e) => {
   // ⭐copies all the key-value pairs from the existing filter object and then adds or updates a single key-value pair.
   setSubscriptionFilter({
     ...subscriptionFilter,
     [e.target.name]: e.target.checked,
   });
 };
 const handleActivityTypeFilterChange = (e) => {
   // ⭐copies all the key-value pairs from the existing filter object and then adds or updates a single key-value pair.
   setActivityTypeFilter({
     ...activityTypeFilter,
     [e.target.name]: e.target.checked,
   });
 };
 const handleSubjectMatterFilterChange = (e) => {
   // ⭐copies all the key-value pairs from the existing filter object and then adds or updates a single key-value pair.
   setSubjectMatterFilter({
     ...subjectMatterFilter,
     [e.target.name]: e.target.checked,
   });
 };
 const handleYearLevelFilterChange = (e) => {
   // ⭐copies all the key-value pairs from the existing filter object and then adds or updates a single key-value pair.
   setYearLevelFilter({
     ...yearLevelFilter,
     [e.target.name]: e.target.checked,
   });
 };

 return (
   <div className="StudentProjectLibrary">
     <div className="Header">
       <StPrLiHeader />
       {/* created divs to further css creations */}
       <div className="MiddleContent">
         <div className="SideFilter">
           <StPrLiSideFilter
             handleSubscriptionFilterChange={handleSubscriptionFilterChange}
             handleActivityTypeFilterChange={handleActivityTypeFilterChange}
             handleSubjectMatterFilterChange={handleSubjectMatterFilterChange}
             handleYearLevelFilterChange={handleYearLevelFilterChange}
           />
         </div>
         <div className="StPrLiMainContent">
           <StPrLiContent
             subscriptionFilter={subscriptionFilter}
             activityTypeFilter={activityTypeFilter}
             subjectMatterFilter={subjectMatterFilter}
             yearLevelFilter={yearLevelFilter}
           />
         </div>
       </div>
       <StPrLiBottomSection />
     </div>
   </div>
 );
}
