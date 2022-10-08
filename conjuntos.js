const nombres_familia_array = ["Mariano", "Octavio", "Valentina", "Olga"]

const nombres_familia = new Set(nombres_familia_array)
console.log(nombres_familia)

nombres_familia.add("Mariano")
console.log(nombres_familia)

nombres_familia.add("Javascript")
console.log(nombres_familia)