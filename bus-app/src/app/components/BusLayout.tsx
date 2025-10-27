'use client';

import Bus from './Bus';

interface BusLayoutProps {
  style1?: React.CSSProperties;
  highlightedBus?: number | null; // controlled externally
}

export default function BusLayout({ style1, highlightedBus }: BusLayoutProps) {
  return (
    <div className="border-8 border-black bg-gray-700 flex-col gap-2 md:mr-18 w-full md:w-[35%] h-[75vh] text-white flex font-bold text-[1.25rem] shadow-[0_4px_12px_rgba(0,0,0,0.1)]" style={style1}>
      <div className="h-[5%]"></div>
      {/* Building 2 */}
      <div className="justify-center flex w-full h-[10%]">
        <div className="w-[28%]"></div>
        <div
          style={{
            width: '50%',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            background: 'black',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: '1px solid red',
          }}
          >
          Building 2
        </div>
        <div className="flex w-[22%]">
          <div className="w-1/8 h-full"></div>
          <div className="w-1/4 h-full">
            <Bus highlighted={highlightedBus === 0}>0</Bus>
          </div>
          <div className="w-5/8 h-full"></div>
        </div>
      </div>

      {/* Building 3 + Parking area */}
      <div className="justify-center flex w-full h-[45%]">
        <div className = "justify-center flex w-[28%]">
          <div
            style={{
              width: '50%',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              background: 'black',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid red',
            }}
          >
            <p className="text-center rotate-270">Building 3</p>
          </div>
          <div className = "w-1/20"></div>
          <div className="justify-center flex flex-col gap-2 w-8/20">
            <div className="h-3/8"></div>
            <div className="justify-center flex h-1/4">
              <Bus highlighted={highlightedBus === 12}>12</Bus>
              <div className="w-1/5"></div>
              <Bus highlighted={highlightedBus === 11}>11</Bus>
            </div>
            <div className="justify-center flex h-1/4">
              <Bus highlighted={highlightedBus === 14}>14</Bus>
              <div className="w-1/5"></div>
              <Bus highlighted={highlightedBus === 13}>13</Bus>
            </div>
            <div className="h-1/8"></div>
          </div>
          <div className = "w-1/20"></div>
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <div className="justify-center flex gap-2 w-full h-[10%]">
            <Bus highlighted={highlightedBus === 5}>5</Bus>
            <Bus highlighted={highlightedBus === 4}>4</Bus>
            <Bus highlighted={highlightedBus === 3}>3</Bus>
            <Bus highlighted={highlightedBus === 2}>2</Bus>
            <Bus highlighted={highlightedBus === 1}>1</Bus>
          </div>
          <div className="justify-center flex gap-2 w-full h-[10%]">
            <Bus highlighted={highlightedBus === 10}>10</Bus>
            <Bus highlighted={highlightedBus === 9}>9</Bus>
            <Bus highlighted={highlightedBus === 8}>8</Bus>
            <Bus highlighted={highlightedBus === 7}>7</Bus>
            <Bus highlighted={highlightedBus === 6}>6</Bus>
          </div>
          <div className="justify-center flex flex-col gap-2 w-full h-[80%]">
            <div
              style={{
                width: '100%',
                height: '100%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                background: 'black',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.25rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid red',
              }}
            >
              Parking
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[22%] gap-2">
          <div className="justify-center flex gap-2 w-full h-[10%]">
            <div className="" style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '.9rem',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}>
            Lane 1
            </div>
          </div>
          <div className="justify-center flex gap-2 w-full h-[10%]">
            <div className="" style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '.9rem',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}>
            Lane 2
            </div>
          </div>
          <div className="justify-center flex flex-col gap-2 w-full h-[80%]">
              
          </div>
        </div>
      </div>

      {/* Building 4 section (bottom rows) */}
      <div className="justify-center flex w-full h-[40%]">
        <div className="flex w-[28%]"></div>
        <div className="flex flex-col h-full w-[50%] gap-2">
          <div className="flex w-full h-1/10 gap-2">
            <Bus highlighted={highlightedBus === 15}>15</Bus>
            <Bus highlighted={highlightedBus === 16}>16</Bus>
            <Bus highlighted={highlightedBus === 17}>17</Bus>
            <Bus highlighted={highlightedBus === 18}>18</Bus>
            <Bus highlighted={highlightedBus === 19}>19</Bus>
          </div>
          <div className="flex w-full h-1/10 gap-2">
            <Bus highlighted={highlightedBus === 20}>20</Bus>
            <Bus highlighted={highlightedBus === 21}>21</Bus>
            <Bus highlighted={highlightedBus === 22}>22</Bus>
            <Bus highlighted={highlightedBus === 23}>23</Bus>
            <Bus highlighted={highlightedBus === 24}>24</Bus>
          </div>
          <div className="flex w-full h-1/10 gap-2">
            <Bus highlighted={highlightedBus === 25}>25</Bus>
            <Bus highlighted={highlightedBus === 26}>26</Bus>
            <Bus highlighted={highlightedBus === 27}>27</Bus>
            <Bus highlighted={highlightedBus === 28}>28</Bus>
            <Bus highlighted={highlightedBus === 29}>29</Bus>
          </div>
          <div
            style={{
              width: '100%',
              height: '30%',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              background: 'black',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.25rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid red',
            }}
            >
            Building 4
          </div>
          <div className="h-[40%]"></div>
        </div>
        <div className="flex flex-col h-full w-[22%] gap-2">
          <div className="flex w-full h-1/10 gap-2">
            <div className="" style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '.9rem',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}>
            Lane 3
            </div>
          </div>
          <div className="flex w-full h-1/10 gap-2">
            <div className="" style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '.9rem',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}>
            Lane 4
            </div>
          </div>
          <div className="flex w-full h-1/10 gap-2">
            <div className="" style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '.9rem',
              transition: 'background 0.3s ease, color 0.3s ease',
            }}>
            Lane 5
            </div>
          </div>
          <div className="h-[70%]"></div>
        </div>
      </div>
    </div>
  );
}
