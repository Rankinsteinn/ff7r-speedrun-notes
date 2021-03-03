import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Chapter from "../../components/Chapter";
import Dialogue from "../../components/Dialogue";
import Encounter from "../../components/Encounter";
import Heal from "../../components/Heal";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";

function Chapter6() {
  return (
    <Chapter number={6}>
      <Pick item="Hi-Potion" optional />
      <Encounter
        enemies="Grashtrike x2"
        instructions={[
          "FLEE",
        ]}
      />
      <Encounter
        enemies="Grashtrike, Blugu x2"
        instructions={[
          "FLEE",
        ]}
      />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Barret",
              shortcuts: [{ ability: "Leader" }],
    
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Grashtrike x3"
        instructions={[
          "Barret: Overcharge, Focused Shot (learn) Grashtrike D",
          "Cloud: Counter, Blizzard, punisher Grashtrike B",
          "Cloud: Blizzard, punisher C/D"
        ]}
      />
      <Encounter
        enemies="Sentry Ray x2"
        instructions={[
          "Barret: Overcharge one",
          "Cloud: Run to panel, Tifa/Barret Thunder other",
        ]}
      />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [{ ability: "Leader" }],
    
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Sentry Gun Prototype x4"
        instructions={["FLEE"]}
      />
      <Encounter
        enemies="Terpsicolt x2, Sentry Gun Prototype x2"
        instructions={[
          "FLEE",
        ]}
      />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [{ ability: "Leader" }],
            },
          ]}
        />
      <Encounter
        enemies="Sentry Ray x3"
        instructions={[
          "Cloud: Dash, roll FLEE, Thunder Sentry B",
        ]}
      />
      <Encounter
        enemies="Sentry Ray x2, Terpsicolt x2"
        instructions={[
          "Cloud: Dash, Punisher Full, Berserk Sentry D",
          "Cloud: Dash, TRIPOLSKI, Dash/Cleave, TRIPOLSKI Sentry E",
          "Cloud: Overcharge, TRIPOLSKI cleanup"
        ]}
      />
      </Menu>
      <Pick item="Mesmeric Armlet (Behind the switch on lamp)" />
      <Heal description="Everyone full HP (Do during cargo lifts)" />
      <Dialogue optionText="Nah. No time." optionPosition="2nd" />
      <Encounter
        enemies="Sentry Ray x2, Sentry Gun Prototype x2, Sentry Launcher x2"
        instructions={[
          "Cloud: Dash, Thunder Launcher A",
          "Barret: Overcharge Sentry , Thunder Launcher A",
          "Tifa: Combo x4, Whirl",
          "Cloud: Punisher x5, Berserk, Thunder Launcher B, Punisher/Thunder clean up",

        ]}
      />
    </Chapter>
  );
}

export default Chapter6;
