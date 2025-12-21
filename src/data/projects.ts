/* import spaceoddysey from '/src/assets/bgcards/2001-space-oddysey.gif';
import adidas from '/src/assets/bgcards/adidas.gif';
import afilosfiadaviagemdotempo from '../../../public/bgcards/a-filosofia-da-viagem-no-tempo.gif';
import alongnight from '../../../public/bgcards/alongnight.gif';
import amongus from '../../../public/bgcards/amongus.webp';
import beingsofgreatconsciousnessandlove from '../../../public/bgcards/beings-of-great-consciousness-and-love.webp';
import brightstarinourencounter from '../../../public/bgcards/brightstarinourencounter.webp';
import brokenglassshapedofaheart from '../../../public/bgcards/brokenglassshapedofaheart.webp'; */
import btocmec from '/src/assets/bgcards/btomec.webp';

/* import companionofthesevenspaceships from '../../../public/bgcards/companionofthesevenspaceships.webp'; */
import cybertetromino from '/src/assets/bgcards/cybertetromino.gif';
/* import cyberpool from '../../../public/bgcards/cyberpool.webp';  */
import crewcipher from '/src/assets/bgcards/crew-cipher.svg';
/*  import cybersnake from '../../../public/bgcards/cybersnake.webp';  */
import eclipsers from '/src/assets/bgcards/eclipsers.gif';
import ecotech from '/src/assets/bgcards/ecotech.gif';
/*   import eventplataform from '../../../public/bgcards/eventplataform.webp';
import everydayisaroughtime from '../../../public/bgcards/everydayisaroughtime.gif';
import experimentaltruchettiles from '../../../public/bgcards/experimentaltruchettiles.webp';
import feedbackwidget from '../../../public/bgcards/feedbackwidget.webp';
import extrapiecefromacompletedpuzzle from '../../../public/bgcards/extra-piece-from-a-completed-puzzle.webp'
import flapmorty from '../../../public/bgcards/flapmorty.webp';
import formtemplate from '../../../public/bgcards/formtemplate.gif';
import golenflameemanatingfromtheinnerlight from '../../../public/bgcards/golenflameemanatingfromtheinnerlight.webp';
import google from '../../../public/bgcards/google.webp';
import halloween from '../../../public/bgcards/halloween.webp';;
import helptoner from '../../../public/bgcards/helptoner.gif';
import hihowareyou from '../../../public/bgcards/hihowareyou.webp'; */
import hanszimmer from '/src/assets/bgcards/hans-zimmer.webp'
/* import hikari from '/src/assets/bgcards/hikari.webp'; */
import inwo from '/src/assets/bgcards/illuminati.gif';
import imageaipro from '/src/assets/bgcards/image-ai-pro.webp';
/*  import individualandcollectivetimeellipsis from '../../../public/bgcards/invidualandcollectivetimeellipsis.webp';
import ledzeppelin from '../../../public/bgcards/ledzeppelin.gif';
import letmeask from '../../../public/bgcards/letmeask.webp';
import lovelynight from '../../../public/bgcards/lovelynight.webp';
import mygraphiccardwontstopscreaming from '../../../public/bgcards/mygraphiccardwontstopscreaming.webp'
import netflix from '../../../public/bgcards/netflix.webp'
import newdawn from '../../../public/bgcards/newdawn.webp';
import particledefense from '../../../public/bgcards/particledefense.webp';
import pinterest from '../../../public/bgcards/pinterest.webp';
import powerofthepeople from '../../../public/bgcards/powerofthepeople.webp'; */
import quantumcalc from '/src/assets/bgcards/quantum-calc.webp';
/* import rickandmorty from '../../../public/bgcards/rickandmorty.gif';
import soundtracker from '../../../public/bgcards/soundtracker.gif';
import souzaadv from '../../../public/bgcards/souzaadv.webp';
import splitmind from '../../../public/bgcards/splitmind.webp';  */
import starsentry from '/src/assets/bgcards/starsentry.webp';
import theamazinglooperman from '/src/assets/bgcards/theamazinglooperman.gif';
import thedeadgods from '/src/assets/bgcards/the-dead-gods.webp';
/*  import thetruthdealer from '../../../public/bgcards/thetruthdealer.webp';
import thewalkingdead from '../../../public/bgcards/thewalkingdead.gif';
import thingsthatialwayswantedsaytoyou from '../../../public/bgcards/thingsthatialwayswantedsaytoyou.webp';
import twinsistersfromtheshinning from '../../../public/bgcards/twinsistersfromtheshinning.webp';
import universallawoflove from '../../../public/bgcards/universal-law-of-love.webp';
import vercel from '../../../public/bgcards/vercel.webp';
import verificacaoemail from '../../../public/bgcards/verificacaoemail.gif'; */
import waroftheworlds from '/src/assets/bgcards/war-of-the-worlds.gif';
/* import wavesofjoy from '../../../public/bgcards/wavesofjoy.webp';
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
    name: "Crew Cipher",
    type: 'game',
    desc: 'Aplicação web interativa desenvolvida em Flask que simula um sistema de controle de acesso de uma nave espacial. O sistema utiliza criptografia Fernet, geração de QR codes e uma interface drag-and-drop para validar credenciais de tripulantes.',
    imageUrl: crewcipher,
    projectUrl: "https://crew-cipher.vercel.app"
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
    name: "EcoTech",
    type: 'website',
    desc: 'Este projeto explora os impactos ambientais e sociais do lixo eletrônico no mundo moderno.',
    imageUrl: ecotech,
    projectUrl: "https://tonnon.github.io/ecotech/"
  },
  {
    name: "Hans Zimmer",
    type: 'website',
    desc: 'A modern, responsive, and cinematic landing page dedicated to Hans Zimmer — one of the most iconic film composers of all time.',
    imageUrl: hanszimmer,
    projectUrl: "https://hans-zimmer-orpin.vercel.app"
  },
  {
    name: "Illuminati: New World Order Online",
    type: 'game',
    desc: 'Digital reimagining of the cult classic conspiracy card game. Take control of secret societies, manipulate world events, and outwit your rivals in a battle for global domination. Every card is a plot, every move a step deeper into the shadows.',
    imageUrl: inwo,
    projectUrl: "https://inwo.vercel.app"
  },
  {
    name: "ImageAI Pro",
    type: 'website',
    desc: 'Uma plataforma web para processamento de imagens em lote, focada na remoção de fundos e melhoria de qualidade. Todo o processamento é realizado localmente no navegador do usuário, garantindo privacidade e velocidade.',
    imageUrl: imageaipro,
    projectUrl: "https://image-ai-pro.vercel.app"
  },
  {
    name: "Quantum Calc",
    type: 'website',
    desc: 'Cyberpunk-themed scientific calculator. Designed for both functionality and futuristic aesthetics, it provides an intuitive interface for advanced mathematical operations in a sleek, neon-infused environment.',
    imageUrl: quantumcalc,
    projectUrl: "https://quantum-calc-five.vercel.app"
  },
  {
    name: "StarSentry",
    type: 'website',
    desc: 'A modern space traffic management system. This platform provides real-time tracking, collision predictions, and trajectory optimization for space objects.',
    imageUrl: starsentry,
    projectUrl: "https://starsentry.vercel.app"
  },
  {
    name: "The Amazing Looperman",
    type: 'game',
    desc: "Fast-paced arcade game where your goal is simple: survive. Dodge incoming enemies, avoid collisions, and stay alive as long as you can in this endless challenge.",
    imageUrl: theamazinglooperman,
    projectUrl: "https://the-amazing-looperman.vercel.app"
  },
  {
    name: "The Dead Gods",
    type: 'website',
    desc: "A satirical and surreal landing page for a fictional rock supergroup of resurrected legends — Jimi Hendrix, John Lennon, Kurt Cobain, Janis Joplin, Jeff Buckley, and Keith Moon.",
    imageUrl: thedeadgods,
    projectUrl: "https://the-dead-gods.vercel.app"
  },
  {
    name: "War of the Worlds",
    type: 'game',
    desc: "A retro-style interactive game, inspired by H.G. Wells classic science fiction novel.",
    imageUrl: waroftheworlds,
    projectUrl: "https://tonnon.github.io/war-of-the-worlds/"
  },
];

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

export const projects = generateProjects();