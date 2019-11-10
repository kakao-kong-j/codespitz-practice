
const wrap = block => new SwitchIterable(block)

const SwitchIterable = class{
    #block;
    constructor(block){this.#block=block}
    [Symbol.iterator](){return new SwitchIterator(this.#block)}
}

const gene2 = a => {
    let b;
    return wrap(_context => {
        while (1) {
            switch (_context.prev = _context._context) {
                case 0:
                    _context.next = 2
                    return a;
                case 2:
                    b = a;
                    _context.next = 5;
                    return b;
                case 5:
                case "end":
                    return _context.stop()
            }
        }
    })
}

for (const a of gene2(2)){
    console.log(a)
}