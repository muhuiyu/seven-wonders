import ageOneVictoryToken from '../../../../../assets/symbols/ageOneVictoryToken.png'
import ageThreeVictoryToken from '../../../../../assets/symbols/ageThreeVictoryToken.png'
import ageTwoVictoryToken from '../../../../../assets/symbols/ageTwoVictoryToken.png'
import arena from '../../../../../assets/symbols/arena.png'
import bazar from '../../../../../assets/symbols/bazar.png'
import buildersGuild from '../../../../../assets/symbols/buildersGuild.png'
import chamberOfCommerce from '../../../../../assets/symbols/chamberOfCommerce.png'
import clay from '../../../../../assets/symbols/clay.png'
import compass from '../../../../../assets/symbols/compass.png'
import decoratorsGuild from '../../../../../assets/symbols/decoratorsGuild.png'
import defeatToken from '../../../../../assets/symbols/defeatToken.png'
import diplomacy from '../../../../../assets/symbols/diplomacy.png'
import discardPile from '../../../../../assets/symbols/discardPile.png'
import gear from '../../../../../assets/symbols/gear.png'
import glass from '../../../../../assets/symbols/glass.png'
import haven from '../../../../../assets/symbols/haven.png'
import lighthouse from '../../../../../assets/symbols/lighthouse.png'
import loom from '../../../../../assets/symbols/loom.png'
import ludus from '../../../../../assets/symbols/ludus.png'
import ore from '../../../../../assets/symbols/ore.png'
import papyrus from '../../../../../assets/symbols/papyrus.png'
import playLastCard from '../../../../../assets/symbols/playLastCard.png'
import point1 from '../../../../../assets/symbols/point-1.png'
import point2 from '../../../../../assets/symbols/point-2.png'
import point3 from '../../../../../assets/symbols/point-3.png'
import point4 from '../../../../../assets/symbols/point-4.png'
import point5 from '../../../../../assets/symbols/point-5.png'
import point6 from '../../../../../assets/symbols/point-6.png'
import point7 from '../../../../../assets/symbols/point-7.png'
import point8 from '../../../../../assets/symbols/point-8.png'
import pointPerCivilianStructures from '../../../../../assets/symbols/pointPerCivilianStructures.png'
import pointPerCommercialStructures from '../../../../../assets/symbols/pointPerCommercialStructures.png'
import pointPerGuilds from '../../../../../assets/symbols/pointPerGuilds.png'
import pointPerManufacturedGoods from '../../../../../assets/symbols/pointPerManufacturedGoods.png'
import pointPerMilitary from '../../../../../assets/symbols/pointPerMilitary.png'
import pointPerRawMaterials from '../../../../../assets/symbols/pointPerRawMaterials.png'
import pointPerScientificStructures from '../../../../../assets/symbols/pointPerScientificStructures.png'
import pointPerThreeCoins from '../../../../../assets/symbols/pointPerThreeCoins.png'
import scienceCopy from '../../../../../assets/symbols/scienceCopy.png'
import separator from '../../../../../assets/symbols/separator.png'
import shield from '../../../../../assets/symbols/shield.png'
import stone from '../../../../../assets/symbols/stone.png'
import tablet from '../../../../../assets/symbols/tablet.png'
import twoPointPerGuilds from '../../../../../assets/symbols/twoPointPerGuilds.png'
import twoPointPerManufacturedGoods from '../../../../../assets/symbols/twoPointPerManufacturedGoods.png'
import vineyard from '../../../../../assets/symbols/vineyard.png'
import wood from '../../../../../assets/symbols/wood.png'

// -------------------------------------------------------------------------------------------
// RESOURCES
// -------------------------------------------------------------------------------------------
export const CoinView = ({ amount, size }: { amount: number | string; size: number }) => {
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
      return <img src={point1} style={{ height: size, width: size }} />
    case 2:
      return <img src={point2} style={{ height: size, width: size }} />
    case 3:
      return <img src={point3} style={{ height: size, width: size }} />
    case 4:
      return <img src={point4} style={{ height: size, width: size }} />
    case 5:
      return <img src={point5} style={{ height: size, width: size }} />
    case 6:
      return <img src={point6} style={{ height: size, width: size }} />
    case 7:
      return <img src={point7} style={{ height: size, width: size }} />
    case 8:
      return <img src={point8} style={{ height: size, width: size }} />
    default:
      return <div></div>
  }
}

export const StoneView = ({ size }: { size: number }) => {
  return <img src={stone} style={{ height: size, width: size }} />
}

export const ClayView = ({ size }: { size: number }) => {
  return <img src={clay} style={{ height: size, width: size }} />
}

export const OreView = ({ size }: { size: number }) => {
  return <img src={ore} style={{ height: size, width: size }} />
}

export const WoodView = ({ size }: { size: number }) => {
  return <img src={wood} style={{ height: size, width: size }} />
}

export const ShieldView = ({ size }: { size: number }) => {
  return <img src={shield} style={{ height: size, width: size }} />
}

export const DefeatTokenView = ({ size }: { size: number }) => {
  return <img src={defeatToken} style={{ height: size, width: size }} />
}

export const AgeOneVictoryTokenView = ({ size }: { size: number }) => {
  return <img src={ageOneVictoryToken} style={{ height: size, width: size }} />
}

