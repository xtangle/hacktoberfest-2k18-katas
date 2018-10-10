const COMMANDS = {
  incrementDataPointer: '>',
  decrementDataPointer: '<',
  incrementByte: '+',
  decrementByte: '-',
  writeByteToOutput: '.',
  readByteFromInput: ',',
  jumpToNext: '[',
  jumpToPrevious: ']',
}
class BrainfuckMemory {
  constructor (size = 1024) {
    this.memory = Buffer.alloc(size)
    this.position = 0
  }

  load (str) {
    this.memory = Buffer.from(str)
    this.position = 0
    return this
  }

  set (byte) {
    this.val = this.memory.writeInt8(byte, this.position)
  }

  get () {
    return this.memory.readInt8(this.position)
  }

  eof () {
    return this.memory.length === this.position || this.position === -1
  }

  incrementMemoryPointer () {
    this.position++
  }

  decrementMemoryPointer () {
    this.position--
  }
}

class BrainfuckWriteBuffer {
  constructor () {
    this.buffer = Buffer.alloc(0)
  }

  write (byte) {
    this.buffer = Buffer.concat([this.buffer, Buffer.from([byte])])
  }

  toString () {
    return this.buffer.toString()
  }
}

class BrainfuckReadableBuffer {
  constructor (inputString = '') {
    this.buffer = Buffer.from(inputString)
  }

  read () {
    const byte = this.buffer.readInt8()
    this.buffer = this.buffer.slice(1)
    return byte
  }

  toString () {
    return this.buffer.toString()
  }
}

class BrainfuckInterpreter {
  constructor ({ memory, writableBuffer, readableBuffer }) {
    this.memory = memory
    this.writableBuffer = writableBuffer
    this.readableBuffer = readableBuffer

    this.programMemory = null
  }

  loadProgram (programMemory) {
    this.programMemory = programMemory
  }

  executeProgram () {
    while (!this.programMemory.eof()) {
      const command = String.fromCharCode(this.programMemory.get())
      this.executeCommand(command)
      this.programMemory.incrementMemoryPointer()
    }
  }

  executeCommand (command) {
    if (this[command]) {
      this[command]()
    }
  }

  [COMMANDS.incrementByte] () {
    this.memory.set(this.memory.get() + 1)
  }

  [COMMANDS.decrementByte] () {
    this.memory.set(this.memory.get() - 1)
  }

  [COMMANDS.writeByteToOutput] () {
    this.writableBuffer.write(this.memory.get())
  }

  [COMMANDS.readByteFromInput] () {
    this.memory.set(this.readableBuffer.read())
  }

  [COMMANDS.incrementDataPointer] () {
    this.memory.incrementMemoryPointer()
  }

  [COMMANDS.decrementDataPointer] () {
    this.memory.decrementMemoryPointer()
  }

  [COMMANDS.jumpToNext] () {
    if (this.memory.get() === 0) {
      this.jump(1, () => this.programMemory.incrementMemoryPointer())
    }
  }

  [COMMANDS.jumpToPrevious] () {
    if (this.memory.get() !== 0) {
      this.jump(-1, () => this.programMemory.decrementMemoryPointer())
    }
  }

  jump (initialBalance, moveMemoryPointer) {
    let balanceCount = initialBalance
    while(balanceCount !== 0) {
      moveMemoryPointer()
      if (this.programMemory.eof()) {
        throw new Error("Mismatched parentheses.")
      }
      if (String.fromCharCode(this.programMemory.get()) === COMMANDS.jumpToNext) {
        balanceCount += 1
      }
      if (String.fromCharCode(this.programMemory.get()) === COMMANDS.jumpToPrevious) {
        balanceCount -= 1
      }
    }
  }
}

export const runBrainfuck = (program, input) => {
  const writableBuffer = new BrainfuckWriteBuffer()

  const brainfuckInterpreter = new BrainfuckInterpreter({
    memory: new BrainfuckMemory(),
    writableBuffer,
    readableBuffer: new BrainfuckReadableBuffer(input)
  })

  brainfuckInterpreter.loadProgram(new BrainfuckMemory().load(program))

  brainfuckInterpreter.executeProgram()

  return writableBuffer.toString()
};
