function AboutDropdown() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="About Dropdown"
    >
      <div className="content-stretch flex gap-2.5 items-center justify-start overflow-clip relative w-full">
        <div className="bg-[#131313] h-[65px] shrink-0 w-0" />
        <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[11px] not-italic text-[24px] text-nowrap text-white top-6 uppercase">
          <p className="leading-[1.5] whitespace-pre">
            What I Do
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px] border-black border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 h-full items-center justify-center px-2 py-0 relative shrink-0 w-[182px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">{`UX Research `}</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-0 relative size-full">
          <div className="basis-0 flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-white">
            <p className="leading-[1.5]">
              Identify user needs through interviews, surveys,
              and heuristic analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="content-stretch flex gap-2.5 items-center justify-center overflow-clip relative size-full">
        <Frame1 />
        <Frame23 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0"
      />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-2.5 h-full items-center justify-center px-2 py-0 relative shrink-0 w-[182px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">{` WIREFRAMING`}</p>
      </div>
    </div>
  );
}

function Group18() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-0 relative size-full">
          <div className="basis-0 flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-white">
            <p className="leading-[1.5]">
              Translate findings into structured wireframes that
              form the blueprint for intuitive, goal-oriented
              interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-[#1d1d1d] grow min-h-px min-w-px relative shrink-0 w-[677px]">
      <div className="content-stretch flex gap-2.5 h-full items-center justify-center overflow-clip relative w-[677px]">
        <Frame6 />
        <Group18 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-[-0.5px]"
      />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-2.5 h-full items-center justify-center px-2 py-0 relative shrink-0 w-[182px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">{`Web Design `}</p>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-0 relative size-full">
          <div className="basis-0 flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-white">
            <p className="leading-[1.5]">
              Design and build responsive websites using clean,
              semantic code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="content-stretch flex gap-2.5 items-center justify-center overflow-clip relative size-full">
        <Frame7 />
        <Group19 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0"
      />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-2.5 h-full items-center justify-center px-2 py-0 relative shrink-0 w-[182px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">{`UI Design  `}</p>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-0 relative size-full">
          <div className="basis-0 flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-white">
            <p className="leading-[1.5]">
              Create high-fidelity interfaces in Figma with
              attention to typography, spacing, and
              accessibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 bg-[#1d1d1d] grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="content-stretch flex gap-2.5 items-center justify-center overflow-clip relative size-full">
        <Frame9 />
        <Group20 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px] border-black border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-[-0.5px]"
      />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-2.5 h-full items-center justify-center px-2 py-0 relative shrink-0 w-[182px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">{`Prototyping `}</p>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-0 relative size-full">
          <div className="basis-0 flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-white">
            <p className="leading-[1.5]">
              Create high-fidelity interfaces in Figma with
              attention to typography, spacing, and
              accessibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="content-stretch flex gap-2.5 items-center justify-center overflow-clip relative size-full">
        <Frame11 />
        <Group21 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_2px] border-black border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0"
      />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex gap-2.5 h-full items-center justify-center px-2 py-0 relative shrink-0 w-[182px]">
      <div
        aria-hidden="true"
        className="absolute border-[0px_1px_0px_0px] border-black border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">
          Brand Identity
        </p>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-6 py-0 relative size-full">
          <div className="basis-0 flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-white">
            <p className="leading-[1.5]">
              Craft Visual systems that tell a clear and
              compelling story about your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 bg-[#1d1d1d] content-stretch flex gap-2.5 grow items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      <Frame12 />
      <Group22 />
    </div>
  );
}

function Content() {
  return (
    <div
      className="bg-[#131313] content-stretch flex flex-col h-[599px] items-start justify-start overflow-clip relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame5 />
      <Frame4 />
      <Frame8 />
      <Frame10 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function WhatIDoDropdown() {
  return (
    <div
      className="content-stretch flex flex-col h-16 items-center justify-start overflow-clip relative shrink-0 w-full"
      data-name="What I do dropdown"
    >
      <AboutDropdown />
      <Content />
    </div>
  );
}

function AboutDropdown1() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="About Dropdown"
    >
      <div className="content-stretch flex gap-2.5 items-center justify-start overflow-clip relative w-full">
        <div className="bg-[#131313] h-[65px] shrink-0 w-0" />
        <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[11px] not-italic text-[24px] text-nowrap text-white top-6 uppercase">
          <p className="leading-[1.5] whitespace-pre">
            Who I am
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px] border-black border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#131313] h-[301px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-[301px] items-center justify-center pl-6 pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal grow h-full justify-center leading-[1.5] min-h-px min-w-px relative shrink-0 text-[16px] text-white">
            <p className="mb-0">
              I’m a multidisciplinary designer telling stories
              through visuals, interfaces, and systems.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>
              My work lives at the intersection of UX, graphic
              design, and illustration—shaping experiences that
              feel intentional and human. Whether it’s a brand
              identity, a mobile app, or a single illustration,
              I approach every project as a story waiting to be
              told.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhoIAmDropdown() {
  return (
    <div
      className="content-stretch flex flex-col h-16 items-start justify-start overflow-clip relative shrink-0 w-full"
      data-name="Who I am Dropdown"
    >
      <AboutDropdown1 />
      <Frame19 />
    </div>
  );
}

function AboutDropdown2() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="About Dropdown"
    >
      <div className="content-stretch flex gap-2.5 items-center justify-start overflow-clip relative w-full">
        <div className="bg-[#131313] h-[65px] shrink-0 w-0" />
        <div className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-[11px] not-italic text-[24px] text-nowrap text-white top-6 uppercase">
          <p className="leading-[1.5] whitespace-pre">
            What I believe
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px] border-black border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#131313] h-[301px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2.5 h-[301px] items-center justify-center pl-6 pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal grow h-full justify-center leading-[1.5] min-h-px min-w-px relative shrink-0 text-[16px] text-white">
            <p className="mb-0">{`Great design is a guided journey. It meets the user where they are, understands what they need, and moves them gently, intentionally—toward something better. It shifts mood. It builds trust. It tells a story, not just about the product, but about the people behind it, and the values they carry. `}</p>
            <p className="mb-0">&nbsp;</p>
            <p>
              At its best, design doesn’t just solve problems,
              it leaves people feeling seen, valued, and more
              whole than when they arrived.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatIBelieve() {
  return (
    <div
      className="content-stretch flex flex-col h-[65px] items-start justify-start overflow-clip relative shrink-0 w-[677px]"
      data-name="What I believe"
    >
      <AboutDropdown2 />
      <Frame20 />
    </div>
  );
}

export default function AboutDropDownComponent() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-start relative size-full"
      data-name="About Drop-down Component"
    >
      <WhatIDoDropdown />
      <WhoIAmDropdown />
      <WhatIBelieve />
    </div>
  );
}