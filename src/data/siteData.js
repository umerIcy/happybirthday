/**
 * ============================================================================
 *  siteData.js — Mahnoor's birthday notes.
 * ============================================================================
 *
 *  The words for the journey live here. Layout and animation stay in the
 *  components. Change a message in this file and the site updates with it.
 * ============================================================================
 */

export const person = {
  name: 'Mahnoor',
  nickname: 'Nightmare',
  /** Optional. Leave empty to hide the date. Example: '19 November' */
  birthday: '',
};

export const sender = {
  name: '',
  signature: '',
};

/* ---------------------------------------------------------------------------
 * Screens
 * ------------------------------------------------------------------------ */

export const experience = {
  heading: 'Happiest Birthday ',
  welcomeMessage: 'Lets celebrate',
  openButton: 'Open your surprise',
  gardenTitle: 'Pick a tulip',
  gardenHint: 'Tap a flower to open it.',
  gardenContinue: 'Continue',
  cheesecakeTitle: 'Cake for you',
  cheesecakeInstruction: 'Make a wish!',
  cheesecakeContinue: 'Continue',
  letterPrompt: 'One last thing...',
  letterHint: 'Tap the envelope.',
  closingMessage: 'enjoy :)',
  backLabel: 'Back',
  skipLabel: 'Skip',
};

export const tulips = [
  {
    id: 'tulip-1',
    label: 'First tulip',
    palette: 'purple',
    message: 'just a little reminder that the world is nicer with you in it',
  },
  {
    id: 'tulip-2',
    label: 'Second tulip',
    palette: 'pink',
    message: 'may you always have reasons to laugh',
  },
  {
    id: 'tulip-3',
    label: 'Third tulip',
    palette: 'lilac',
    message: 'i hope you never run out of things to be excited about',
  },
];

export const cheesecake = {
  message: 'hope you get all the little things you have been wishing for',
};

 
export const moon = {
  label: '',
  hint: 'Tap the moon',
  message: 'keep shining like the moon. some days you are a crescent, some days you are full, and some days you seem to disappear but no matter what phase you are in, you never lose your light.',
};

/* ---------------------------------------------------------------------------
 * The birthday letter. One source for the envelope and the 3D notebook.
 * ------------------------------------------------------------------------ */

export const birthdayLetter = {
  greeting: 'hello,',  
  paragraphs: [
    'some people make ordinary days a little less ordinary and you are definitely one of them ',
    'im genuinely glad i got to know you. thank you for all the laughs, random conversations and memories we have shared ',
    'i hope life brings you endless happiness, success and all the little things that make you smile. some of the nicest things in life are still waiting for you around the corner so just stick around and keep enjoying the ride',
  ],
  closing: ' ',
  signature: ' ',
};

export const littleLetter = {
  greeting: birthdayLetter.greeting,
  paragraphs: birthdayLetter.paragraphs,
  closing: birthdayLetter.closing,
  signature: birthdayLetter.signature,
  postmark: 'for you',
  stampCaption: 'YOU',
  stamp: '/stickers/sticker-6.webp',
};

export const bigLetter = {
  coverEyebrow: 'A little birthday note',
  coverTo: `For ${person.nickname}`,
  coverTitle: 'Happy Birthday',
  coverSubtitle: 'Tap the cover',
  heading: birthdayLetter.greeting,
  paragraphs: birthdayLetter.paragraphs,
  closing: birthdayLetter.closing,
  signature: birthdayLetter.signature,
  coverImage: '/stickers/sticker-3.webp',
  coverImageAlt: 'Pressed flower illustration',
  label: 'Just for you',
};

/* ---------------------------------------------------------------------------
 * Kept so the original scrapbook and notes pages still import cleanly.
 * They are not part of the birthday journey.
 * ------------------------------------------------------------------------ */

export const home = {
  greeting: `Dear ${person.nickname}`,
  date: person.birthday,
  letterButton: experience.openButton,
  notesButton: 'Notes',
  scrapbookLabel: 'Scrapbook',
};

export const loveNotes = [];
export const memories = [];
export const timeline = [];
export const reasons = [];
export const wishes = [];

export const scrapbook = {
  title: 'Scrapbook',
  intro: '',
  footer: '',
};
