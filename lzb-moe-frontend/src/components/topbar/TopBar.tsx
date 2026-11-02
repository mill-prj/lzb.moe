import lzbClose from '../../assets/lzb-close.png';
import { avatar, text, topBar } from './TopBar.css';

export function TopBar({ onCheek }: { onCheek: () => void }) {
    return (
        <header className={topBar}>
            <img src={lzbClose} alt="LZB" className={avatar} onClick={onCheek} />
            <div className={text}>lzb.moe</div>
        </header>
    );
}
