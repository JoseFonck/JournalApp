
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout >
      {/* <Typography  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsum ratione, eos quod nisi maxime sequi soluta adipisci sapiente deleniti nesciunt officia laboriosam dolorem voluptate harum labore voluptatum beatae non.</Typography> */}
      <NothingSelectedView/>
      {/* <NoteView></NoteView> */}
      <IconButton 
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': {backgroundColor:'error.main', opacity:0.9},
            position: 'fixed',
            right: 50,
            bottom: 50
          }} 
        >
          <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
    
  )
}

// Stereo underground -echos
