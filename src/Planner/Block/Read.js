import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import CheckIcon from '@material-ui/icons/Check';

const weekdays = ['Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag','Söndag']

export default function Update(props) {
  const [open, setOpen] = useState(false);

  const square = color => <span style={{backgroundColor:color, width:"24px", height:"24px", marginRight:"10px"}}>&nbsp;</span>

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleActivate = () => {
    var _item = {...props.item}
    _item.done = false
    _item.sign = ''
    props.update(_item)
    handleClose()  
  };

  return (
    <div>
      <div onClick={handleClickOpen} style={{cursor:"pointer"}}>
        {props.children}
      </div>

      <Dialog /* fullScreen */ open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingRight:"8px"}}>
          <DialogTitle id="form-dialog-title">
            Uppgift
          </DialogTitle>

          <Button color="default" disableElevation>
            <div style={{display:"flex"}}>
              <CheckIcon style={{color:"green", marginRight:"5px"}} />
              {props.item.sign}
            </div>
          </Button>
        </div>

        <DialogContent>
          <TextField
            margin="dense"
            label="Titel"
            type="text"
            fullWidth
            style={{margin: "5px 0"}}
            defaultValue={props.item.title}
            InputProps={{
              readOnly: true,
            }}
          />
          
          <TextField
            margin="dense"
            label="Beskrivning"
            type="text"
            fullWidth
            multiline
            rowsMax={4}
            name="content"
            defaultValue={props.item.content}
            style={{margin: "5px 0"}}
            InputProps={{
              readOnly: true,
            }}
          />
          
          <TextField
            select
            label="Prioritet"
            fullWidth
            name="prio"
            value={props.item.prio}
            helperText="Välj prioritet för denna uppgift."
            style={{margin: "5px 0"}}
            InputProps={{
              readOnly: true,
            }}
          >
            <MenuItem value={0}>{square("blue")} Låg</MenuItem>
            <MenuItem value={1}>{square("orange")} Mellan</MenuItem>
            <MenuItem value={2}>{square("red")} Hög</MenuItem>
          </TextField>

          <TextField
            select
            label="Dag"
            fullWidth
            name="group"
            value={props.item.group}
            style={{margin: "5px 0"}}
            helperText="Välj en dag när den ska utföras."
            InputProps={{
              readOnly: true,
            }}
          >
            {weekdays.map((day, index) => <MenuItem key={index} value={index}>{day}</MenuItem>)}
          </TextField>
        </DialogContent>

        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px"}}>
          <Button color="secondary"  onClick={() => { if(window.confirm('Är du säker på att du vill återaktivera denna uppgift?')) handleActivate()} }>
            <div style={{color:"green"}}>återaktivera</div>
          </Button>
          <Button onClick={handleClose} color="primary">
            stäng
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
