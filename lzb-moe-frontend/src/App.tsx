import {
    cardBox,
    image,
    leftBox,
    logo,
    mainStyle,
    mainText,
    pinkText,
    redText,
} from './App.css';
import lzbMain from './assets/lzb-main.png';
import lzbLogo from './assets/lzb-logo.png';
import { HugCard } from './components/hugCard/HugCard';
import { Stats } from './components/stats/Stats';
import { TopBar } from './components/topbar/TopBar';
import { useCounter } from './hooks/useCounter';
import { useWebSocket } from './hooks/useWebSocket';

function App() {
    const updateEvents = useWebSocket();

    const [pets, incPets, setPets] = useCounter('pets');
    const [hugs, incHugs, setHugs] = useCounter('hugs');
    const [cheeks, incCheeks, setCheeks] = useCounter('cheeks');

    updateEvents.on('pets', setPets);
    updateEvents.on('hugs', setHugs);
    updateEvents.on('cheeks', setCheeks);

    const statsData = [
        { name: '쓰다듬어진 횟수', value: pets + '' },
        { name: '안긴 횟수', value: hugs + '' },
        { name: '볼이 당겨진 횟수', value: cheeks + '' },
    ];

    return (
        <>
            <TopBar onCheek={incCheeks} />
            <main className={mainStyle}>
                <div className={leftBox}>
                    <img src={lzbLogo} alt="LZB" className={logo} />

                    <div className={mainText}>
                        {' '}
                        이곳은 <span className={pinkText}>
                            귀여운
                        </span> LZB의 <span className={redText}>은밀한</span>{' '}
                        사이트입니다.{' '}
                    </div>

                    <div className={cardBox}>
                        <HugCard onHug={incHugs} onPet={incPets} />
                        <Stats stats={statsData} />
                    </div>
                </div>

                <img src={lzbMain} alt="LZB" className={image} />
            </main>
        </>
    );
}

export default App;
