const scenarios = {
  mauress: {
    title: "Mauress's TBI Case",
    patientInfo: {
      name: "Mauress Villarino",
      age: "4 years",
      gender: "Male",
      chiefComplaint: "Head injury after falling off bike without helmet",
      gcs: "12 (E3V4M5)",
      vitals: "HR 110, BP 100/65, RR 24, Temp 37.1°C, SpO2 98% on room air"
    },
    story: "Mauress was riding his bike at a local park when he fell and hit his head on the pavement. He was not wearing a helmet. He lost consciousness briefly (approximately 30 seconds according to his parents). On arrival to the ED, he is confused but follows commands. His parents are anxious about his condition.",
    decisionPoints: [
      {
        title: "Initial Assessment Priority",
        question: "Mauress presents with a GCS of 12 (E3V4M5) following a head injury. His parents are visibly distressed. What is your immediate priority?",
        options: [
          "Administer pain medication to comfort the child",
          "Conduct a thorough neurological assessment",
          "Reassure parents while observing for changes",
          "Immediately call for neurosurgical consultation"
        ],
        feedback: [
          "INCORRECT: Administering analgesics before full assessment can mask neurological signs and interfere with accurate pain evaluation. NSAIDs may also increase bleeding risk.",
          "CORRECT: A systematic neurological assessment must be completed first to establish baseline function, identify acute changes, and guide subsequent interventions. This includes pupil assessment, motor function, and cognitive evaluation.",
          "PARTIALLY CORRECT: While family-centered care is important, the priority is clinical assessment. Observation alone without systematic evaluation may miss critical neurological changes.",
          "PARTIALLY CORRECT: Specialist consultation may be needed, but shouldn't delay initial assessment. Emergency nurses must complete primary and secondary surveys first."
        ],
        correctAnswer: 1,
        rationale: "In pediatric TBI, immediate neurological assessment is crucial because children can deteriorate rapidly. The GCS of 12 indicates moderate TBI requiring close monitoring. Establishing baseline neurological status guides all subsequent care decisions (PECARN Guidelines, 2021).",
        references: [
          "PECARN (2021): Clinical Decision Rules for Children with Head Trauma",
          "AAP (2022): Pediatric TBI Management Guidelines"
        ]
      },
      {
        title: "Diagnostic Decisions",
        question: "Your initial assessment shows Mauress is confused, with equal and reactive pupils (4mm), normal motor function, but exhibits retrograde amnesia. What is your next priority?",
        options: [
          "Order a CT scan of the head",
          "Continue observation for 2 hours",
          "Start IV access and begin fluid resuscitation",
          "Transfer to a higher level of care immediately"
        ],
        feedback: [
          "CORRECT: CT scan is indicated for pediatric patients with GCS <15, loss of consciousness, and amnesia. Early imaging helps identify intracranial hemorrhage, fractures, or cerebral edema that require immediate intervention.",
          "INCORRECT: Active monitoring alone is insufficient with current symptoms. The combination of LOC, amnesia, and altered mental status requires imaging to rule out intracranial injury.",
          "PARTIALLY CORRECT: IV access is important but not the priority. Mauress is hemodynamically stable; diagnostic imaging takes precedence to guide treatment.",
          "PARTIALLY CORRECT: Transfer decisions should be based on imaging results and available resources. Premature transfer without diagnosis may delay appropriate care."
        ],
        correctAnswer: 0,
        rationale: "Pediatric TBI guidelines recommend CT imaging for children with moderate TBI (GCS 12) especially with amnesia and LOC. Early detection of intracranial pathology allows for timely intervention (PECARN, 2021).",
        references: [
          "PECARN (2021): Head CT decision rules for pediatric patients",
          "Brain Injury Guidelines Committee (2021): Imaging protocols"
        ]
      },
      {
        title: "Management Planning",
        question: "CT scan reveals no acute intracranial hemorrhage or fractures. However, Mauress continues to have headache (4/10) and intermittent confusion. How do you proceed?",
        options: [
          "Discharge home with head injury precautions",
          "Admit for observation and serial neurological assessments",
          "Start empiric antibiotics pending culture results",
          "Initiate seizure prophylaxis with phenytoin"
        ],
        feedback: [
          "INCORRECT: Discharge is inappropriate with ongoing neurological symptoms. Children with persistent confusion and headache require monitoring for deterioration.",
          "CORRECT: Admission for 24-hour observation allows for serial neurological assessments, monitoring for delayed complications, and ensures proper pain management. This follows standard pediatric TBI protocols.",
          "INCORRECT: No indication for antibiotics without signs of infection. CT showed no open wounds or CSF leak requiring antimicrobial coverage.",
          "INCORRECT: Seizure prophylaxis isn't routinely indicated in mild-moderate TBI without seizure activity. Risk-benefit ratio doesn't support prophylactic use."
        ],
        correctAnswer: 1,
        rationale: "Children with TBI require admission when they have persistent neurological symptoms, as they can deteriorate rapidly. Serial assessments every 2-4 hours help detect increased ICP, seizures, or other complications early (WHO Pediatric Protocols, 2020).",
        references: [
          "WHO (2020): Pediatric Neurological Assessment Protocols",
          "Brain Injury Society Guidelines (2021): Observation criteria"
        ]
      },
      {
        title: "Symptom Management",
        question: "During observation, Mauress reports worsening headache (7/10), nausea, and increased confusion. His vital signs show HR 95, BP 105/70. What's your immediate action?",
        options: [
          "Administer ondansetron for nausea and acetaminophen for pain",
          "Repeat neurological assessment and notify physician immediately",
          "Encourage oral fluids and provide distraction therapy",
          "Increase frequency of vital signs to every 30 minutes"
        ],
        feedback: [
          "INCORRECT: Treating symptoms without addressing underlying cause is dangerous. Worsening neurological symptoms require immediate evaluation, not symptomatic treatment.",
          "CORRECT: Deteriorating neurological status (increased confusion, worsening headache) with previously normal CT suggests evolving pathology. Immediate physician notification and reassessment are crucial to detect increased ICP or delayed hemorrhage.",
          "INCORRECT: Comfort measures are inappropriate when neurological deterioration is suspected. This delays recognition and treatment of potentially life-threatening complications.",
          "PARTIALLY CORRECT: Increased monitoring frequency is appropriate but insufficient alone. The combination of symptoms requires immediate physician evaluation and possible repeat imaging."
        ],
        correctAnswer: 1,
        rationale: "Neurological deterioration in pediatric TBI patients indicates potential increased intracranial pressure or delayed intracranial bleeding. The triad of headache, nausea, and altered mental status requires immediate medical evaluation (AAP Guidelines, 2022).",
        references: [
          "AAP (2022): Recognition of TBI complications",
          "Pediatric Emergency Medicine Guidelines (2021): Warning signs"
        ]
      },
      {
        title: "Discharge Planning",
        question: "After 48 hours, Mauress shows significant improvement with GCS 15, minimal headache, and normal neurological exam. His parents are preparing for discharge. What's the priority teaching?",
        options: [
          "Return to all normal activities immediately to prevent deconditioning",
          "Signs of deterioration, graduated return to activities, and follow-up instructions",
          "Give detailed medication schedules for pain and nausea",
          "Emphasize importance of wearing helmets in future only"
        ],
        feedback: [
          "INCORRECT: Immediate return to full activities increases risk of second impact syndrome and can worsen symptoms. Graduated return following concussion protocols is evidence-based practice.",
          "CORRECT: Comprehensive discharge teaching must include red flag symptoms requiring immediate return (vomiting, severe headache, confusion), graduated activity plan following concussion guidelines, and specific follow-up appointments. This empowers families to monitor recovery safely.",
          "PARTIALLY CORRECT: Medication instructions are important but insufficient. Most pediatric TBI patients require minimal medications. Focus should be on symptom monitoring and activity modification.",
          "PARTIALLY CORRECT: Helmet safety education is crucial for prevention but doesn't address immediate post-discharge needs. Comprehensive teaching covers both recovery management and future prevention."
        ],
        correctAnswer: 1,
        rationale: "Effective discharge planning for pediatric TBI includes detailed symptom monitoring, graduated return to physical and cognitive activities, and clear follow-up instructions. This approach prevents complications and ensures proper recovery (WHO Pediatric Protocols, 2020).",
        references: [
          "WHO (2020): Pediatric TBI Discharge Guidelines",
          "Sports Concussion Networks (2021): Graduated return to activity protocols"
        ]
      }
    ]
  }
};

export default scenarios;
