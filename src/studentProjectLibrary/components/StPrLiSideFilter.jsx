import "../components/StPrLiSideFilter.css";

export default function StPrLiSideFilter({
  handleSubscriptionFilterChange,
  handleActivityTypeFilterChange,
  handleSubjectMatterFilterChange,
  handleYearLevelFilterChange,
}) {
  return (
    <div className="StPrLiCoSideFilter">
      <p className="SideFilterP">Subscription</p>
      <label>
        <input
          type="checkbox"
          name="Free"
          onChange={handleSubscriptionFilterChange}
        />
        Free
      </label>
      <label>
        <input
          type="checkbox"
          name="Premium"
          onChange={handleSubscriptionFilterChange}
        />
        Premium
      </label>
      <p className="SideFilterP">Activity Type</p>
      <label>
        <input
          type="checkbox"
          name="Animation"
          onChange={handleActivityTypeFilterChange}
        />
        Animation
      </label>
      <label>
        <input
          type="checkbox"
          name="Game"
          onChange={handleActivityTypeFilterChange}
        />
        Game
      </label>
      <label>
        <input
          type="checkbox"
          name="ChatBot"
          onChange={handleActivityTypeFilterChange}
        />
        ChatBot
      </label>
      <label>
        <input
          type="checkbox"
          name="Augmented Reality"
          onChange={handleActivityTypeFilterChange}
        />
        Augmented Reality
      </label>
      <p className="SideFilterP">
        Subject Matter

      </p>
      <label>
        <input
          type="checkbox"
          name="Computer Science"
          onChange={handleSubjectMatterFilterChange}
        />
        Computer Science
      </label>
      <label>
        <input
          type="checkbox"
          name="Maths"
          onChange={handleSubjectMatterFilterChange}
        />
        Maths
      </label>
      <label>
        <input
          type="checkbox"
          name="Science"
          onChange={handleSubjectMatterFilterChange}
        />
        Science
      </label>
      <label>
        <input
          type="checkbox"
          name="Language"
          onChange={handleSubjectMatterFilterChange}
        />
        Language
      </label>
      <label>
        <input
          type="checkbox"
          name="Art"
          onChange={handleSubjectMatterFilterChange}
        />
        Art
      </label>
      <label>
        <input
          type="checkbox"
          name="Music"
          onChange={handleSubjectMatterFilterChange}
        />
        Music
      </label>

      <p className="SideFilterP">Year Level</p>
      <label>
        <input
          type="checkbox"
          name="1-4"
          onChange={handleYearLevelFilterChange}
        />
        1-4
      </label>
      <label>
        <input
          type="checkbox"
          name="5-6"
          onChange={handleYearLevelFilterChange}
        />
        5-6
      </label>
      <label>
        <input
          type="checkbox"
          name="7-8"
          onChange={handleYearLevelFilterChange}
        />
        7-8
      </label>
      <label>
        <input
          type="checkbox"
          name="9-13"
          onChange={handleYearLevelFilterChange}
        />
        9-13
      </label>
    </div>
  );
}
