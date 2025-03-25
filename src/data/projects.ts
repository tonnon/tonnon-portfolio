import spaceoddysey from '/src/assets/bgcards/2001-space-oddysey.gif';
import adidas from '/src/assets/bgcards/adidas.gif';
import afilosfiadaviagemdotempo from '../../../public/bgcards/a-filosofia-da-viagem-no-tempo.gif';
import alongnight from '../../../public/bgcards/alongnight.gif';
import amongus from '../../../public/bgcards/amongus.webp';
import beingsofgreatconsciousnessandlove from '../../../public/bgcards/beings-of-great-consciousness-and-love.webp';
import brightstarinourencounter from '../../../public/bgcards/brightstarinourencounter.webp';
import brokenglassshapedofaheart from '../../../public/bgcards/brokenglassshapedofaheart.webp';
import btocmec from '/src/assets/bgcards/btomec.webp';
import calculadora from '../../../public/bgcards/calculadora.gif';
import cardapio from '../../../public/bgcards/cardapio.gif';
import companionofthesevenspaceships from '../../../public/bgcards/companionofthesevenspaceships.webp';
import cyberpool from '../../../public/bgcards/cyberpool.webp';
import cybersnake from '../../../public/bgcards/cybersnake.webp';
import deadgods from '../../../public/bgcards/deadgods.gif';
import deusesastronautas from '../../../public/bgcards/deusesastronautas.gif';
import eclipsers from '../../../public/bgcards/eclipsers.gif';
import eventplataform from '../../../public/bgcards/eventplataform.webp';
import everydayisaroughtime from '../../../public/bgcards/everydayisaroughtime.gif';
import experimentaltruchettiles from '../../../public/bgcards/experimentaltruchettiles.webp';
import feedbackwidget from '../../../public/bgcards/feedbackwidget.webp';
import extrapiecefromacompletedpuzzle from '../../../public/bgcards/extra-piece-from-a-completed-puzzle.webp'
import flapmorty from '../../../public/bgcards/flapmorty.webp';
import formtemplate from '../../../public/bgcards/formtemplate.gif';
import golenflameemanatingfromtheinnerlight from '../../../public/bgcards/golenflameemanatingfromtheinnerlight.webp';
import google from '../../../public/bgcards/google.webp';
import halloween from '../../../public/bgcards/halloween.webp';
import hanszimmer from '../../../public/bgcards/hanszimmer.gif';
import happyhourclub from '../../../public/bgcards/happyhourclub.webp';
import helptoner from '../../../public/bgcards/helptoner.gif';
import hihowareyou from '../../../public/bgcards/hihowareyou.webp';
import illuminati from '../../../public/bgcards/illuminati.gif';
import individualandcollectivetimeellipsis from '../../../public/bgcards/invidualandcollectivetimeellipsis.webp';
import ledzeppelin from '../../../public/bgcards/ledzeppelin.gif';
import letmeask from '../../../public/bgcards/letmeask.webp';
import lovelynight from '../../../public/bgcards/lovelynight.webp';
import mygraphiccardwontstopscreaming from '../../../public/bgcards/mygraphiccardwontstopscreaming.webp'
import netflix from '../../../public/bgcards/netflix.webp'
import newdawn from '../../../public/bgcards/newdawn.webp';
import particledefense from '../../../public/bgcards/particledefense.webp';
import pinterest from '../../../public/bgcards/pinterest.webp';
import powerofthepeople from '../../../public/bgcards/powerofthepeople.webp';
import rickandmorty from '../../../public/bgcards/rickandmorty.gif';
import soundtracker from '../../../public/bgcards/soundtracker.gif';
import souzaadv from '../../../public/bgcards/souzaadv.webp';
import splitmind from '../../../public/bgcards/splitmind.webp';
import starsentry from '/src/assets/bgcards/starsentry.webp';
import theamazinglooperman from '../../../public/bgcards/theamazinglooperman.gif';
import thetruthdealer from '../../../public/bgcards/thetruthdealer.webp';
import thewalkingdead from '../../../public/bgcards/thewalkingdead.gif';
import thingsthatialwayswantedsaytoyou from '../../../public/bgcards/thingsthatialwayswantedsaytoyou.webp';
import twinsistersfromtheshinning from '../../../public/bgcards/twinsistersfromtheshinning.webp';
import universallawoflove from '../../../public/bgcards/universal-law-of-love.webp';
import vercel from '../../../public/bgcards/vercel.webp';
import verificacaoemail from '../../../public/bgcards/verificacaoemail.gif';
import waroftheworlds from '../../../public/bgcards/war-of-the-worlds.gif';
import wavesofjoy from '../../../public/bgcards/wavesofjoy.webp';
import youshinelikefireworksonthisemptytown from '../../../public/bgcards/youshinelikefireworksonthisemptytown.webp';
import youaretheonlyonewhowantsmearound from '../../../public/bgcards/youre-the-only-one-who-wants-me-around.webp';


// Generate 59 projects with a mix of websites and games
export interface Project {
  id: number;
  name: string;
  type: 'website' | 'game';
  imageUrl: string;
  projectUrl: string;
}

// Images
const images = [
  btocmec,
  starsentry,
];

// Generate website names
const websiteNames = [
  "BTOMEC",
  "StarSentry",
];

// Generate game names
const gameNames = [  
];

// Generate url
const projectUrl = [
    "https://btomec.vercel.app",
    "https://starsentry.vercel.app",
];

// Generate projects
export const generateProjects = (): Project[] => {
  const projects: Project[] = [];
  
  // Websites
  for (let i = 0; i < websiteNames.length; i++) {
    projects.push({
      id: i + 1,
      name: websiteNames[i],
      type: 'website',
      imageUrl: `${images[i % images.length]}`,
      projectUrl: projectUrl[i]
    });
  }
  
  // Games
  for (let i = 0; i < gameNames.length; i++) {
    projects.push({
      id: i + 1,
      name: gameNames[i],
      type: 'game',
      imageUrl: `${images[(i)]}`,
      projectUrl: projectUrl[i]
    });
  }
  return projects;
};

// Export the generated projects
export const projects = generateProjects();
