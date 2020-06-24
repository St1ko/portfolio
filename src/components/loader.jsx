import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #02012a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  pre {
    font-weight: 600;
  }
`;

const Loader = () => {
  const [completed, setCompleted] = useState(0);
  const initialBar = "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";
  let progress = "█".repeat(completed) + initialBar.slice(completed, 20);

  useEffect(() => {
    setInterval(
      () =>
        setCompleted((completed) =>
          completed < 20 ? completed + 1 : completed
        ),
      60
    );
  }, []);

  return (
    completed < 20 && (
      <StyledLoader>
        <pre>
          {String.raw` ________  _________  ___        ___  ________
|\   ____\|\___   ___\\  \      |\  \|\   ___  \
\ \  \___|\|___ \  \_\ \  \     \ \  \ \  \\ \  \
 \ \_____  \   \ \  \ \ \  \  __ \ \  \ \  \\ \  \
  \|____|\  \   \ \  \ \ \  \|\  \\_\  \ \  \\ \  \
    ____\_\  \   \ \__\ \ \__\ \________\ \__\\ \__\
   |\_________\   \|__|  \|__|\|________|\|__| \|__|
   \|_________|          `}
        </pre>
        <pre>{progress}</pre>
      </StyledLoader>
    )
  );
};

export default Loader;
