// import React from 'react';
// import './style.css';

// class ToDoItem extends React.Component {
//   render(props) {
//     return (
//       <div>
//         <h3 class="fto-do-item-chore">change</h3>
//       </div>
//     );
//   }
// }

// export default ToDoItem;

import React from 'react';
import './style.css';
// import classNames from 'classnames';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

// import green from '@material-ui/core/colors/green';
// import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
import axios from 'axios';
import Card from '@material-ui/core/Card';
// import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ToDoItem = props => {
  const { classes } = props;

  return (
    <div>
      <Card>
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography>{props.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{props.description}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Button
          variant="contained"
          color="secondary"
          className="complete-button"
          onClick={e => props.handleClick(e, props.taskId)}
        >
          Complete Task
        </Button>
      </Card>
    </div>
  );
};

// ToDoItem.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default ToDoItem;
