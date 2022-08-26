const generateQbList = [
  {
    id: 587,
    setter_id: 4,
    question: 'Why is gold used in the Gold-leaf electroscope?',
    A: 'Gold is easily available in nature',
    B: 'Gold is malleable',
    C: 'Gold is conducting in nature',
    D: 'Gold is cheap',
    answer: 'B',
    difficulty_score: 1.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Though gold is a costly metal it is used in electroscope because of the property malleability. This means very thin and light sheets can be formed from gold simply by hammering or rolling and hence the deflection of the light gold plates increases.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 588,
    setter_id: 4,
    question:
      'What happens to the plates of the apparatus if we measure alternating charge using a Gold-leaf oscilloscope?',
    A: 'It doesn’t diverge at all',
    B: 'It diverges momentarily',
    C: 'The plates give a proper divergence',
    D: 'The degree of divergence increases and decreases repeatedly',
    answer: 'C',
    difficulty_score: 2.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'The divergence of the plates of the Gold-leaf oscilloscope depends only on the presence of a charge not on the quality of charge i.e. positive or negative. So if the charge changes from positive to negative and vice versa the degree of divergence of the plates remains the same.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 589,
    setter_id: 4,
    question:
      'Dr Gilbert tried to hold a brass rod by hand and induce static electricity in it by friction Why did he fail?',
    A: 'Static electricity is induced only on insulators while brass is conducting',
    B: 'The induced static charge flew through his hand and body to the ground',
    C: 'The static charge was not produced at all',
    D: 'It is not possible to induce static electricity by friction',
    answer: 'B',
    difficulty_score: 3.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'The human body is a good conductor and hence the charge produced by friction flew through his body to the ground. We can tackle the problem simply by holding the brass rod with the help of some insulated holder.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 590,
    setter_id: 4,
    question: 'Gold-leaf electroscope can be used _______',
    A: 'Only to detect the presence of charge',
    B: 'To detect the presence of charge as well as its nature (positive or negative',
    C: 'To measure the surface charge density',
    D: 'To measure current',
    answer: 'B',
    difficulty_score: 4.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'If the apparatus is initially in contact with some positively charged body and then comes in contact with another charged body and if the divergence increases we can deduce that the second body is also positively charged. If the divergence decreases then the second body must be negatively charged.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 591,
    setter_id: 4,
    question:
      'Two equally charged spheres attract each other Now if they touch each other then they will _____',
    A: 'Attract each other with the same amount of force',
    B: 'Repel each other',
    C: 'Attract each other with less amount of force',
    D: 'Don’t attract or repel',
    answer: 'D',
    difficulty_score: 5.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'The two spheres are oppositely charged by the same amount. So if they come in contact both of their charges are neutralized. So they become uncharged and don’t attract or repel each other.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 620,
    setter_id: 4,
    question:
      'Two point charges of the same polarities are hung with the help of two threads and kept close The angle between the threads will be _________ if the system is taken to space',
    A: '180 degree',
    B: '90 degree',
    C: '45 degree',
    D: '60 degree',
    answer: 'A',
    difficulty_score: 34.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'There is gravitational field on earth so if we hang the two same charges there will be an interaction of vertical gravitational field and horizontal electric field. The system will achieve equilibrium by creating a certain angle between the threads and hence the vertical and horizontal components of forces will balance. But in space there is no gravity. So the charges will be at 180-degree separation.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 621,
    setter_id: 4,
    question:
      'An electron of mass m is kept in a vertical electric field of magnitude E What must be the value of E so that the electron doesn’t fall due to gravity?',
    A: 'm*g*e',
    B: '\\(\\frac {e}{(m*g}\\',
    C: '\\(\\frac {(m*g}{e}\\',
    D: '\\(\\frac {1}{(m*g*e}\\',
    answer: 'C',
    difficulty_score: 35.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Gravitational force on the electron is m*g (weight of the electron). Electrical force on the body is e*E. If the electron doesn’t fall then these two forces balance each other so m*g=E*e. Therefore E= \\(\\frac {(m*g)}{e}\\).',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 622,
    setter_id: 4,
    question: 'Electric field is a _______',
    A: 'Scalar quantity',
    B: 'Vector quantity',
    C: 'Tensor quantity',
    D: 'Quantity that has properties of both scalar and vector',
    answer: 'B',
    difficulty_score: 36.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'A scalar quantity is a quantity with magnitude only but no direction. But a vector quantity possesses both magnitude and direction. An electric field has a very specific direction (away from a positive charge or towards a negative charge). Hence electric field is a vector quantity. Moreover we have to use a vector addition for adding two electric fields.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 623,
    setter_id: 4,
    question:
      'Two point charges +4q and +q are kept at a distance of 30 cm from each other At which point between them the field intensity will be equal to zero?',
    A: '15cm away from the +4q charge',
    B: '20cm away from the +4q charge',
    C: '7.5cm away from the +q charge',
    D: '5cm away from the +q charge',
    answer: 'B',
    difficulty_score: 37.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'The electric field at a distance of r from a charge q is equal to \\(\\frac {q}{4\\pi\\varepsilon_or^2}\\). Let the electric field intensity will be zero at a distance of x cm from +4q charge so the fields due to the two charges will balance each other at that point. Therefore \\(\\frac {4q}{4\\pi\\varepsilon_ox^2}=\\frac {q}{4\\pi\\varepsilon_o(30-x)^2}\\). Solving this we get x=20cm. Therefore the point will be 20cm away from the +4q charge.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 624,
    setter_id: 4,
    question: 'V/m is the unit of ______',
    A: 'Electric field intensity',
    B: 'Electric flux',
    C: 'Electric potential',
    D: 'Charge',
    answer: 'A',
    difficulty_score: 38.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'E=-\\(\\frac {dV}{dx}\\) where E is the field intensity V is potential and x is distance. Therefore unit of electric field intensity will be \\(\\frac {unit \\ of \\ potential}{unit \\ of \\ distance} = \\frac {V}{m}\\). Electric flux has unit V*m V is the unit of electric potential whereas charge has a unit of Coulomb or esu.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 653,
    setter_id: 4,
    question:
      'Work done to bring a unit positive charge from infinity to a point in an electric field is known as _______',
    A: 'Electric potential',
    B: 'Electric field intensity',
    C: 'Electric dipole moment',
    D: 'The total energy of the point charge',
    answer: 'A',
    difficulty_score: 67.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Electric potential is defined as the amount of work done to bring a unit positive charge from an infinite distance to a particular point of an electric field. The total energy of that point charge means the sum of kinetic energy and potential energy which is not the same as the potential energy if the particle is in motion.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 654,
    setter_id: 4,
    question: 'Earth’s potential is _______',
    A: 'Zero',
    B: 'Highly positive',
    C: 'Highly negative',
    D: 'Varies from place to place',
    answer: 'A',
    difficulty_score: 68.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'We consider earth as the storage of infinite positive as well as a negative charge. Therefore the potential of the earth is always considered to be zero and the potential of every body is measured with respect to earth. That’s why if we connect any charged body to the earth its potential instantaneously becomes zero.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 655,
    setter_id: 4,
    question:
      'If a charged body is moved in an electric field against the Coulomb force then ________',
    A: 'Work is done on the body by an external agent',
    B: 'Work is done by the electric field',
    C: 'Electric field intensity decreases',
    D: 'The total energy of the system decreases',
    answer: 'A',
    difficulty_score: 69.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'To move a body against some force work is to be done on the body. In this case an external force is to be applied on the body to move it i.e. an external work is to be done. As we are moving the body against the Coulomb’s force hence no work is done on the body by the electric field.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 656,
    setter_id: 4,
    question:
      'Electric potential due to a point charge q at a distance r from the point is _______ (in the air)',
    A: '\\(\\frac {q}{r}\\',
    B: 'q*r',
    C: '\\(\\frac {q}{r^2}\\',
    D: '\\(\\frac {-q}{r}\\',
    answer: 'A',
    difficulty_score: 70.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Force on a unit point charge kept at a distance r from the charge=\\(\\frac {q}{r^2}\\). Therefore work done to bring that point charge through a small distance dr=\\(\\frac {q}{r^2}\\)*(-dr). Therefore the potential of that point is =\\(\\int_\\alpha^r\\frac {-q}{r^2}dr = \\frac{q}{r}\\).',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 657,
    setter_id: 4,
    question:
      'Two point charges 10C and -10C are placed at a certain distance What is the electric potential of their midpoint?',
    A: 'Some positive value',
    B: 'Some negative value',
    C: 'Zero',
    D: 'Depends on medium',
    answer: 'C',
    difficulty_score: 71.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Electric potential is a scalar quantity and its value is solely dependent on the charge near it and the distance from that charge. In this case the point is equidistant from the two point charges and the point charges have the same value but opposite nature. Therefore equal but opposite potentials are generated due to the charges and hence the net potential at midpoint becomes zero.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 687,
    setter_id: 4,
    question:
      'Solid-state is denser than the liquid and gaseous states of the same substance Which of the following is an exception to this rule?',
    A: 'Mercury',
    B: 'Carbon dioxide (dry ice',
    C: 'Ice',
    D: 'NaCl',
    answer: 'C',
    difficulty_score: 1.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation: 'The density of ice is about 0.92 g/cm',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 688,
    setter_id: 4,
    question:
      'Which of the following can be used to describe a crystalline solid?',
    A: 'Heterogeneous anisotropic',
    B: 'Homogeneous anisotropic',
    C: 'Heterogeneous isotropic',
    D: 'Homogeneous isotropic',
    answer: 'B',
    difficulty_score: 2.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Homogeneity refers to uniformity in composition which is a characteristic property of crystalline solids. Isotropy is when the values of physical properties do not change with direction throughout the body of the solid. Crystalline solids are anisotropic because the composition of the solid changes with direction hence the physical properties also change with direction.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 689,
    setter_id: 4,
    question:
      'When a single substance can crystallize in two or more forms under different conditions provided it is called as _________',
    A: 'Polymorphous',
    B: 'Isomorphous',
    C: 'Semimorphous',
    D: 'Multimorphous',
    answer: 'A',
    difficulty_score: 3.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Isomorphous is when two or more substances have the same crystal structure. Polymorphous is when a single substance can crystallize in two or more forms depending upon the conditions.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 690,
    setter_id: 4,
    question: 'Which of the following is an amorphous solid?',
    A: 'Quartz',
    B: 'Quartz glass',
    C: 'Graphite',
    D: 'Salt (NaCl',
    answer: 'B',
    difficulty_score: 4.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Quartz glass does not have a perfectly ordered structure hence it is classified as an amorphous solid. The rest are crystalline solids due to ordered structures.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 691,
    setter_id: 4,
    question:
      'Which type of solid structure melts at a definite sharp melting point?',
    A: 'All types of solids',
    B: 'No type of solid',
    C: 'Amorphous solids',
    D: 'Crystalline solids',
    answer: 'D',
    difficulty_score: 5.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Crystalline solids have a perfectly ordered structure which collapses immediately at a specific temperature. Amorphous solids melt over a range of temperatures not one specific value.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 720,
    setter_id: 4,
    question:
      'Which of the following are responsible for high electrical and thermal conductivity of a metal?',
    A: 'Ions',
    B: 'Covalent bonds',
    C: 'Free H+ ions',
    D: 'Free and mobile electrons',
    answer: 'D',
    difficulty_score: 34.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Each atom of a metal gives one or more electrons towards the sea of mobile electrons it is surrounded by which ultimately contributes to the electrical and thermal conductivity of the metal.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 721,
    setter_id: 4,
    question: 'Which of the following is not a characteristic of metals?',
    A: 'Lustre',
    B: 'Ductile',
    C: 'Malleable',
    D: 'Brittle',
    answer: 'D',
    difficulty_score: 35.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Metals are lustrous ductile and malleable. They cannot be brittle. Non-metals tend to be brittle in their solid state.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 722,
    setter_id: 4,
    question:
      'Which type of crystalline solid is also called as giant molecules?',
    A: 'Ionic solids',
    B: 'Covalent solids',
    C: 'Polar molecular solids',
    D: 'Metallic solids',
    answer: 'B',
    difficulty_score: 36.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Covalent solids consists of a long chain of covalent bonds between the adjacent molecules throughout the crystal. Hence they are called giant molecules. They are hard and brittle in nature.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 723,
    setter_id: 4,
    question:
      'Which of the following is regarded as the ‘repeatable entity’ of a 3D crystal structure?',
    A: 'Unit cell',
    B: 'Lattice',
    C: 'Crystal',
    D: 'Bravais Index',
    answer: 'A',
    difficulty_score: 37.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Unit cell is the smallest entity of a crystal lattice which when repeated in space (3 dimensions) generates the entire crystal lattice. Lattice comprises of the unit cells which hold all the particles in a particular arrangement in 3 dimensions. Crystal is a piece of homogenous solid and Bravais indices are used to define planes in crystal lattices in the hexagonal system.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 724,
    setter_id: 4,
    question:
      'Which of the following unit cells has constituent particles occupying the corner positions only?',
    A: 'Body-centered cell',
    B: 'Primitive cell',
    C: 'Face centered cell',
    D: 'End-centered cell',
    answer: 'B',
    difficulty_score: 38.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'According to classification of unit cells a primitive unit cell is one which has all constituent particles located at its corners. BCC has one particle present at the center including the corners. FCC has an individual cell shared between the faces of adjacent cells. End centered cells have cells present at centers of two opposite faces.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 753,
    setter_id: 4,
    question:
      'Schottky defects are observed in solids with cations and anions of similar sizes Which of the following compounds therefore is NOT likely to have a Schottky defect?',
    A: 'NaCl',
    B: 'AgCl',
    C: 'CsCl',
    D: 'KCl',
    answer: 'B',
    difficulty_score: 67.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'There is a considerable size difference between Ag cation and Cl anion. Hence a Frenkel defect is more likely to occur than a Schottky defect.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 754,
    setter_id: 4,
    question:
      'Impurity defect is a type of point defect It can occur __________',
    A: 'in one way as substitution impurity defect',
    B: 'in one way as interstitial impurity defect',
    C: 'in two ways as substitution impurity defect or as interstitial impurity defect',
    D: 'in two ways as vacant impurity defect or as interstitial impurity defect',
    answer: 'C',
    difficulty_score: 68.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'An impurity defect occurs when a regular ion is replaced by some other type of ion e.g. Na',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 755,
    setter_id: 4,
    question: 'Stainless steel is a/an ________ alloy',
    A: 'vacant',
    B: 'interstitial',
    C: 'substitution',
    D: 'pure',
    answer: 'B',
    difficulty_score: 69.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Stainless steel is an interstitial alloy. Carbon atoms are introduced into interstitial spaces of iron lattice as an impurity. Further alloying sees the introduction of nickel chromium in the interstitial spaces.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 756,
    setter_id: 4,
    question:
      'Metals are good conductors of heat and electricity This property is conferred by _______ bonds',
    A: 'covalent',
    B: 'ionic',
    C: 'metallic',
    D: 'hydrogen',
    answer: 'C',
    difficulty_score: 70.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Metallic bonds are formed between positive metal ions and the sea of delocalized electrons. This bond is stronger than covalent and ionic bonds. Due to the mobility of electrons conduction of heat and electricity is feasible.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 757,
    setter_id: 4,
    question: 'Which of the following properties holds true for a metalloid?',
    A: 'Poor conductors of heat and electricity',
    B: 'Malleable',
    C: 'Ductile',
    D: 'Non-brittle',
    answer: 'A',
    difficulty_score: 71.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Metalloids have properties intermediate to those of metals and non-metals. They are non-malleable non-ductile and brittle. They are poor conductors of heat and electricity as compared to metals but are better conductors than non-metals.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 787,
    setter_id: 4,
    question: 'Which of these is not a type of relation?',
    A: 'Reflexive',
    B: 'Surjective',
    C: 'Symmetric',
    D: 'Transitive',
    answer: 'B',
    difficulty_score: 1.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Surjective is not a type of relation. It is a type of function. Reflexive Symmetric and Transitive are type of relations.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 788,
    setter_id: 4,
    question:
      'Which of the following relations is symmetric but neither reflexive nor transitive for a set A = {1 2 3}',
    A: 'R = {(1 2 (1 3 (1 4}',
    B: 'R = {(1 2 (2 1}',
    C: 'R = {(1 1 (2 2 (3 3}',
    D: 'R = {(1 1 (1 2 (2 3}',
    answer: 'B',
    difficulty_score: 2.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation: 'A relation in a set A is said to be symmetric if (a',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 789,
    setter_id: 4,
    question:
      'Which of the following relations is transitive but not reflexive for the set S={3 4 6}?',
    A: 'R = {(3 4 (4 6 (3 6}',
    B: 'R = {(1 2 (1 3 (1 4}',
    C: 'R = {(3 3 (4 4 (6 6}',
    D: 'R = {(3 4 (4 3}',
    answer: 'A',
    difficulty_score: 3.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'For the above given set S = {3 4 6} R = {(3 4) (4 6) (3 6)} is transitive as (34)∈R and (46) ∈R and (36) also belongs to R . It is not a reflexive relation as it does not satisfy the condition (aa)∈R for every a∈A for a relation R in the set A.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 790,
    setter_id: 4,
    question:
      'Let R be a relation in the set N given by R={(ab): a+b=5 b>1} Which of the following will satisfy the given relation?',
    A: '(23 ∈ R',
    B: '(42 ∈ R',
    C: '(21 ∈ R',
    D: '(50 ∈ R',
    answer: 'A',
    difficulty_score: 4.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation: '(23) ∈ R as 2+3 = 5 3>1 thus satisfying the given condition.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 791,
    setter_id: 4,
    question:
      'Which of the following relations is reflexive but not transitive for the set T = {7 8 9}?',
    A: 'R = {(7 7 (8 8 (9 9}',
    B: 'R = {(7 8 (8 7 (8 9}',
    C: 'R = {0}',
    D: 'R = {(7 8 (8 8 (8 9}',
    answer: 'A',
    difficulty_score: 5.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'The relation R= {(7 7) (8 8) (9 9)} is reflexive as every element is related to itself i.e. (aa) ∈ R for every a∈A. and it is not transitive as it does not satisfy the condition that for a relation R in a set A if (a',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 820,
    setter_id: 4,
    question:
      'The matrix which follows the condition m>n is called as ____________',
    A: 'vertical matrix',
    B: 'horizontal matrix',
    C: 'diagonal matrix',
    D: 'square matrix',
    answer: 'A',
    difficulty_score: 34.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'The matrix in which the number of columns is greater than the number of rows is called a vertical matrix. There the matrix which follows the condition m>n is a vertical matrix.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 821,
    setter_id: 4,
    question:
      'Find the value of abcd if \\(\\begin{bmatrix}a+b&c\\\\a-b&2c+d\\end{bmatrix}\\)=\\(\\begin{bmatrix}3&2\\\\1&6\\end{bmatrix}\\)',
    A: '3 2 1 4',
    B: '3 2 1 6',
    C: '2 2 2 2',
    D: '2 1 2 2',
    answer: 'D',
    difficulty_score: 35.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'The two matrices \\(\\begin{bmatrix}a+b&c\\\\a-b&2c+d\\end{bmatrix}\\)and\\(\\begin{bmatrix}3&2\\\\1&6\\end{bmatrix}\\) are equal matrices. Comparing the two matrices we get',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 822,
    setter_id: 4,
    question: 'Which of the following is a diagonal matrix',
    A: 'A=\\(\\begin{bmatrix}0&2&1\\\\2&0&1\\\\2&1&0\\end{bmatrix}\\',
    B: 'A=\\(\\begin{bmatrix}5&1&0\\\\0&5&0\\\\0&0&5\\end{bmatrix}\\',
    C: 'A=\\(\\begin{bmatrix}4&0&0\\\\0&5&0\\\\0&0&9\\end{bmatrix}\\',
    D: 'A=\\(\\begin{bmatrix}2&2&2\\\\3&3&3\\\\4&4&4\\end{bmatrix}\\',
    answer: 'C',
    difficulty_score: 36.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'The matrix is said to be a diagonal matrix if the elements along the diagonal of the matrix are non – zero.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 823,
    setter_id: 4,
    question: 'Which of the following is a scalar matrix?',
    A: 'A=\\(\\begin{bmatrix}2&0&0\\\\0&2&0\\\\0&0&2\\end{bmatrix}\\',
    B: 'A=\\(\\begin{bmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{bmatrix}\\',
    C: 'A=\\(\\begin{bmatrix}7&0&0\\\\0&2&0\\\\0&0&5\\end{bmatrix}\\',
    D: 'A=\\(\\begin{bmatrix}2&1&5\\\\8&1&2\\\\2&4&8\\end{bmatrix}\\',
    answer: 'A',
    difficulty_score: 37.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'A matrix is called a scalar matrix if the elements along the diagonal of the matrix are equal and are non-zero i.e. a',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 824,
    setter_id: 4,
    question: 'Which of the following is not a type of matrix?',
    A: 'Scalar matrix',
    B: 'Diagonal matrix',
    C: 'Symmetric matrix',
    D: 'Minor matrix',
    answer: 'D',
    difficulty_score: 38.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Minor matrix is not a type of matrix. Scalar diagonal symmetric are various type of matrices.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 853,
    setter_id: 4,
    question:
      'Which among the following is inverse of the matrix A=\\(\\begin{bmatrix}2&3\\\\5&1\\end{bmatrix}\\) ?',
    A: '\\(\\begin{bmatrix}\\frac{1}{13}&\\frac{3}{13}\\\\ \\frac{5}{13}&\\frac{-2}{13}\\end{bmatrix}\\',
    B: '\\(\\begin{bmatrix}\\frac{-1}{13}&\\frac{3}{13}\\\\ \\frac{5}{13}&\\frac{-2}{13}\\end{bmatrix}\\',
    C: '\\(\\begin{bmatrix}\\frac{-1}{13}&\\frac{3}{13}\\\\1&\\frac{-2}{13}\\end{bmatrix}\\',
    D: '\\(\\begin{bmatrix}\\frac{-1}{13}&\\frac{3}{13}\\\\ \\frac{5}{13}&-2\\end{bmatrix}\\',
    answer: 'B',
    difficulty_score: 67.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Consider the matrix A=\\(\\begin{bmatrix}2&3\\\\5&1\\end{bmatrix}\\)',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 854,
    setter_id: 4,
    question: 'Which of the following matrices will not have an inverse?',
    A: '\\(\\begin{bmatrix}2&4\\\\-1&1\\end{bmatrix}\\',
    B: '\\(\\begin{bmatrix}1&5&2\\\\6&4&2\\\\1&3&2\\end{bmatrix}\\',
    C: '\\(\\begin{bmatrix}1&2\\\\1&1\\end{bmatrix}\\',
    D: '\\(\\begin{bmatrix}1&2&5\\\\3&6&4\\end{bmatrix}\\',
    answer: 'D',
    difficulty_score: 68.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'The matrix A=\\(\\begin{bmatrix}1&2&5\\\\3&6&4\\end{bmatrix}\\) will not have an inverse as it is a rectangular matrix. Rectangular matrix does not possess an inverse matrix.',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 855,
    setter_id: 4,
    question:
      'The inverse of the matrix A=\\(\\begin{bmatrix}1&2&4\\\\5&2&4\\\\3&6&2\\end{bmatrix}\\) is',
    A: '\\(\\begin{bmatrix}\\frac{-1}{4}&\\frac{1}{4}&0\\\\ \\frac{1}{40}&\\frac{-1}{8}&\\frac{1}{5}\\\\ \\frac{3}{40}&1&\\frac{-1}{10}\\end{bmatrix}\\',
    B: '\\(\\begin{bmatrix}\\frac{-1}{4}&\\frac{1}{4}&1\\\\ \\frac{1}{40}&\\frac{-1}{8}&\\frac{1}{5}\\\\ \\frac{3}{40}&0&\\frac{-1}{10}\\end{bmatrix}\\',
    C: '\\(\\begin{bmatrix}\\frac{-1}{4}&\\frac{1}{4}&0\\\\ \\frac{1}{40}&\\frac{-1}{8}&\\frac{1}{5}\\\\ \\frac{3}{40}&0&\\frac{-1}{10}\\end{bmatrix}\\',
    D: '\\(\\begin{bmatrix}\\frac{-1}{4}&-\\frac{1}{4}&0\\\\ \\frac{1}{40}&\\frac{1}{8}&\\frac{-1}{5}\\\\ \\frac{3}{40}&0&\\frac{-1}{10}\\end{bmatrix}\\',
    answer: 'C',
    difficulty_score: 69.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Consider the matrix A=\\(\\begin{bmatrix}1&2&4\\\\5&2&4\\\\3&6&2\\end{bmatrix}\\)',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 856,
    setter_id: 4,
    question:
      'Which of the following is the inverse of the matrix A=\\(\\begin{bmatrix}8&1\\\\1&2\\end{bmatrix}\\)?',
    A: '\\(\\begin{bmatrix}\\frac{2}{15}&-\\frac{1}{15}\\\\\\frac{1}{15}&\\frac{8}{15}\\end{bmatrix}\\',
    B: '\\(\\begin{bmatrix}\\frac{1}{15}&-\\frac{1}{15}\\\\-\\frac{1}{15}&\\frac{1}{15}\\end{bmatrix}\\',
    C: '\\(\\begin{bmatrix}\\frac{2}{15}&-\\frac{1}{15}\\\\-\\frac{1}{15}&\\frac{8}{15}\\end{bmatrix}\\',
    D: '\\(\\begin{bmatrix}\\frac{2}{15}&\\frac{1}{15}\\\\\\frac{1}{15}&\\frac{4}{15}\\end{bmatrix}\\',
    answer: 'C',
    difficulty_score: 70.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Consider the matrix A=\\(\\begin{bmatrix}8&1\\\\1&2\\end{bmatrix}\\)',
    reviewer_notes: '',
    lang: 'en',
  },
  {
    id: 857,
    setter_id: 4,
    question:
      'Find the inverse of matrix A=\\(\\begin{bmatrix}5&1&3\\\\4&2&6\\\\5&4&2\\end{bmatrix}\\)',
    A: '\\(\\begin{bmatrix}0&-\\frac{1}{6}&0\\\\-\\frac{11}{30}&\\frac{1}{12}&\\frac{3}{10}\\\\-\\frac{1}{10}&\\frac{1}{4}&-\\frac{1}{10}\\end{bmatrix}\\',
    B: '\\(\\begin{bmatrix}\\frac{1}{3}&-\\frac{1}{6}&0\\\\-\\frac{11}{30}&\\frac{1}{12}&\\frac{3}{10}\\\\-\\frac{1}{10}&\\frac{1}{4}&-\\frac{1}{10}\\end{bmatrix}\\',
    C: '\\(\\begin{bmatrix}\\frac{1}{3}&-\\frac{1}{6}&0\\\\-\\frac{11}{30}&1&\\frac{3}{10}\\\\-\\frac{1}{10}&\\frac{1}{4}&-\\frac{1}{10}\\end{bmatrix}\\',
    D: '\\(\\begin{bmatrix}\\frac{1}{3}&\\frac{1}{6}&0\\\\\\frac{11}{30}&\\frac{1}{12}&\\frac{3}{10}\\\\-\\frac{1}{10}&\\frac{1}{4}&\\frac{1}{10}\\end{bmatrix}\\',
    answer: 'B',
    difficulty_score: 71.0,
    acceptance_score: 75.0,
    is_accepted: true,
    usage_score: 0,
    reviews: 3,
    status: 'ACCEPTED',
    explanation:
      'Consider the matrix A=\\(\\begin{bmatrix}5&1&3\\\\4&2&6\\\\5&4&2\\end{bmatrix}\\)',
    reviewer_notes: '',
    lang: 'en',
  },
];

export default generateQbList;
