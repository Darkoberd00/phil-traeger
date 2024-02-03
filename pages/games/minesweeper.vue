<script setup lang="ts">
import type { Ref } from 'vue'
import OwnCard from '~/components/ownCard.vue'

const debug = ref(false) // DEBUG
const tilesSpeed = ref(100)

/**
 * Feld is a single tile on the board
 *
 * @property {number} x - x coordinate of the tile
 * @property {number} y - y coordinate of the tile
 * @property {boolean} isMine - whether the tile is a mine
 * @property {boolean} isClicked - whether the tile has been clicked
 * @property {boolean} isFlagged - whether the tile has been flagged
 * @property {number} minesAround - number of mines around the tile
 * @property {boolean} debug - whether the tile is in debug mode
 */
type Feld = {
  x: number
  y: number
  isMine: boolean
  isClicked: boolean
  isFlagged: boolean
  minesAround: number
  debug: boolean
}

/**
 * Timer is the time in milliseconds and seconds
 *
 * @property {number} ms - milliseconds
 * @property {number} s - seconds
 */
type Timer = {
  ms: number
  s: number
}

const board: Ref<Feld[][]> = ref([])
const rows = 8
const cols = 8
const mines = Math.floor(rows * cols * 0.15)

const time: Ref<Timer> = ref({ ms: 0, s: 0 })
const startTime = ref(new Date())
const tilesClicked = ref(0)
const flagEnabled = ref(false)
const timerstarted = ref(false)
const gameOver = ref(false)

/**
 * Create the board
 */
function createBoard() {
  for (let r = 0; r < rows; r++) {
    const row: Feld[] = []
    for (let c = 0; c < cols; c++) {
      row.push({
        x: c,
        y: r,
        isMine: false,
        isClicked: false,
        isFlagged: false,
        minesAround: 0,
        debug: false
      })
    }
    board.value.push(row)
  }
}

/**
 * Place the mines on the board
 */
function placeMines() {
  for (let i = 0; i < mines; i++) {
    while (true) {
      const x = Math.floor(Math.random() * cols)
      const y = Math.floor(Math.random() * rows)
      if (!board.value[y][x].isMine) {
        board.value[y][x].isMine = true
        break
      }
    }
  }
}

/**
 * Count the mines around each tile
 */
function countMinesAround() {
  board.value.forEach((row, r) => {
    row.forEach((tile, c) => {
      if (tile.isMine) {
        const neighbors = getNeighbors(c, r)
        for (const neighbor of neighbors) {
          neighbor.minesAround++
        }
      }
    })
  })
}

/**
 * Click event to reveal a tile
 * @param tile
 */
function tileClicked(tile: Feld) {
  if (gameOver.value) return
  if (!timerstarted.value) {
    timerstarted.value = true
    startTime.value = new Date()
    time.value = { ms: 1, s: 0 }
  }
  if (flagEnabled.value && !tile.isClicked) {
    tile.isFlagged = !tile.isFlagged
    return
  }
  if (tile.isClicked || tile.isFlagged) return
  tile.isClicked = true
  tilesClicked.value++
  if (tile.isMine) {
    gameOver.value = true
    timerstarted.value = false
    return
  }
  if (tilesClicked.value === rows * cols - mines) {
    gameOver.value = true
    timerstarted.value = false
    return
  }
  if (tile.minesAround === 0) {
    const neighbors = getNeighbors(tile.x, tile.y)
    for (const neighbor of neighbors) {
      setTimeout(function () {
        tileClicked(neighbor)
      }, tilesSpeed.value)
    }
  }
}

/**
 * Right click event to flag a tile
 * @param tile
 */
function rightTileClicked(tile: Feld) {
  if (gameOver.value) return
  if (!tile.isClicked) {
    tile.isFlagged = !tile.isFlagged
  }
}

/**
 * Get the neighbors of a tile
 *
 * @param {number} x - x coordinate of the tile
 * @param {number} y - y coordinate of the tile
 * @returns {Feld[]} - the neighbors of the tile
 */
function getNeighbors(x: number, y: number): Feld[] {
  const neighbors: Feld[] = []
  board.value.forEach((row, r) => {
    row.forEach((tile, c) => {
      if (Math.abs(x - c) <= 1 && Math.abs(y - r) <= 1) {
        neighbors.push(tile)
      }
    })
  })
  return neighbors
}

/**
 * Stop the context menu
 *
 * @param {MouseEvent} event - the mouse event
 * @returns {boolean} - false
 */
function stopMenu(event: MouseEvent): boolean {
  event.preventDefault()
  return false
}

/**
 * Calculate the score
 *
 * @returns {number} - the score
 */
function score(): number {
  let score = 0
  board.value.forEach((row) => {
    row.forEach((tile) => {
      if (tile.isClicked && !tile.isMine) {
        score++
      }
      if (tile.isFlagged && tile.isMine) {
        score++
      }
      if (tile.isFlagged && !tile.isMine) {
        score--
      }
      if (tile.isMine && tile.isClicked) {
        score -= mines
      }
    })
  })
  score = (score * 1000) / (time.value.s + time.value.ms / 1000)

  return Math.floor(score)
}

