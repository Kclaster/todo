import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import ListItemText from '@material-ui/core/ListItemText';


// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ToDoItem = props => {
  const { classes } = props;

  return (
    <div>
      {/* <List >
            <ExpansionPanel>
              <ExpansionPanelSummary>
                <Typography><h3>{props.title}</h3></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className="todo-description" >{props.description}</Typography>
              </ExpansionPanelDetails>
              <Button
                variant="contained"
                color="secondary"
                className="complete-button"
                onClick={e => props.handleClick(e, props.taskId)}
              >
                Complete Task
        </Button>
            </ExpansionPanel>
            <ListItemText >
            </ListItemText>
      </List> */}

      <Card>
        <div className="todo-border">
          <ExpansionPanel>
            <ExpansionPanelSummary>
              <Typography><h3>{props.title}</h3></Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="todo-description" >{props.description}</Typography>
            </ExpansionPanelDetails>
            <Button
              variant="contained"
              color="secondary"
              className="complete-button"
              onClick={e => props.handleClick(e, props.taskId)}
            >
              Complete Task
        </Button>
          </ExpansionPanel>
        </div>
      </Card>
    </div>
  );
};

export default ToDoItem;
