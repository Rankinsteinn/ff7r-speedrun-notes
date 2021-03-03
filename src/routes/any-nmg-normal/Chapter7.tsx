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

function Chapter7() {
  return (
    <Chapter number={7}>
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                { name: "Power Wristguards", source: "barret", inputs: ["left"] },
                { name: "Mesmeric Armlet", inputs: ["right"] },
              ],
            },
            {
              name: "Barret (R2)",
              equipments: [
                { name: "Iron Bangle", inputs: ["down", "down"] },
                { name: "Light Machine Gun", inputs: ["right"] },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Cloud",
              weapon: [
                { name: "Revival" },
                { name: "First Strike" },
                { name: "Ice" },
              ],
              armor: [
                { name: "Lightning" },
                { name: "Barrier", source: "tifa" },
              ],
              summon: [{ name: "Ifrit" }],
            },
            {
              name: "Barret",
              weapon: [{ name: "Lightning" }, { name: "Fire" }],
              armor: [{ name: "Fire", source: "inventory", inputs: ["right", "down"] }],
              summon: [{ name: "" }],
            },
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
                { name: "Lightning" },
              ],
              armor: [{ name: "Wind", source: "inventory", inputs: ["right", "up", "up"] }],
              summon: [{ name: "" }],
            },
          ]}
        />
      </Menu>
      <Encounter enemies="Monodrive x4" instructions={["Dash, TRIPOLOSKI"]} />
      <Pick item="Echo Mist x2" optional />
      <Encounter
        enemies="Monodrive x2, Slug Ray x2"
        instructions={["Punisher Monodrives, Thunder Slug Rays"]}
      />
      <Pick item="Ether" optional />
      <Encounter
        enemies="Sweeper x2, Laser Cannon x2"
        instructions={[
          "Barret: Overcharge, Combo Laser Cannon A, Thunder B",
          "Cloud: Berserk, Thunder to pressure",
          "Cloud: Punisher, Focused Shot/Focused Thrust to stagger",
          "Cloud/Tifa Thunder when staggered",
        ]}
      />
      <Heal description="Ether Cloud, everyone good HP" />
      <Encounter
        enemies="Elite Shock Trooper, Shock Trooper x2"
        instructions={[
          "Berserk, Punisher x2, Operator, Blizzard Elite",
          "Counter/Punisher/TRIPOLOSKI/Divekick",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x2, Security Officer x4"
        instructions={[
          "Hit Elite, Counter, Berserk",
          "TRIPOLOSKI x2, Divekick",
        ]}
      />
      <Pick item="the keycard" />
      <Encounter
        enemies="Laser Cannon x2, Monodrive x2"
        instructions={[
          "Cloud: Dash, TRIPOLOSKI Monodrives",
          "Barret: Overcharge Laser Cannon B, Thunder A",
          "Barret: Cleanup",
        ]}
      />
      <Encounter
        enemies="Security Officer x2, Elite Grenadier x2"
        instructions={[
          "Berserk, Operator Security Officer",
          "Roll, TRIPOLOSKI",
        ]}
      />
      <Encounter
        enemies="Elite Shock Trooper, Laser Cannon x2"
        instructions={[
          "Barret: Overcharge Laser A, Thunder B, Combo A",
          "Barret: Cloud Blizzard, Focused Shot Shock",
          "Tifa: Whirl, Divekick until dead",
        ]}
      />
      <Encounter
        enemies="Elite Security Officer x3, Security Officer x2"
        instructions={[
          "Berserk, TRIPOLOSKI the one in computer",
          "Punisher (1 ATB), ATB Boost, Divekick, TRIPOLOSKI/Punisher",
        ]}
      />
      <Pick item="Sonic Strikers" />
      <Heal description="everyone good HP" />
      <Encounter
        enemies="Elite Security Officer x2, Elite Grenadier x2"
        instructions={[
          "Cloud: Berserk, TRIPOLSKI, Overcharge, punisher, TRIPOLSKI",
        ]}
      />
      <Menu>
        <Equipment
          characters={[
            {
              name: "Cloud",
              equipments: [
                {
                  name: "Earrings",
                  source: "barret",
                  inputs: ["right"],
                },
              ],
            },
            {
              name: "Tifa L2",
              equipments: [
                {
                  name: "Metal Knuckles",
                  inputs: ["down"],
                }
              ]
            }
          ]}
        />
        <UpgradeWeapons
          characters={[
            {
              name: "Cloud",
              weapons: [
                {
                  name: "Buster Sword",
                  upgrade: "Auto - Attack, Auto - Balanced, Auto - Attack",
                },
                {
                  name: "Iron Blade",
                  upgrade: "Auto - Attack",
                },
              ],
            },
            {
              name: "Barret (R2)",
              weapons: [
                {
                  name: "Light Machine Gun",
                  upgrade: "Auto - Attack",
                },
              ],
            },
            {
              name: "Tifa (R2)",
              weapons: [
                {
                  name: "Metal Knuckles",
                  upgrade: "Auto - Attack, Auto - Balanced",
                },
              ],
            },
          ]}
        />
        <Materia
          characters={[
            {
              name: "Tifa",
              weapon: [
                { name: "Fire" },
                { name: "Ice" },
              ],
              armor: [{ name: "Wind" }],
              summon: [{ name: "Ifrit", source: "cloud" }],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Elite Shock Trooper x2"
        instructions={[
          "Cloud: Dash, Berserk, Punisher (wait attack), Blizzard (stagger) A",
          "Cloud: 1 ATB, TRIPOLOSKI A",
          "Barret: Overcharge A",
          "Tifa: Whirl, Divekick A, TRIPOLSKI",
        ]}
      />
      <Encounter
        enemies="Riot Trooper x2, Elite Riot Trooper x2, Elite Grenadier"
        instructions={[
          "Cloud: Punisher from behind",
          "Cloud: Cleanup strats (GRENADE?)"
        ]}
      />
      <Heal description="Cloud 22 MP" />
      <Pick item="Hi-Potion x3" optional />
      <Menu>
        <BattleSettings
          characters={[
            {
              name: "Cloud",
              shortcuts: [
                {
                  shortcut: "x",
                  ability: "Thundara",
                },
              ],
            },
            {
              name: "Barret",
              shortcuts: [
               { 
                shortcut: "x",
                ability: "Thundara",
               },
              ],
            },
          ]}
        />
      </Menu>
      <Encounter
        enemies="Cutter"
        instructions={[
          "Cloud: Punisher x4, Berserk, Thundara, Overcharge, Focused Shot",
          "Cloud: Punisher full, Berserk, Punisher (stagger)",
          "Tifa: Whirl, Cloud Thundara, Divekick, Whirl, Divekick",
        ]}
      />
      <Pick item="Ether" />
      <Encounter
        enemies="Monodrive x4"
        instructions={["Dash, TRIPOLOSKI, Overcharge"]}
      />
      <Shop
        name="Vending Machine"
        buy={[
          { name: "Mega-Potion x2", inputs: ["down", "down", "down"] },
          { name: "Ether", inputs: ["down"] },
          { name: "Phoenix Down", inputs: ["down", "down"] },
        ]}
      />
      <Bench />
      <Boss
        name="Air Buster"
        phases={[
          [
            "Barret: Roll",
            "Tifa: Whirl, Roll, Combo x6, Whirl, Divekick",
            "Tifa: Combo x6, Whirl, Overcharge, Divekick",
            "Tifa: Combo x6, Whirl, Cloud Blizzara, Divekick, Focused Shot",
            "Tifa: Combo x6, Whirl, Divekick, Whirl, Divekick, Whirl",
          ],
          [
            "Tifa: Combo x3, Roll, Combo x6, Unbridled, Combo (take Tankbuster)",
            "Barret: Combo, Charge, Unbridled, Overcharge",
            "Tifa: Barret potion Tifa, Hit to stagger, Rise, Omni, Whirl, Barret Thunder, Divekick",
            "Tifa: Whirl, Divekick, Whirl, Divekick, Whirl ",
          ],
          [
            "Barret: Combo, Charge, Combo, Charge, Thunder",
            "Barret: Overcharge, Cloud Thundara (wait overcharge shooting), Combo",
            "Tifa: Defend on left side of bridge, Whirl, Divekick, Whirl",
            "Cloud: Berserk, Punisher (2 ATB), Operator, Thundara",
            "Tifa: Whirl, Divekick (pressure), Blizzard, Focused Shot",
            "Tifa: Focused Thurst, Combo x6, Blizzard, combo (stagger)",
            "Tifa: Divekick, Whirl",
            "Cloud: Punisher full, Berserk, Divekick, Punisher (2 ATB), Thunder",
            "Barret: Roll to right side of bridge, Overcharge,",
            "Barret: Somersault, Cloud Thundara, FINISH",
          ],
        ]}
      />
    </Chapter>
  );
}

export default Chapter7;