export const AgeTwoVictoryTokenView = ({ size }: { size: number }) => {
  return <img src={ageTwoVictoryToken} style={{ height: size, width: size }} />
}

export const AgeThreeVictoryTokenView = ({ size }: { size: number }) => {
  return <img src={ageThreeVictoryToken} style={{ height: size, width: size }} />
}

export const DiplomacyView = ({ size }: { size: number }) => {
  return <img src={diplomacy} style={{ height: size, width: size }} />
}

export const TabletView = ({ size }: { size: number }) => {
  return <img src={tablet} style={{ height: size, width: size }} />
}

export const GearView = ({ size }: { size: number }) => {
  return <img src={gear} style={{ height: size, width: size }} />
}

export const CompassView = ({ size }: { size: number }) => {
  return <img src={compass} style={{ height: size, width: size }} />
}

export const LoomView = ({ size }: { size: number }) => {
  return <img src={loom} style={{ height: size, width: size }} />
}

export const GlassView = ({ size }: { size: number }) => {
  return <img src={glass} style={{ height: size, width: size }} />
}

export const PapyrusView = ({ size }: { size: number }) => {
  return <img src={papyrus} style={{ height: size, width: size }} />
}

export const SeparatorView = ({ size }: { size: number }) => {
  return <img src={separator} style={{ height: size, width: size * 0.45 }} />
}

export const DiscardPileView = ({ size }: { size: number }) => {
  return <img src={discardPile} style={{ height: size, width: size * 1.5 }} />
}

export const PlayLastCardView = ({ size }: { size: number }) => {
  return <img src={playLastCard} style={{ height: size, width: size * 1.5 }} />
}

// -------------------------------------------------------------------------------------------
// POINT PER
// -------------------------------------------------------------------------------------------
export const PointPerThreeCoinsView = ({ size }: { size: number }) => {
  return <img src={pointPerThreeCoins} style={{ height: size, width: size }} />
}

export const PointPerRawMaterialsView = ({ size }: { size: number }) => {
  return <img src={pointPerRawMaterials} style={{ height: size, width: size }} />
}

export const PointPerManufacturedGoodsView = ({ size }: { size: number }) => {
  return <img src={pointPerManufacturedGoods} style={{ height: size, width: size }} />
}

export const TwoPointPerManufacturedGoodsView = ({ size }: { size: number }) => {
  return <img src={twoPointPerManufacturedGoods} style={{ height: size, width: size }} />
}

export const PointPerGuildsView = ({ size }: { size: number }) => {
  return <img src={pointPerGuilds} style={{ height: size, width: size }} />
}

export const TwoPointPerGuildsView = ({ size }: { size: number }) => {
  return <img src={twoPointPerGuilds} style={{ height: size, width: size }} />
}

export const PointPerMilitaryView = ({ size }: { size: number }) => {
  return <img src={pointPerMilitary} style={{ height: size, width: size }} />
}

export const PointPerScientificStructuresView = ({ size }: { size: number }) => {
  return <img src={pointPerScientificStructures} style={{ height: size, width: size }} />
}

export const PointPerCommercialStructuresView = ({ size }: { size: number }) => {
  return <img src={pointPerCommercialStructures} style={{ height: size, width: size }} />
}

export const PointPerCivilianStructuresView = ({ size }: { size: number }) => {
  return <img src={pointPerCivilianStructures} style={{ height: size, width: size }} />
}

// -------------------------------------------------------------------------------------------
// SPECIAL CARDS
// -------------------------------------------------------------------------------------------
export const ArenaView = ({ size }: { size: number }) => {
  return <img src={arena} style={{ height: size, width: size * 1.5 }} />
}

export const LighthouseView = ({ size }: { size: number }) => {
  return <img src={lighthouse} style={{ height: size, width: size * 1.5 }} />
}

export const HavenView = ({ size }: { size: number }) => {
  return <img src={haven} style={{ height: size, width: size * 1.5 }} />
}

export const ScienceCopyView = ({ size }: { size: number }) => {
  return <img src={scienceCopy} style={{ height: size, width: size * 1.5 }} />
}

export const ChamberOfCommerceView = ({ size }: { size: number }) => {
  return <img src={chamberOfCommerce} style={{ height: size, width: size * 1.5 }} />
}

export const LudusView = ({ size }: { size: number }) => {
  return <img src={ludus} style={{ height: size, width: size * 1.5 }} />
}

export const BuildersGuildView = ({ size }: { size: number }) => {
  return <img src={buildersGuild} style={{ height: size, width: size * 1.9 }} />
}

export const BazarView = ({ size }: { size: number }) => {
  return <img src={bazar} style={{ height: size, width: size * 1.9 }} />
}

export const VineyardView = ({ size }: { size: number }) => {
  return <img src={vineyard} style={{ height: size, width: size * 1.9 }} />
}

export const DecoratorsGuildView = ({ size }: { size: number }) => {
  return <img src={decoratorsGuild} style={{ height: size, width: size * 1.5 }} />
}

export const HiramView = ({ size }: { size: number }) => {
  return <img src={twoPointPerGuilds} style={{ height: size, width: size * 1.5 }} />
}
