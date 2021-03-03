import React from "react";
import BattleSettings from "../../components/BattleSettings";
import Bench from "../../components/Bench";
import Boss from "../../components/Boss";
import Chapter from "../../components/Chapter";
import Encounter from "../../components/Encounter";
import Equipment from "../../components/Equipment";
import Heal from "../../components/Heal";
import Materia from "../../components/Materia";
import Menu from "../../components/Menu";
import Pick from "../../components/Pick";
import Shop from "../../components/Shop";
import UpgradeWeapons from "../../components/UpgradeWeapons";

function Chapter5() {
  return (
    <Chapter number={5}>
            <Menu>
        <Equipment
          characters={[
            {
              name: "Tifa",
              equipments: [{ name: "Iron Bangle", source: "barret" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Fire" },
                { name: "First Strike", source: "inventory", inputs: ["right"] },
                { name: "ice"},
              ],
              armor: [{ name: "Lightning" }],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
              ],
              armor: [{ name: "Barrier", source: "inventory", inputs: ["right", "up",] }],
              summon: [{ name: "Empty" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Slug Ray x5"
        instructions={[
          "Punisher full, Berserk, TRIPOLOSKI, Punisher",
          "Cross Slash D/E",
        ]}
      />
      <Encounter
        enemies="Slug Ray x3"
        instructions={[
          "FLEE this fight and next two, until regroup with Barret then menu",
        ]}
      />
      <Pick item="Elixir" optional />
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
        enemies="Slug Ray x?"
        instructions={[
          "FLEE",
        ]}
      />
      <Encounter
        enemies="Elite grenadier, guard dog x2, slug ray"
        instructions={[
          "Tifa: combo x2, start FLEE, Cloud blizzard elite grenadier (stagger)",
          "FLEE",
        ]}
      /> 
      <Encounter enemies="Wererat x3" instructions={["Tifa: TRIPOLOSKI"]} />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Iron Blade", upgrade: "Auto - Attack" }],
            },
            {
              name: "Barret",
              weapons: [{ name: "Gatling Gun", upgrade: "Auto - Attack"}],
            },
            {
              name: "Tifa",
              weapons: [{ name: "Leather Gloves", upgrade: "Auto - Attac"}],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {ability: "Leader"},
                {
                  shortcut: "circle",
                  ability: "Blizzard",
                  inputs: ["down"],
                }
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Grashtrike, Wererat x2"
        instructions={[
          "Cloud: Dash, TRIPOLOSKI Grashtrike",
          "Barret: Overcharge, Focused Shot, Divekick Grashtrike",
        ]}
      />
      <Pick item="Hi-Potion x2" optional />
      <Encounter
        enemies="Grashtrike x2"
        instructions={[
          "Cloud: Dash, Blizzard A",
          "Barret: Overcharge, Focused Shot, Divekick B",
        ]}
      />
      <Encounter
        enemies="Grashtrike x2, Queen Grashtrike"
        instructions={[
          "Cloud: Dash, Blizzard A",
          "Barret: Overcharge B (if they're split)",
          "Cloud: Punisher full, Bersek B",
          "Cloud: Blizzard, Tifa Blizzard Queen (pressure)",
          "Cloud: Focused Shot, Berserk, Punisher, Focused Thrust Queen (stagger)",
          "Tifa: Whirl, Cross Slash, Go to Exit",
        ]}
      />
      <Pick item="Phoenix Down x3" />
      <Encounter
        enemies="Flametrooper, Security Officer x4"
        instructions={[
          "Cloud: Punisher x3, Berserk Security Officer",
          "Cloud: Fire Flametrooper, Punisher x4 berserk",
          "Cloud: Dash, TRIPOLSKI Security Officer",
          "Cloud: Punisher/Overcharge cleanup",
        ]}
      />
      <Heal description="While running down tunnel: Everyone full HP, Cloud 16 MP" />
      <Encounter
        enemies="Flametrooper x2, Sentry Launcher x2"
        instructions={[
          "Cloud: Dash Left Sentry",
          "Barret: Overcharge Left Flame, Cloud Thunder Left Sentry",
          "Tifa: Whirl Left Sentry x2 (2 ATB), Fire Left Flame x2",
          "Cloud: Berserk, Punisher (1 ATB), Fire Flame, Punisher Sentry/Flame",
          "Tifa: Whirl/Divekick Sentry",
          "Cloud/Barret 1 ATB, Thunder Sentry",
        ]}
      />
      <Shop
        name="Vending Machine"
        sell={[
          {name: "Healing materia"},
        ]}
        buy={[
          { name: "Hi-Potion x3", inputs: ["down", "down"]},
          { name: "Ether", inputs: ["down"] },
          { name: "Power Wristguards" },
          { name: "Fire", inputs: ["down", "down"] },
        ]}
      />
      <Bench />
      <Pick item="Lightning" />
      <Encounter
        enemies="Elite Security Officer x2"
        instructions={[
          "Switch to Berserk",
          "TRIPOLOSKI, Overcharge, TRIPOLOSKI B, Divekick A",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Barret",
              equipments: [{ name: "Power Wristguards" }],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Barret",
              weapon: [
                { name: "Lightning" },
                { 
                  name: "Fire", 
                  source: "inventory", 
                  inputs: ["right", "up"] },
                {
                  name: "Wind",
                  source: "inventory",
                  inputs: ["right", "down"],
                },
              ],
              armor: [],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire", source: "cloud" },
                { name: "Ice" },
                {
                  name: "Lightning",
                  source: "inventory",
                  inputs: ["right", "down"],
                },
              ],
              armor: [{ name: "Barrier" }],
              summon: [{ name: "" }],
            },
            {
              name: "Cloud",
              weapon: [
                { name: "Revival", source: "inventory", inputs: ["right"]},
                { name: "First Strike" },
                { name: "Ice" },
              ],
              armor: [{ name: "Lightning" }],
              summon: [{ name: "Ifrit" }],
            },

          ]}
        />
      </Menu>
      <Boss
        name="Crab Warden"
        phases={[
          [
            "Cloud: Berserk, Thunder Rear Right",
            "Tifa: Whirl Right Front Left",
            "Cloud: Punisher full, Berserk, Punisher x4 Front Left",
            "Cloud: Thunder Rear Right, Tifa Thunder Rear Right (break)",
            "Cloud: Punisher x6 Front Left (break, stagger)",
            "Cloud: Thunder Rear Left, Punisher full, Berserk Front Right (target Rear Right)",
          ],
          [
            "Cloud: Thunder Left (break)",
            "Tifa: Barret Thunder, Whirl, Divekick Front Right (break)",
            "Tifa: Whirl, Cloud Thunder, Divekick, Whirl Right Weapon",
            "Cloud: Punisher full Crab, Berserk",
            "Cloud: Thunder Left Weapon, Punisher Generator (get lock on right weapon for phase)"
          ],
          [
            "Barret: Thunder Right Weapon (Break)",
            "Cloud: Unbridled, Berserk, Thunder Left Weapon (stagger)",
            "Barret: Overcharge Generator",
            "Tifa: Omni, Whirl, Cloud Thunder, Divekick Generator",
          ],
        ]}
      />
      <Menu>
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [{ name: "Iron Blade", upgrade: "Manual" }],
            },
          ]}
        />
        <BattleSettings
          characters={[
            {
              name: "Tifa",
              shortcuts: [{ ability: "Leader" }],
    
            },
          ]}
        />
      </Menu>
    </Chapter>
  );
}

export default Chapter5;
