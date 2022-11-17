const myList = [
  {
    name: 'Alice',
    firstNote: 7,
    secondNote: 8,
  },
  {
    name: 'Lucas',
    firstNote: 6,
    secondNote: 3,
  },
  {
    name: 'José',
    firstNote: 5,
    secondNote: 10,
  },
  {
    name: 'Joana',
    firstNote: 4,
    secondNote: 3,
  }
]

function media(firstNote, secondNote) {
  return ((firstNote + secondNote) / 2).toFixed(2)
}

function printMessage(aluno) {
  const result = media(aluno.firstNote, aluno.secondNote)

  if (result >= 6) {
    alert(`Parábens ${aluno.name}, você passou e sua nota foi ${result}.`)
  } else {
    alert(
      `Mais sorte na proxima vez ${aluno.name}, sua média foi de ${result}.`
    )
  }
}

for (let aluno of myList) {
  printMessage(aluno)
}
