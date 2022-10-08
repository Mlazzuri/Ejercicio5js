const fecha = new Date()
console.log(fecha)

const fecha_nac = new Date(1974, 8, 27 , 09)
console.log(fecha_nac)

const fecha_mayor=(fecha.getTime() > fecha_nac.getTime())
console.log(fecha_mayor)

const dia_nac = fecha_nac.getDate()
console.log(dia_nac)

const mes_nac = fecha_nac.getMonth()+1
console.log(mes_nac)

const ano_nac = fecha_nac.getFullYear()
console.log(ano_nac)

