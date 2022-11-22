//I am likely doing this the wrong way...
import { error } from '@sveltejs/kit';
export async function load({ fetch, params }) {
  let id = 999;
  switch (params.qmpName) {
    case 'Synergy-Health-and-Wellness-Clinic':
      id = 0;
      break;
    case 'Aspen-Family-Medicine':
      id = 1;
      break;
    case 'Integrative-Medical-Associates':
      id = 2;
      break;
    case 'Body-Balanced-Care':
      id = 3;
      break;
    case 'Utah-Therapeutic-Health-Center-Bountiful':
      id = 4;
      break;
    case 'Cope-Family-Medicine':
      id = 5;
      break;
    case 'Busy-Bee-Pediatrics':
      id = 6;
      break;
    case 'Tanner-Clinic-Clinton':
      id = 7;
      break;
    ////////////
    case 'Brandy-Marie-Family-&-Aesthetic-Care':
      id = 8;
      break;
    case 'Brandy-Marie-Family-&amp;-Aesthetic-Care':
      id = 8;
      break;
    ////////////  
    case 'Swahn-Balanced-Health':
      id = 9;
      break;
    case 'Glacier-Peak-Pain-Care':
      id = 10;
      break;
    ////////////
    case 'Biorestoration-Medical-&-Aesthetics':
      id = 11;
      break;
    case 'Biorestoration-Medical-&amp;-Aesthetics':
      id = 11;
      break;
    ////////////
    case 'Pioneer-Comprehensive-Medical':
      id = 12;
      break;
    ////////////
    case 'La-Belle-Ve-Medical-Care-&-Aesthetics':
      id = 13;
      break;
    case 'La-Belle-Ve-Medical-Care-&amp;-Aesthetics':
      id = 13;
      break;
    ////////////
    case 'The-SMART-Clinic':
      id = 14;
      break;
    case 'Logan-Medical-Group':
      id = 15;
      break;
    case 'Orn-Total-Health':
      id = 16;
      break;
    case 'Tadler-Hoopes-Center-for-Healing':
      id = 17;
      break;
    case 'Lifespring-Pain-Management':
      id = 18;
      break;
    case 'Balanced-Body-Healthcare':
      id = 19;
      break;
    case 'Kaysville-Clinic':
      id = 20;
      break;
    case 'Holland-Holistic-Kaysville':
      id = 21;
      break;
    case 'Gloss-Med-Spa':
      id = 22;
      break;
    case 'Cedar-Psychiatry-Layton':
      id = 23;
      break;
    case 'Ogden-Clinic-Layton':
      id = 24;
      break;
    case 'Tanner-Clinic-Layton':
      id = 25;
      break;
    case 'Davis-Hospital-and-Medical-Center':
      id = 26;
      break;
    case 'The-Alpine-Clinic':
      id = 27;
      break;
    case 'Medical-Cannabis-of-Utah-Lehi':
      id = 28;
      break;
    case 'Natural-Medicine-Clinic-of-Utah-Lehi':
      id = 29;
      break;
    case 'Steward-Primary-Care-Lehi':
      id = 30;
      break;
    case 'Premier-Family-Medical-Lehi':
      id = 31;
      break;
    case 'Alpine-Pain-and-Rehabilitation':
      id = 32;
      break;
    case 'BodyPoint':
      id = 33;
      break;
    case 'Exodus-Healthcare-Network-Magna':
      id = 34;
      break;
    case 'Infuse-Zen':
      id = 35;
      break;
    case 'Well-Beyond-Medicine-PLLC':
      id = 36;
      break;
    case 'Medical-Cannabis-of-Utah-Midvale':
      id = 37;
      break;
    case 'Cedar-Psychiatry-Orem':
      id = 38;
      break;
    case 'Orem-Family-Medicine':
      id = 39;
      break;
    case 'Green-Health-Docs-Orem':
      id = 40;
      break;
    case 'Balanced-Health-Functional-Medicine':
      id = 41;
      break;
    case 'Premier-Family-Medical-Pleasant-Grove':
      id = 42;
      break;
    case 'New-Horizon-Medical-Care':
      id = 43;
      break;
    case 'Breen-Family-Medicine':
      id = 44;
      break;
    case 'Anderson-Wellness-Group':
      id = 45;
      break;
    case 'Valley-Family-Clinic':
      id = 46;
      break;
    case 'Summit-primary-care':
      id = 47;
      break;
    case 'McKay-Family-Practice':
      id = 48;
      break;
    case 'Salson-Clinics':
      id = 49;
      break;
    case 'Granger-Medical-Clinic':
      id = 50;
      break;
    case 'VIP-Vanity-Point-Med-Spa':
      id = 51;
      break;
    case 'Intermountain-Healthcare-Murray':
      id = 52;
      break;
    case 'Utah-Stem-Cells':
      id = 53;
      break;
    case 'Restorative-Health-Primary-Care-and-Ketamine':
      id = 54;
      break;
    case 'Insight-Family-Practice':
      id = 55;
      break;
    case 'Quintessence-Health-and-Wellness':
      id = 56;
      break;
    case 'Utah-Medical-Clinic':
      id = 57;
      break;
    case 'Medical-Cannabis-of-Utah-South-Jordan':
      id = 58;
      break;
    case 'Medallus-Medical':
      id = 59;
      break;
    case 'Mountain-Peaks-Family-Practice':
      id = 60;
      break;
    case 'Copper-Heights-Wellness':
      id = 61;
      break;
    case 'Pomarri':
      id = 62;
      break;
    case 'Kutcher-Clinic-for-Sports-Neurology':
      id = 63;
      break;
    case 'Hofmann-Arthritis-Institute':
      id = 64;
      break;
    case 'Alpine-Medical-Group':
      id = 65;
      break;
    case 'Centro-De-Salud-Cruz':
      id = 66;
      break;
    case 'Steward-Primary-Care-Murray':
      id = 67;
      break;
    case 'Utah-Therapeutic-Health-Center-Salt-Lake-City':
      id = 68;
      break;
    case 'Healing-Pathways-Medical':
      id = 69;
      break;
    case 'Omega-Interventional-Pain-Clinic':
      id = 70;
      break;
    case 'Utah-Therapeutic-Health-Center-Millcreek':
      id = 71;
      break;
    case 'Health-Elements-LLC':
      id = 72;
      break;
    case 'The-Lotus-Center':
      id = 73;
      break;
    case 'Dangerfield-Therapeutics':
      id = 74;
      break;
    case 'Empathetix':
      id = 75;
      break;
    case 'Utah-Canna-Salt-Lake-City':
      id = 76;
      break;
    case 'Serenity-Mental-Health-Centers':
      id = 77;
      break;
    case 'Hope-Family-Medical-Center':
      id = 78;
      break;
    case 'Attention-Disorders-Clinic':
      id = 79;
      break;
    case 'University-of-Utah-Neurology':
      id = 80;
      break;
    case 'Lotus-Health':
      id = 81;
      break;
    case 'Medical-Cannabis-Clinic':
      id = 82;
      break;
    case 'Evolutionary-Healthcare':
      id = 83;
      break;
    case 'Green-Health-Docs-Salt-Lake':
      id = 84;
      break;
    case 'UBUcares':
      id = 85;
      break;
    case 'Care-At-Your-Fingertips':
      id = 86;
      break;
    case 'Health-Clinics-of-Utah':
      id = 87;
      break;
    case 'Medical-Reflections':
      id = 88;
      break;
    case 'Olympus-Family-Medicine':
      id = 89;
      break;
    ////////////
    case 'Terra-Health-&-Wellness':
      id = 90;
      break;
    case 'Terra-Health-&amp;-Wellness':
      id = 90;
      break;
    ////////////
    case 'Utah-Neuro-Rehabilitation':
      id = 91;
      break;
    case 'Regenerative-Wellness-Center':
      id = 92;
      break;
    case 'Evolve-Medical':
      id = 93;
      break;
    case 'Life-Health-Medical':
      id = 94;
      break;
    case 'AMG-Senior-Medical-Group':
      id = 95;
      break;
    case 'Utah-Behavior-Services':
      id = 96;
      break;
    case 'Utah-Physicians-Care-Center':
      id = 97;
      break;
    case 'Adult-Care-Clinic':
      id = 98;
      break;
    case 'Highland-Family-Practice':
      id = 99;
      break;
    case 'St-Marks-Hospital':
      id = 100;
      break;
    case 'RAW-Health-and-Wellness':
      id = 101;
      break;
    case 'Enliven-Medical':
      id = 102;
      break;
    case 'Jordan-Meadows-Medical-Center':
      id = 103;
      break;
    case 'Alpine-Orthopaedic-Specialists':
      id = 104;
      break;
    case 'AgeLess-in-Eden':
      id = 105;
      break;
    case 'Redmond-Medical-and-Mental-Health':
      id = 106;
      break;
    case 'Great-Basin-Urgent-Care':
      id = 107;
      break;
    case 'Cache-Ketamine-and-Mental-Health':
      id = 108;
      break;
    case 'Medical-Cannabis-of-Utah-Logan':
      id = 109;
      break;
    case 'Matriarch-Health-and-Wellness':
      id = 110;
      break;
    case 'Utah-Canna-Ogden':
      id = 111;
      break;
    case 'Utah-Therapeutic-Health-Center-Ogden':
      id = 112;
      break;
    case 'Urgent-Care-A-Van':
      id = 113;
      break;
    case 'Westbroek-Family-Medicine':
      id = 114;
      break;
    case 'Human-Nature-Medical-and-Wellness':
      id = 115;
      break;
    case 'Cannabis-Prescribers-Utah':
      id = 116;
      break;
    case 'Intermountain-Healthcare-Ogden':
      id = 117;
      break;
    case 'Utah-Pain-and-Rehab':
      id = 118;
      break;
    case 'TruHealth-Clinic':
      id = 119;
      break;
    case 'Aloha-Medical-Services':
      id = 120;
      break;
    case 'Therapy-Reset':
      id = 121;
      break;
    case 'CAS-Healthcare-and-Wellness':
      id = 122;
      break;
    case 'Ogden-clinic':
      id = 123;
      break;
    case 'Skyline-Pain-Clinic':
      id = 124;
      break;
    case 'Eastern-Utah-Womens-Health':
      id = 125;
      break;
    case 'Eastern-Utah-Spine-and-Pain':
      id = 126;
      break;
    case 'Utah-Therapeutic-Health-Center-Provo':
      id = 127;
      break;
    case 'Precision-Medical-Care':
      id = 128;
      break;
    case 'Mignon-Walker-MD':
      id = 129;
      break;
    case 'Medical-Cannabis-of-Utah-Provo':
      id = 130;
      break;
    case 'Cottontree-Family-Medicine':
      id = 131;
      break;
    case 'Southwest-Spine-and-Pain':
      id = 132;
      break;
    case 'Nexus-Pain-Care':
      id = 133;
      break;
    case 'Provo-Wellness-Center':
      id = 134;
      break;
    case 'Optimal-Health-Family-Practice':
      id = 135;
      break;
    case 'Central-Valley-Medical-Center-Fountain-Green-Medical-Clinic':
      id = 136;
      break;
    case 'Gunnison-Family-Practice':
      id = 137;
      break;
    case 'Main-Street-Family-Clinic':
      id = 138;
      break;
    case 'Central-Valley-Medical-Center-Nephi-Medical-Clinic':
      id = 139;
      break;
    case 'Back-to-Basics-Wellness':
      id = 140;
      break;
    case 'Life-Tree-Psychiatry':
      id = 141;
      break;
    case 'A-Body-Renaissance':
      id = 142;
      break;
    case 'Canyon-View-Family-Medicine-Spanish-Fork':
      id = 143;
      break;
    case 'Medical-Cannabis-of-Utah-Spanish-Fork':
      id = 144;
      break;
    case 'Canyon-View-Family-Medicine-Springville':
      id = 145;
      break;
    case 'Cedar-Psychiatry-Springville':
      id = 146;
      break;
    case 'Dragon-Healthcare-Services':
      id = 147;
      break;
    case 'Beaver-Medical-Clinic':
      id = 148;
      break;
    case 'Desert-Pain-Specialists-Cedar-City':
      id = 149;
      break;
    case 'Chelle-Health':
      id = 151;
      break;
    case 'Desert-Edge-Medical':
      id = 152;
      break;
    case 'Satori-Health-and-Wellness':
      id = 153;
      break;
    case 'Integrated-Psych':
      id = 154;
      break;
    case 'Nancy-Davis-Med-Spa':
      id = 155;
      break;
    case 'Desert-Pain-Specialists-St-George':
      id = 156;
      break;
    case 'St-George-Children-and-Family-Psychiatric-Center':
      id = 157;
      break;
    case 'Holland-Holistic-St-George':
      id = 158;
      break;
    case 'Bella-Tu-Medical':
      id = 159;
      break;
    case 'Astra-Health-and-Wellness':
      id = 160;
      break;
    case 'Rebirth-Obgyn':
      id = 161;
      break;
    case 'Utah-Canna-Layton':
      id = 162;
      break;
    case 'Cedar-Psychiatry-Draper':
      id = 163;
      break;
    case 'Cedar-Psychiatry-Murray':
      id = 164;
      break;
    case 'Medical-Cannabis-of-Utah-Bountiful':
      id = 165;
      break;
    case 'Medical-Cannabis-of-Utah-Clinton':
      id = 166;
      break;
    case 'Medical-Cannabis-of-Utah-Riverton':
      id = 167;
      break;
    case 'Medical-Cannabis-of-Utah-Sugar-House':
      id = 168;
      break;
    case 'Medical-Cannabis-of-Utah-Clearfield':
      id = 169;
      break;
    case 'Medical-Cannabis-of-Utah-Layton':
      id = 170;
      break;
    case 'Medical-Cannabis-of-Utah-West-Valley':
      id = 171;
      break;
    default:
      console.log(`QMP not found: `, params.qmpName);
  }
  const response = await fetch(`https://qmputah-2022-10-06-default-rtdb.firebaseio.com/priceHistory/${id}.json?print=pretty`)
  const priceHistory = await response.json()
  const response3 = await fetch(`https://qmputah-2022-10-06-default-rtdb.firebaseio.com/qmpsCorrected/${id}.json?print=pretty`);
  const qmp = await response3.json()
  return {
    qmp: qmp,
    priceHistory: priceHistory,
  }
  throw error(404, 'Not found');
}