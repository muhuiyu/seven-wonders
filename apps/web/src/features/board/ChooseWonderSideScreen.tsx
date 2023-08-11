import classNames from 'classnames'
import { floor } from 'lodash'
import { StandardWonders, Wonder } from 'seven-wonders-game'
import giza from './../../assets/giza.png'

interface Props {}

export default function ChooseWonderSideScreen(props: Props) {
  const wonders = Object.values(StandardWonders)
  const currentUserIndex = floor(7 / 2)
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-x-2">
        {wonders.map((wonder, index) => (
          <WonderCard key={wonder.id} {...{ wonder, isCenter: currentUserIndex === index }} />
        ))}
      </div>
      <button className="mt-4 w-48 border border-yellow-500 bg-red-500 py-2 font-bold text-yellow-300">Start</button>
    </div>
  )
}

// wonder stage
const WonderCard = ({ wonder, isCenter }: { wonder: Wonder; isCenter: boolean }) => {
  return (
    <div className={classNames(isCenter ? 'w-48' : 'w-32')}>
      <div
        className={classNames(
          'flex flex-col items-center justify-center border border-yellow-400 bg-green-900',
          isCenter ? 'h-10' : 'h-7',
        )}
      >
        {isCenter && <div className="text-center text-white">{wonder.shortName}</div>}
      </div>
      <div
        className={classNames(isCenter ? 'h-52 ' : 'h-40')}
        style={{
          backgroundImage: `url(${giza})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="">
          {isCenter && <div className="text-center font-bold text-white">Click to change side</div>}
        </div>
      </div>
      <div
        className={classNames(
          'flex flex-col items-center justify-center border border-yellow-400 bg-green-900',
          isCenter ? 'h-10' : 'h-7',
        )}
      >
        <div className={classNames(isCenter ? 'text-base' : 'text-xs', 'text-center font-semibold text-white')}>
          {wonder.shortName}
        </div>
      </div>
    </div>
  )
}
