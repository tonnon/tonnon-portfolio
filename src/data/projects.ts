import alongnight from '/src/assets/bgcards/a-long-night.webp';
import amongus from '/src/assets/bgcards/amongus.gif';
import beckoned from '/src/assets/bgcards/beckoned.webp';
import brokenglassshapedofaheart from '/src/assets/bgcards/brokenglassshapedofaheart.webp'; 
import btocmec from '/src/assets/bgcards/btomec.png';
import crewcipher from '/src/assets/bgcards/crew-cipher.svg';
import cyberpool from '/src/assets/bgcards/cyberpool.webp';
import cybersnake from '/src/assets/bgcards/cybersnake.webp';
import cybertetromino from '/src/assets/bgcards/cybertetromino.gif';
import eclipsers from '/src/assets/bgcards/eclipsers.gif';
import ecotech from '/src/assets/bgcards/ecotech.gif';
import flapmorty from '/src/assets/bgcards/flapmorty.webp';
import gargantua from '/src/assets/bgcards/gargantua.gif';
import hanszimmer from '/src/assets/bgcards/hans-zimmer.webp'
import helptoner from '/src/assets/bgcards/helptoner.png';
import inwo from '/src/assets/bgcards/illuminati.gif';
import imageaipro from '/src/assets/bgcards/image-ai-pro.webp';
import individua from '/src/assets/bgcards/individua.webp';
import oraculo from '/src/assets/bgcards/oraculo.gif';
import quantumcalc from '/src/assets/bgcards/quantum-calc.webp';
import soundtracker from '/src/assets/bgcards/soundtracker.gif';
import starsentry from '/src/assets/bgcards/starsentry.png';
import theamazinglooperman from '/src/assets/bgcards/theamazinglooperman.gif';
import thedeadgods from '/src/assets/bgcards/thedeadgods.gif';
import waroftheworlds from '/src/assets/bgcards/war-of-the-worlds.gif';

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
    name: "A Long Night",
    type: 'game',
    desc: 'A top-down roguelike wave-shooter for the browser.',
    imageUrl: alongnight,
    projectUrl: "https://a-long-night.vercel.app/"
  },
  {
    name: "Among Us: Start Reactor Mini-Game",
    type: 'game',
    desc: 'A browser recreation of the Start Reactor task from Among Us.',
    imageUrl: amongus,
    projectUrl: "https://among-us-start-reactor-mini-game.vercel.app/"
  },
  {
    name: "Beckoned",
    type: 'website',
    desc: 'Beckoned is a first-person psychological horror game inspired by PT and Silent Hil.',
    imageUrl: beckoned,
    projectUrl: "https://beckoned.vercel.app/"
  },
  {
    name: "Broken Glass Shaped of a Heart",
    type: 'website',
    desc: 'An interactive SVG animation of a heart made of shattered glass shards. Click anywhere to watch the pieces explode outward into chaos — click again to watch them reassemble into a heart, right before your eyes.',
    imageUrl: brokenglassshapedofaheart,
    projectUrl: "https://broken-glass-shaped-of-a-heart.vercel.app/"
  },
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
    desc: 'Aplicação web interativa desenvolvida em Flask que simula um sistema de controle de acesso de um navio. O sistema utiliza criptografia Fernet, geração de QR codes e uma interface drag-and-drop para validar credenciais de tripulantes.',
    imageUrl: crewcipher,
    projectUrl: "https://crew-cipher.vercel.app"
  },
  {
    name: "CyberPool",
    type: 'game',
    desc: 'A 2D physics-based pool game with a cyberpunk visual identity, built to match the gameplay feel of 8 Ball Pool.',
    imageUrl: cyberpool,
    projectUrl: "https://cyberpool.vercel.app/"
  },
  {
    name: "CyberSnake",
    type: 'game',
    desc: 'A neon-soaked, cyberpunk take on the classic Snake game.',
    imageUrl: cybersnake,
    projectUrl: "https://gamecybersnake.vercel.app/"
  },
  {
    name: "CyberTetromino",
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
    name: "Flap Morty",
    type: 'game',
    desc: 'A Flappy Bird-style arcade game starring Butterfly Morty,',
    imageUrl: flapmorty,
    projectUrl: "https://flap-morty.vercel.app/"
  },
  {
    name: "Gargantua",
    type: 'website',
    desc: 'An immersive, single-page 3D recreation of the black hole from Interstellar.',
    imageUrl: gargantua,
    projectUrl: "https://interstellar-gargantua.vercel.app/"
  },
  {
    name: "Hans Zimmer",
    type: 'website',
    desc: 'A modern, responsive, and cinematic landing page dedicated to Hans Zimmer — one of the most iconic film composers of all time.',
    imageUrl: hanszimmer,
    projectUrl: "https://hans-zimmer-orpin.vercel.app"
  },
  {
    name: "Helptoner",
    type: 'website',
    desc: 'Landing page institucional da Helptoner, assistência técnica de impressoras, copiadoras e suprimentos.',
    imageUrl: helptoner,
    projectUrl: "https://helptoner.vercel.app/"
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
    name: "Individua",
    type: 'website',
    desc: 'Um sistema de vida gamificado: cada missão concluída (manual ou importada do Trello) vira XP, sobe seus atributos (virtudes), sobe seu rank e enche seu cofre de moedas — trocáveis por recompensas que você mesmo define na Loja do Tempo.',
    imageUrl: individua,
    projectUrl: "https://individua.vercel.app/login"
  },
  {
    name: "ORÁCULO",
    type: 'website',
    desc: 'Chat com IA em formato de terminal retrô (tema CRT verde), com efeito de digitação e um assistente com personalidade fixa (system prompt de personagem, não genérico).',
    imageUrl: oraculo,
    projectUrl: "https://oraculoai.vercel.app/"
  },
  {
    name: "Quantum Calc",
    type: 'website',
    desc: 'Cyberpunk-themed scientific calculator. Designed for both functionality and futuristic aesthetics, it provides an intuitive interface for advanced mathematical operations in a sleek, neon-infused environment.',
    imageUrl: quantumcalc,
    projectUrl: "https://quantum-calc-five.vercel.app"
  },
    {
    name: "Soundtracker",
    type: 'website',
    desc: 'A real-news curation of soundtracks for film, TV and games — headlines, images, summaries and links aggregated live from the GNews API.',
    imageUrl: soundtracker,
    projectUrl: "https://soundtrackernews.vercel.app"
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