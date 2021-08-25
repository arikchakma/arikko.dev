/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
// src/components/CodeBlock.jsx
import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';

const CodeBlock = ({ codeString, language }) => (
  <Highlight {...defaultProps} code={codeString} language={language} theme={undefined}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);
export default CodeBlock;
