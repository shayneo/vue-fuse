<template>
  <div id="app" class="bg-teal-lightest relative">
    <div class="px-4 py-3 flex items-center ">
      <a href="https://github.com/shayneo/vue-fuse">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a href="http://fusejs.io/" class="fuse text-red">
        Fuse.js Library
      </a>
    </div>
    <div class="md:w-1/2 center bg-teal-light min-h-screen overflow-scroll">
      <h1 class="text-grey-darkest my-4">Vue Fuse Demo</h1>
      <p class="text-grey-darkest px-12">Type in the input below to search using the VueFuse component, or use the button to call the $search method.</p>
      <div class="flex flex-col pt-8">
        <VueFuse
          placeholder="Search Books of the Bible"
          event-name="results"
          :list="books"
          :keys="['name', 'description']"
          class="w-64 text-center h-8 border rounded-lg center"
        />
        <button
          class="p-4 outline rounded-lg bg-grey-darkest text-white text-xs w-1/2 mt-6 ml-auto mr-auto"
          @click="runSearch">This Button Uses Search Method, with term 'John'</button>
      </div>
      <div v-for="book in results" :key="book.name" class="rounded-lg bg-blue text-white p-4 m-4 flex text-left">
        <div class="w-1/4">{{ book.name }}</div>
        <div class="ml-4 w-3/4">{{ book.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import VueFuse from './components/VueFuse.vue'

export default {
  name: 'app',
  components: {
    VueFuse
  },
  data () {
    return {
      results: [],
      books: [
        {
          name: 'Genisis',
          description: 'Genesis answers two big questions: “How did God’s relationship with the world begin?” and “Where did the nation of Israel come from?”'
        }, {
          name: 'Exodus',
          description: 'God saves Israel from slavery in Egypt, and then enters into a special relationship with them.'
        }, {
          name: 'Leviticus',
          description: 'God gives Israel instructions for how to worship Him.'
        }, {
          name: 'Numbers',
          description: 'srael fails to trust and obey God, and wanders in the wilderness for 40 years.'
        }, {
          name: 'Deuteronomy',
          description: 'Moses gives Israel instructions (in some ways, a recap of the laws in Exodus–Numbers) for how to love and obey God in the Promised Land.'
        }, {
          name: 'Joshua',
          description: 'Joshua (Israel’s new leader) leads Israel to conquer the Promised land, then parcels out territories to the twelve tribes of Israel.'
        }, {
          name: 'Judges',
          description: 'Israel enters a cycle of turning from God, falling captive to oppressive nations, calling out to God, and being rescued by leaders God sends their way (called “judges”).'
        }, {
          name: 'Ruth',
          description: 'The book of Ruth tells a touching story of the love and devotion of an ancestor of David and Jesus Christ.'
        }, {
          name: '1 Samuel',
          description: 'Israel demands a king, who turns out to be quite a disappointment.'
        }, {
          name: '2 Samuel',
          description: 'David, a man after God’s own heart, becomes king of Israel.'
        }, {
          name: '1 Kings',
          description: 'The kingdom of Israel has a time of peace and prosperity under King Solomon, but afterward splits, and the two lines of kings turn away from God.'
        }, {
          name: '2 Kings',
          description: 'Both kingdoms ignore God and his prophets, until they both fall captive to other world empires.'
        }, {
          name: '1 Chronicles',
          description: 'This is a brief history of Israel from Adam to David, culminating with David commissioning the temple of God in Jerusalem.'
        }, {
          name: '2 Chronicles',
          description: 'David’s son Solomon builds the temple, but after centuries of rejecting God, the Babylonians take the southern Israelites captive and destroy the temple.'
        }, {
          name: 'Ezra',
          description: 'The Israelites rebuild the temple in Jerusalem, and a scribe named Ezra teaches the people to once again obey God’s laws.'
        }, {
          name: 'Nehemiah',
          description: 'The city of Jerusalem is in bad shape, so Nehemiah rebuilds the wall around the city.'
        }, {
          name: 'Esther',
          description: 'Someone hatches a genocidal plot to bring about Israel’s extinction, and Esther must face the emperor to ask for help'
        }, {
          name: 'Job',
          description: 'Satan attacks a righteous man named Job, and Job and his friends argue about why terrible things are happening to him.'
        }, {
          name: 'Psalms',
          description: 'A collection of 150 songs that Israel sang to God (and to each other)—kind of like a hymnal for the ancient Israelites.'
        }, {
          name: 'Proverbs',
          description: 'A collection of sayings written to help people make wise decisions that bring about justice.'
        }, {
          name: 'Ecclesiastes',
          description: 'A philosophical exploration of the meaning of life—with a surprisingly nihilistic tone for the Bible.'
        }, {
          name: 'Song of Solomon',
          description: 'A love song (or collection of love songs) celebrating love, desire, and marriage.'
        }, {
          name: 'Isaiah',
          description: 'God sends the prophet Isaiah to warn Israel of future judgment—but also to tell them about a coming king and servant who will “bear the sins of many.”'
        }, {
          name: 'Jeremiah',
          description: 'God sends a prophet to warn Israel about the coming Babylonian captivity, but the people don’t take the news very well.'
        }, {
          name: 'Lamentations',
          description: 'A collection of dirges lamenting the fall of Jerusalem after the Babylonian attacks.'
        }, {
          name: 'Ezekiel',
          description: 'God chooses a man to speak for Him to Israel, to tell them the error of their ways and teach them justice: Ezekiel.'
        }, {
          name: 'Daniel',
          description: 'Daniel becomes a high-ranking wise man in the Babylonian and Persian empires, and has prophetic visions concerning Israel’s future.'
        }, {
          name: 'Hosea',
          description: 'Hosea is told to marry a prostitute who leaves him, and he must bring her back: a picture of God’s relationship with Israel.'
        }, {
          name: 'Joel',
          description: 'God sends a plague of locusts to Judge Israel, but his judgment on the surrounding nations is coming, too.'
        }, {
          name: 'Amos',
          description: 'A shepherd named Amos preaches against the injustice of the Northern Kingdom of Israel.'
        }, {
          name: 'Obadiah',
          description: 'Obadiah warns the neighboring nation of Edom that they will be judged for plundering Jerusalem.'
        }, {
          name: 'Jonah',
          description: 'A disobedient prophet runs from God, is swallowed by a great fish, and then preaches God’s message to the city of Nineveh.'
        }, {
          name: 'Micah',
          description: 'Micah confronts the leaders of Israel and Judah regarding their injustice, and prophecies that one day the Lord himself will rule in perfect justice.'
        }, {
          name: 'Nahum',
          description: 'Nahum foretells of God’s judgment on Nineveh, the capital of Assyria.'
        }, {
          name: 'Habakkuk',
          description: 'Habakkuk pleads with God to stop the injustice and violence in Judah, but is surprised to find that God will use the even more violent Babylonians to do so.'
        }, {
          name: 'Zephaniah',
          description: 'God warns that he will judge Israel and the surrounding nations, but also that he will restore them in peace and justice.'
        }, {
          name: 'Haggai',
          description: 'The people have abandoned the work of restoring God’s temple in Jerusalem, and so Haggai takes them to task.'
        }, {
          name: 'Zechariah',
          description: 'The prophet Zechariah calls Israel to return to God, and records prophetic visions that show what’s happening behind the scenes.'
        }, {
          name: 'Malachi',
          description: 'God has been faithful to Israel, but they continue to live disconnected from him—so God sends Malachi to call them out.'
        }, {
          name: 'Matthew',
          description: 'This is an account of Jesus’ life, death, and resurrection, focusing on Jesus’ role as the true king of the Jews.'
        }, {
          name: 'Mark',
          description: 'This brief account of Jesus’ earthly ministry highlights Jesus’ authority and servanthood.'
        }, {
          name: 'Luke',
          description: 'Luke writes the most thorough account of Jesus’ life, pulling together eyewitness testimonies to tell the full story of Jesus.'
        }, {
          name: 'John',
          description: 'John lists stories of signs and miracles with the hope that readers will believe in Jesus.'
        }, {
          name: 'Acts',
          description: 'Jesus returns to the Father, the Holy Spirit comes to the church, and the gospel of Jesus spreads throughout the world.'
        }, {
          name: 'Romans',
          description: 'Paul summarizes how the gospel of Jesus works in a letter to the churches at Rome, where he plans to visit.'
        }, {
          name: '1 Corinthians',
          description: 'Paul writes a disciplinary letter to a fractured church in Corinth, and answers some questions that they’ve had about how Christians should behave.'
        }, {
          name: '2 Corinthians',
          description: 'Paul writes a letter of reconciliation to the church at Corinth, and clears up some concerns that they have.'
        }, {
          name: 'Galatians',
          description: 'Paul hears that the Galatian churches have been lead to think that salvation comes from the law of Moses, and writes a (rather heated) letter telling them where the false teachers have it wrong.'
        }, {
          name: 'Ephesians',
          description: 'Paul writes to the church at Ephesus about how to walk in grace, peace, and love.'
        }, {
          name: 'Philippians',
          description: 'An encouraging letter to the church of Philippi from Paul, telling them how to have joy in Christ.'
        }, {
          name: 'Colossians',
          description: 'Paul writes the church at Colossae a letter about who they are in Christ, and how to walk in Christ.'
        }, {
          name: '1 Thessalonians',
          description: 'Paul has heard a good report on the church at Thessalonica, and encourages them to “excel still more” in faith, hope, and love.'
        }, {
          name: '2 Thessalonians',
          description: 'Paul instructs the Thessalonians on how to stand firm until the coming of Jesus.'
        }, {
          name: '1 Timothy',
          description: 'Paul gives his protegé Timothy instruction on how to lead a church with sound teaching and a godly example.'
        }, {
          name: '2 Timothy',
          description: 'Paul is nearing the end of his life, and encourages Timothy to continue preaching the word.'
        }, {
          name: 'Titus',
          description: 'Paul advises Titus on how to lead orderly, counter-cultural churches on the island of Crete.'
        }, {
          name: 'Philemon',
          description: 'Paul strongly recommends that Philemon accept his runaway slave as a brother, not a slave.'
        }, {
          name: 'Hebrews',
          description: 'A letter encouraging Christians to cling to Christ despite persecution, because he is greater.'
        }, {
          name: 'James',
          description: 'A letter telling Christians to live in ways that demonstrate their faith in action.'
        }, {
          name: '1 Peter',
          description: 'Peter writes to Christians who are being persecuted, encouraging them to testify to the truth and live accordingly.'
        }, {
          name: '2 Peter',
          description: 'Peter writes a letter reminding Christians about the truth of Jesus, and warning them that false teachers will come.'
        }, {
          name: '1 John',
          description: 'John writes a letter to Christians about keeping Jesus’ commands, loving one another, and important things they should know.'
        }, {
          name: '2 John',
          description: 'A very brief letter about walking in truth, love, and obedience.'
        }, {
          name: '3 John',
          description: 'An even shorter letter about Christian fellowship.'
        }, {
          name: 'Jude',
          description: 'A letter encouraging Christians to content for the faith, even though ungodly persons have crept in unnoticed.'
        }, {
          name: 'Revelation',
          description: 'John sees visions of things that have been, things that are, and things that are yet to come.'
        }
      ]
    }
  },
  methods: {
    runSearch () {
      this.$search('John', this.books, { keys: ['name'] }).then(result => {
        this.results = result
      })
    }
  },
  created () {
    this.$on('results', results => {
      this.results = results
    })
  }
}
</script>

<style scoped>
.center {
  margin: auto;
  text-align: center;
}
svg {
  position: sticky;
  top: 15px;
  left: 15px;
}
.fuse {
  position: sticky;
  top: 18px;
  left: 70px;
}
</style>
