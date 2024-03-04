import floppa from '../../assets/projects/floppa.webp'
import agidoc from '../../assets/projects/agidoc.webp';
import theo from '../../assets/projects/theo.webp';
import films from '../../assets/projects/webfilms.webp';
import kimetsu from '../../assets/projects/kimetsu.webp';
import batcat from '../../assets/projects/thebatcat.webp';
import techcat from '../../assets/projects/techcat.webp';
import gym from '../../assets/projects/gymboard.webp';
import horror from '../../assets/projects/horror.webp';
import vet from "../../assets/projects/vetpet.webp";
import rick from '../../assets/projects/rickmorty.webp';


export interface Project {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    link: string;
    collab: string;
}
const projectsData: Project[] = [
    { id: 1, name: 'I love floppa', description: 'floppa' , imageUrl: floppa, link:"https://ilovefloppa.vercel.app/", collab: 'solo' },
    { id: 2, name: 'AgiDoc', description: 'agidoc', imageUrl: agidoc , link:"https://vs13-04-agi-doc.vercel.app/",  collab: 'group' },
    { id: 3, name: 'Theo fansite', description: 'theo', imageUrl: theo, link:"https://faclubedotheogordo.vercel.app/",  collab: 'solo' },
    { id: 4, name: 'Webfilms', description: 'films', imageUrl: films, link:"https://webfilms-javascript.vercel.app/",  collab: 'group' },
    { id: 5, name: 'Demon Slayer', description: 'kimetsu', imageUrl: kimetsu, link:"https://task-01-styled-components.vercel.app/",  collab: 'group' },
    { id: 6, name: 'The BatCat', description: 'batcat', imageUrl: batcat, link:"https://thebatcatcave.vercel.app/",  collab: 'solo' },
    { id: 7, name: 'TechCat', description: 'techcat', imageUrl: techcat, link:"https://techcatbookstore.vercel.app/",  collab: 'group' },
    { id: 8, name: 'Dashboard', description: 'gym', imageUrl: gym, link:"https://vs13-admin-dashboard.vercel.app/",  collab: 'group' },
    { id: 9, name: 'Horror Empire', description: 'horror', imageUrl: horror, link:"https://horrorempire.vercel.app/",  collab: 'solo' },
    { id: 10, name: 'VetPet', description: 'vet', imageUrl: vet, link:"https://clinica-vetpet-dojo.vercel.app/",  collab: 'group' },
    { id: 11, name: 'Rick & Morty', description: 'rick', imageUrl: rick, link:"https://clarasrickandmortysite.vercel.app/",  collab: 'solo' },

];
export default projectsData;
