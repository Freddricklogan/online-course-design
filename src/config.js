/** Resource configuration: the kit reads this; tests/config.test.js validates it. */
export const config = {
  title: 'Online Course Design Studio',
  tagline: 'A graduate-level instructional-design playbook for online, blended and HyFlex courses: ADDIE, backward design and Bloom, learning theories, Gagné and Merrill, cognitive load and multimedia, measurable objectives, aligned assessment, the Community of Inquiry, facilitation, tools and course review, with a backward-design module builder, an objective assembler, a rubric builder and two quality self-checks.',
  repo: 'https://github.com/Freddricklogan/online-course-design',
  pagesUrl: 'https://freddricklogan.github.io/online-course-design/',
  quizTitle: 'Five questions on online course design',
  quiz: [
    {
      id: 'alignment',
      prompt: 'Which three things must agree for a course to be constructively aligned?',
      options: ['Syllabus, textbook and LMS', 'Objectives, assessments, and activities and content', 'Instructor, learners and technology', 'Lectures, readings and discussions'],
      answer: 1,
      explanation: 'Objectives state what learners should be able to do, assessments provide evidence they can, and activities and content give the practice and instruction that get them there. Online, the design must carry the course when no instructor is in the room, so alignment is not optional.'
    },
    {
      id: 'load',
      prompt: 'In Sweller’s Cognitive Load Theory, which kind of load does poor design add?',
      options: ['Intrinsic', 'Extraneous', 'Germane', 'Affective'],
      answer: 1,
      explanation: 'Intrinsic load is the material’s inherent difficulty, germane load is the effort that builds schemas, and extraneous load is wasted effort imposed by poor design — the kind Mayer’s multimedia principles exist to remove.'
    },
    {
      id: 'abcd',
      prompt: 'In the ABCD method for objectives, what does the D stand for?',
      options: ['Delivery mode', 'Duration of the activity', 'Degree — the criterion of acceptable performance', 'Difficulty on Bloom’s taxonomy'],
      answer: 2,
      explanation: 'Audience, Behavior (an observable verb and object), Condition (the circumstances or tools) and Degree (the criterion) extend Mager’s condition–behavior–criterion so every objective is specific enough to teach and assess.'
    },
    {
      id: 'coi',
      prompt: 'Which three presences make up the Community of Inquiry framework?',
      options: ['Social, teaching and cognitive presence', 'Synchronous, asynchronous and hybrid presence', 'Instructor, peer and content presence', 'Visual, verbal and kinaesthetic presence'],
      answer: 0,
      explanation: 'Garrison, Anderson and Archer name social presence (being real to each other), teaching presence (design and facilitation) and cognitive presence (sustained inquiry); their intersection produces a deep educational experience online.'
    },
    {
      id: 'rubric',
      prompt: 'When does the resource recommend an analytic rubric over a holistic one?',
      options: ['For quick, high-volume grading', 'For complex work where rich, criterion-by-criterion feedback and growth matter', 'Only for multiple-choice assessments', 'When the rubric must stay hidden from learners'],
      answer: 1,
      explanation: 'An analytic rubric scores each criterion separately and gives targeted feedback at the cost of building and scoring time; a holistic rubric gives one overall judgment quickly. Either way, the rubric is shared before the task.'
    }
  ]
};
