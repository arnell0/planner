import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const weekdays = ['Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag','Söndag']

export default function Update(props) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({...props.item})

  const square = color => <span style={{backgroundColor:color, width:"24px", height:"24px", marginRight:"10px"}}>&nbsp;</span>

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    props.update(item)
    handleClose()
  };
  const handleDone = value => {
    var _item = {...item}
    _item.sign = value
    _item.done = true
    setItem(_item)
    props.update(_item)
    handleClose()  
  };
  const handleChange = e => {
    e.preventDefault()
    const {name, value} = e.target
    var _item = {...item}
    _item[name] = value
    setItem(_item)
  }

  return (
    <div>
      <div onClick={handleClickOpen} style={{cursor:"pointer"}}>
        {props.children}
      </div>

      <Dialog /* fullScreen */ open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingRight:"8px"}}>
          <DialogTitle id="form-dialog-title">
            Uppdatera
          </DialogTitle>

          <SignMenu {...props} handleDone={handleDone} />
        </div>

        <DialogContent>
          <form onSubmit={handleSave}>
          <TextField
            margin="dense"
            label="Titel"
            type="text"
            fullWidth
            name="title"
            value={item.title}
            style={{margin: "5px 0"}}
            onChange={handleChange}
          />
          
          <TextField
            margin="dense"
            label="Beskrivning"
            type="text"
            fullWidth
            multiline
            rowsMax={4}
            name="content"
            value={item.content}
            style={{margin: "5px 0"}}
            onChange={handleChange}
          />
          
          <TextField
            select
            label="Prioritet"
            fullWidth
            name="prio"
            value={item.prio}
            onChange={handleChange}
            helperText="Välj prioritet för denna uppgift."
            style={{margin: "5px 0"}}
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
            value={item.group}
            onChange={handleChange}
            style={{margin: "5px 0"}}
            helperText="Välj en dag när den ska utföras."
          >
            {weekdays.map((day, index) => <MenuItem key={index} value={index}>{day}</MenuItem>)}
          </TextField>
          </form>
        </DialogContent>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px"}}>
          <Button color="secondary" onClick={() => { if(window.confirm('Är du säker på att du vill radera denna uppgift?')) props.delete(item)} }>
            radera
          </Button>
          <div>
            <Button onClick={handleClose} color="primary">
              stäng
            </Button>
            <Button onClick={handleSave} color="primary">
              spara
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

function SignMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = e => {
    props.handleDone(e.target.innerText)
    handleClose();
  };

  const names = ['Martin J', 'Maja G'];

  return (
    <div>
      <Button variant="contained" color="primary" disableElevation onClick={handleClick}>Färdigställ</Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {names.map((el, i) => <MenuItem key={i} onClick={handleChange}>{el}</MenuItem>)}
      </Menu>
    </div>
  );
}