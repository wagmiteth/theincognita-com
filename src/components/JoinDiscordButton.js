import Button from '@mui/material/Button';

function JoinDiscordButton() {
  return (
    <div>
      <a href="https://discord.gg/EyvF2fEqWT" target="_blank" rel="noreferrer">
      <Button variant="contained" color="primary" sx={{marginTop: 2}}>
        Join Discord
      </Button>
      </a>
    </div>
  );
}

export default JoinDiscordButton;