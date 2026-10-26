import { Question } from '../types';

export const QUESTIONS_DATA: Question[] = [
  // ==========================================
  // QUESTION 1: MCQ | Textual Comprehension | Report Text
  // ==========================================
  {
    id: 1,
    number: 1,
    questionType: 'mcq',
    competency: 'Textual Comprehension',
    genre: 'Report Text',
    difficulty: 'Medium',
    title: 'Coral Reef Resilience in Changing Oceans',
    passage: [
      'Coral reefs occupy less than one percent of the ocean floor, yet they harbor approximately twenty-five percent of all marine species. In recent decades, elevated sea surface temperatures have triggered mass bleaching events, where corals expel their symbiotic zooxanthellae algae, depriving the hosts of crucial metabolic nutrients.',
      'According to the Global Marine Monitoring Consortium (GMMC), certain branching Acropora species demonstrate heightened thermal tolerance when situated in shallow lagoons characterized by natural diurnal temperature fluctuations. The research documented that these specific colonies generate protective heat-shock proteins up to thirty percent faster than identical species inhabiting stable, open-ocean thermoclines.',
      'However, thermal endurance alone does not guarantee long-term survival. The report underscores that ocean acidification, driven by heightened atmospheric carbon dioxide dissolution, simultaneously decelerates calcium carbonate accretion, making regenerated skeletal structures noticeably more brittle and susceptible to storm-driven physical abrasion.'
    ],
    stimulus: {
      type: 'chart',
      title: 'Coral Bleaching Resistance & Temperature Tolerance Index (GMMC Field Data)',
      badge: 'Scientific Field Report 2025/2026',
      visualTheme: 'emerald',
      metaInfo: [
        { label: 'Study Site', value: 'Banda Sea & Spermonde Archipelago' },
        { label: 'Sample Population', value: '420 Acropora Colonies' },
        { label: 'Monitoring Cycle', value: '36 Months Diurnal Log' }
      ],
      dataPoints: [
        { label: 'Fluctuating Lagoon Acropora', value: '88% Survival', detail: '+30% Heat-Shock Protein synthesis' },
        { label: 'Stable Open-Ocean Acropora', value: '54% Survival', detail: 'Vulnerable to sudden +1.5°C spikes' },
        { label: 'Calcification Accretion Rate', value: '-18% Net Loss', detail: 'Due to seawater carbonic acid saturation' }
      ],
      footerNote: 'Source: Marine Ecology Research Unit, Annual Oceanographic Bulletin 2025.'
    },
    questionPrompt: 'Based on the passage, what specific physiological advantage enables the Acropora colonies in fluctuating shallow lagoons to endure elevated water temperatures?',
    instructionsPrompt: 'Choose exactly one correct answer from the five options below.',
    options: [
      { id: 'A', label: 'A', text: 'They inhabit deeper ocean zones that are shielded from direct sunlight and wave turbulence.' },
      { id: 'B', label: 'B', text: 'They produce protective heat-shock proteins up to thirty percent more rapidly than deep-water colonies.' },
      { id: 'C', label: 'C', text: 'They absorb extra calcium carbonate directly from seawater to permanently prevent skeletal brittleness.' },
      { id: 'D', label: 'D', text: 'They completely replace their zooxanthellae with synthetic enzymes resistant to ocean acidity.' },
      { id: 'E', label: 'E', text: 'They eliminate the need for symbiotic algae by deriving nutrition solely from dissolved minerals.' }
    ],
    correctAnswer: ['B'],
    evidenceText: 'The research documented that these specific colonies generate protective heat-shock proteins up to thirty percent faster than identical species inhabiting stable, open-ocean thermoclines.',
    quickStrategySummary: 'Scan for the specific keyword "advantage" or "proteins" and match the explicit 30% metric in paragraph 2.',
    explanation: {
      step1Understand: 'The question asks for the explicit physiological mechanism that provides thermal endurance to the lagoon coral colonies.',
      step2LocateEvidence: 'Look at paragraph 2, second sentence: "The research documented that these specific colonies generate protective heat-shock proteins up to thirty percent faster than identical species inhabiting stable, open-ocean thermoclines."',
      step3InterpretEvidence: 'The explicit fact directly links the survival advantage to the accelerated synthesis rate (+30%) of heat-shock proteins.',
      step4EliminateWeakOptions: {
        A: 'Incorrect because the passage states they reside in "shallow lagoons," not deeper ocean zones.',
        B: 'Correct. This directly matches the stated evidence that they produce heat-shock proteins 30% faster.',
        C: 'Incorrect because the text notes ocean acidification reduces calcium carbonate accretion rather than preventing brittleness.',
        D: 'Incorrect because synthetic enzymes are never mentioned; corals expel natural zooxanthellae during bleaching.',
        E: 'Incorrect because the passage does not claim corals eliminate their need for algae; expelling them starves the hosts.'
      },
      step5ConfirmAnswer: 'Option B accurately reflects the textual evidence without distorting the scientific facts or figures.',
      step6QuickStrategy: 'When a question asks for a specific detail, locate the subject noun ("protective proteins") and match the verbatim causal clause.',
      step7TransferSkill: 'In factual comprehension questions, beware of options adding external concepts (like synthetic enzymes or deeper waters) that contradict stated geography.'
    },
    narration: {
      questionOverview: 'In Question 1, you are asked to identify an explicit scientific fact from a report on coral reef resilience.',
      readingGuide: 'Focus on paragraph 2. Notice what the researchers found about the rate of heat-shock protein production in lagoon corals.',
      quickStrategy: 'Scan the text for the 30 percent metric and identify what physiological substance it modifies.',
      feedbackCorrect: 'Superb! You pinpointed the exact textual evidence regarding accelerated heat-shock protein synthesis.',
      feedbackIncorrect: 'Not quite. Re-examine paragraph two to see how lagoon corals respond to thermal stress compared to deep-water colonies.',
      explanationSummary: 'The passage explicitly states that shallow lagoon Acropora synthesize protective heat-shock proteins up to 30 percent faster.'
    }
  },

  // ==========================================
  // QUESTION 2: MCQ | Inferential Comprehension | Narrative Text
  // ==========================================
  {
    id: 2,
    number: 2,
    questionType: 'mcq',
    competency: 'Inferential Comprehension',
    genre: 'Narrative Text',
    difficulty: 'Medium',
    title: 'The Clockmaker of Chester',
    passage: [
      'For forty years, Master Alistair had wound the great mechanical chronometer overlooking Chester market square. Every brass gear, polished to a mirror sheen, spoke to an era when time was measured by gravitational weights, escapement wheels, and human devotion. Yet this morning, two municipal technicians in crisp neon uniforms arrived carrying compact titanium cases containing synchronized quartz microchips.',
      '"The city council insists on sub-millisecond precision for the new automated railway signaling," the younger technician explained politely, avoiding Alistair’s gaze as he unscrewed the casing. Alistair said nothing. He reached into his apron, withdrew his velvet polishing cloth, and gently rubbed an anchor pallet that showed the faint groove of four decades of friction.',
      'As the electric hum of the digital module replaced the deep, resonant heartbeat of the pendulum, Alistair felt no anger—only a quiet realization that the city had not merely upgraded its clock; it had fundamentally traded companionship for synchronicity.'
    ],
    stimulus: {
      type: 'brochure',
      title: 'Chester Municipal Civic Heritage Archive: Clock Tower Modernization',
      badge: 'Heritage Preservation Notice',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Facility', value: 'Chester Town Hall Clock Tower (Built 1884)' },
        { label: 'Mechanic', value: 'Master Alistair Vance (Senior Horologist)' },
        { label: 'Project', value: 'Hybrid Rail-Time Precision Synchronizer' }
      ],
      dataPoints: [
        { label: 'Mechanical Movement', value: 'Deadbeat Escapement, 40-Year Operation' },
        { label: 'Upgraded Device', value: 'High-Frequency Quartz Micro-Actuator' },
        { label: 'Stated Purpose', value: 'Sub-Millisecond Railway Dispatch Interlock' }
      ],
      footerNote: 'Chester Historical Society Record Book #402.'
    },
    questionPrompt: 'What can be inferred about Master Alistair’s attitude toward the modernization of the town clock?',
    instructionsPrompt: 'Choose exactly one correct answer from the five options below.',
    options: [
      { id: 'A', label: 'A', text: 'He is bitterly furious and intends to lodge a formal petition with the municipal council.' },
      { id: 'B', label: 'B', text: 'He accepts the inevitable shift with melancholic resignation, recognizing that mechanical warmth has been replaced by cold efficiency.' },
      { id: 'C', label: 'C', text: 'He is eager to learn digital microchip calibration to secure his position on the railway maintenance crew.' },
      { id: 'D', label: 'D', text: 'He feels vindicated because modern quartz systems frequently malfunction during cold winter months.' },
      { id: 'E', label: 'E', text: 'He believes the municipal technicians deliberately damaged the clockwork out of disrespect for traditional craftsmanship.' }
    ],
    correctAnswer: ['B'],
    evidenceText: 'Alistair felt no anger—only a quiet realization that the city had not merely upgraded its clock; it had fundamentally traded companionship for synchronicity.',
    quickStrategySummary: 'Look at the narrator’s reflection on Alistair’s feelings: "felt no anger—only a quiet realization... traded companionship for synchronicity."',
    explanation: {
      step1Understand: 'The question requires inferring the protagonist’s emotional stance and philosophical attitude from his silent actions and introspective thoughts.',
      step2LocateEvidence: 'Paragraph 3 states: "Alistair felt no anger—only a quiet realization that the city had not merely upgraded its clock; it had fundamentally traded companionship for synchronicity."',
      step3InterpretEvidence: 'He does not express rage; rather, his actions (caressing the worn anchor pallet, silence) show peaceful sadness and deep awareness of the cultural trade-off.',
      step4EliminateWeakOptions: {
        A: 'Contradicted by the text: "Alistair felt no anger" and he does not plan to protest.',
        B: 'Correct. "Melancholic resignation" and trading companionship for synchronicity capture his exact contemplative mood.',
        C: 'Unsupported. There is no indication he wishes to retrain as a digital technician.',
        D: 'Unsupported. He does not mention winter weather or anticipate modern clock malfunctions.',
        E: 'Unfounded. The text notes the technician explained the change "politely" and Alistair does not accuse them of sabotage.'
      },
      step5ConfirmAnswer: 'Option B accurately synthesizes the emotional subtext without introducing unsupported external motives.',
      step6QuickStrategy: 'When assessing character attitude, identify contrast words ("no anger—only a quiet realization") to filter out extreme emotional distractors.',
      step7TransferSkill: 'Literary inference questions often test subtle emotional nuance; avoid choosing exaggerated reactions when the character demonstrates quiet contemplation.'
    },
    narration: {
      questionOverview: 'In Question 2, examine Master Alistair’s subtle thoughts and physical gestures in this narrative.',
      readingGuide: 'Pay close attention to how Alistair touches the old clock gears and what he realizes about the city’s decision.',
      quickStrategy: 'Notice that Alistair feels "no anger," which immediately rules out aggressive or hostile responses.',
      feedbackCorrect: 'Excellent analysis! You accurately interpreted the character’s quiet melancholic reflection.',
      feedbackIncorrect: 'Look again at paragraph 3. Notice the phrase: "Alistair felt no anger—only a quiet realization."',
      explanationSummary: 'Alistair displays quiet resignation, noting that mechanical human companionship was traded for mechanical synchronicity.'
    }
  },

  // ==========================================
  // QUESTION 3: MCQ | Evaluation and Appreciation | Informative Article
  // ==========================================
  {
    id: 3,
    number: 3,
    questionType: 'mcq',
    competency: 'Evaluation and Appreciation',
    genre: 'Informative Article',
    difficulty: 'Challenging',
    title: 'The Dual Realities of AI-Driven Precision Agriculture',
    passage: [
      'Advocates of smart farming laud autonomous tractors, drone-based multispectral NDVI imaging, and predictive soil nitrogen algorithms as the definitive answer to global food insecurity. By delivering agrochemicals down to individual square meters, early adopters report up to a twenty-two percent reduction in fertilizer runoff and noticeable increases in net harvest yields.',
      'Yet agricultural economist Dr. Elena Rostova urges cautious appraisal of these glowing metrics. Her longitudinal study of smallholder cooperatives across Central and Eastern Europe highlights that high capital expenditures, recurring software licensing fees, and vendor-locked proprietary telemetry create severe technological lock-in. When proprietary software servers experienced widespread outages during the 2024 planting window, smallholders lacking manual bypass override mechanisms lost critical sowing days.',
      'Therefore, while precision technology provides indisputable agronomic efficiencies, framing it as an unreserved panacea overlooks critical vulnerabilities regarding digital sovereignty, rural debt vulnerability, and mechanical autonomy for family farmers.'
    ],
    stimulus: {
      type: 'diagram',
      title: 'Precision Agri-Tech Value Chain: Yield Gains vs Systemic Dependencies',
      badge: 'Agro-Economic Review 2025',
      visualTheme: 'amber',
      metaInfo: [
        { label: 'Analyst', value: 'Institute for Rural Food Security & Tech Policy' },
        { label: 'Cohort', value: '180 Agrarian Cooperatives' },
        { label: 'Observation Years', value: '2022–2025' }
      ],
      dataPoints: [
        { label: 'Measured Agrochemical Reduction', value: '18% - 22% Savings', detail: 'Targeted spraying via multispectral sensors' },
        { label: 'Annual Licensing & Cloud Fees', value: '$3,400 / Farm Unit', detail: 'Fixed overhead regardless of weather losses' },
        { label: 'Unscheduled Telemetry Outages', value: '14 Operating Days Lost', detail: 'Caused by closed-source remote server dependencies' }
      ],
      footerNote: 'Source: Central European Agro-Economic Forum Publication Series.'
    },
    questionPrompt: 'Which of the following best characterizes the author’s primary rhetorical purpose in evaluating precision agriculture?',
    instructionsPrompt: 'Choose exactly one correct answer from the five options below.',
    options: [
      { id: 'A', label: 'A', text: 'To dismiss precision farming entirely as a fraudulent corporate scheme with zero proven agronomic benefits.' },
      { id: 'B', label: 'B', text: 'To urge governments to ban drone imaging in agriculture to prevent foreign satellite espionage.' },
      { id: 'C', label: 'C', text: 'To present a balanced appraisal demonstrating that substantial agronomic gains are counterbalanced by serious economic and systemic risks.' },
      { id: 'D', label: 'D', text: 'To instruct smallholders on writing open-source software code to replace industrial tractor firmware.' },
      { id: 'E', label: 'E', text: 'To argue that synthetic chemical fertilizers should be doubled to compensate for digital server downtime.' }
    ],
    correctAnswer: ['C'],
    evidenceText: 'Therefore, while precision technology provides indisputable agronomic efficiencies, framing it as an unreserved panacea overlooks critical vulnerabilities regarding digital sovereignty, rural debt vulnerability, and mechanical autonomy for family farmers.',
    quickStrategySummary: 'Identify the concession ("while precision technology provides indisputable agronomic efficiencies") followed by the critical qualifier ("overlooks critical vulnerabilities").',
    explanation: {
      step1Understand: 'The question evaluates the author’s overall rhetorical intent and objective stance toward the subject.',
      step2LocateEvidence: 'Paragraph 3 synthesizes both perspectives: "while precision technology provides indisputable agronomic efficiencies, framing it as an unreserved panacea overlooks critical vulnerabilities..."',
      step3InterpretEvidence: 'The author acknowledges real benefits (22% less runoff) while highlighting critical drawbacks (lock-in, server outages, debt), establishing a nuanced, balanced evaluation.',
      step4EliminateWeakOptions: {
        A: 'Too extreme. The author affirms real benefits (up to 22% runoff reduction) and does not call it fraudulent.',
        B: 'Unsubstantiated distortion. Foreign espionage is never mentioned.',
        C: 'Correct. It captures the dual appraisal: recognizing measurable benefits while warning of economic risks and system fragility.',
        D: 'Incorrect. The author does not provide programming instructions or coding manuals.',
        E: 'Absurd distractor. The author never suggests doubling chemical applications.'
      },
      step5ConfirmAnswer: 'Option C captures the balanced evaluation clearly conveyed in the concluding thesis.',
      step6QuickStrategy: 'Look for qualifying transitional phrases like "while... nevertheless" which signal an objective, balanced critique.',
      step7TransferSkill: 'In author’s purpose questions, beware of black-and-white choices when the passage presents both merits and hazards.'
    },
    narration: {
      questionOverview: 'Question 3 asks you to evaluate the author’s purpose and balanced perspective on high-tech farming.',
      readingGuide: 'Observe how paragraph 1 highlights benefits while paragraph 2 points out dependencies and costs.',
      quickStrategy: 'Notice the concluding sentence where the author weighs agronomic efficiency against digital vulnerability.',
      feedbackCorrect: 'Brilliant work! You identified the balanced, critical stance of the author.',
      feedbackIncorrect: 'Review the final paragraph. Notice how the author acknowledges real gains while warning of hidden risks.',
      explanationSummary: 'The author presents a balanced evaluation: acknowledging yield gains while warning against debt and technological lock-in.'
    }
  },

  // ==========================================
  // QUESTION 4: MSQ | Textual Comprehension | Announcement
  // ==========================================
  {
    id: 4,
    number: 4,
    questionType: 'msq',
    competency: 'Textual Comprehension',
    genre: 'Announcement',
    difficulty: 'Medium',
    title: 'Metropolitan Youth Green Tech Summit 2026',
    passage: [
      'The Jakarta Department of Education, in partnership with the ASEAN Eco-Innovation Hub, proudly announces the 2026 Metropolitan Youth Green Tech Summit. The summit will take place from October 12 to October 14 at the Nusantara Convention Center.',
      'Secondary school teams (grades 10 to 12) comprising exactly three students and one certified faculty mentor are invited to submit working prototypes under three competition categories: Clean Urban Micro-Mobility, Community Organic Waste Bioremediation, and Solar IoT Environmental Monitors.',
      'All prospective teams must complete initial digital portfolio registration by August 20, 2026. Selected finalists will receive a seed development grant of Rp 7,500,000, specialized laboratory access at Universitas Indonesia during September, and full complimentary accommodation during the three-day convention.'
    ],
    stimulus: {
      type: 'notice',
      title: 'Official Entry Guidelines & Summit Timeline: Green Tech 2026',
      badge: 'Official Municipal Notice',
      visualTheme: 'emerald',
      metaInfo: [
        { label: 'Organizer', value: 'Jakarta Dept of Education & ASEAN Eco-Hub' },
        { label: 'Event Dates', value: 'October 12–14, 2026' },
        { label: 'Venue', value: 'Nusantara Convention Center, Hall B' }
      ],
      dataPoints: [
        { label: 'Team Composition', value: '3 Students + 1 Faculty Mentor' },
        { label: 'Registration Cut-off', value: 'August 20, 2026 (23:59 WIB)' },
        { label: 'Finalist Grant', value: 'Rp 7,500,000 Seed Capital' }
      ],
      footerNote: 'Late submissions will be automatically disqualified by the portal.'
    },
    questionPrompt: 'According to the official announcement, which of the following provisions are explicitly guaranteed to the qualifying finalist teams? (Select ALL correct options)',
    instructionsPrompt: 'Multiple-Select Question: Select at least two correct options (A, B, C, D). Not all options are correct.',
    options: [
      { id: 'A', label: 'A', text: 'Financial seed development support amounting to Rp 7,500,000.' },
      { id: 'B', label: 'B', text: 'Direct employment contracts as environmental consultants for the municipal government.' },
      { id: 'C', label: 'C', text: 'Designated university laboratory access during the month of September.' },
      { id: 'D', label: 'D', text: 'Full complimentary accommodation throughout the three days of the summit.' }
    ],
    correctAnswer: ['A', 'C', 'D'],
    evidenceText: 'Selected finalists will receive a seed development grant of Rp 7,500,000, specialized laboratory access at Universitas Indonesia during September, and full complimentary accommodation during the three-day convention.',
    quickStrategySummary: 'Look at the final sentence of paragraph 3, which lists three explicit entitlements: grant, lab access, and hotel accommodation.',
    explanation: {
      step1Understand: 'This Multiple-Select Question requires identifying all specific benefits explicitly promised to finalists in the text.',
      step2LocateEvidence: 'Examine paragraph 3: "Selected finalists will receive a seed development grant of Rp 7,500,000, specialized laboratory access at Universitas Indonesia during September, and full complimentary accommodation during the three-day convention."',
      step3InterpretEvidence: 'Three benefits are stated explicitly: seed grant (A), university lab access in September (C), and accommodation (D). Employment contracts (B) are never offered.',
      step4EliminateWeakOptions: {
        A: 'Correct. Directly stated as a seed development grant of Rp 7,500,000.',
        B: 'Incorrect. The announcement offers competition awards and grants, not municipal consulting jobs.',
        C: 'Correct. Directly stated as specialized laboratory access at Universitas Indonesia during September.',
        D: 'Correct. Explicitly guaranteed as complimentary accommodation during the three-day convention.'
      },
      step5ConfirmAnswer: 'Options A, C, and D are all verified verbatim in paragraph 3, while B is an unsupported distractor.',
      step6QuickStrategy: 'In MSQ items, verify each option individually against the text list. Do not select options that exaggerate rewards.',
      step7TransferSkill: 'When evaluating announcements, distinguish between project support benefits and unmentioned long-term professional employment.'
    },
    narration: {
      questionOverview: 'Question 4 is a Multiple-Select Question with four options. At least two options are correct.',
      readingGuide: 'Check the final paragraph of the announcement for the specific list of awards given to finalists.',
      quickStrategy: 'Verify each award listed in the text: grant money, university lab access, and accommodation.',
      feedbackCorrect: 'Spot on! You selected all three true benefits guaranteed by the announcement.',
      feedbackIncorrect: 'Carefully reread paragraph 3. Remember that Multiple-Select Questions require choosing all correct statements.',
      explanationSummary: 'The text explicitly guarantees a 7.5 million rupiah grant, September university lab access, and free convention accommodation.'
    }
  },

  // ==========================================
  // QUESTION 5: MSQ | Inferential Comprehension | Recount Text
  // ==========================================
  {
    id: 5,
    number: 5,
    questionType: 'msq',
    competency: 'Inferential Comprehension',
    genre: 'Recount Text',
    difficulty: 'Challenging',
    title: 'Field Notes from the Heart of Borneo',
    passage: [
      'Day 14 in the upper canopy of the Danum Valley tested every reserve of our expedition crew. Our primary objective was tracking the arboreal foraging corridors of the endangered Bornean clouded leopard using motion-triggered infrared canopy cameras placed thirty meters above the damp forest floor.',
      'By noon, torrential equatorial rain began seeping through our double-sealed waterproof packs. Dr. Hadi observed that the wildlife soundscape—typically saturated with the percussive calls of rhinoceros hornbills and gibbons—had fallen abruptly silent two hours before the barometric pressure plunged. While our satellite transceivers struggled through the dense moisture canopy, the local Dayak trackers had already reinforced our perimeter tarps and trench drains without waiting for our electronic weather alerts.',
      'When our primary optical sensors finally uploaded their telemetry that evening, they revealed something unexpected: animal movements had shifted down toward limestone karst crevices rather than along their customary ridge trails, demonstrating an instinctual hazard avoidance pattern honed over millennia.'
    ],
    stimulus: {
      type: 'log',
      title: 'Danum Valley Canopy Expedition: Field Sensor & Behavioral Log',
      badge: 'Field Research Dossier #14',
      visualTheme: 'emerald',
      metaInfo: [
        { label: 'Coordinates', value: '04°58′N 117°48′E (Upper Danum)' },
        { label: 'Elevation', value: '420m ASL, Canopy Station 03' },
        { label: 'Date', value: 'Expedition Day 14, 18:30 hrs' }
      ],
      dataPoints: [
        { label: 'Barometric Drop', value: '-12 hPa in 90 min', detail: 'Preceded by sudden silence across canopy' },
        { label: 'Satellite Uptime', value: 'Intermittent (18%)', detail: 'Dense rain canopy scattering high-frequency signal' },
        { label: 'Faunal Corridor Shift', value: 'Ridge to Karst Crevices', detail: 'Descent into natural limestone shelters' }
      ],
      footerNote: 'Expedition Log certified by Borneo Canopy Research Project.'
    },
    questionPrompt: 'Based on the expedition recount, which inferences can be reasonably made about the ecosystem and expedition challenges? (Select ALL correct options)',
    instructionsPrompt: 'Multiple-Select Question: Select at least two correct options (A, B, C, D). Not all options are correct.',
    options: [
      { id: 'A', label: 'A', text: 'Indigenous ecological knowledge proved faster and more reliable than electronic alerts in responding to sudden storms.' },
      { id: 'B', label: 'B', text: 'Canopy animals exhibited preemptive behavioral shifts before the storm fully hit the forest floor.' },
      { id: 'C', label: 'C', text: 'The researchers were solely studying aquatic reptiles inhabiting the riverbanks.' },
      { id: 'D', label: 'D', text: 'Heavy rainfall and dense foliage created significant transmission obstacles for high-tech communication devices.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    evidenceText: 'the local Dayak trackers had already reinforced our perimeter tarps and trench drains without waiting for our electronic weather alerts... animal movements had shifted down toward limestone karst crevices rather than along their customary ridge trails... our satellite transceivers struggled through the dense moisture canopy.',
    quickStrategySummary: 'Look for textual clues regarding: (1) tracker responsiveness vs tech, (2) animal silence and shelter shift, (3) satellite signal struggles.',
    explanation: {
      step1Understand: 'We must identify valid deductive inferences supported by textual clues in the recount.',
      step2LocateEvidence: 'Paragraph 2 mentions Dayak trackers reinforcing tarps without waiting for electronic alerts, and satellite transceivers struggling. Paragraph 3 reveals wildlife retreated into limestone crevices hours earlier.',
      step3InterpretEvidence: 'Option A is supported because trackers reacted intuitively before gadgets; B is supported because animals went silent and sought limestone shelters before the storm; D is supported because satellites struggled in the wet canopy. C is clearly false (they tracked clouded leopards, not aquatic reptiles).',
      step4EliminateWeakOptions: {
        A: 'Correct. The trackers prepared drains and tarps intuitively without relying on the delayed electronic warnings.',
        B: 'Correct. The wildlife fell silent two hours early and shifted to crevices, anticipating the storm.',
        C: 'Incorrect. The opening paragraph clarifies their subject was the arboreal Bornean clouded leopard, not aquatic reptiles.',
        D: 'Correct. The text notes satellite transceivers struggled through the dense moisture canopy.'
      },
      step5ConfirmAnswer: 'Options A, B, and D are valid logical deductions from the text, making them the correct set.',
      step6QuickStrategy: 'Cross off any option that blatantly misidentifies core facts (like aquatic reptiles vs clouded leopards), then verify the remaining logical inferences.',
      step7TransferSkill: 'Inferential comprehension often contrasts indigenous observation skills or animal instincts with modern technological equipment.'
    },
    narration: {
      questionOverview: 'Question 5 asks you to draw inferences from an expedition in the Borneo rainforest.',
      readingGuide: 'Observe the actions of the Dayak trackers, the behavior of the canopy animals, and the technical difficulties faced.',
      quickStrategy: 'Notice that the team studied clouded leopards, so eliminate any mention of aquatic reptiles right away.',
      feedbackCorrect: 'Outstanding inference work! You identified all three valid deductions from the recount.',
      feedbackIncorrect: 'Look closely at the interactions between the trackers, the wildlife signals, and the failing satellite equipment.',
      explanationSummary: 'The text supports that trackers anticipated the storm, animals sought shelter early, and wet foliage disrupted satellite signals.'
    }
  },

  // ==========================================
  // QUESTION 6: MSQ | Evaluation and Appreciation | Advertisement
  // ==========================================
  {
    id: 6,
    number: 6,
    questionType: 'msq',
    competency: 'Evaluation and Appreciation',
    genre: 'Advertisement',
    difficulty: 'Medium',
    title: 'EcoShift Heavy-Duty Electric Cargo Bikes',
    passage: [
      'Tired of gridlocked urban delivery routes, soaring diesel excise taxes, and costly municipal low-emission zone fines? Meet the EcoShift Pro-Hauler—the commercial e-cargo solution engineered specifically for high-density logistics.',
      'Equipped with our patented dual 1200Wh lithium-iron-phosphate (LFP) battery bank, the Pro-Hauler delivers an independently certified range of up to 130 kilometers per charge with a maximum payload capacity of 220 kilograms. Our heavy-duty hydraulic disc brakes and integrated torque-sensing motor ensure smooth deceleration even on ten-percent urban hill gradients.',
      'Unlike conventional delivery vans, the EcoShift Pro-Hauler requires zero commercial driver licensing in metropolitan districts, glides through dedicated cycling corridors, and slashes maintenance overhead by sixty-five percent compared to internal combustion vehicles. Transition your fleet today and reclaim both your delivery schedule and operating margins!'
    ],
    stimulus: {
      type: 'brochure',
      title: 'EcoShift Pro-Hauler Commercial Specification Sheet',
      badge: 'Product Factsheet 2026',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Model', value: 'EcoShift Pro-Hauler (Gen 3)' },
        { label: 'Target Market', value: 'Urban Courier & Last-Mile Delivery' },
        { label: 'Battery Chemistry', value: 'Safe Lithium-Iron-Phosphate (LFP)' }
      ],
      dataPoints: [
        { label: 'Certified Range', value: 'Up to 130 km per Charge' },
        { label: 'Payload Limit', value: '220 kg Cargo Weight' },
        { label: 'Maintenance Cost', value: '-65% vs Diesel Delivery Vans' }
      ],
      footerNote: 'Complies with European & Southeast Asian E-Mobility Standard EN15194.'
    },
    questionPrompt: 'Which persuasive claims in the advertisement are directly supported by technical specifications or comparative operational data? (Select ALL correct options)',
    instructionsPrompt: 'Multiple-Select Question: Select at least two correct options (A, B, C, D). Not all options are correct.',
    options: [
      { id: 'A', label: 'A', text: 'The vehicle is engineered to carry significant delivery cargo up to 220 kilograms.' },
      { id: 'B', label: 'B', text: 'The e-cargo bike guarantees that city councils will completely eliminate all traffic laws for couriers.' },
      { id: 'C', label: 'C', text: 'The vehicle provides a substantial certified travel range of up to 130 kilometers per charge.' },
      { id: 'D', label: 'D', text: 'The product lowers maintenance overhead by an estimated sixty-five percent relative to combustion vans.' }
    ],
    correctAnswer: ['A', 'C', 'D'],
    evidenceText: 'maximum payload capacity of 220 kilograms... certified range of up to 130 kilometers per charge... slashes maintenance overhead by sixty-five percent compared to internal combustion vehicles.',
    quickStrategySummary: 'Match the specific factual metrics: 220 kg payload, 130 km range, and 65% maintenance reduction.',
    explanation: {
      step1Understand: 'The question evaluates which marketing claims in the advertisement are backed by explicit technical figures.',
      step2LocateEvidence: 'Paragraph 2 highlights 220 kg payload and 130 km range; paragraph 3 states it slashes maintenance overhead by 65%.',
      step3InterpretEvidence: 'Claims A, C, and D are verifiable engineering metrics provided in the advertisement. B is an absurd exaggeration (no vehicle eliminates all traffic laws).',
      step4EliminateWeakOptions: {
        A: 'Correct. Supported by the stated "maximum payload capacity of 220 kilograms."',
        B: 'Incorrect. The ad notes no commercial driver license is needed, not that traffic laws are eliminated.',
        C: 'Correct. Supported by the stated "certified range of up to 130 kilometers per charge."',
        D: 'Correct. Supported by the stated "slashes maintenance overhead by sixty-five percent."'
      },
      step5ConfirmAnswer: 'Options A, C, and D reflect the genuine specifications and comparative claims presented in the ad copy.',
      step6QuickStrategy: 'When evaluating advertisements, distinguish realistic technical claims from hyperbole or impossible legal claims.',
      step7TransferSkill: 'In critical reading of commercial text, look for exact figures (km, kg, %) that substantiate marketing assertions.'
    },
    narration: {
      questionOverview: 'In Question 6, evaluate the persuasive claims in an advertisement for commercial cargo bikes.',
      readingGuide: 'Look for exact technical data points: range, weight capacity, and maintenance cost comparisons.',
      quickStrategy: 'Identify the exact numbers in the text and reject extreme claims like eliminating traffic laws.',
      feedbackCorrect: 'Well done! You correctly filtered genuine technical specifications from unrealistic marketing claims.',
      feedbackIncorrect: 'Check paragraphs 2 and 3 again. Look for the three claims verified by concrete figures.',
      explanationSummary: 'The advertisement supports claims regarding 220 kg payload, 130 km range, and 65% reduced maintenance costs.'
    }
  },

  // ==========================================
  // QUESTION 7: TFNG | Textual Comprehension | Procedure Text
  // ==========================================
  {
    id: 7,
    number: 7,
    questionType: 'tfng',
    competency: 'Textual Comprehension',
    genre: 'Procedure Text',
    difficulty: 'Easy',
    title: 'High-Voltage EV Battery Pack Service Protocol',
    passage: [
      'Before commencing inspection on any electric vehicle (EV) high-voltage traction battery pack exceeding sixty volts direct current, technician apprentices must ensure the main high-voltage service disconnect plug has been physically extracted and locked inside the safety lockbox.',
      'Technicians are required to wear Class 0 electrical safety gloves rated for up to one thousand volts alternating current. These gloves must undergo an air-leak roll test prior to each usage session. Under no circumstances should personal jewelry, metal belt buckles, or magnetic wristbands be worn in the active containment bay.',
      'Once the disconnect plug is secured, wait a mandatory ten-minute interval for onboard capacitors to discharge residual electrical energy. Verify zero potential using a certified CAT III or CAT IV multimeter before touching the busbar interconnects.'
    ],
    stimulus: {
      type: 'notice',
      title: 'Vocational Technical Workshop: High-Voltage Safety Check Sheet',
      badge: 'Workshop Standard Operating Procedure',
      visualTheme: 'crimson',
      metaInfo: [
        { label: 'Standard', value: 'ISO 6469-3 EV Electrical Safety' },
        { label: 'PPE Grade', value: 'Class 0 Insulated (1000V AC)' },
        { label: 'Safety Officer', value: 'Lead Instructor, Automotive Tech' }
      ],
      dataPoints: [
        { label: 'Step 1: Isolate', value: 'Remove & Lock Service Disconnect' },
        { label: 'Step 2: Dissipate', value: 'Mandatory 10-Minute Capacitor Discharge' },
        { label: 'Step 3: Confirm', value: 'Zero-Voltage Multimeter Verification' }
      ],
      footerNote: 'Non-compliance results in immediate workshop suspension.'
    },
    questionPrompt: 'Statement: "Technicians are permitted to begin measuring the busbar interconnects immediately after removing the service disconnect plug without waiting."',
    instructionsPrompt: 'Determine whether the statement is TRUE, FALSE, or NOT GIVEN based strictly on the passage.',
    options: [
      { id: 'True', label: 'True', text: 'True — The statement agrees with the information in the passage.' },
      { id: 'False', label: 'False', text: 'False — The statement contradicts the information in the passage.' },
      { id: 'Not Given', label: 'Not Given', text: 'Not Given — There is no information on this in the passage.' }
    ],
    correctAnswer: ['False'],
    evidenceText: 'Once the disconnect plug is secured, wait a mandatory ten-minute interval for onboard capacitors to discharge residual electrical energy. Verify zero potential using a certified CAT III or CAT IV multimeter before touching the busbar interconnects.',
    quickStrategySummary: 'Compare "immediately... without waiting" in the statement against "wait a mandatory ten-minute interval" in the text.',
    explanation: {
      step1Understand: 'The question asks whether technicians can measure busbar interconnects right away without waiting.',
      step2LocateEvidence: 'Look at paragraph 3: "Once the disconnect plug is secured, wait a mandatory ten-minute interval for onboard capacitors to discharge residual electrical energy. Verify zero potential... before touching the busbar interconnects."',
      step3InterpretEvidence: 'The text specifies a mandatory 10-minute waiting period to allow capacitors to discharge before touching or measuring interconnects.',
      step4EliminateWeakOptions: {
        True: 'Incorrect. The statement claims technicians can begin immediately without waiting, which directly violates the safety rule.',
        False: 'Correct. The statement directly contradicts the explicit instruction requiring a mandatory ten-minute discharge delay.',
        'Not Given': 'Incorrect. The procedure clearly and explicitly addresses whether waiting is required.'
      },
      step5ConfirmAnswer: 'The statement directly contradicts the passage; therefore, the correct answer is FALSE.',
      step6QuickStrategy: 'In True/False/Not Given tasks, look for absolute timing terms like "immediately" or "without waiting" and see if the text states the opposite.',
      step7TransferSkill: 'If a statement directly reverses a conditional step or safety protocol described in the text, it is definitively False.'
    },
    narration: {
      questionOverview: 'Question 7 is a True, False, or Not Given question based on an automotive electrical safety procedure.',
      readingGuide: 'Check paragraph 3 to find out what must happen immediately after the disconnect plug is removed.',
      quickStrategy: 'Notice the words "mandatory ten-minute interval." Does this contradict the statement that you can start without waiting?',
      feedbackCorrect: 'Spot on! The text demands a mandatory ten-minute wait, contradicting the statement directly.',
      feedbackIncorrect: 'Reread paragraph 3 carefully. The text specifies a mandatory ten-minute wait for capacitor discharge.',
      explanationSummary: 'The statement is False because technicians must wait a mandatory ten minutes for capacitors to discharge.'
    }
  },

  // ==========================================
  // QUESTION 8: TFNG | Inferential Comprehension | Short Message
  // ==========================================
  {
    id: 8,
    number: 8,
    questionType: 'tfng',
    competency: 'Inferential Comprehension',
    genre: 'Short Message',
    difficulty: 'Medium',
    title: 'Urgent Coordination: Charity Gala Stage Setup',
    passage: [
      '[14:15] Maya (Event Lead): Tariq, the audiovisual rental truck just arrived at the north gate, but the loading bay access door is deadlocked. The facilities custodian won’t be back on campus until 15:30.',
      '[14:18] Tariq (Logistics): Don’t panic. Mr. Sitorus in the vocational electrical lab has a master key for the auditorium corridor. If we wheel the sound consoles through Lab 3 and down the east freight elevator, we can stage everything before the acoustics team arrives at 15:00.',
      '[14:21] Maya: Brilliant thinking! I’ll redirect the delivery drivers to the east ramp right now. Keep your radio on channel 4 in case the ramp door is secured from the inside.'
    ],
    stimulus: {
      type: 'report_card',
      title: 'School Campus Messaging Log: Charity Gala Committee',
      badge: 'Internal Logistics Chat',
      visualTheme: 'slate',
      metaInfo: [
        { label: 'Event', value: 'Annual Charity Cultural Gala' },
        { label: 'Time Window', value: '14:15 – 14:25 WIB' },
        { label: 'Urgency Level', value: 'High (Pre-Soundcheck Crunch)' }
      ],
      dataPoints: [
        { label: 'Problem', value: 'North Gate Loading Bay Locked' },
        { label: 'Custodian Availability', value: 'Delayed until 15:30' },
        { label: 'Alternative Route', value: 'Lab 3 East Freight Elevator' }
      ],
      footerNote: 'Encrypted Student Council Communications Channel.'
    },
    questionPrompt: 'Statement: "Tariq’s alternative routing plan aims to ensure the sound equipment is positioned before the acoustics team begins their work."',
    instructionsPrompt: 'Determine whether the statement is TRUE, FALSE, or NOT GIVEN based strictly on the passage.',
    options: [
      { id: 'True', label: 'True', text: 'True — The statement agrees with the information in the passage.' },
      { id: 'False', label: 'False', text: 'False — The statement contradicts the information in the passage.' },
      { id: 'Not Given', label: 'Not Given', text: 'Not Given — There is no information on this in the passage.' }
    ],
    correctAnswer: ['True'],
    evidenceText: 'If we wheel the sound consoles through Lab 3 and down the east freight elevator, we can stage everything before the acoustics team arrives at 15:00.',
    quickStrategySummary: 'Match Tariq’s stated purpose: "stage everything before the acoustics team arrives at 15:00."',
    explanation: {
      step1Understand: 'The question asks whether the objective of the alternative route is to have gear ready before the acoustics crew arrives.',
      step2LocateEvidence: 'Look at Tariq’s message at 14:18: "If we wheel the sound consoles through Lab 3 and down the east freight elevator, we can stage everything before the acoustics team arrives at 15:00."',
      step3InterpretEvidence: 'The text confirms that the alternative route was specifically formulated to stage the equipment ahead of the 15:00 arrival of the acoustics team.',
      step4EliminateWeakOptions: {
        True: 'Correct. The statement perfectly mirrors the intention and timeline stated in Tariq’s message.',
        False: 'Incorrect. The statement does not contradict the text; it is the exact motive explained by Tariq.',
        'Not Given': 'Incorrect. The purpose and timing are explicitly stated in the chat log.'
      },
      step5ConfirmAnswer: 'The statement agrees completely with the evidence in the passage; therefore, it is TRUE.',
      step6QuickStrategy: 'Identify the causal link: "If we do X... we can stage everything before Y arrives." If the statement matches Y, it is True.',
      step7TransferSkill: 'Short messages often hinge on chronological constraints; always match who arrives when to verify statements.'
    },
    narration: {
      questionOverview: 'Question 8 is a True/False/Not Given question based on a rapid logistics message exchange.',
      readingGuide: 'Focus on Tariq’s message at 14:18. What deadline is he trying to beat?',
      quickStrategy: 'Check whether Tariq mentions finishing the setup before the acoustics team arrives at three o’clock.',
      feedbackCorrect: 'Great job! You verified the timeline and purpose behind Tariq’s alternative route.',
      feedbackIncorrect: 'Take another look at Tariq’s message at 14:18 where he specifically mentions the 15:00 acoustics deadline.',
      explanationSummary: 'The statement is True because Tariq explicitly proposes the route so they can stage equipment before the acoustics team arrives.'
    }
  },

  // ==========================================
  // QUESTION 9: TFNG | Evaluation and Appreciation | Descriptive Text
  // ==========================================
  {
    id: 9,
    number: 9,
    questionType: 'tfng',
    competency: 'Evaluation and Appreciation',
    genre: 'Descriptive Text',
    difficulty: 'Challenging',
    title: 'The Living Root Bridges of Meghalaya',
    passage: [
      'In the cloud-shrouded valleys of Meghalaya, northeastern India, monsoon rains exceed eleven meters annually, swiftly rotting standard wooden bridges and rusting steel cables. Rather than battling the deluge with industrial materials, the indigenous Khasi and Jaintia communities developed an astonishing botanical architecture: living root bridges, known locally as jingkieng jri.',
      'By guiding the aerial roots of the Ficus elastica (Indian rubber fig) tree through hollowed-out areca catechu palm trunks across rushing river gorges, artisans coax the root systems to take root on the opposite banks. Over decades, these roots interweave, thicken, and strengthen through mechanical load. Unlike inert concrete structures that degrade under weathering, living root bridges become more robust over time as the living trees mature, with some functional specimens exceeding five hundred years of age.',
      'Contemporary civil engineers increasingly praise these living spans not merely as charming folkloric relics, but as pioneering paradigms of resilient, self-healing bio-infrastructure that harmoniously integrate environmental regeneration with functional public transit.'
    ],
    stimulus: {
      type: 'infographic',
      title: 'Botanical Engineering: Jingkieng Jri (Living Root Bridges)',
      badge: 'Cultural Bio-Architecture Study',
      visualTheme: 'emerald',
      metaInfo: [
        { label: 'Region', value: 'Cherrapunji & Nongriat, Meghalaya' },
        { label: 'Species', value: 'Ficus elastica & Areca catechu' },
        { label: 'Lifespan', value: 'Centuries (Self-Strengthening)' }
      ],
      dataPoints: [
        { label: 'Annual Rainfall', value: '11,000+ mm Rain', detail: 'Rapidly destroys conventional timber & steel' },
        { label: 'Construction Period', value: '15 to 30 Years', detail: 'Requires multi-generational stewardship' },
        { label: 'Structural Behavior', value: 'Bio-Adaptive & Self-Healing', detail: 'Strength increases with tree maturation' }
      ],
      footerNote: 'Source: International Journal of Vernacular Architecture & Bio-Engineering.'
    },
    questionPrompt: 'Statement: "Modern civil engineers regard the living root bridges as economically inferior to concrete bridges because the Khasi bridges require decades to complete."',
    instructionsPrompt: 'Determine whether the statement is TRUE, FALSE, or NOT GIVEN based strictly on the passage.',
    options: [
      { id: 'True', label: 'True', text: 'True — The statement agrees with the information in the passage.' },
      { id: 'False', label: 'False', text: 'False — The statement contradicts the information in the passage.' },
      { id: 'Not Given', label: 'Not Given', text: 'Not Given — There is no information on this in the passage.' }
    ],
    correctAnswer: ['Not Given'],
    evidenceText: 'Contemporary civil engineers increasingly praise these living spans not merely as charming folkloric relics, but as pioneering paradigms of resilient, self-healing bio-infrastructure that harmoniously integrate environmental regeneration with functional public transit.',
    quickStrategySummary: 'Check if the text provides any comparison regarding "economic inferiority" or construction cost balance between the two bridge types.',
    explanation: {
      step1Understand: 'The statement asserts that modern engineers judge living bridges to be "economically inferior" to concrete bridges due to the long construction time.',
      step2LocateEvidence: 'Review paragraph 3: "Contemporary civil engineers increasingly praise these living spans not merely as charming folkloric relics, but as pioneering paradigms of resilient, self-healing bio-infrastructure..."',
      step3InterpretEvidence: 'While the text notes that bridges take decades to form (paragraph 2) and that engineers praise them (paragraph 3), the passage NEVER mentions monetary cost, financial budgets, or "economic inferiority."',
      step4EliminateWeakOptions: {
        True: 'Incorrect because the passage never labels them economically inferior.',
        False: 'Incorrect because the text neither refutes nor confirms economic cost comparisons.',
        'Not Given': 'Correct. The text does not provide financial or economic comparison metrics between living root bridges and concrete bridges.'
      },
      step5ConfirmAnswer: 'Because the passage contains no information regarding economic inferiority, the correct answer is NOT GIVEN.',
      step6QuickStrategy: 'If an evaluative claim includes specific keywords like "economically inferior" or "costly" that have zero supporting or refuting lines in the passage, choose Not Given.',
      step7TransferSkill: 'Do not extrapolate economic conclusions from technical praise unless financial data is explicitly discussed in the text.'
    },
    narration: {
      questionOverview: 'Question 9 asks you to evaluate whether a statement about engineering cost comparisons is supported, contradicted, or missing.',
      readingGuide: 'Look closely at the final paragraph. Does the author mention economic inferiority or monetary costs?',
      quickStrategy: 'Notice that while the text mentions decades of growth, it never mentions economic inferiority or budget calculations.',
      feedbackCorrect: 'Excellent discernment! The passage praises the bridges but never discusses economic inferiority, so it is Not Given.',
      feedbackIncorrect: 'Look carefully at paragraph 3. The passage praises the bridges’ resilience, but never evaluates their financial or economic cost.',
      explanationSummary: 'The statement is Not Given because the text never compares the economic value or financial efficiency of the bridge types.'
    }
  },

  // ==========================================
  // QUESTION 10: MCQ | Textual Comprehension | Notice
  // ==========================================
  {
    id: 10,
    number: 10,
    questionType: 'mcq',
    competency: 'Textual Comprehension',
    genre: 'Notice',
    difficulty: 'Easy',
    title: 'Metro Rail Express Platform Safety Regulations',
    passage: [
      'Welcome to the Western Transit Line. For passenger safety, patrons must remain behind the textured yellow tactile warning strip at all times while waiting on platforms.',
      'Under the 2026 Transit Safety Ordinance, wheeled personal mobility devices—including electric skateboards, unicycles, and folding bicycles—must be powered down completely and walked within station concourses and platform zones. Passengers traveling with service animals must ensure the animals are harnessed and positioned on the train floor away from door vestibules.',
      'In the event of an emergency evacuation, do not attempt to use platform elevators. Follow the luminous green directional floor markers toward the emergency stairwells located at the northern and southern platform ends.'
    ],
    stimulus: {
      type: 'notice',
      title: 'Western Rapid Transit Authority: Official Platform Safety Notice',
      badge: 'Public Transit Safety Code 2026',
      visualTheme: 'crimson',
      metaInfo: [
        { label: 'Authority', value: 'Western Transit Operations Directorate' },
        { label: 'Applies to', value: 'All High-Speed Express Platforms' },
        { label: 'Enforcement', value: 'Transit Safety Marshals & CCTV' }
      ],
      dataPoints: [
        { label: 'Stand Clear Zone', value: 'Textured Yellow Tactile Strip' },
        { label: 'Wheeled E-Devices', value: 'Power Down & Walk Only' },
        { label: 'Evacuation Exit', value: 'North & South Stairwells (No Elevators)' }
      ],
      footerNote: 'Violators are subject to transit fines under Municipal Bylaw 44.'
    },
    questionPrompt: 'According to the notice, what must passengers with electric skateboards and folding bicycles do while in station concourses and platforms?',
    instructionsPrompt: 'Choose exactly one correct answer from the five options below.',
    options: [
      { id: 'A', label: 'A', text: 'Store them in dedicated luggage lockers on the upper concourse level.' },
      { id: 'B', label: 'B', text: 'Keep them powered down completely and walk them while inside station zones.' },
      { id: 'C', label: 'C', text: 'Register them with the security booth before entering the ticket gates.' },
      { id: 'D', label: 'D', text: 'Ride them only along the yellow tactile warning strip at moderate speeds.' },
      { id: 'E', label: 'E', text: 'Hand them to transit conductors for cargo bay placement during travel.' }
    ],
    correctAnswer: ['B'],
    evidenceText: 'wheeled personal mobility devices—including electric skateboards, unicycles, and folding bicycles—must be powered down completely and walked within station concourses and platform zones.',
    quickStrategySummary: 'Scan for "electric skateboards" and match the mandatory action verb: "must be powered down completely and walked."',
    explanation: {
      step1Understand: 'The question asks for the specific regulation governing electric skateboards and folding bikes on station property.',
      step2LocateEvidence: 'Look at paragraph 2: "wheeled personal mobility devices—including electric skateboards, unicycles, and folding bicycles—must be powered down completely and walked within station concourses and platform zones."',
      step3InterpretEvidence: 'The explicit instruction requires riders to turn off the power and walk the devices.',
      step4EliminateWeakOptions: {
        A: 'Incorrect. Lockers are not mentioned in the notice.',
        B: 'Correct. Directly matches the verbatim requirement to power them down and walk them.',
        C: 'Incorrect. There is no requirement to register with a security booth.',
        D: 'Incorrect and dangerous. The notice forbids riding, and passengers must stay behind the yellow strip.',
        E: 'Incorrect. Handing them to conductors for cargo storage is never mentioned.'
      },
      step5ConfirmAnswer: 'Option B accurately conveys the safety rule explicitly stated in paragraph 2.',
      step6QuickStrategy: 'Locate the exact noun phrase ("electric skateboards") and look for the obligation modal ("must be...").',
      step7TransferSkill: 'Notice questions test precise compliance with rules; eliminate choices that invent additional bureaucratic steps not in the text.'
    },
    narration: {
      questionOverview: 'In Question 10, identify a specific rule from a public transit safety notice.',
      readingGuide: 'Focus on paragraph 2, where rules for personal mobility devices like skateboards and bikes are explained.',
      quickStrategy: 'Scan for the phrase "powered down" to find the correct regulation immediately.',
      feedbackCorrect: 'Spot on! You identified the exact safety rule regarding personal wheeled devices.',
      feedbackIncorrect: 'Check paragraph 2 again. Look at what passengers must do with skateboards and folding bikes.',
      explanationSummary: 'The notice explicitly requires wheeled mobility devices to be powered down completely and walked.'
    }
  },

  // ==========================================
  // QUESTION 11: MCQ | Inferential Comprehension | Informative Article
  // ==========================================
  {
    id: 11,
    number: 11,
    questionType: 'mcq',
    competency: 'Inferential Comprehension',
    genre: 'Informative Article',
    difficulty: 'Medium',
    title: 'Bilingualism and the Adolescent Brain',
    passage: [
      'For decades, early pedagogical theories warned that acquiring two languages simultaneously during childhood might overload working memory and trigger speech delays. Modern neuroscience has completely dismantled this misconception. Functional neuroimaging demonstrates that managing two active linguistic systems functions like resistance training for the executive control network.',
      'When bilingual individuals prepare to speak, both language networks remain partially activated. To express a thought in one language, the brain must continuously recruit the prefrontal cortex to suppress phonological and syntactic interference from the competing language. This constant subconscious mental gymnastics fortifies cognitive flexibility, enabling bilingual adolescents to switch tasks more fluidly and ignore irrelevant auditory distractors in busy classroom settings.',
      'Interestingly, this neuroplastic adaptation does not produce higher raw vocabulary counts in either single language. Instead, its true dividend lies in metalinguistic awareness—the sophisticated ability to treat language not as an unalterable reflection of reality, but as a modular system of arbitrary symbols that can be analyzed and reshaped.'
    ],
    stimulus: {
      type: 'chart',
      title: 'Neuroimaging Study: Executive Control Activation in Monolingual vs Bilingual Teens',
      badge: 'Cognitive Neuroscience Journal 2025',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Sample', value: '320 High School Students (Ages 15–18)' },
        { label: 'Test Battery', value: 'Stroop Color-Word & Task Switching Task' },
        { label: 'Brain Region', value: 'Dorsolateral Prefrontal Cortex (DLPFC)' }
      ],
      dataPoints: [
        { label: 'Distractor Suppression Efficiency', value: '+28% Bilingual Advantage', detail: 'Faster inhibition of irrelevant stimuli' },
        { label: 'Single-Language Vocabulary Size', value: 'Equivalent Range', detail: 'No statistically significant difference in raw word counts' },
        { label: 'Metalinguistic Flexibility Score', value: '+34% Bilingual Advantage', detail: 'Superior structural pattern recognition' }
      ],
      footerNote: 'Brain and Language Institute, Cognitive Plasticity Lab.'
    },
    questionPrompt: 'What can be inferred from the second paragraph regarding why bilingual adolescents excel at filtering out classroom distractions?',
    instructionsPrompt: 'Choose exactly one correct answer from the five options below.',
    options: [
      { id: 'A', label: 'A', text: 'Their hearing organs possess superior physical auditory acuity developed from distinguishing foreign phonemes.' },
      { id: 'B', label: 'B', text: 'Their habitual suppression of competing linguistic signals strengthens general brain mechanisms for ignoring irrelevant stimuli.' },
      { id: 'C', label: 'C', text: 'They memorize entire dictionary entries in both languages to avoid making syntactic errors.' },
      { id: 'D', label: 'D', text: 'They experience lower heart rates during academic testing because they are immune to cognitive fatigue.' },
      { id: 'E', label: 'E', text: 'Their brains permanently deactivate their mother tongue whenever they enter an educational building.' }
    ],
    correctAnswer: ['B'],
    evidenceText: 'To express a thought in one language, the brain must continuously recruit the prefrontal cortex to suppress phonological and syntactic interference from the competing language. This constant subconscious mental gymnastics fortifies cognitive flexibility, enabling bilingual adolescents to switch tasks more fluidly and ignore irrelevant auditory distractors in busy classroom settings.',
    quickStrategySummary: 'Connect the brain’s continuous suppression of the competing language to its transfer effect on ignoring external classroom distractions.',
    explanation: {
      step1Understand: 'The question asks for the underlying cognitive reason why bilingual teens are better at filtering distractions.',
      step2LocateEvidence: 'Paragraph 2 explains: "the brain must continuously recruit the prefrontal cortex to suppress... interference from the competing language. This constant subconscious mental gymnastics fortifies cognitive flexibility, enabling bilingual adolescents to... ignore irrelevant auditory distractors in busy classroom settings."',
      step3InterpretEvidence: 'The daily internal mental habit of suppressing competing linguistic interference trains the executive control center to filter out unrelated external distractors.',
      step4EliminateWeakOptions: {
        A: 'Incorrect. The mechanism is neurological (prefrontal cortex), not physical hearing organ sensitivity.',
        B: 'Correct. The habitual inhibition of competing language networks strengthens general attentional filters.',
        C: 'Incorrect. The text rejects the notion of raw vocabulary memorization as the primary mechanism.',
        D: 'Incorrect. Heart rate and immunity to fatigue are never discussed.',
        E: 'Incorrect. Both languages remain partially activated; neither is permanently shut down.'
      },
      step5ConfirmAnswer: 'Option B accurately articulates the neurological transfer mechanism described in the text.',
      step6QuickStrategy: 'Look for the causal bridge: internal inhibition of language interference leads directly to external distraction filtering.',
      step7TransferSkill: 'Scientific inferences often ask you to generalize a specialized biological mechanism into its broader behavioral manifestation.'
    },
    narration: {
      questionOverview: 'Question 11 asks you to infer the neurological explanation behind bilingual attention control.',
      readingGuide: 'Focus on paragraph 2. How does suppressing one language help students ignore noise in a classroom?',
      quickStrategy: 'Link the continuous suppression of linguistic interference to the brain’s ability to filter distractions.',
      feedbackCorrect: 'Brilliant deduction! The brain’s regular practice suppressing competing words sharpens general focus.',
      feedbackIncorrect: 'Look back at paragraph 2. Notice how the prefrontal cortex is trained by constantly managing two languages.',
      explanationSummary: 'Bilingual adolescents ignore distractions better because suppressing competing language signals trains general executive focus.'
    }
  },

  // ==========================================
  // QUESTION 12: MCQ | Evaluation and Appreciation | Report Text
  // ==========================================
  {
    id: 12,
    number: 12,
    questionType: 'mcq',
    competency: 'Evaluation and Appreciation',
    genre: 'Report Text',
    difficulty: 'Challenging',
    title: 'Urban Micro-Forests and Thermal Microclimates',
    passage: [
      'As urban centers confront intensifying heat island effects, municipal planners have embraced the "Miyawaki method"—planting ultra-dense clusters of native trees on postage-stamp-sized parcels within concrete streetscapes. Advocates claim these pocket forests drop local ambient temperatures by up to four degrees Celsius within three years while accelerating biodiversity recovery.',
      'A comprehensive sensor evaluation conducted by the Urban Meteorology Network in Tokyo, however, reveals significant spatial nuances. While the interior core of a micro-forest exhibits dramatic temperature reductions and heightened humidity, thermal comfort decays exponentially beyond a five-meter radius from the perimeter canopy. Without coordinated wind corridors and continuous porous ground cover, adjacent asphalt pavement quickly absorbs radiating heat, nullifying pedestrian cooling benefits on surrounding sidewalks.',
      'The authors conclude that while pocket forests represent invaluable bio-diverse sanctuaries, deploying them as standalone silver bullets without comprehensive street-level shade canopies, reflective pavement coatings, and permeable drainage constitutes inadequate climate adaptation planning.'
    ],
    stimulus: {
      type: 'chart',
      title: 'Micro-Forest Thermal Radiance & Distance Decay Curve (Tokyo Field Audit)',
      badge: 'Urban Meteorology Audit Report',
      visualTheme: 'emerald',
      metaInfo: [
        { label: 'Evaluation Period', value: 'Summer Peak (July–August)' },
        { label: 'Sensor Spacing', value: '0m (Core), 5m, 15m, 30m Perimeter' },
        { label: 'Surrounding Matrix', value: 'Standard Dense Asphalt & Concrete' }
      ],
      dataPoints: [
        { label: 'Forest Core Cooling', value: '-3.8°C vs Ambient', detail: 'Dense multi-tiered canopy transpiration' },
        { label: 'Canopy Edge (+5m)', value: '-1.1°C vs Ambient', detail: 'Rapid dissipation of cooling effect' },
        { label: 'Sidewalk Zone (+15m)', value: '+0.2°C (Negligible)', detail: 'Asphalt radiant heat dominates' }
      ],
      footerNote: 'Source: Metropolitan Climate Resilience Consortium Technical Paper 88.'
    },
    questionPrompt: 'What is the primary vulnerability highlighted in the report regarding the deployment of micro-forests as municipal climate solutions?',
    instructionsPrompt: 'Choose exactly one correct answer from the five options below.',
    options: [
      { id: 'A', label: 'A', text: 'Micro-forests attract invasive bird species that systematically destroy native electrical infrastructure.' },
      { id: 'B', label: 'B', text: 'Their beneficial cooling effect drops off sharply just five meters away, making them ineffective as isolated solutions without wider urban cooling strategies.' },
      { id: 'C', label: 'C', text: 'Native trees grown using the Miyawaki method consume more groundwater than commercial swimming complexes.' },
      { id: 'D', label: 'D', text: 'Municipal micro-forests produce high amounts of toxic methane gas during summer monsoon seasons.' },
      { id: 'E', label: 'E', text: 'City residents universally refuse to live near pocket forests due to concerns about pollen allergies.' },
    ],
    correctAnswer: ['B'],
    evidenceText: 'thermal comfort decays exponentially beyond a five-meter radius from the perimeter canopy. Without coordinated wind corridors and continuous porous ground cover, adjacent asphalt pavement quickly absorbs radiating heat, nullifying pedestrian cooling benefits on surrounding sidewalks. The authors conclude that while pocket forests represent invaluable bio-diverse sanctuaries, deploying them as standalone silver bullets... constitutes inadequate climate adaptation planning.',
    quickStrategySummary: 'Look for the core limitation: rapid decay of cooling after 5 meters and the warning against using them as "standalone silver bullets."',
    explanation: {
      step1Understand: 'The question evaluates the main systemic limitation or critical finding reported by the meteorological audit.',
      step2LocateEvidence: 'Paragraph 2 notes that "thermal comfort decays exponentially beyond a five-meter radius," and paragraph 3 warns that "deploying them as standalone silver bullets... constitutes inadequate climate adaptation planning."',
      step3InterpretEvidence: 'The cooling effect is confined to the immediate core and edge; without complementary measures, surrounding pavement heat quickly cancels the benefits.',
      step4EliminateWeakOptions: {
        A: 'Fabricated distractor. Invasive birds damaging electrical wires are never mentioned.',
        B: 'Correct. It precisely summarizes the spatial decay beyond 5 meters and the need for integrated urban planning.',
        C: 'Unsupported. Groundwater consumption is not compared to swimming pools.',
        D: 'Absurd distractor. Methane emissions are not discussed.',
        E: 'Unsupported. Public resistance and pollen allergies are not mentioned in the report.'
      },
      step5ConfirmAnswer: 'Option B accurately represents the analytical critique presented in paragraphs 2 and 3.',
      step6QuickStrategy: 'Identify the spatial caveat ("decays exponentially beyond five meters") and match it with the author’s policy critique.',
      step7TransferSkill: 'Evaluation questions often require identifying whether an innovative solution has limited geographic or systemic scope.'
    },
    narration: {
      questionOverview: 'In Question 12, evaluate the critical findings of a meteorological report on urban micro-forests.',
      readingGuide: 'Pay attention to how far the cooling effect reaches outside the forest canopy in paragraph 2.',
      quickStrategy: 'Notice the five-meter radius threshold where cooling decays, and see how this limits standalone use.',
      feedbackCorrect: 'Superb critical evaluation! You captured the spatial limitation and policy implication.',
      feedbackIncorrect: 'Review paragraphs 2 and 3. Notice the specific distance where the cooling effect begins to disappear.',
      explanationSummary: 'The report finds that cooling decays past five meters, meaning micro-forests cannot serve as standalone climate solutions.'
    }
  },

  // ==========================================
  // QUESTION 13: MSQ | Textual Comprehension | Informative Article
  // ==========================================
  {
    id: 13,
    number: 13,
    questionType: 'msq',
    competency: 'Textual Comprehension',
    genre: 'Informative Article',
    difficulty: 'Medium',
    title: 'Extremophile Life at Hydrothermal Vents',
    passage: [
      'Miles beneath the ocean surface, where sunlight cannot penetrate and hydrostatic pressures reach hundreds of atmospheres, hydrothermal vents support thriving, alien-like ecosystems. These deep-sea fissures spew superheated mineral-rich fluids exceeding three hundred and fifty degrees Celsius directly into freezing abyssal water.',
      'Unlike terrestrial ecosystems that derive baseline energy from solar photosynthesis, hydrothermal vent communities depend entirely on chemosynthesis. Chemosynthetic bacteria oxidize toxic hydrogen sulfide dissolved in the geothermal fluids, synthesizing organic glucose compounds that form the bedrock of the food web.',
      'Among the most iconic residents are giant tube worms (Riftia pachyptila), which can grow up to two meters in length. These creatures possess neither a mouth nor a digestive gut. Instead, they host trillions of symbiotic bacteria within a specialized vascularized organ called a trophosome. In exchange for housing and circulating hydrogen sulfide, the bacteria provide complete cellular nourishment to their host worm.'
    ],
    stimulus: {
      type: 'diagram',
      title: 'Abyssal Hydrothermal Ecosystem: Energy Flow & Symbiotic Anatomy',
      badge: 'Deep-Ocean Biology Review',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Habitat Depth', value: '2,500m Abyssal Plain' },
        { label: 'Fluid Temperature', value: '350°C+ Mineral Effluent' },
        { label: 'Key Symbiont', value: 'Riftia pachyptila (Tube Worm)' }
      ],
      dataPoints: [
        { label: 'Energy Basis', value: 'Chemosynthesis (No Sunlight)' },
        { label: 'Primary Chemical Substrate', value: 'Hydrogen Sulfide (H₂S)' },
        { label: 'Specialized Organ', value: 'Trophosome Bacterial Chamber' }
      ],
      footerNote: 'Source: Oceanographic Deep-Submergence Laboratory Records.'
    },
    questionPrompt: 'Based on the passage, which of the following biological facts about giant tube worms and vent ecosystems are explicitly confirmed? (Select ALL correct options)',
    instructionsPrompt: 'Multiple-Select Question: Select at least two correct options (A, B, C, D). Not all options are correct.',
    options: [
      { id: 'A', label: 'A', text: 'Giant tube worms lack both a mouth and a conventional digestive tract.' },
      { id: 'B', label: 'B', text: 'Chemosynthetic bacteria synthesize food by oxidizing toxic hydrogen sulfide.' },
      { id: 'C', label: 'C', text: 'Giant tube worms hunt deep-sea crabs by emitting bioluminescent flashes.' },
      { id: 'D', label: 'D', text: 'Symbiotic bacteria reside inside a specialized vascularized organ called a trophosome.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    evidenceText: 'Chemosynthetic bacteria oxidize toxic hydrogen sulfide... These creatures possess neither a mouth nor a digestive gut. Instead, they host trillions of symbiotic bacteria within a specialized vascularized organ called a trophosome.',
    quickStrategySummary: 'Verify each anatomical and biochemical statement against paragraphs 2 and 3. Cross out the hunting claim in C.',
    explanation: {
      step1Understand: 'This MSQ requires identifying all factual statements regarding hydrothermal vent biology explicitly verified by the text.',
      step2LocateEvidence: 'Paragraph 2 explicitly mentions bacteria oxidizing hydrogen sulfide (B). Paragraph 3 states tube worms lack a mouth and gut (A) and host bacteria in a trophosome (D).',
      step3InterpretEvidence: 'Options A, B, and D are direct factual statements. Option C is a total fabrication; tube worms have no mouth and do not hunt crabs.',
      step4EliminateWeakOptions: {
        A: 'Correct. Directly stated: "These creatures possess neither a mouth nor a digestive gut."',
        B: 'Correct. Directly stated: "Chemosynthetic bacteria oxidize toxic hydrogen sulfide... synthesizing organic glucose."',
        C: 'Incorrect. Tube worms do not hunt; they are stationary and nourished entirely by internal symbionts.',
        D: 'Correct. Directly stated: "host trillions of symbiotic bacteria within a specialized vascularized organ called a trophosome."'
      },
      step5ConfirmAnswer: 'Options A, B, and D are explicitly confirmed by the passage, while C contradicts the anatomical description.',
      step6QuickStrategy: 'When testing biological facts, check anatomical features carefully; if a creature lacks a mouth, it cannot be a predator that hunts crabs.',
      step7TransferSkill: 'In descriptive scientific texts, match specialized terminology (chemosynthesis, trophosome) directly with their functional definitions.'
    },
    narration: {
      questionOverview: 'Question 13 is a Multiple-Select Question regarding deep-sea hydrothermal vent biology.',
      readingGuide: 'Review paragraphs 2 and 3 for the unique anatomy and diet of the giant tube worm.',
      quickStrategy: 'Notice that tube worms do not have mouths, which immediately disproves option C.',
      feedbackCorrect: 'Great scientific literacy! You picked the three true biological facts stated in the text.',
      feedbackIncorrect: 'Look back at paragraphs 2 and 3. Check the anatomy of the tube worm and the function of the trophosome.',
      explanationSummary: 'The text confirms tube worms lack a mouth and gut, rely on bacteria in their trophosome, and use hydrogen sulfide.'
    }
  },

  // ==========================================
  // QUESTION 14: MSQ | Inferential Comprehension | Descriptive Text
  // ==========================================
  {
    id: 14,
    number: 14,
    questionType: 'msq',
    competency: 'Inferential Comprehension',
    genre: 'Descriptive Text',
    difficulty: 'Challenging',
    title: 'The Alchemy of Royal Javanese Indigo Batik',
    passage: [
      'In the quiet royal workshops of Surakarta and Yogyakarta, creating authentic batik pesisir and keraton is an exercise in patient chemistry. While modern textile factories churn out printed synthetic fabrics in minutes, master batik artisans rely on a fermentation vat of Indigofera tinctoria leaves that can take weeks to mature.',
      'Because natural indigo is insoluble in water, artisans must ferment the crushed foliage in large clay earthenware pots with slaked lime and palm sugar. The microbial fermentation reduces the blue dye into an unassuming, translucent yellow-green liquid known as "leuco-indigo." When the wax-canting-patterned cotton cloth is immersed into the vat, it emerges not blue, but a pale chartreuse.',
      'Only when the wet fabric is laid out in the open tropical air does the magic reveal itself. Contact with atmospheric oxygen oxidizes the absorbed molecules, turning the fiber from chartreuse to turquoise, and finally to deep, indomitable royal indigo. Each successive immersion and exposure cycle deepens the hue, binding the pigment physically into the cotton cellulose so resiliently that garments retain their luster for generations.'
    ],
    stimulus: {
      type: 'infographic',
      title: 'Traditional Indigo Vat Chemistry: Leuco-Reduction & Oxidation Cycle',
      badge: 'Indonesian Heritage Craft Review',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Craft Origin', value: 'Surakarta & Yogyakarta Royal Guilds' },
        { label: 'Botanical Source', value: 'Indigofera tinctoria Leaf Foliage' },
        { label: 'Medium', value: 'Hand-Woven Primissima Cotton Fabric' }
      ],
      dataPoints: [
        { label: 'Fermentation Reagents', value: 'Slaked Lime + Palm Sugar', detail: 'Biological reduction to leuco-state' },
        { label: 'Color Inside Vat', value: 'Translucent Yellow-Green', detail: 'Insoluble dye converted to water-soluble' },
        { label: 'Color After Air Exposure', value: 'Royal Indigo Blue', detail: 'Atmospheric oxygen triggers final binding' }
      ],
      footerNote: 'Source: National Heritage Craft & Natural Dye Research Council.'
    },
    questionPrompt: 'What can be logically inferred about the traditional Javanese indigo batik dyeing process? (Select ALL correct options)',
    instructionsPrompt: 'Multiple-Select Question: Select at least two correct options (A, B, C, D). Not all options are correct.',
    options: [
      { id: 'A', label: 'A', text: 'Atmospheric oxygen is an indispensable chemical agent in developing the signature indigo color.' },
      { id: 'B', label: 'B', text: 'Batik artisans add synthetic chemical bleach directly into the earthenware vats to speed up drying.' },
      { id: 'C', label: 'C', text: 'The color of the fabric right upon leaving the dye vat is noticeably different from its final cured color.' },
      { id: 'D', label: 'D', text: 'Achieving deep royal blue requires repeating the dipping and air-exposure cycle multiple times.' }
    ],
    correctAnswer: ['A', 'C', 'D'],
    evidenceText: 'Only when the wet fabric is laid out in the open tropical air does the magic reveal itself. Contact with atmospheric oxygen oxidizes the absorbed molecules, turning the fiber from chartreuse to turquoise, and finally to deep, indomitable royal indigo. Each successive immersion and exposure cycle deepens the hue...',
    quickStrategySummary: 'Notice: (1) oxygen turns chartreuse to blue, (2) initial vat color is yellow-green, not blue, (3) repeated cycles deepen the hue.',
    explanation: {
      step1Understand: 'The question asks for valid logical inferences regarding the natural dyeing and oxidation process.',
      step2LocateEvidence: 'Paragraphs 2 and 3 explain that the cloth emerges chartreuse (yellow-green), atmospheric oxygen oxidizes the dye into blue (A and C), and repeated immersion/exposure cycles deepen the color (D).',
      step3InterpretEvidence: 'A is supported because oxygen triggers the color change. C is supported because it leaves the vat pale chartreuse and cures to deep indigo. D is supported by "each successive immersion and exposure cycle deepens the hue." B is contradicted because traditional artisans avoid synthetic chemicals.',
      step4EliminateWeakOptions: {
        A: 'Correct. The text notes oxidation from atmospheric oxygen is necessary to transform the dye into royal indigo.',
        B: 'Incorrect. The passage contrasts this heritage craft with synthetic factory methods; no synthetic bleach is used.',
        C: 'Correct. The fabric emerges pale chartreuse from the vat before turning deep blue in the air.',
        D: 'Correct. The text notes "each successive immersion and exposure cycle deepens the hue."'
      },
      step5ConfirmAnswer: 'Options A, C, and D are valid deductive inferences firmly rooted in the technical description.',
      step6QuickStrategy: 'Look for contrast in color states (chartreuse vs royal blue) and dependencies on external factors (oxygen, repeated cycles).',
      step7TransferSkill: 'In descriptive procedural passages, trace transformations across stages: input -> intermediate state -> catalyst -> final product.'
    },
    narration: {
      questionOverview: 'Question 14 is a Multiple-Select Question examining the natural chemistry of Javanese indigo batik.',
      readingGuide: 'Trace the color changes described in paragraphs 2 and 3 from the vat into the open air.',
      quickStrategy: 'Observe how the dye turns from pale yellow-green to blue only after touching atmospheric oxygen.',
      feedbackCorrect: 'Magnificent deduction! You followed the chemical metamorphosis from vat to open air accurately.',
      feedbackIncorrect: 'Review paragraphs 2 and 3. Pay special attention to the role of oxygen and the multiple dipping cycles.',
      explanationSummary: 'The text infers that oxygen is essential, the initial color differs from the final shade, and repeated dips deepen the blue.'
    }
  },

  // ==========================================
  // QUESTION 15: MSQ | Evaluation and Appreciation | Recount Text
  // ==========================================
  {
    id: 15,
    number: 15,
    questionType: 'msq',
    competency: 'Evaluation and Appreciation',
    genre: 'Recount Text',
    difficulty: 'Medium',
    title: 'Transforming Waste in Desa Sukamaju',
    passage: [
      'When our environmental student chapter arrived at Desa Sukamaju eighteen months ago, an open burning pit on the edge of the rice fields was belching acrid plastic smoke daily. Previous governmental awareness posters had been largely ignored by residents because disposal alternatives were nonexistent.',
      'Our team initiated a pragmatic two-pronged approach. First, we collaborated with the village cooperative to establish a decentralized waste sorting depot, offering households points exchangeable for subsidized cooking oil and organic fertilizer in return for segregated dry recyclables. Second, we trained local youth to operate high-efficiency black soldier fly (BSF) larvae composting bins for kitchen scraps.',
      'Within ten months, open burning ceased entirely, and the village diverted over thirty-five metric tons of organic waste into protein-rich poultry feed. However, community leader Pak Budi candidly reminded us during the closing evaluation: "The project worked because it solved household economic needs through fair incentives, not because outsiders gave theoretical lectures on climate change."'
    ],
    stimulus: {
      type: 'report_card',
      title: 'Desa Sukamaju Community Waste Diversion Impact Audit',
      badge: 'Rural Sustainability Field Project',
      visualTheme: 'emerald',
      metaInfo: [
        { label: 'Location', value: 'Desa Sukamaju, West Java' },
        { label: 'Duration', value: '18-Month Longitudinal Pilot' },
        { label: 'Implementing Agency', value: 'University Student Environmental Chapter' }
      ],
      dataPoints: [
        { label: 'Open Burning Incidents', value: '0 per Month (Eliminated)', detail: 'Previous average: Daily open burning' },
        { label: 'Diverted Organic Waste', value: '35.4 Metric Tons', detail: 'Processed via Black Soldier Fly bio-bins' },
        { label: 'Cooperative Incentive', value: 'Subsidized Cooking Oil & Feed', detail: 'Direct household economic benefit' }
      ],
      footerNote: 'Joint Community-Academic Annual Review Board.'
    },
    questionPrompt: 'Based on the recount and Pak Budi’s evaluation, which factors contributed directly to the sustained success of the village waste initiative? (Select ALL correct options)',
    instructionsPrompt: 'Multiple-Select Question: Select at least two correct options (A, B, C, D). Not all options are correct.',
    options: [
      { id: 'A', label: 'A', text: 'Aligning waste segregation with tangible household economic rewards like subsidized cooking oil.' },
      { id: 'B', label: 'B', text: 'Imposing severe police imprisonment fines on any villagers caught burning plastic.' },
      { id: 'C', label: 'C', text: 'Implementing a functional biological solution that turned organic food waste into valuable poultry feed.' },
      { id: 'D', label: 'D', text: 'Relying exclusively on academic classroom lectures rather than participatory community infrastructure.' }
    ],
    correctAnswer: ['A', 'C'],
    evidenceText: 'offering households points exchangeable for subsidized cooking oil and organic fertilizer in return for segregated dry recyclables... trained local youth to operate high-efficiency black soldier fly (BSF) larvae composting bins... diverted over thirty-five metric tons of organic waste into protein-rich poultry feed... "The project worked because it solved household economic needs through fair incentives, not because outsiders gave theoretical lectures..."',
    quickStrategySummary: 'Identify the two positive practical actions in paragraph 2 and Pak Budi’s quote praising practical economic incentives over lectures.',
    explanation: {
      step1Understand: 'The question evaluates the genuine underlying success factors of the community project described in the recount.',
      step2LocateEvidence: 'Paragraph 2 highlights household incentives (cooking oil points) and BSF larvae turning waste into animal feed. Paragraph 3 quotes Pak Budi emphasizing economic incentives rather than lectures.',
      step3InterpretEvidence: 'Success was driven by practical economic rewards (A) and biological waste upcycling (C). B is false (no police or prison fines), and D is contradicted (Pak Budi explicitly condemned theoretical lectures).',
      step4EliminateWeakOptions: {
        A: 'Correct. Villagers received points for cooking oil, fulfilling direct household economic needs.',
        B: 'Incorrect. The text never mentions police arrests or penal imprisonment.',
        C: 'Correct. Composting with black soldier fly larvae created nutritious poultry feed from organic waste.',
        D: 'Incorrect. The text explicitly states theoretical lectures were avoided in favor of practical solutions.'
      },
      step5ConfirmAnswer: 'Options A and C represent the core drivers of success celebrated by both the recount and community feedback.',
      step6QuickStrategy: 'Look at the speaker’s own reflection: practical incentives worked, whereas theoretical lectures had previously failed.',
      step7TransferSkill: 'In evaluation items, distinguish between punitive external measures and community-based incentive mechanisms.'
    },
    narration: {
      questionOverview: 'In Question 15, evaluate the real drivers of success in a rural community waste project.',
      readingGuide: 'Notice what Pak Budi says at the end of paragraph 3 about why the villagers actually participated.',
      quickStrategy: 'Select the options that provide practical rewards and working bio-solutions, not punishment or lectures.',
      feedbackCorrect: 'Spot on! You evaluated the real sociological and practical factors behind the project’s success.',
      feedbackIncorrect: 'Reread paragraphs 2 and 3. What concrete benefits did the villagers gain from participating?',
      explanationSummary: 'Success stemmed from tangible economic incentives like cooking oil and converting food waste to animal feed.'
    }
  },

  // ==========================================
  // QUESTION 16: TFNG | Textual Comprehension | Announcement
  // ==========================================
  {
    id: 16,
    number: 16,
    questionType: 'tfng',
    competency: 'Textual Comprehension',
    genre: 'Announcement',
    difficulty: 'Easy',
    title: 'National Vocational Skills Olympiad: Renewable Energy Track',
    passage: [
      'The National Directorate of Vocational Education is pleased to open registration for the 2026 National Vocational Skills Olympiad (NVSO) under the newly inaugurated Renewable Energy Systems track.',
      'Contestants will be challenged in three intensive practical modules: Microgrid Photovoltaic Inverter Synchronization, Wind Turbine Pitch Control Calibration, and Lithium Battery Energy Storage Thermal Balancing. Each vocational secondary school (SMK/MAK) may register a maximum of two student delegates, both of whom must be currently enrolled in Grade 11 or Grade 12 electrical or mechanical engineering programs.',
      'Preliminary regional screenings will occur virtually via timed simulation software on May 8, 2026. The top twelve regional qualifiers will receive an all-expenses-paid trip to the National Training Center in Bandung for the live hands-on championship in July.'
    ],
    stimulus: {
      type: 'notice',
      title: 'NVSO 2026: Official Renewable Energy Division Call for Entries',
      badge: 'Ministry of Education Vocational Directorate',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Event', value: 'National Vocational Skills Olympiad 2026' },
        { label: 'Discipline', value: 'Renewable Energy Systems Track' },
        { label: 'Finals Venue', value: 'National Vocational Training Center, Bandung' }
      ],
      dataPoints: [
        { label: 'Delegation Cap', value: 'Max 2 Students per School' },
        { label: 'Eligible Grades', value: 'Grade 11 & Grade 12 Enrolled Only' },
        { label: 'Preliminary Format', value: 'Virtual Software Simulation (May 8)' }
      ],
      footerNote: 'Endorsed by the Indonesian Association of Solar Energy Technicians.'
    },
    questionPrompt: 'Statement: "Each vocational secondary school is allowed to send up to four student delegates to compete in the renewable energy track."',
    instructionsPrompt: 'Determine whether the statement is TRUE, FALSE, or NOT GIVEN based strictly on the passage.',
    options: [
      { id: 'True', label: 'True', text: 'True — The statement agrees with the information in the passage.' },
      { id: 'False', label: 'False', text: 'False — The statement contradicts the information in the passage.' },
      { id: 'Not Given', label: 'Not Given', text: 'Not Given — There is no information on this in the passage.' }
    ],
    correctAnswer: ['False'],
    evidenceText: 'Each vocational secondary school (SMK/MAK) may register a maximum of two student delegates, both of whom must be currently enrolled in Grade 11 or Grade 12 electrical or mechanical engineering programs.',
    quickStrategySummary: 'Compare the number in the statement ("four student delegates") against the explicit cap in the text ("maximum of two student delegates").',
    explanation: {
      step1Understand: 'The question asks whether the quota of student competitors per school is four.',
      step2LocateEvidence: 'Look at paragraph 2, second sentence: "Each vocational secondary school (SMK/MAK) may register a maximum of two student delegates..."',
      step3InterpretEvidence: 'The text limits the delegation to a maximum of two students, which directly contradicts the claim of four delegates.',
      step4EliminateWeakOptions: {
        True: 'Incorrect. The statement claims four delegates are allowed, which violates the stated rule.',
        False: 'Correct. The text explicitly limits schools to two student delegates, contradicting the statement directly.',
        'Not Given': 'Incorrect. The exact delegate cap is clearly stated in paragraph 2.'
      },
      step5ConfirmAnswer: 'The statement directly contradicts the explicit numerical quota in the text; therefore, the answer is FALSE.',
      step6QuickStrategy: 'Always match numerical limits and caps verbatim. When the prompt says four and the text says two, it is False.',
      step7TransferSkill: 'In announcements and regulations, quota discrepancies are definite factual contradictions.'
    },
    narration: {
      questionOverview: 'Question 16 is a True/False/Not Given item concerning competition registration rules.',
      readingGuide: 'Check paragraph 2 for the maximum number of student delegates a single school can register.',
      quickStrategy: 'Compare the number in the statement, four, with the exact number stated in the text.',
      feedbackCorrect: 'Spot on! The text clearly limits registration to two students, not four.',
      feedbackIncorrect: 'Look back at paragraph 2. Notice the phrase: "a maximum of two student delegates."',
      explanationSummary: 'The statement is False because the official announcement allows a maximum of two student delegates per school.'
    }
  },

  // ==========================================
  // QUESTION 17: TFNG | Inferential Comprehension | Narrative Text
  // ==========================================
  {
    id: 17,
    number: 17,
    questionType: 'tfng',
    competency: 'Inferential Comprehension',
    genre: 'Narrative Text',
    difficulty: 'Medium',
    title: 'A Beacon on the Solway Coast',
    passage: [
      'Gale-force winds whipped salt spray against the thick granite tower of the Solway Firth lighthouse. Callum stood at the observation ledge, wiping condensation from the brass barometer with his sleeve. The mercury had plunged lower than he had ever witnessed in his thirty years of coastal vigilance.',
      'Below in the breakers, the distress flare of an inbound timber schooner sputtered through the fog. Callum knew the automated halogen lamp had tripped its primary circuit breaker twenty minutes earlier. The reserve emergency generator was purring in the basement, but its transfer switch was mechanically jammed behind the flooded maintenance corridor.',
      'He had two choices: stay at the radio console and continue transmitting distress coordinates that harbor tugs in Whitehaven could not possibly reach in time, or descend into waist-deep icy seawater to physically wrench open the rusted manual override lever. Without hesitation, Callum grabbed his brass hand lantern and heavy steel wrench, leaving the crackling radio receiver behind him.'
    ],
    stimulus: {
      type: 'log',
      title: 'Solway Firth Lighthouse Logbook: Storm Event Alpha',
      badge: 'Maritime Heritage Station Archive',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Station', value: 'Solway Firth High Light (Built 1892)' },
        { label: 'Keeper on Watch', value: 'Callum MacLeod (Senior Keeper)' },
        { label: 'Barometric Reading', value: '962 hPa (Severe Cyclone Warning)' }
      ],
      dataPoints: [
        { label: 'Primary Beacon', value: 'Offline (Circuit Breaker Tripped)' },
        { label: 'Tug Response Time', value: 'Minimum 3 Hours (Impractical)' },
        { label: 'Action Taken', value: 'Manual Entry to Flooded Vault' }
      ],
      footerNote: 'Maritime Safety Board Historical Records.'
    },
    questionPrompt: 'Statement: "Callum decided to enter the flooded basement because he realized that radio calls alone would not save the distressed timber schooner in time."',
    instructionsPrompt: 'Determine whether the statement is TRUE, FALSE, or NOT GIVEN based strictly on the passage.',
    options: [
      { id: 'True', label: 'True', text: 'True — The statement agrees with the information in the passage.' },
      { id: 'False', label: 'False', text: 'False — The statement contradicts the information in the passage.' },
      { id: 'Not Given', label: 'Not Given', text: 'Not Given — There is no information on this in the passage.' }
    ],
    correctAnswer: ['True'],
    evidenceText: 'He had two choices: stay at the radio console and continue transmitting distress coordinates that harbor tugs in Whitehaven could not possibly reach in time, or descend into waist-deep icy seawater to physically wrench open the rusted manual override lever. Without hesitation, Callum grabbed his brass hand lantern and heavy steel wrench, leaving the crackling radio receiver behind him.',
    quickStrategySummary: 'Connect Callum’s reasoning: radio coordinates could not bring tugs in time, prompting his immediate physical action.',
    explanation: {
      step1Understand: 'The question evaluates the underlying motive behind Callum’s decision to leave the radio and enter the flooded basement.',
      step2LocateEvidence: 'Look at paragraph 3: "harbor tugs in Whitehaven could not possibly reach in time... Without hesitation, Callum grabbed his brass hand lantern and heavy steel wrench, leaving the crackling radio receiver behind him."',
      step3InterpretEvidence: 'Callum recognized the futility of remaining at the radio since rescue tugs could not arrive in time, compelling him to personally risk descending into the flooded vault to restart the light.',
      step4EliminateWeakOptions: {
        True: 'Correct. The text explicitly links his choice to the realization that tugs could not reach the ship in time.',
        False: 'Incorrect. The statement agrees with the narrative’s explanation of his decision.',
        'Not Given': 'Incorrect. His motivation and the situation are clearly detailed in paragraph 3.'
      },
      step5ConfirmAnswer: 'The statement agrees with the logical reasoning and textual evidence; therefore, it is TRUE.',
      step6QuickStrategy: 'Look for character deliberation: when a character weighs option A (futile) against option B (risky but necessary), verify the motive.',
      step7TransferSkill: 'In narrative reasoning, deduce motivations by observing which alternative the character rejects and why.'
    },
    narration: {
      questionOverview: 'Question 17 tests your understanding of a lighthouse keeper’s critical choice during a storm.',
      readingGuide: 'Read paragraph 3 carefully to understand why Callum abandoned the radio console.',
      quickStrategy: 'Notice that rescue tugs could not arrive in time, making physical repair his only viable choice.',
      feedbackCorrect: 'Excellent reading! You accurately understood Callum’s heroic motivation.',
      feedbackIncorrect: 'Reread paragraph 3. Notice why Callum knew staying at the radio would not save the ship.',
      explanationSummary: 'The statement is True because the text shows Callum knew tugs could not arrive in time via radio dispatch.'
    }
  },

  // ==========================================
  // QUESTION 18: TFNG | Evaluation and Appreciation | Informative Article
  // ==========================================
  {
    id: 18,
    number: 18,
    questionType: 'tfng',
    competency: 'Evaluation and Appreciation',
    genre: 'Informative Article',
    difficulty: 'Challenging',
    title: 'Atmospheric Microplastics on Alpine Glaciers',
    passage: [
      'Glaciologists sampling snowpack cores on remote peaks in the French Alps and the Himalayas have discovered staggering concentrations of microplastic polymers, averaging over three hundred particles per square meter daily. These synthetic fragments—predominantly polyester fibers from clothing and tire wear particulates—travel thousands of kilometers via high-altitude tropospheric jet streams.',
      'Beyond chemical contamination, atmospheric microplastics accelerate cryospheric melting through albedo reduction. When dark microplastic filaments settle onto pristine white snowpack, they decrease surface reflectivity, causing the snow to absorb substantially more incoming solar radiation and melting surrounding firn layers up to fifteen percent faster.',
      'Climate scientists emphasize that standard local bans on single-use shopping bags are utterly toothless against this airborne vector. Because atmospheric transport bypasses national borders and topographical barriers, nothing short of coordinated global agreements targeting synthetic textile manufacturing and industrial tire abrasion can protect vulnerable mountain glaciers.'
    ],
    stimulus: {
      type: 'chart',
      title: 'High-Altitude Glacier Albedo Reduction & Microplastic Deposition Audit',
      badge: 'Alpine Cryosphere Research 2025',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Sampling Elevation', value: '3,800m – 4,500m ASL' },
        { label: 'Target Sites', value: 'Mont Blanc Massif & Annapurna' },
        { label: 'Deposition Rate', value: '312 particles / m² / day' }
      ],
      dataPoints: [
        { label: 'Primary Particle Origin', value: 'Synthetic Textiles (Polyester) & Tires' },
        { label: 'Albedo Reduction Impact', value: '-8.5% Surface Reflectance' },
        { label: 'Melt Acceleration Rate', value: '+15% Seasonal Firn Loss' }
      ],
      footerNote: 'Source: World Meteorological Organization Cryospheric Bulletin.'
    },
    questionPrompt: 'Statement: "The author argues that municipal bans on single-use plastic bags in alpine towns are sufficient to safeguard mountain glaciers from microplastic melt acceleration."',
    instructionsPrompt: 'Determine whether the statement is TRUE, FALSE, or NOT GIVEN based strictly on the passage.',
    options: [
      { id: 'True', label: 'True', text: 'True — The statement agrees with the information in the passage.' },
      { id: 'False', label: 'False', text: 'False — The statement contradicts the information in the passage.' },
      { id: 'Not Given', label: 'Not Given', text: 'Not Given — There is no information on this in the passage.' }
    ],
    correctAnswer: ['False'],
    evidenceText: 'Climate scientists emphasize that standard local bans on single-use shopping bags are utterly toothless against this airborne vector. Because atmospheric transport bypasses national borders and topographical barriers, nothing short of coordinated global agreements targeting synthetic textile manufacturing and industrial tire abrasion can protect vulnerable mountain glaciers.',
    quickStrategySummary: 'Contrast "sufficient to safeguard" in the statement with "utterly toothless" in the passage.',
    explanation: {
      step1Understand: 'The question evaluates whether local plastic bag bans are judged sufficient to protect alpine glaciers.',
      step2LocateEvidence: 'Look at paragraph 3: "standard local bans on single-use shopping bags are utterly toothless against this airborne vector... nothing short of coordinated global agreements... can protect vulnerable mountain glaciers."',
      step3InterpretEvidence: 'The author explicitly states that local bag bans are completely ineffective ("utterly toothless") because the pollutants originate from distant synthetic textiles and tire dust carried across borders.',
      step4EliminateWeakOptions: {
        True: 'Incorrect. The statement claims local bans are sufficient, which is the exact opposite of what the author argues.',
        False: 'Correct. The statement directly contradicts the author’s explicit argument that local bag bans are "utterly toothless."',
        'Not Given': 'Incorrect. The author’s evaluation of local bans is explicitly stated and forcefully argued.'
      },
      step5ConfirmAnswer: 'The statement directly contradicts the author’s explicit evaluation; therefore, the answer is FALSE.',
      step6QuickStrategy: 'Look for the author’s evaluative adjective: "utterly toothless" directly refutes "sufficient."',
      step7TransferSkill: 'In evaluation items, pay close attention to idioms and metaphors like "toothless" or "silver bullet" that express strong critique.'
    },
    narration: {
      questionOverview: 'In Question 18, evaluate the author’s stance on policy measures against glacier microplastics.',
      readingGuide: 'Focus on paragraph 3. What exact phrase does the author use to describe local plastic bag bans?',
      quickStrategy: 'Notice the phrase "utterly toothless," which means completely ineffective. This contradicts the statement.',
      feedbackCorrect: 'Superb critical reading! The author considers local bans completely ineffective, making the statement False.',
      feedbackIncorrect: 'Look closely at paragraph 3. The author states that local bans are "utterly toothless."',
      explanationSummary: 'The statement is False because the author explicitly argues that local bag bans are utterly toothless.'
    }
  },

  // ==========================================
  // QUESTION 19: MCQ | Textual Comprehension | Procedure Text
  // ==========================================
  {
    id: 19,
    number: 19,
    questionType: 'mcq',
    competency: 'Textual Comprehension',
    genre: 'Procedure Text',
    difficulty: 'Medium',
    title: 'Aseptic In Vitro Plant Tissue Culturing Protocol',
    passage: [
      'In secondary vocational biotechnology labs, establishing sterile plant explants for micropropagation requires strict adherence to aseptic protocols. Working within a laminar airflow cabinet with HEPA filtration prevents opportunistic airborne fungal spores from colonizing nutrient agar media.',
      'Prior to cutting nodal shoot explants, operators must sanitize all metal dissection instruments by dipping them into seventy-percent ethanol followed by flaming over a spirit burner for five seconds. After flaming, tools must rest upon a sterile ceramic rack for at least twenty seconds to cool. Introducing hot instruments directly into biological tissue causes immediate thermal shock, destroying cellular cambium integrity.',
      'Explants must undergo surface sterilization in a five-percent sodium hypochlorite solution containing two drops of Tween-20 surfactant for precisely eight minutes under gentle agitation, followed by three successive rinses with sterile deionized water before plating onto Murashige and Skoog (MS) growth media.'
    ],
    stimulus: {
      type: 'diagram',
      title: 'Biotech Lab Protocol: Aseptic Explant Preparation & Sterilization',
      badge: 'Vocational Biotech Lab Standard',
      visualTheme: 'emerald',
      metaInfo: [
        { label: 'Environment', value: 'Laminar Airflow Hood (Class 100)' },
        { label: 'Medium', value: 'Murashige & Skoog (MS) + Sucrose' },
        { label: 'Safety Officer', value: 'Biotechnology Lab Instructor' }
      ],
      dataPoints: [
        { label: 'Tool Disinfection', value: '70% Ethanol + 5s Flame Sterilize' },
        { label: 'Cooling Requirement', value: '20s on Ceramic Rack (Mandatory)' },
        { label: 'Surface Disinfection', value: '5% NaOCl + 8 min Agitation' }
      ],
      footerNote: 'All cultures must be incubated at 25°C under 16h photoperiod.'
    },
    questionPrompt: 'According to the procedure, what critical consequence occurs if an operator touches biological plant tissue with instruments immediately after flame sterilization without cooling them?',
    instructionsPrompt: 'Choose exactly one correct answer from the five options below.',
    options: [
      { id: 'A', label: 'A', text: 'The laminar airflow filter will become permanently clogged with carbon soot.' },
      { id: 'B', label: 'B', text: 'The nutrient agar will immediately solidify into an insoluble crystalline polymer.' },
      { id: 'C', label: 'C', text: 'The biological tissue suffers thermal shock, destroying cellular cambium integrity.' },
      { id: 'D', label: 'D', text: 'The sodium hypochlorite solution will rapidly evaporate and ignite an open laboratory flame.' },
      { id: 'E', label: 'E', text: 'The plant explant will accelerate its growth rate by three hundred percent within hours.' }
    ],
    correctAnswer: ['C'],
    evidenceText: 'After flaming, tools must rest upon a sterile ceramic rack for at least twenty seconds to cool. Introducing hot instruments directly into biological tissue causes immediate thermal shock, destroying cellular cambium integrity.',
    quickStrategySummary: 'Scan for "hot instruments" or "cooling" and read the causal sentence directly following it.',
    explanation: {
      step1Understand: 'The question asks for the specific biological damage caused by failing to let hot flamed tools cool down.',
      step2LocateEvidence: 'Look at paragraph 2, final sentence: "Introducing hot instruments directly into biological tissue causes immediate thermal shock, destroying cellular cambium integrity."',
      step3InterpretEvidence: 'The explicit consequence is cellular thermal shock and the destruction of the delicate cambium tissue.',
      step4EliminateWeakOptions: {
        A: 'Incorrect. The HEPA filter is unaffected by touching plant tissue.',
        B: 'Incorrect. Agar crystallization is not mentioned.',
        C: 'Correct. Directly matches the text: immediate thermal shock destroying cambium integrity.',
        D: 'Incorrect. Bleach evaporation or fire hazards are not caused by touching the explant.',
        E: 'Incorrect and contrary. Burning tissue destroys cells rather than accelerating growth.'
      },
      step5ConfirmAnswer: 'Option C is verified verbatim by the textual evidence in paragraph 2.',
      step6QuickStrategy: 'Identify the cause-and-effect relationship: hot tools -> thermal shock -> destroyed cambium.',
      step7TransferSkill: 'In procedural texts, look for sentences explaining the scientific rationale behind mandatory pauses or cooling steps.'
    },
    narration: {
      questionOverview: 'In Question 19, identify the consequence of skipping a cooling step in a biotechnology procedure.',
      readingGuide: 'Focus on paragraph 2. Why must operators wait twenty seconds after flaming their tools?',
      quickStrategy: 'Find the phrase "thermal shock" to pinpoint the correct biological outcome immediately.',
      feedbackCorrect: 'Excellent precision! You identified the exact biological consequence of using uncooled instruments.',
      feedbackIncorrect: 'Look back at paragraph 2. Notice what happens to the cells if hot tools touch the plant.',
      explanationSummary: 'The text states that using uncooled instruments causes immediate thermal shock, destroying cellular cambium.'
    }
  },

  // ==========================================
  // QUESTION 20: MCQ | Inferential Comprehension | Advertisement
  // ==========================================
  {
    id: 20,
    number: 20,
    questionType: 'mcq',
    competency: 'Inferential Comprehension',
    genre: 'Advertisement',
    difficulty: 'Medium',
    title: 'AeroGlide Sustainable Aviation Academy',
    passage: [
      'The global airline industry faces an unprecedented dual mandate: train two hundred and fifty thousand new commercial pilots by 2035 while aggressively decarbonizing training operations. Enter AeroGlide Academy—the premier flight training institution operating an all-electric training fleet.',
      'Our state-of-the-art Pipistrel Velis Electro aircraft produce zero direct flight emissions and operate at a whisper-quiet sixty decibels, allowing cadets to conduct evening circuit patterns without triggering municipal airport noise curfew restrictions. Moreover, our full-motion Level D VR simulators replicate complex weather anomalies and engine emergencies with tactile realism.',
      'By transitioning from expensive aviation gasoline to clean grid electrification, AeroGlide slashes pilot cadet tuition costs by thirty-five percent compared to legacy flight schools, while logging certified flight hours fully accredited by the International Civil Aviation Organization (ICAO).'
    ],
    stimulus: {
      type: 'brochure',
      title: 'AeroGlide Academy Cadet Prospectus 2026/2027',
      badge: 'ICAO-Accredited Aviation Training',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Campus', value: 'Subang SkyPark & West Java Airfield' },
        { label: 'Primary Trainer', value: 'Pipistrel Velis Electro (Type Certified)' },
        { label: 'Cadet Cohort', value: 'Class 2026-B Enrollment Open' }
      ],
      dataPoints: [
        { label: 'Operating Noise', value: '60 dBA (Curfew Exempt)', detail: 'Allows evening & early morning circuit flights' },
        { label: 'Direct Flight Emissions', value: 'Zero CO₂ Exhaust', detail: '100% battery-electric powertrain' },
        { label: 'Tuition Savings', value: '35% Cost Reduction', detail: 'Eliminates AVGAS fuel price volatility' }
      ],
      footerNote: 'Recognized by the Directorate General of Civil Aviation.'
    },
    questionPrompt: 'What practical operational advantage does AeroGlide’s low-noise electric aircraft provide over traditional fuel-powered training airplanes?',
    instructionsPrompt: 'Choose exactly one correct answer from the five options below.',
    options: [
      { id: 'A', label: 'A', text: 'It allows students to fly supersonic cross-country routes without filing flight plans.' },
      { id: 'B', label: 'B', text: 'It enables cadets to conduct flight training during evening hours without violating airport community noise curfews.' },
      { id: 'C', label: 'C', text: 'It permits planes to land on ocean waters without floats or emergency life rafts.' },
      { id: 'D', label: 'D', text: 'It guarantees that trainees will never need to study navigation instruments or meteorology.' },
      { id: 'E', label: 'E', text: 'It allows airplanes to fly perpetually without ever landing to recharge battery banks.' }
    ],
    correctAnswer: ['B'],
    evidenceText: 'Our state-of-the-art Pipistrel Velis Electro aircraft produce zero direct flight emissions and operate at a whisper-quiet sixty decibels, allowing cadets to conduct evening circuit patterns without triggering municipal airport noise curfew restrictions.',
    quickStrategySummary: 'Connect the "whisper-quiet sixty decibels" directly to the stated consequence: "allowing cadets to conduct evening circuit patterns without triggering municipal airport noise curfew restrictions."',
    explanation: {
      step1Understand: 'The question asks for the specific operational benefit that stems from the aircraft’s quiet 60-decibel sound level.',
      step2LocateEvidence: 'Look at paragraph 2: "operate at a whisper-quiet sixty decibels, allowing cadets to conduct evening circuit patterns without triggering municipal airport noise curfew restrictions."',
      step3InterpretEvidence: 'Traditional airplanes generate loud noise that triggers airport night curfews; quiet electric aircraft bypass these restrictions, unlocking evening training slots.',
      step4EliminateWeakOptions: {
        A: 'Absurd distractor. Training planes do not fly supersonic, and all pilots must file flight plans.',
        B: 'Correct. Directly reflects the text regarding evening circuit patterns and noise curfews.',
        C: 'Absurd distractor. Landplanes cannot land on open ocean water.',
        D: 'Incorrect. Aviation training still requires rigorous navigation and meteorology study.',
        E: 'Scientifically impossible. Batteries must be recharged periodically.'
      },
      step5ConfirmAnswer: 'Option B accurately explains the operational advantage linked directly to low noise levels.',
      step6QuickStrategy: 'Match the specific condition (low noise) with its direct practical result in the text (evening flights during curfew hours).',
      step7TransferSkill: 'In marketing and informational texts, look for how a technical specification (decibel rating) solves a real-world business or regulatory obstacle.'
    },
    narration: {
      questionOverview: 'In Question 20, infer the real-world operational benefit of a quiet electric aircraft from an advertisement.',
      readingGuide: 'Focus on paragraph 2. What does operating at sixty decibels allow students to do at night?',
      quickStrategy: 'Link the low noise level to overcoming municipal airport noise curfews.',
      feedbackCorrect: 'Terrific reading! You connected the low decibel level with the ability to fly evening training routes.',
      feedbackIncorrect: 'Review paragraph 2 again. Look at what the text says about evening circuit patterns and noise curfews.',
      explanationSummary: 'Low noise emissions allow cadets to fly evening circuits without violating municipal noise curfews.'
    }
  },

  // ==========================================
  // QUESTION 21: MCQ | Evaluation and Appreciation | Informative Article
  // ==========================================
  {
    id: 21,
    number: 21,
    questionType: 'mcq',
    competency: 'Evaluation and Appreciation',
    genre: 'Informative Article',
    difficulty: 'Challenging',
    title: 'Telemedicine and the Illusion of Universal Healthcare Equity',
    passage: [
      'Digital health advocates routinely proclaim that broadband telemedicine has effectively dismantled geographic barriers to specialized clinical consultations. High-resolution video endoscopy, AI-driven dermatological triage apps, and cloud-shared cardiac telemetry allow remote island clinics to connect with tertiary university hospitals in Jakarta within seconds.',
      'However, public health epidemiologist Dr. Tariq Mansoor cautions that measuring digital inclusion through app downloads obscures deep systemic disparities. In remote archipelago districts, the reality on the ground is characterized by intermittent micro-hydro electricity, cellular towers throttled by diesel generator fuel shortages, and exorbitant mobile data rates for impoverished subsistence farmers.',
      'Furthermore, elderly patients suffering from chronic multimorbidity frequently lack the digital literacy required to navigate multifaceted portal interfaces. When regional health budgets reallocate physical transport subsidies toward software licenses for proprietary video apps, rural patients lacking smartphones or reliable bandwidth are left more isolated from physical care than before, transforming a promised bridge into an inadvertent barrier.'
    ],
    stimulus: {
      type: 'chart',
      title: 'Archipelago Telemedicine Pilot: Urban Tech Adoption vs Rural Patient Access',
      badge: 'Public Health Policy Evaluation',
      visualTheme: 'crimson',
      metaInfo: [
        { label: 'Study Area', value: 'Outer Island Districts (Maluku & NTT)' },
        { label: 'Cohort', value: '48 Primary Community Health Centers' },
        { label: 'Evaluation Period', value: '24-Month Rollout' }
      ],
      dataPoints: [
        { label: 'Video Call Completion Rate', value: 'Only 32%', detail: '68% failed due to bandwidth throttling' },
        { label: 'Physical Transport Subsidy', value: '-45% Budget Cut', detail: 'Funds redirected to tele-software licensing' },
        { label: 'Elderly Patient Disengagement', value: '+54% Drop in Visits', detail: 'Inability to operate smartphone interfaces' }
      ],
      footerNote: 'Source: Indonesian Journal of Health Systems & Social Policy.'
    },
    questionPrompt: 'Which statement best summarizes the author’s critical evaluation of replacing physical healthcare subsidies with digital telemedicine software in rural regions?',
    instructionsPrompt: 'Choose exactly one correct answer from the five options below.',
    options: [
      { id: 'A', label: 'A', text: 'Telemedicine software should be universally abandoned because all computers cause irreversible eye damage to rural doctors.' },
      { id: 'B', label: 'B', text: 'Diverting physical transport funds toward digital platforms paradoxically deepens isolation for impoverished and digitally illiterate rural patients.' },
      { id: 'C', label: 'C', text: 'Rural patients prefer video consultations because smartphone screens cure physical illnesses faster than prescription medications.' },
      { id: 'D', label: 'D', text: 'Elderly patients learn complex software interfaces faster than urban university students when physical doctors are unavailable.' },
      { id: 'E', label: 'E', text: 'Diesel generators are totally incapable of producing electricity anywhere on tropical island chains.' }
    ],
    correctAnswer: ['B'],
    evidenceText: 'When regional health budgets reallocate physical transport subsidies toward software licenses for proprietary video apps, rural patients lacking smartphones or reliable bandwidth are left more isolated from physical care than before, transforming a promised bridge into an inadvertent barrier.',
    quickStrategySummary: 'Look at the author’s concluding paradox: diverting transport subsidies to software licenses leaves vulnerable patients more isolated ("bridge into an inadvertent barrier").',
    explanation: {
      step1Understand: 'The question evaluates the author’s primary critique regarding the policy shift from physical transit funding to digital software.',
      step2LocateEvidence: 'Look at paragraph 3: "When regional health budgets reallocate physical transport subsidies toward software licenses for proprietary video apps, rural patients lacking smartphones or reliable bandwidth are left more isolated from physical care than before..."',
      step3InterpretEvidence: 'The author argues that funding digital apps at the expense of physical travel subsidies creates a paradox: vulnerable rural patients lose access to physical clinics without gaining viable digital alternatives.',
      step4EliminateWeakOptions: {
        A: 'Absurd distractor. Eye damage from computers is never mentioned.',
        B: 'Correct. It captures the exact critique: diverting funds deepens isolation for poor and digitally illiterate patients.',
        C: 'Absurd claim. Phone screens do not cure physical disease.',
        D: 'Contradicted by the text. Paragraph 3 states elderly patients frequently lack the digital literacy to navigate interfaces.',
        E: 'Distortion. Generators work, but fuel shortages throttle cellular towers.'
      },
      step5ConfirmAnswer: 'Option B accurately synthesizes the author’s critical policy conclusion in paragraph 3.',
      step6QuickStrategy: 'Look for the author’s central thesis statement: shifting resources from physical transport to software makes the underserved even more vulnerable.',
      step7TransferSkill: 'In critical policy texts, watch for paradoxical outcomes where a well-intentioned reform unintentionally harms marginalized groups.'
    },
    narration: {
      questionOverview: 'In Question 21, evaluate the author’s critique of relying exclusively on telemedicine in rural areas.',
      readingGuide: 'Focus on the final paragraph. What happens when money for physical transport is spent on software instead?',
      quickStrategy: 'Notice the phrase "transforming a promised bridge into an inadvertent barrier."',
      feedbackCorrect: 'Brilliant evaluation! You recognized the unintended negative consequences of diverting physical transport funds.',
      feedbackIncorrect: 'Reread the final paragraph carefully. Notice the impact on patients who lack smartphones or internet access.',
      explanationSummary: 'The author concludes that shifting transport funds to software leaves impoverished, offline rural patients more isolated.'
    }
  },

  // ==========================================
  // QUESTION 22: MSQ | Textual Comprehension | Notice
  // ==========================================
  {
    id: 22,
    number: 22,
    questionType: 'msq',
    competency: 'Textual Comprehension',
    genre: 'Notice',
    difficulty: 'Medium',
    title: 'High-Altitude Dark Sky Astronomical Observatory Protocol',
    passage: [
      'Visitors attending public stargazing sessions at the Mount Timau National Observatory are reminded that this facility operates as a protected International Dark-Sky Reserve. Light pollution severely degrades the optical sensitivity of our 3.8-meter telescope mirrors.',
      'Upon passing Checkpoint Alpha at the base of the summit road, drivers must extinguish standard headlights and switch exclusively to amber parking lights. Within the observatory dome perimeter, the use of white flashlights, smartphone screens, camera flashes, and smart watch backlights is strictly prohibited. Only dim red LED headlamps (wavelength 620–660nm) are permitted.',
      'Due to high elevation (1,900 meters above sea level) and rapid nocturnal temperature drops, visitors are urged to wear thermal windproof outerwear and sturdy closed-toe walking boots. Hot water refill stations and emergency oxygen canisters are available inside the Visitor Welcome Rotunda.'
    ],
    stimulus: {
      type: 'notice',
      title: 'Mount Timau Observatory: Dark-Sky Reserve Regulations',
      badge: 'Protected Astronomical Sanctuary',
      visualTheme: 'navy',
      metaInfo: [
        { label: 'Facility', value: 'Mount Timau 3.8m Optical Observatory' },
        { label: 'Elevation', value: '1,900m ASL, East Nusa Tenggara' },
        { label: 'Public Hours', value: '19:30 – 23:00 WITA (Clear Skies Only)' }
      ],
      dataPoints: [
        { label: 'Approved Lighting', value: 'Dim Red LED Only (620–660nm)' },
        { label: 'Banned Devices', value: 'White Lights, Camera Flashes, Screens' },
        { label: 'Emergency Support', value: 'Oxygen Canisters in Welcome Rotunda' }
      ],
      footerNote: 'Enforced under National Astronomical Heritage Act 2024.'
    },
    questionPrompt: 'Based on the official observatory notice, which of the following regulations are explicitly required for all visitors? (Select ALL correct options)',
    instructionsPrompt: 'Multiple-Select Question: Select at least two correct options (A, B, C, D). Not all options are correct.',
    options: [
      { id: 'A', label: 'A', text: 'Vehicle drivers must extinguish standard headlights and switch to amber parking lights past Checkpoint Alpha.' },
      { id: 'B', label: 'B', text: 'Visitors may use high-beam white flashlights freely as long as they point them directly at the clouds.' },
      { id: 'C', label: 'C', text: 'White flashlights, phone screens, and camera flashes are strictly prohibited within the dome perimeter.' },
      { id: 'D', label: 'D', text: 'Only dim red LED lighting within the 620–660 nanometer wavelength range is permitted.' }
    ],
    correctAnswer: ['A', 'C', 'D'],
    evidenceText: 'drivers must extinguish standard headlights and switch exclusively to amber parking lights... the use of white flashlights, smartphone screens, camera flashes, and smart watch backlights is strictly prohibited. Only dim red LED headlamps (wavelength 620–660nm) are permitted.',
    quickStrategySummary: 'Verify the three explicit lighting rules in paragraph 2: amber parking lights (A), banned white screens/flashes (C), and permitted red LED only (D).',
    explanation: {
      step1Understand: 'This MSQ requires identifying all lighting regulations explicitly mandated in the observatory notice.',
      step2LocateEvidence: 'Paragraph 2 explicitly states: switch to amber parking lights past Checkpoint Alpha (A); ban white flashlights, screens, and camera flashes (C); and allow only dim red LEDs between 620–660nm (D).',
      step3InterpretEvidence: 'Options A, C, and D are explicit safety regulations. Option B is false and directly contradicts the total ban on white lights.',
      step4EliminateWeakOptions: {
        A: 'Correct. Explicitly required: drivers must extinguish headlights and use amber parking lights.',
        B: 'Incorrect. High-beam white flashlights are strictly prohibited anywhere near the dome.',
        C: 'Correct. Explicitly prohibited: white flashlights, smartphone screens, camera flashes, and smart watch backlights.',
        D: 'Correct. Explicitly stated: only dim red LED headlamps (620–660nm) are permitted.'
      },
      step5ConfirmAnswer: 'Options A, C, and D represent the verbatim rules published in the notice.',
      step6QuickStrategy: 'Cross out any option that encourages white lighting in an observatory dark-sky sanctuary.',
      step7TransferSkill: 'In compliance notices, distinguish carefully between what is strictly permitted and what is prohibited.'
    },
    narration: {
      questionOverview: 'Question 22 is a Multiple-Select Question regarding lighting rules at an astronomical observatory.',
      readingGuide: 'Focus on paragraph 2 for the exact vehicle and handheld lighting rules.',
      quickStrategy: 'Select all options enforcing dark-sky compliance, and eliminate any option allowing white flashlights.',
      feedbackCorrect: 'Superb accuracy! You identified all three true lighting regulations.',
      feedbackIncorrect: 'Reread paragraph 2 carefully. Notice what types of lights are permitted versus banned.',
      explanationSummary: 'The notice mandates amber parking lights on roads, bans white lights and screens, and allows only dim red LEDs.'
    }
  },

  // ==========================================
  // QUESTION 23: MSQ | Inferential Comprehension | Short Message
  // ==========================================
  {
    id: 23,
    number: 23,
    questionType: 'msq',
    competency: 'Inferential Comprehension',
    genre: 'Short Message',
    difficulty: 'Medium',
    title: 'Vocational Robotics Championship: Emergency Firmware Patch',
    passage: [
      '[21:40] Dimas (Lead Programmer): Kevin, the autonomous maze rover failed qualification run #2 because the ultrasonic distance sensors kept registering ghost reflections from the aluminum arena borders.',
      '[21:44] Kevin (Hardware Lead): I checked the oscilloscopes. The arena spotlights are running on unshielded 50Hz ballasts, injecting high-frequency electromagnetic noise directly into our analog sensor wiring harnesses.',
      '[21:47] Dimas: That explains the random spikes! Instead of rewiring sixty solder joints overnight, I’ve committed a Kalman filtering firmware patch to our Git repo. It filters out sensor readings exceeding three standard deviations and forces the rover to prioritize LiDAR time-of-flight pulses.',
      '[21:50] Kevin: Genius. I’ll pull the repository commit, flash the microcontroller via USB, and we can test it on the hotel carpet before the referee inspection at 07:30 tomorrow.'
    ],
    stimulus: {
      type: 'log',
      title: 'Robotics Team Dev Channel: Telemetry Debugging Log',
      badge: 'National STEM Championship Final',
      visualTheme: 'slate',
      metaInfo: [
        { label: 'Team', value: 'SMK Mandiri Robotics Chapter' },
        { label: 'Event', value: 'Autonomous Maze Navigation Finals' },
        { label: 'Time', value: '21:40 – 21:55 WIB' }
      ],
      dataPoints: [
        { label: 'Observed Glitch', value: 'Ghost Obstacle Reflections (Run #2)' },
        { label: 'Hardware Root Cause', value: '50Hz Spotlight Electromagnetic Noise' },
        { label: 'Software Remedy', value: 'Kalman Filter + LiDAR Priority Firmware' }
      ],
      footerNote: 'Repository commit verified: #a8f3b21.'
    },
    questionPrompt: 'Based on the team chat, what can be logically inferred about the problem and the students’ problem-solving process? (Select ALL correct options)',
    instructionsPrompt: 'Multiple-Select Question: Select at least two correct options (A, B, C, D). Not all options are correct.',
    options: [
      { id: 'A', label: 'A', text: 'The malfunction was caused by environmental interference from arena lighting rather than a defective rover motor.' },
      { id: 'B', label: 'B', text: 'The team opted for a software-based algorithmic solution because rewiring the hardware overnight was impractical.' },
      { id: 'C', label: 'C', text: 'The students immediately withdrew from the competition and booked return bus tickets home.' },
      { id: 'D', label: 'D', text: 'The firmware patch compensates for analog noise by mathematically filtering outliers and prioritizing LiDAR data.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    evidenceText: 'arena spotlights are running on unshielded 50Hz ballasts, injecting high-frequency electromagnetic noise... Instead of rewiring sixty solder joints overnight, I’ve committed a Kalman filtering firmware patch... filters out sensor readings exceeding three standard deviations and forces the rover to prioritize LiDAR...',
    quickStrategySummary: 'Look at the root cause (unshielded spotlights), the pragmatic choice (software patch instead of rewiring 60 joints), and the math filter (Kalman + LiDAR).',
    explanation: {
      step1Understand: 'The question asks for valid inferences regarding the engineering failure and the students’ collaborative debugging strategy.',
      step2LocateEvidence: 'Kevin identifies spotlight electromagnetic noise as the cause (A). Dimas chooses a firmware patch instead of rewiring 60 solder joints (B) and explains the Kalman filter prioritizes LiDAR (D).',
      step3InterpretEvidence: 'A, B, and D are directly supported by the technical dialogue. C is totally contradicted because they plan to flash the code and test it before the 07:30 inspection.',
      step4EliminateWeakOptions: {
        A: 'Correct. The noise originated from external arena lighting ballasts, not defective motors.',
        B: 'Correct. Dimas chose the software patch specifically to avoid rewiring 60 solder joints overnight.',
        C: 'Incorrect. The team is determined to compete and will test the fix before the 07:30 morning inspection.',
        D: 'Correct. The patch uses a Kalman filter to drop outlier readings and prioritize LiDAR sensors.'
      },
      step5ConfirmAnswer: 'Options A, B, and D represent logical, evidence-based deductions from the chat logs.',
      step6QuickStrategy: 'Look for pragmatic decision-making: software patch chosen over tedious hardware rewiring under time pressure.',
      step7TransferSkill: 'In collaborative technical dialogue, analyze how team members diagnose root causes and choose optimal workarounds.'
    },
    narration: {
      questionOverview: 'Question 23 is a Multiple-Select Question based on an engineering chat between two student roboticists.',
      readingGuide: 'Observe how Kevin diagnoses the spotlight noise and why Dimas chooses a software fix over hardware rewiring.',
      quickStrategy: 'Verify that the students chose a software patch over rewiring, and reject the idea that they gave up.',
      feedbackCorrect: 'Brilliant engineering deduction! You tracked the problem-solving logic of the robotics team perfectly.',
      feedbackIncorrect: 'Examine the chat again. Pay attention to the spotlight interference and the Kalman filter fix.',
      explanationSummary: 'The text infers that lighting caused the glitch, a software patch saved time over rewiring, and the filter prioritized LiDAR.'
    }
  },

  // ==========================================
  // QUESTION 24: TFNG | Inferential Comprehension | Report Text
  // ==========================================
  {
    id: 24,
    number: 24,
    questionType: 'tfng',
    competency: 'Inferential Comprehension',
    genre: 'Report Text',
    difficulty: 'Medium',
    title: 'Geothermal Microgrids in Volcanic Archipelagos',
    passage: [
      'Indonesia sits atop the Pacific Ring of Fire, possessing approximately forty percent of the planet’s estimated geothermal energy potential. While massive megawatt power plants like Kamojang and Wayang Windu feed the interconnected Java-Bali electrical grid, smaller isolated volcanic islands in eastern Indonesia historically relied on imported diesel fuel.',
      'To address this disparity, the National Energy Transition Taskforce pioneered modular binary-cycle geothermal power units. Unlike conventional flash-steam plants that require reservoirs exceeding two hundred degrees Celsius, binary-cycle systems operate efficiently with moderate-temperature geothermal brine between one hundred and one hundred and fifty degrees Celsius.',
      'By utilizing an organic secondary fluid with a boiling point substantially lower than water, heat from geothermal brine vaporizes the organic fluid inside a heat exchanger, driving a low-pressure turbine without venting noxious hydrogen sulfide gases into the atmosphere. This enables remote island communities to achieve round-the-clock baseload electricity independent of volatile seaborne fossil fuel supply chains.'
    ],
    stimulus: {
      type: 'diagram',
      title: 'Modular Binary-Cycle Geothermal Power Cycle (Island Grid)',
      badge: 'Renewable Baseload Engineering Report',
      visualTheme: 'emerald',
      metaInfo: [
        { label: 'Technology', value: 'Modular Organic Rankine Cycle (ORC)' },
        { label: 'Brine Temp Range', value: '100°C – 150°C (Moderate Enthalpy)' },
        { label: 'Deployment', value: 'Eastern Indonesian Isolated Grids' }
      ],
      dataPoints: [
        { label: 'Atmospheric Emissions', value: 'Zero Venting (Closed Loop)', detail: 'Captures and reinjects all dissolved gases' },
        { label: 'Baseload Availability', value: '96% Capacity Factor', detail: 'Unaffected by weather, rain, or night cycles' },
        { label: 'Diesel Displacement', value: '4.2 Million Liters / Year', detail: 'Per 5MW modular installation' }
      ],
      footerNote: 'Source: Indonesian Geothermal Association Technical Journal.'
    },
    questionPrompt: 'Statement: "Binary-cycle geothermal systems are suitable for small islands because they can generate electricity using lower-temperature geothermal fluids than conventional flash-steam plants."',
    instructionsPrompt: 'Determine whether the statement is TRUE, FALSE, or NOT GIVEN based strictly on the passage.',
    options: [
      { id: 'True', label: 'True', text: 'True — The statement agrees with the information in the passage.' },
      { id: 'False', label: 'False', text: 'False — The statement contradicts the information in the passage.' },
      { id: 'Not Given', label: 'Not Given', text: 'Not Given — There is no information on this in the passage.' }
    ],
    correctAnswer: ['True'],
    evidenceText: 'Unlike conventional flash-steam plants that require reservoirs exceeding two hundred degrees Celsius, binary-cycle systems operate efficiently with moderate-temperature geothermal brine between one hundred and one hundred and fifty degrees Celsius.',
    quickStrategySummary: 'Match the comparison: binary-cycle operates at 100°C–150°C whereas conventional flash-steam plants require over 200°C.',
    explanation: {
      step1Understand: 'The question evaluates whether binary-cycle systems operate at lower temperatures than conventional flash-steam systems.',
      step2LocateEvidence: 'Look at paragraph 2: "Unlike conventional flash-steam plants that require reservoirs exceeding two hundred degrees Celsius, binary-cycle systems operate efficiently with moderate-temperature geothermal brine between one hundred and one hundred and fifty degrees Celsius."',
      step3InterpretEvidence: 'The text explicitly states that binary-cycle systems function with lower-temperature brine (100°C–150°C) compared to flash-steam plants (>200°C), confirming the statement.',
      step4EliminateWeakOptions: {
        True: 'Correct. The statement accurately reflects the temperature comparison explicitly described in paragraph 2.',
        False: 'Incorrect. The statement does not contradict the text; it is verified by the temperature figures.',
        'Not Given': 'Incorrect. The exact comparison and operational parameters are provided in the passage.'
      },
      step5ConfirmAnswer: 'The statement agrees completely with the factual evidence in the text; therefore, it is TRUE.',
      step6QuickStrategy: 'Look for explicit comparative markers: "Unlike X which requires >200°C, Y operates at 100°C–150°C."',
      step7TransferSkill: 'When verifying technological comparisons, match operating ranges to determine whether "lower" or "higher" claims are accurate.'
    },
    narration: {
      questionOverview: 'Question 24 is a True/False/Not Given question on geothermal power generation in volcanic islands.',
      readingGuide: 'Focus on paragraph 2. Compare the temperatures required for flash-steam plants versus binary-cycle systems.',
      quickStrategy: 'Notice that binary-cycle plants run on 100 to 150 degrees, while flash-steam requires over 200 degrees.',
      feedbackCorrect: 'Spot on! The text confirms that binary-cycle systems operate at lower temperatures than conventional plants.',
      feedbackIncorrect: 'Check paragraph 2 again. Compare the reservoir temperature requirements of the two systems.',
      explanationSummary: 'The statement is True because binary systems utilize moderate 100–150°C fluids, unlike flash plants needing over 200°C.'
    }
  },

  // ==========================================
  // QUESTION 25: TFNG | Evaluation and Appreciation | Informative Article
  // ==========================================
  {
    id: 25,
    number: 25,
    questionType: 'tfng',
    competency: 'Evaluation and Appreciation',
    genre: 'Informative Article',
    difficulty: 'Challenging',
    title: 'Gene Editing and Endangered Species Conservation',
    passage: [
      'The catastrophic decline of global biodiversity has spurred conservation biologists to look beyond habitat restoration and anti-poaching patrols. Using CRISPR-Cas9 base-editing technologies, geneticists are currently engineering disease resistance alleles directly into the genome of the endangered black-footed ferret and the northern white rhinoceros.',
      'Proponents argue that when a species’ census population falls below the minimum viable threshold, genetic bottlenecks trigger severe inbreeding depression, making natural evolutionary adaptation too slow to outpace rapidly emerging pathogens or climate shifts. Targeted genetic rescue, they contend, provides the only realistic lifeline against extinction.',
      'Yet environmental bioethicists urge extreme caution. Introducing gene-edited organisms into open ecosystems risks unintended off-target genomic alterations and unforeseen trophic cascade disruptions that cannot be recalled once released into the wild. They stress that while gene editing might buy time, it risks treating wild animals as programmable artifacts while distracting global attention and funding away from halting the continuous destruction of primary natural habitats.'
    ],
    stimulus: {
      type: 'infographic',
      title: 'Genomic Rescue vs Ecological Integrity: Bioethical Framework 2026',
      badge: 'Conservation Bioethics Review',
      visualTheme: 'amber',
      metaInfo: [
        { label: 'Field', value: 'Synthetic Biology & Wildlife Conservation' },
        { label: 'Target Cases', value: 'Black-Footed Ferret & Northern White Rhino' },
        { label: 'Core Mechanism', value: 'CRISPR-Cas9 Base Editing for Disease Resistance' }
      ],
      dataPoints: [
        { label: 'Advocate Rationale', value: 'Overcome Inbreeding Bottlenecks', detail: 'Natural selection is too slow against rapid pathogens' },
        { label: 'Bioethicist Concern', value: 'Irreversible Ecological Release', detail: 'Off-target mutations & trophic cascade risks' },
        { label: 'Systemic Hazard', value: 'Habitat Protection Defunding', detail: 'Treats wild species as programmable artifacts' }
      ],
      footerNote: 'Source: International Bioethics Committee on Conservation Genetics.'
    },
    questionPrompt: 'Statement: "Environmental bioethicists express concern that reliance on genetic rescue could divert critical resources and public focus away from preserving natural wilderness habitats."',
    instructionsPrompt: 'Determine whether the statement is TRUE, FALSE, or NOT GIVEN based strictly on the passage.',
    options: [
      { id: 'True', label: 'True', text: 'True — The statement agrees with the information in the passage.' },
      { id: 'False', label: 'False', text: 'False — The statement contradicts the information in the passage.' },
      { id: 'Not Given', label: 'Not Given', text: 'Not Given — There is no information on this in the passage.' }
    ],
    correctAnswer: ['True'],
    evidenceText: 'They stress that while gene editing might buy time, it risks treating wild animals as programmable artifacts while distracting global attention and funding away from halting the continuous destruction of primary natural habitats.',
    quickStrategySummary: 'Match the bioethicists’ final warning: "distracting global attention and funding away from halting the continuous destruction of primary natural habitats."',
    explanation: {
      step1Understand: 'The question evaluates whether bioethicists worry that genetic rescue will distract attention and funding from habitat protection.',
      step2LocateEvidence: 'Look at the concluding sentence of paragraph 3: "They stress that while gene editing might buy time, it risks treating wild animals as programmable artifacts while distracting global attention and funding away from halting the continuous destruction of primary natural habitats."',
      step3InterpretEvidence: 'The text explicitly affirms that bioethicists fear gene editing will divert global attention and funding away from preserving primary natural habitats.',
      step4EliminateWeakOptions: {
        True: 'Correct. The statement accurately summarizes the exact concern voiced by environmental bioethicists in paragraph 3.',
        False: 'Incorrect. The statement does not contradict the text; it is explicitly affirmed.',
        'Not Given': 'Incorrect. The ethical concern regarding funding and attention diversion is explicitly discussed.'
      },
      step5ConfirmAnswer: 'The statement agrees completely with the evidence in the passage; therefore, it is TRUE.',
      step6QuickStrategy: 'Identify the exact risk in the concluding sentence: distracting attention and funding from habitat protection.',
      step7TransferSkill: 'In complex ethical evaluations, examine the systemic warning that high-tech interventions may eclipse fundamental environmental protection.'
    },
    narration: {
      questionOverview: 'Question 25 is the final question of the assessment, evaluating the ethical debate on wildlife gene editing.',
      readingGuide: 'Focus on the final sentence of paragraph 3 regarding the concerns of environmental bioethicists.',
      quickStrategy: 'Notice the bioethicists’ fear that genetic editing distracts attention and funding from habitat protection.',
      feedbackCorrect: 'Outstanding critical appreciation! You accurately captured the systemic ethical concern.',
      feedbackIncorrect: 'Review the final sentence of paragraph 3. Notice what bioethicists say about diverting funding.',
      explanationSummary: 'The statement is True because bioethicists specifically warn that gene editing distracts attention from habitat preservation.'
    }
  }
];
