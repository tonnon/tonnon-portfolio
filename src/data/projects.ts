/* import spaceoddysey from '/src/assets/bgcards/2001-space-oddysey.gif';
import adidas from '/src/assets/bgcards/adidas.gif';
import afilosfiadaviagemdotempo from '../../../public/bgcards/a-filosofia-da-viagem-no-tempo.gif';
import alongnight from '../../../public/bgcards/alongnight.gif';
import amongus from '../../../public/bgcards/amongus.webp';
import beingsofgreatconsciousnessandlove from '../../../public/bgcards/beings-of-great-consciousness-and-love.webp';
import brightstarinourencounter from '../../../public/bgcards/brightstarinourencounter.webp';
import brokenglassshapedofaheart from '../../../public/bgcards/brokenglassshapedofaheart.webp'; */
import btocmec from '/src/assets/bgcards/btomec.webp';
/* import calculadora from '../../../public/bgcards/calculadora.gif';
import cardapio from '../../../public/bgcards/cardapio.gif';
import companionofthesevenspaceships from '../../../public/bgcards/companionofthesevenspaceships.webp';
import cyberpool from '../../../public/bgcards/cyberpool.webp'; */
import cybertetromino from '/src/assets/bgcards/cybertetromino.gif';
/*  import cybersnake from '../../../public/bgcards/cybersnake.webp';
import deadgods from '../../../public/bgcards/deadgods.gif';
import deusesastronautas from '../../../public/bgcards/deusesastronautas.gif'; */
import eclipsers from '/src/assets/bgcards/eclipsers.gif';
/* import eventplataform from '../../../public/bgcards/eventplataform.webp';
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
import splitmind from '../../../public/bgcards/splitmind.webp'; */
import starsentry from '/src/assets/bgcards/starsentry.webp'; 
/* import theamazinglooperman from '../../../public/bgcards/theamazinglooperman.gif';
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
import youaretheonlyonewhowantsmearound from '../../../public/bgcards/youre-the-only-one-who-wants-me-around.webp'; */

 export interface Project {
  id: number;
  name: string;
  desc: string;
  type: 'website' | 'game';
  imageUrl: string;
  projectUrl: string;
} 

const projectData: Omit<Project, 'id'>[] = [
  {
    name: "BTOMEC",
    type: 'website',
    desc: 'Empresa especializada na fabricação de moldes de alta precisão para os setores de cosméticos, farmacêutico, higiene e alimentício.',
    imageUrl: btocmec,
    projectUrl: "https://btomec.vercel.app"
  },
  {
    name: "Cybertetromino",
    type: 'game',
    desc: 'Futuristic twist on the classic Tetris game — reimagined with a sleek cyberpunk aesthetic.',
    imageUrl: cybertetromino,
    projectUrl: "https://cybertetromino.vercel.app"
  },
  {
    name: "Eclipsers",
    type: 'website',
    desc: 'Eclipsers is a modern and responsive social network designed for eclipse enthusiasts from around the globe.',
    imageUrl: eclipsers,
    projectUrl: "https://eclipsers.vercel.app"
  },
  {
    name: "StarSentry",
    type: 'website',
    desc: 'A modern space traffic management system. This platform provides real-time tracking, collision predictions, and trajectory optimization for space objects.',
    imageUrl: starsentry,
    projectUrl: "https://starsentry.vercel.app"
  },
];

// Generate projects
export const generateProjects = (): Project[] => {
  return projectData.map((project, index) => ({
    id: index + 1,
    name: project.name,
    type: project.type,
    desc: project.desc,
    imageUrl: project.imageUrl,
    projectUrl: project.projectUrl
  }));
};
console.log(generateProjects())

// Export the generated projects
export const projects = generateProjects();