let x = process.argv
let c = 0

for (let i = 2; i < x.length; i++) {
  c = c + Number(x[i])
}

process.stdout.write(c)
