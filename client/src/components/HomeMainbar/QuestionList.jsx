// QuestionList.jsx
import React, { useState } from "react";
import Questions from "./Questions";

const tagList = [
  "c", "css", "express", "firebase", "html", "java", "javascript", "mern",
  "mongodb", "mysql", "next.js", "node.js", "php", "python", "reactjs"
];

const QuestionList = ({ questionsList }) => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredQuestions = selectedTag
    ? questionsList.filter((q) => q.questionTags.includes(selectedTag))
    : questionsList;

  return (
    <>
      <h2>Top Questions</h2>

      {/* Tag Filter Section */}
      <div className="tag-filter-section">
        {tagList.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`tag-button ${selectedTag === tag ? "active-tag" : ""}`}
          >
            {tag}
          </button>
        ))}
        {selectedTag && (
          <button onClick={() => setSelectedTag("")} className="clear-filter-btn">
            Clear Filter
          </button>
        )}
      </div>

      {/* Questions List */}
      {filteredQuestions.length > 0 ? (
        filteredQuestions.map((question) => (
          <Questions question={question} key={question._id} />
        ))
      ) : (
        <p>No questions found for "{selectedTag}"</p>
      )}
    </>
  );
};

export default QuestionList;
