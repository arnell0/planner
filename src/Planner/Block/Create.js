import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

const weekdays = ['Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag','Söndag']

export default function Create(props) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({title: "", content: "", author: "", prio: 1, index: 100, group: props.group, sign: '', done:false})

  const square = color => <span style={{backgroundColor:color, width:"24px", height:"24px", marginRight:"10px"}}>&nbsp;</span>

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setItem({title: "", content: "", author: "", prio: 1, index: 100, group: props.group, sign: '', done:false})
  };
  const handleSave = () => {
    props.create(item)
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
      <Button color="primary" onClick={handleClickOpen}>
        Skapa + 
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Skapa
        </DialogTitle>

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

          <TextField
            select
            label="Skapare"
            
            name="author"
            value={item.author}
            onChange={handleChange}
            helperText="Välj vem som skapar denna uppgift."
            style={{margin: "5px 0"}}
          >
            {['Martin J', 'Adams S'].map((el, i) => <MenuItem key={i} value={el}>{el}</MenuItem>)}
          </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            stäng
          </Button>
          <Button onClick={handleSave} color="primary">
            spara
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}