/**
 * Reload the site
 */
function reloadSite() {
  location.reload()
}

/**
 * Set the flagEnabled value
 */
function setFlag() {
  flagEnabled.value = !flagEnabled.value
}

/**
 * Set all tiles to clicked
 * DEBUG
 */
function allTilesClickedDEBUG() {
  board.value.forEach((row) => {
    row.forEach((tile) => {
      if (!tile.isClicked && !tile.debug) {
        tile.isClicked = true
        tile.debug = true
      } else if (tile.isClicked && tile.debug) {
        tile.isClicked = false
        tile.debug = false
      }
    })
  })
}

/**
 * Start the timer in the background in a millisecond interval
 */
function timer() {
  setInterval(() => {
    if (timerstarted.value && !gameOver.value) {
      const d = new Date()
      const st = startTime.value
      let ms = d.getMilliseconds() - st.getMilliseconds()
      let s = d.getSeconds() - st.getSeconds()
      let m = d.getMinutes() - st.getMinutes()
      let h = d.getHours() - st.getHours()
      if (ms < 0) {
        ms = 1000 + ms
        s--
      }
      if (s < 0) {
        s = 60 + s
        m--
      }
      if (m < 0) {
        m = 60 + m
        h--
      }
      time.value.s = s + m * 60 + h * 3600
      time.value.ms = ms
    }
  }, 1)
}

/**
 * Format the timer to a string
 *
 * @example 1.000
 *
 * @param {Timer} timer - the timer to format
 * @returns {string} - the formatted timer
 */
function formatTimer(timer: Timer): string {
  const ms = timer.ms < 10 ? `00${timer.ms}` : timer.ms < 100 ? `0${timer.ms}` : timer.ms
  return `${timer.s}.${ms}`
}

// Create the board and place the mines
createBoard()
placeMines()
countMinesAround()
timer()
</script>

<template>
  <div>
    <OwnCard
      title="Minesweeper"
      card-width="max-md:mx-4 mx-auto w-fit"
      title-class="justify-center flex font-bold text-2xl cursor-default"
    >
      <h4 class="text-xl justify-center flex cursor-default">Mines: {{ mines }}</h4>
      <h4 class="text-xl justify-center flex cursor-default">Time: {{ formatTimer(time) }}</h4>
      <div class="justify-center flex">
        <div
          class="board"
          @contextmenu="
            (event) => {
              stopMenu(event)
            }
          "
        >
          <div v-for="(row, index) in board" :key="index">
            <div
              v-for="tile in row"
              :key="tile.x + '-' + tile.y"
              tabindex="0"
              :class="{ 'tile-clicked': tile.isClicked }"
              @click="tileClicked(tile)"
              @click.right="rightTileClicked(tile)"
            >
              <span v-if="tile.isMine && tile.isClicked"
                ><IconBombMaterial class="text-red"></IconBombMaterial
              ></span>
              <span v-else-if="tile.isFlagged && !tile.isClicked"
                ><IconFlagGIS class="text-blue-700"></IconFlagGIS
              ></span>
              <span
                v-else-if="tile.minesAround > 0 && tile.isClicked"
                :class="'x' + tile.minesAround"
                >{{ (tile as Feld).minesAround }}</span
              >
              <span v-else></span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!gameOver" class="justify-center flex">
        <button
          tabindex="0"
          class="btn btn-ghost w-fit"
          :class="{ 'btn-active': flagEnabled }"
          @click="setFlag"
        >
          <IconFlagGIS></IconFlagGIS>
        </button>
      </div>
      <div v-if="gameOver" class="justify-center flex">
        <h4 class="text-xl justify-center flex">Game Over</h4>
      </div>
      <div v-if="gameOver" class="justify-center flex">
        <p class="text-xl justify-center flex">Score: {{ score() }}</p>
      </div>
      <div v-if="gameOver" class="justify-center flex">
        <button tabindex="0" class="text-xl btn btn-ghost w-fit" @click="reloadSite">
          Restart
        </button>
      </div>
      <div v-if="debug" class="justify-center flex">
        <button tabindex="0" class="text-xl btn btn-ghost w-fit" @click="allTilesClickedDEBUG">
          Debug Mode
        </button>
      </div>
    </OwnCard>
  </div>
</template>

<style scoped>
.board {
  width: 404px;
  height: 404px;
  border: 10px solid darkgrey;
  background-color: lightgrey;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}

.board div div {
  width: 48px;
  height: 48px;
  border: 1px solid black;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.tile-clicked {
  background-color: darkgray;
  animation: tile-clicked 0.5s;
}

@keyframes tile-clicked {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

.x1 {
  color: blue;
}

.x2 {
  color: green;
}

.x3 {
  color: red;
}

.x4 {
  color: navy;
}

.x5 {
  color: brown;
}

.x6 {
  color: teal;
}

.x7 {
  color: black;
}

.x8 {
  color: gray;
}
</style>
