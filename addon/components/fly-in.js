import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FlyInComponent extends Component {
    get activeWidth() {
        return this.args.activeWidth || '300px';
    }

    get icon() {
        return this.args.icon || null;
    }

    get imageSrc() {
        return this.args.imageSrc || 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png';
    }

    get title() {
        return this.args.title || 'Title';
    }

    get titleOffset() {
        return this.args.titleOffset || '15%';
    }

    get yPercentage() {
        return this.args.yPercentage || '10%';
    }

    @action
    configContent(element) {
        element.style.right = this.titleOffset;
    }
    
    @action
    configWrapper(element) {
        element.style.top = this.yPercentage;

        element.addEventListener('mouseenter', async () => {
            element.style.minWidth = this.activeWidth;
            await new Promise(resolve => setTimeout(resolve, 100));
            let dropdown = element.querySelector('.fly-in-dropdown');
            if (dropdown) {
                dropdown.style.display = 'block';
                dropdown.classList.add('fly-in-dropdown-hover');
            }
        });
        element.addEventListener('mouseleave', async () => {
            element.style.minWidth = '';
            element.querySelector('.fly-in-dropdown').style.display = 'none';
            let dropdown = element.querySelector('.fly-in-dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
                dropdown.classList.remove('fly-in-dropdown-hover');
            }
        });
    }
}
