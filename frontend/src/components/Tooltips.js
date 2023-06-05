import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const ExampleComponent = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <button className="btn btn-secondary">Hover over me!</button>
      </OverlayTrigger>
    </div>
  );
};

export default ExampleComponent;