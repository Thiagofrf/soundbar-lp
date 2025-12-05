import WirelessIcon from "../../assets/icons/wireless-icon.png";
import BluetoothIcon from "../../assets/icons/bluetooth-icon.png";
import SoundIcon from "../../assets/icons/sound-icon.png";
import ChannelsIcon from "../../assets/icons/channels-icon.png";
import CablesIcon from "../../assets/icons/cables-icon.png";

const tipBarProperties = [
    {
        icon: WirelessIcon,
        text: "Subwoofer Wireless",
    },
    {
        icon: BluetoothIcon,
        text: "Conexão bluetooth"
    }, 
    {
        icon: SoundIcon,
        text: "300 W RMS potência total"
    },
    {
        icon: ChannelsIcon,
        text: "2.1 canais"
    },
    {
        icon: CablesIcon,
        text: ["Entradas auxiliar (AUX)", "HDMI (ARC) óptico",  "USB 2.0 | coaxial"]
    }
]

export default tipBarProperties