import separatorImage from '../../../../assets/separator.png'
import clayImage from '../../../../assets/symbols/clay.png'
import compassImage from '../../../../assets/symbols/compass.png'
import gearImage from '../../../../assets/symbols/gear.png'
import glassImage from '../../../../assets/symbols/glass.png'
import loomImage from '../../../../assets/symbols/loom.png'
import oreImage from '../../../../assets/symbols/ore.png'
import papyrusImage from '../../../../assets/symbols/papyrus.png'
import point1Image from '../../../../assets/symbols/point-1.png'
import point2Image from '../../../../assets/symbols/point-2.png'
import point3Image from '../../../../assets/symbols/point-3.png'
import point4Image from '../../../../assets/symbols/point-4.png'
import point5Image from '../../../../assets/symbols/point-5.png'
import point6Image from '../../../../assets/symbols/point-6.png'
import point7Image from '../../../../assets/symbols/point-7.png'
import point8Image from '../../../../assets/symbols/point-8.png'
import shieldImage from '../../../../assets/symbols/shield.png'
import stoneImage from '../../../../assets/symbols/stone.png'
import tabletImage from '../../../../assets/symbols/tablet.png'
import woodImage from '../../../../assets/symbols/wood.png'

export const CoinView = ({ amount, size }: { amount: number; size: number }) => {
  return (
    <div
      className="flex items-center justify-center rounded-full border border-black bg-yellow-500"
      style={{ height: size, width: size }}
    >
      <div className="font-semibold" style={{ fontSize: size * 0.7 }}>
        {amount}
      </div>
    </div>
  )
}

export const PointView = ({ amount, size }: { amount: number; size: number }) => {
  switch (amount) {
    case 1:
      return <img src={point1Image} style={{ height: size, width: size }} />
    case 2:
      return <img src={point2Image} style={{ height: size, width: size }} />
    case 3:
      return <img src={point3Image} style={{ height: size, width: size }} />
    case 4:
      return <img src={point4Image} style={{ height: size, width: size }} />
    case 5:
      return <img src={point5Image} style={{ height: size, width: size }} />
    case 6:
      return <img src={point6Image} style={{ height: size, width: size }} />
    case 7:
      return <img src={point7Image} style={{ height: size, width: size }} />
    case 8:
      return <img src={point8Image} style={{ height: size, width: size }} />
    default:
      return <div></div>
  }
}

export const StoneView = ({ size }: { size: number }) => {
  return <img src={stoneImage} style={{ height: size, width: size }} />
}

export const ClayView = ({ size }: { size: number }) => {
  return <img src={clayImage} style={{ height: size, width: size }} />
}

export const OreView = ({ size }: { size: number }) => {
  return <img src={oreImage} style={{ height: size, width: size }} />
}

export const WoodView = ({ size }: { size: number }) => {
  return <img src={woodImage} style={{ height: size, width: size }} />
}

export const ShieldView = ({ size }: { size: number }) => {
  return <img src={shieldImage} style={{ height: size, width: size }} />
}

export const TabletView = ({ size }: { size: number }) => {
  return <img src={tabletImage} style={{ height: size, width: size }} />
}

export const GearView = ({ size }: { size: number }) => {
  return <img src={gearImage} style={{ height: size, width: size }} />
}

export const CompassView = ({ size }: { size: number }) => {
  return <img src={compassImage} style={{ height: size, width: size }} />
}

export const LoomView = ({ size }: { size: number }) => {
  return <img src={loomImage} style={{ height: size, width: size }} />
}

export const GlassView = ({ size }: { size: number }) => {
  return <img src={glassImage} style={{ height: size, width: size }} />
}

export const PapyrusView = ({ size }: { size: number }) => {
  return <img src={papyrusImage} style={{ height: size, width: size }} />
}

export const SeparatorView = ({ size }: { size: number }) => {
  return <img src={separatorImage} style={{ height: size, width: size * 0.45 }} />
}
